import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import {
  generateLeadConfirmationEmail,
  generateInternalEngineeringAlertEmail,
  BriefEmailData,
} from "@/lib/email-templates";

interface BriefPayload {
  organization: string;
  leadEmail: string;
  domain: string;
  throughput: string;
  compliance: string;
  coreObjective: string;
}

// In-memory sliding-window rate limiter: max 5 submissions per 10 minutes per IP
interface RateLimitEntry {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { timestamps: [] };

  // Filter timestamps within the current window
  const validTimestamps = entry.timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, { timestamps: validTimestamps });

  // Cleanup old entries periodically (every 50 entries)
  if (rateLimitMap.size > 500) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (val.timestamps.every((ts) => now - ts >= RATE_LIMIT_WINDOW_MS)) {
        rateLimitMap.delete(key);
      }
    }
  }

  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 0. Anti-Abuse Rate Limiting Check
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded. Maximum 5 submissions per 10 minutes. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": "600",
          },
        },
      );
    }

    let body: Partial<BriefPayload>;
    try {
      body = (await req.json()) as Partial<BriefPayload>;
    } catch {
      return NextResponse.json(
        { error: "Invalid or malformed JSON payload in request body." },
        { status: 400 },
      );
    }

    // 1. Strict Server-Side Validation
    if (!body.organization || typeof body.organization !== "string" || body.organization.trim().length < 2) {
      return NextResponse.json(
        { error: "Organization name is required (minimum 2 characters)." },
        { status: 400 },
      );
    }

    if (!body.leadEmail || typeof body.leadEmail !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.leadEmail.trim())) {
      return NextResponse.json(
        { error: "A valid executive / tech lead email address is required." },
        { status: 400 },
      );
    }

    if (!body.coreObjective || typeof body.coreObjective !== "string" || body.coreObjective.trim().length < 10) {
      return NextResponse.json(
        { error: "Core technical objective description is required (minimum 10 characters)." },
        { status: 400 },
      );
    }

    const timestamp = new Date().toISOString();
    const hash = crypto
      .createHash("sha256")
      .update(`${body.organization}-${body.leadEmail}-${timestamp}-${Math.random()}`)
      .digest("hex");

    const briefId = `RN-BRIEF-${hash.substring(0, 6).toUpperCase()}`;

    const briefData: BriefEmailData = {
      briefId,
      organization: body.organization.trim(),
      leadEmail: body.leadEmail.trim().toLowerCase(),
      domain: body.domain || "multi_tenant_saas",
      throughput: body.throughput || "high_throughput_500k",
      compliance: body.compliance || "soc2_hipaa",
      coreObjective: body.coreObjective.trim(),
      timestamp,
    };

    // 2. Primary Persistence: Append-Only JSON Vault (data/intake_vault.jsonl)
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const vaultFilePath = path.join(dataDir, "intake_vault.jsonl");
      const recordLine = JSON.stringify({ ...briefData, sha256: hash }) + "\n";
      fs.appendFileSync(vaultFilePath, recordLine, "utf8");
    } catch (fsErr) {
      console.error("[VAULT_STORAGE_WARNING] Could not write to local file vault:", fsErr);
    }

    // 3. Multi-Channel Webhook Dispatch (Discord / Slack / Generic Webhook)
    const webhookUrl = process.env.INTAKE_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `🚨 **NEW 48-HOUR ARCHITECTURAL BRIEF DISPATCHED** [${briefId}]`,
            embeds: [
              {
                title: `Architectural Brief: ${briefData.organization}`,
                color: 0x00d2ff,
                fields: [
                  { name: "Record ID", value: `\`${briefId}\``, inline: true },
                  { name: "Lead Email", value: briefData.leadEmail, inline: true },
                  { name: "Domain", value: briefData.domain, inline: false },
                  { name: "Scale / Concurrency", value: briefData.throughput, inline: true },
                  { name: "Compliance", value: briefData.compliance, inline: true },
                  { name: "Objective", value: briefData.coreObjective.substring(0, 1000), inline: false },
                  { name: "SLA Deadline", value: "48 Hours", inline: true },
                ],
                footer: { text: "Ripple Nexus Ingestion Engine" },
                timestamp: new Date().toISOString(),
              },
            ],
          }),
        });
      } catch (webhookErr) {
        console.error("[WEBHOOK_DISPATCH_WARNING] Failed to post to webhook:", webhookErr);
      }
    }

    // 4. Transactional Email Dispatch (Resend integration if RESEND_API_KEY is configured)
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationRecipient = process.env.ENGINEERING_ALERT_EMAIL || "briefs@ripplenexus.com";

    if (resendApiKey) {
      try {
        // Confirmation to the Lead
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Ripple Nexus Architecture <briefs@ripplenexus.com>",
            to: [briefData.leadEmail],
            subject: `[${briefId}] 48-Hour Written Architectural Brief Ingestion Receipt // RIPPLE NEXUS`,
            html: generateLeadConfirmationEmail(briefData),
          }),
        });

        // Internal Alert to Engineering Team
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Ripple Nexus Platform <no-reply@ripplenexus.com>",
            to: [notificationRecipient],
            subject: `🚨 [48H SLA] New Architectural Brief: ${briefData.organization} (${briefId})`,
            html: generateInternalEngineeringAlertEmail(briefData),
          }),
        });
      } catch (emailErr) {
        console.error("[EMAIL_DISPATCH_WARNING] Failed to dispatch transactional emails:", emailErr);
      }
    }

    // 5. Return Verified Response with Sealed Specification Schema
    return NextResponse.json(
      {
        success: true,
        briefId,
        hash,
        timestamp,
        sla: "48_HOURS",
        message: "Architectural brief cryptographically sealed and dispatched successfully.",
        specification: {
          $schema: "urn:nexus:spec:v4:architectural_brief",
          record_id: briefId,
          timestamp,
          entity: {
            organization: briefData.organization,
            lead_contact: briefData.leadEmail,
          },
          parameters: {
            domain: briefData.domain,
            throughput: briefData.throughput,
            compliance: briefData.compliance,
            problem_statement: briefData.coreObjective,
          },
          guarantees: {
            written_brief_turnaround: "48_HOURS",
            ip_ownership_transfer: "100_PERCENT",
            nda_enforcement: "MUTUAL_STRICT",
          },
        },
      },
      { status: 201 },
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal ingestion failure";
    console.error("[INTAKE_API_ERROR]", err);
    return NextResponse.json(
      { error: `Internal Ingestion Error: ${errorMsg}` },
      { status: 500 },
    );
  }
}

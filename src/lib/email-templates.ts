/**
 * RIPPLE NEXUS // BRAND TRANSACTIONAL EMAIL SYSTEM
 * Palette: #0A0D12 (Deep Background), #141923 (Card Carbon), #1F2633 (Border),
 *          #0052FF (Cobalt), #00D2FF (Electric Cyan), #8A99AD (Muted Slate), #FFFFFF (Text)
 */

export interface BriefEmailData {
  briefId: string;
  organization: string;
  leadEmail: string;
  domain: string;
  throughput: string;
  compliance: string;
  coreObjective: string;
  timestamp: string;
}

const DOMAIN_LABELS: Record<string, string> = {
  multi_tenant_saas: "Bucket 01: Multi-Tenant SaaS Backbone (Isolation + RBAC + DB Partitioning)",
  deterministic_ai_rag: "Bucket 02: Deterministic AI & Private Vector RAG (Zero Leakage + HITL)",
  cloud_k8s_infra: "Bucket 03: Cloud, Kubernetes & Multi-Region DevOps (Active-Active VPC)",
  workflow_automation_n8n: "Bucket 04: Autonomous Workflow Automation & n8n (Eliminating Manual Ops)",
  startup_mvp_launchpad: "Bucket 05: Startup MVP-to-Scale Launchpad (14-Day Production Release)",
  full_platform_modernization: "Complete Platform Synthesis (Multi-Tenant SaaS + Private AI + Cloud VPC)",
};

const THROUGHPUT_LABELS: Record<string, string> = {
  sub_50k_req: "High Growth (< 50,000 req/sec)",
  high_throughput_500k: "Enterprise (> 500,000 req/sec)",
  hyperscale_1m: "Hyperscale (> 1,000,000 req/sec)",
};

const COMPLIANCE_LABELS: Record<string, string> = {
  soc2_hipaa: "SOC 2 Type II + HIPAA Ready",
  fips_140_hsm: "FIPS 140-2 Level 3 Hardware HSM",
  iso27001_pci: "ISO 27001 + PCI-DSS Strict",
  standard_enterprise: "Standard Enterprise Zero-Trust",
};

/**
 * Lead Confirmation Email - Sent to the CTO / Technical Lead who submitted the brief.
 */
export function generateLeadConfirmationEmail(data: BriefEmailData): string {
  const domainLabel = DOMAIN_LABELS[data.domain] || data.domain;
  const throughputLabel = THROUGHPUT_LABELS[data.throughput] || data.throughput;
  const complianceLabel = COMPLIANCE_LABELS[data.compliance] || data.compliance;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Architectural Brief Receipt // RIPPLE NEXUS</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0A0D12; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #FFFFFF; -webkit-font-smoothing: antialiased;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0A0D12; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Master Container -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #141923; border: 1px solid #1F2633; border-radius: 12px; overflow: hidden; text-align: left;">
          
          <!-- Header Bar -->
          <tr>
            <td style="padding: 24px 32px; background-color: #0A0D12; border-bottom: 1px solid #1F2633;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="font-size: 16px; font-weight: 800; letter-spacing: 0.18em; color: #FFFFFF; font-family: monospace;">
                          RIPPLE NEXUS
                        </td>
                        <td style="padding-left: 10px;">
                          <span style="font-size: 10px; font-family: monospace; color: #00D2FF; background-color: #141923; border: 1px solid #1F2633; padding: 3px 8px; border-radius: 4px; letter-spacing: 0.05em;">
                            48-HOUR SLA ACTIVE
                          </span>
                        </td>
                      </tr>
                    </table>
                    <div style="font-size: 10px; font-family: monospace; color: #8A99AD; margin-top: 4px; letter-spacing: 0.05em;">
                      SYSTEMS ARCHITECTURE &amp; PRIVATE AI INFRASTRUCTURE
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Body Content -->
          <tr>
            <td style="padding: 32px;">
              <!-- Eyebrow Pill -->
              <div style="display: inline-block; font-size: 11px; font-family: monospace; color: #00D2FF; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px;">
                // INGESTION RECEIPT CONFIRMED
              </div>

              <!-- Main Title -->
              <h1 style="font-size: 22px; font-weight: 800; color: #FFFFFF; margin: 0 0 16px 0; line-height: 1.3; letter-spacing: -0.02em;">
                Your 48-Hour Written Architectural Brief is in Synthesis.
              </h1>

              <p style="font-size: 13px; line-height: 1.6; color: #8A99AD; margin: 0 0 24px 0;">
                Greetings. Your technical specification has been cryptographically sealed and routed directly to our Principal Distributed Systems Architects. We have initiated the binding 48-hour SLA turnaround for <strong style="color: #FFFFFF;">${escapeHtml(data.organization)}</strong>.
              </p>

              <!-- Cryptographic Receipt Enclave -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0A0D12; border: 1px solid #1F2633; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-family: monospace; font-size: 11px; line-height: 1.8;">
                      <tr>
                        <td style="color: #8A99AD; width: 40%;">RECORD_ID:</td>
                        <td style="color: #00D2FF; font-weight: bold;">${escapeHtml(data.briefId)}</td>
                      </tr>
                      <tr>
                        <td style="color: #8A99AD;">ORGANIZATION:</td>
                        <td style="color: #FFFFFF;">${escapeHtml(data.organization)}</td>
                      </tr>
                      <tr>
                        <td style="color: #8A99AD;">TARGET_DOMAIN:</td>
                        <td style="color: #FFFFFF;">${escapeHtml(domainLabel)}</td>
                      </tr>
                      <tr>
                        <td style="color: #8A99AD;">THROUGHPUT_TIER:</td>
                        <td style="color: #FFFFFF;">${escapeHtml(throughputLabel)}</td>
                      </tr>
                      <tr>
                        <td style="color: #8A99AD;">COMPLIANCE_REGIME:</td>
                        <td style="color: #FFFFFF;">${escapeHtml(complianceLabel)}</td>
                      </tr>
                      <tr>
                        <td style="color: #8A99AD;">SLA_DELIVERY:</td>
                        <td style="color: #00D2FF; font-weight: bold;">48 HOURS GUARANTEED</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Objectives Section -->
              <div style="font-size: 11px; font-family: monospace; color: #00D2FF; text-transform: uppercase; margin-bottom: 8px;">
                // CAPTURED OBJECTIVE &amp; CONSTRAINTS
              </div>
              <div style="background-color: #0A0D12; border: 1px solid #1F2633; border-radius: 8px; padding: 16px; font-family: monospace; font-size: 12px; color: #8A99AD; line-height: 1.6; margin-bottom: 24px;">
                ${escapeHtml(data.coreObjective)}
              </div>

              <!-- 4 Institutional Commitments -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px; background-color: #0A0D12; border: 1px solid #1F2633; border-radius: 6px;">
                    <div style="font-size: 11px; font-family: monospace; color: #0052FF; font-weight: bold; margin-bottom: 4px;">
                      01 // 100% IP HANDOVER
                    </div>
                    <div style="font-size: 11px; color: #8A99AD; line-height: 1.4;">
                      All delivered architectural schematics, code scaffolds, and infrastructure manifests belong 100% to you.
                    </div>
                  </td>
                </tr>
                <tr><td style="height: 8px;"></td></tr>
                <tr>
                  <td style="padding: 12px; background-color: #0A0D12; border: 1px solid #1F2633; border-radius: 6px;">
                    <div style="font-size: 11px; font-family: monospace; color: #00D2FF; font-weight: bold; margin-bottom: 4px;">
                      02 // DIRECT SENIOR ARCHITECT ENGAGEMENT
                    </div>
                    <div style="font-size: 11px; color: #8A99AD; line-height: 1.4;">
                      Zero agency account managers or junior layers. Your brief is authored exclusively by Principal Systems Engineers.
                    </div>
                  </td>
                </tr>
              </table>

              <p style="font-size: 12px; color: #8A99AD; line-height: 1.5; margin: 0;">
                If you have additional architecture diagrams, repository links, or benchmark specs to append to this brief, simply reply directly to this transmission.
              </p>
            </td>
          </tr>

          <!-- Footer Bar -->
          <tr>
            <td style="padding: 24px 32px; background-color: #0A0D12; border-top: 1px solid #1F2633; font-size: 10px; font-family: monospace; color: #8A99AD; line-height: 1.6;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div>&copy; ${new Date().getFullYear()} RIPPLE NEXUS. ALL RIGHTS RESERVED.</div>
                    <div style="color: #00D2FF; margin-top: 2px;">STRICT ZERO-TRUST PRIVACY ENCLAVE // ZERO MODEL TRAINING RETENTION</div>
                  </td>
                  <td align="right">
                    <span style="color: #00D2FF;">STATUS: NOMINAL</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Internal Engineering Alert Email - Dispatched immediately to engineering architects.
 */
export function generateInternalEngineeringAlertEmail(data: BriefEmailData): string {
  const domainLabel = DOMAIN_LABELS[data.domain] || data.domain;
  const throughputLabel = THROUGHPUT_LABELS[data.throughput] || data.throughput;
  const complianceLabel = COMPLIANCE_LABELS[data.compliance] || data.compliance;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>CRITICAL ACTION: New 48-Hour Brief [${escapeHtml(data.briefId)}]</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0A0D12; font-family: monospace; color: #FFFFFF;">
  <div style="max-width: 640px; margin: 24px auto; background-color: #141923; border: 1px solid #0052FF; border-radius: 8px; padding: 24px;">
    <div style="color: #00D2FF; font-size: 12px; font-weight: bold; margin-bottom: 12px;">
      // RIPPLE NEXUS INGESTION DISPATCH // 48-HOUR SLA TRIGGERED
    </div>

    <h2 style="font-size: 18px; color: #FFFFFF; margin: 0 0 16px 0;">
      New Architectural Brief: ${escapeHtml(data.organization)}
    </h2>

    <div style="background-color: #0A0D12; border: 1px solid #1F2633; border-radius: 6px; padding: 16px; font-size: 12px; line-height: 1.8; margin-bottom: 16px;">
      <div><strong style="color: #8A99AD;">RECORD_ID:</strong> <span style="color: #00D2FF;">${escapeHtml(data.briefId)}</span></div>
      <div><strong style="color: #8A99AD;">LEAD_CONTACT:</strong> <a href="mailto:${escapeHtml(data.leadEmail)}" style="color: #FFFFFF;">${escapeHtml(data.leadEmail)}</a></div>
      <div><strong style="color: #8A99AD;">ORGANIZATION:</strong> ${escapeHtml(data.organization)}</div>
      <div><strong style="color: #8A99AD;">DOMAIN:</strong> ${escapeHtml(domainLabel)}</div>
      <div><strong style="color: #8A99AD;">THROUGHPUT:</strong> ${escapeHtml(throughputLabel)}</div>
      <div><strong style="color: #8A99AD;">COMPLIANCE:</strong> ${escapeHtml(complianceLabel)}</div>
      <div><strong style="color: #8A99AD;">INGESTION_TIMESTAMP:</strong> ${escapeHtml(data.timestamp)}</div>
    </div>

    <div style="color: #00D2FF; font-size: 11px; margin-bottom: 6px;">// OBJECTIVE &amp; SYSTEM BOTTLENECK SPEC:</div>
    <div style="background-color: #0A0D12; border: 1px solid #1F2633; border-radius: 6px; padding: 16px; font-size: 12px; color: #FFFFFF; line-height: 1.6; white-space: pre-wrap; margin-bottom: 20px;">${escapeHtml(data.coreObjective)}</div>

    <div style="font-size: 11px; color: #8A99AD; border-top: 1px solid #1F2633; pt-3; padding-top: 12px;">
      ACTION REQUIRED: Principal Systems Architect must synthesize and dispatch written brief before 48-hour SLA deadline.
    </div>
  </div>
</body>
</html>`;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

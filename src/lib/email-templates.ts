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

function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://theripplenexus.com";
}

/**
 * Lead Confirmation Email - Sent to the CTO / Technical Lead who submitted the brief.
 */
export function generateLeadConfirmationEmail(data: BriefEmailData): string {
  const baseUrl = getBaseUrl();
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
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0A0D12; padding: 36px 16px;">
    <tr>
      <td align="center">
        <!-- Master Container -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #141923; border: 1px solid #1F2633; border-radius: 12px; overflow: hidden; text-align: left; box-shadow: 0 10px 40px rgba(0,0,0,0.8);">
          
          <!-- Top Cyberpunk Accent Stripe -->
          <tr>
            <td style="height: 3px; background: linear-gradient(90deg, #0052FF 0%, #00D2FF 50%, #0052FF 100%);"></td>
          </tr>

          <!-- Header Bar with Embedded Logo Lockup -->
          <tr>
            <td style="padding: 26px 32px; background-color: #0A0D12; border-bottom: 1px solid #1F2633;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="vertical-align: middle;">
                    <!-- Brand Lockup Table -->
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="vertical-align: middle; padding-right: 14px;">
                          <!-- Logo Mark -->
                          <img src="${baseUrl}/assets/rn-mark.svg" alt="Ripple Nexus" width="38" height="38" style="display: block; border: 1px solid #1F2633; border-radius: 6px; background-color: #141923; padding: 4px;" />
                        </td>
                        <td style="vertical-align: middle;">
                          <div style="font-size: 15px; font-weight: 800; letter-spacing: 0.18em; color: #FFFFFF; font-family: monospace;">
                            RIPPLE NEXUS
                          </div>
                          <div style="font-size: 9px; font-family: monospace; color: #8A99AD; letter-spacing: 0.12em; text-transform: uppercase; margin-top: 2px;">
                            SYSTEMS ARCHITECTURE &amp; AI INFRA
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="font-size: 10px; font-family: monospace; font-weight: bold; color: #00D2FF; background-color: #141923; border: 1px solid #0052FF; padding: 5px 10px; border-radius: 4px; letter-spacing: 0.08em; white-space: nowrap;">
                      48-HOUR SLA ACTIVE
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Body Content -->
          <tr>
            <td style="padding: 32px;">
              <!-- Eyebrow Pill -->
              <div style="font-size: 11px; font-family: monospace; color: #00D2FF; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">
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
                  <td style="padding: 18px 20px;">
                    <div style="font-size: 10px; font-family: monospace; color: #00D2FF; letter-spacing: 0.1em; margin-bottom: 12px; border-bottom: 1px solid #1F2633; padding-bottom: 6px;">
                      // SYSTEM METADATA RECORD &amp; CRYPTOGRAPHIC SEAL
                    </div>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-family: monospace; font-size: 11px; line-height: 1.85;">
                      <tr>
                        <td style="color: #8A99AD; width: 38%;">RECORD_ID:</td>
                        <td style="color: #00D2FF; font-weight: bold;">${escapeHtml(data.briefId)}</td>
                      </tr>
                      <tr>
                        <td style="color: #8A99AD;">ORGANIZATION:</td>
                        <td style="color: #FFFFFF; font-weight: bold;">${escapeHtml(data.organization)}</td>
                      </tr>
                      <tr>
                        <td style="color: #8A99AD;">LEAD_CONTACT:</td>
                        <td style="color: #FFFFFF;">${escapeHtml(data.leadEmail)}</td>
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
                        <td style="color: #8A99AD;">INGESTION_TIMESTAMP:</td>
                        <td style="color: #8A99AD;">${escapeHtml(data.timestamp)}</td>
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
                // CAPTURED OBJECTIVE &amp; ARCHITECTURAL CONSTRAINTS
              </div>
              <div style="background-color: #0A0D12; border: 1px solid #1F2633; border-radius: 8px; padding: 16px; font-family: monospace; font-size: 12px; color: #FFFFFF; line-height: 1.6; margin-bottom: 24px; white-space: pre-wrap;">
                ${escapeHtml(data.coreObjective)}
              </div>

              <!-- 3 Institutional Guarantees -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 16px; background-color: #0A0D12; border: 1px solid #1F2633; border-radius: 6px;">
                    <div style="font-size: 11px; font-family: monospace; color: #0052FF; font-weight: bold; margin-bottom: 4px;">
                      01 // 100% UNCONDITIONAL IP HANDOVER
                    </div>
                    <div style="font-size: 11px; color: #8A99AD; line-height: 1.4;">
                      All delivered architectural schematics, code scaffolds, and infrastructure manifests belong 100% to your enterprise.
                    </div>
                  </td>
                </tr>
                <tr><td style="height: 8px;"></td></tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: #0A0D12; border: 1px solid #1F2633; border-radius: 6px;">
                    <div style="font-size: 11px; font-family: monospace; color: #00D2FF; font-weight: bold; margin-bottom: 4px;">
                      02 // DIRECT PRINCIPAL ARCHITECT ENGAGEMENT
                    </div>
                    <div style="font-size: 11px; color: #8A99AD; line-height: 1.4;">
                      Zero agency account managers or junior layers. Your brief is authored exclusively by senior distributed systems engineers.
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Action Link -->
              <div style="text-align: center; margin: 28px 0 12px 0;">
                <a href="${baseUrl}" style="display: inline-block; background-color: #0052FF; color: #FFFFFF; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-size: 12px; font-family: monospace; font-weight: bold; letter-spacing: 0.08em; box-shadow: 0 0 20px rgba(0,82,255,0.45);">
                  VISIT RIPPLE NEXUS TERMINAL &rarr;
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer Bar -->
          <tr>
            <td style="padding: 24px 32px; background-color: #0A0D12; border-top: 1px solid #1F2633; font-size: 10px; font-family: monospace; color: #8A99AD; line-height: 1.6;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div>&copy; ${new Date().getFullYear()} RIPPLE NEXUS. ALL RIGHTS RESERVED.</div>
                    <div style="color: #00D2FF; margin-top: 3px;">STRICT ZERO-TRUST PRIVACY ENCLAVE // ZERO MODEL TRAINING RETENTION</div>
                  </td>
                  <td align="right" style="vertical-align: middle;">
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
  const baseUrl = getBaseUrl();
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
  <div style="max-width: 640px; margin: 24px auto; background-color: #141923; border: 1px solid #0052FF; border-radius: 8px; padding: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.8);">
    
    <!-- Header with Monogram -->
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #1F2633;">
      <tr>
        <td style="vertical-align: middle;">
          <table border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td style="padding-right: 10px;">
                <img src="${baseUrl}/assets/rn-mark.svg" alt="Ripple Nexus" width="32" height="32" style="display: block; border-radius: 4px; background: #0A0D12; border: 1px solid #1F2633; padding: 2px;" />
              </td>
              <td>
                <span style="font-size: 14px; font-weight: bold; color: #FFFFFF; letter-spacing: 0.14em;">RIPPLE NEXUS</span>
                <div style="color: #00D2FF; font-size: 11px;">// INGESTION ENGINE // 48-HOUR SLA TRIGGERED</div>
              </td>
            </tr>
          </table>
        </td>
        <td align="right" style="vertical-align: middle;">
          <span style="color: #FF4444; font-weight: bold; font-size: 11px; background-color: #2A1015; border: 1px solid #FF4444; padding: 3px 8px; border-radius: 4px;">HIGH PRIORITY</span>
        </td>
      </tr>
    </table>

    <h2 style="font-size: 18px; color: #FFFFFF; margin: 0 0 16px 0;">
      New Architectural Brief: ${escapeHtml(data.organization)}
    </h2>

    <div style="background-color: #0A0D12; border: 1px solid #1F2633; border-radius: 6px; padding: 16px; font-size: 12px; line-height: 1.85; margin-bottom: 16px;">
      <div><strong style="color: #8A99AD;">RECORD_ID:</strong> <span style="color: #00D2FF; font-weight: bold;">${escapeHtml(data.briefId)}</span></div>
      <div><strong style="color: #8A99AD;">LEAD_CONTACT:</strong> <a href="mailto:${escapeHtml(data.leadEmail)}" style="color: #00D2FF;">${escapeHtml(data.leadEmail)}</a></div>
      <div><strong style="color: #8A99AD;">ORGANIZATION:</strong> ${escapeHtml(data.organization)}</div>
      <div><strong style="color: #8A99AD;">DOMAIN:</strong> ${escapeHtml(domainLabel)}</div>
      <div><strong style="color: #8A99AD;">THROUGHPUT:</strong> ${escapeHtml(throughputLabel)}</div>
      <div><strong style="color: #8A99AD;">COMPLIANCE:</strong> ${escapeHtml(complianceLabel)}</div>
      <div><strong style="color: #8A99AD;">INGESTION_TIMESTAMP:</strong> ${escapeHtml(data.timestamp)}</div>
      <div><strong style="color: #8A99AD;">SLA_DEADLINE:</strong> <span style="color: #00D2FF; font-weight: bold;">48 Hours</span></div>
    </div>

    <div style="color: #00D2FF; font-size: 11px; margin-bottom: 6px;">// OBJECTIVE &amp; SYSTEM BOTTLENECK SPEC:</div>
    <div style="background-color: #0A0D12; border: 1px solid #1F2633; border-radius: 6px; padding: 16px; font-size: 12px; color: #FFFFFF; line-height: 1.6; white-space: pre-wrap; margin-bottom: 20px;">${escapeHtml(data.coreObjective)}</div>

    <div style="font-size: 11px; color: #8A99AD; border-top: 1px solid #1F2633; padding-top: 12px;">
      ACTION REQUIRED: Principal Systems Architect must synthesize and dispatch written architectural specification before 48-hour SLA expiration.
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

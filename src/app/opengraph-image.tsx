import { ImageResponse } from "next/og";

export const alt = "RIPPLE NEXUS | Systems Architecture & Private AI Infrastructure";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0A0D12",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Ambient Glow */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 82, 255, 0.3) 0%, rgba(0, 210, 255, 0.1) 40%, transparent 70%)",
          }}
        />

        {/* Top Header Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#141923",
                border: "1px solid #0052FF",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontSize: "24px",
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              RN
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 900,
                  letterSpacing: "0.15em",
                  color: "#FFFFFF",
                  fontFamily: "monospace",
                }}
              >
                RIPPLE NEXUS
              </span>
              <span
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.18em",
                  color: "#8A99AD",
                  fontFamily: "monospace",
                }}
              >
                SYSTEMS ARCHITECTURE &amp; AI INFRA
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "6px",
              backgroundColor: "#141923",
              border: "1px solid #1F2633",
              color: "#00D2FF",
              fontSize: "14px",
              fontFamily: "monospace",
              fontWeight: 600,
            }}
          >
            PROD // &lt;14.2MS LATENCY
          </div>
        </div>

        {/* Middle Main Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "980px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontFamily: "monospace",
              color: "#00D2FF",
              letterSpacing: "0.15em",
            }}
          >
            [ ENTERPRISE SYSTEMS ENGINEERING &amp; 48-HOUR ARCHITECTURAL BRIEF ]
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 900,
              lineHeight: 1.15,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            Multi-Tenant SaaS Backbones &amp; Private AI Infrastructure.
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#8A99AD",
              lineHeight: 1.4,
              maxWidth: "860px",
            }}
          >
            Deterministic vector RAG pipelines, sub-25ms global latency, zero data breaches, and 100% intellectual property ownership.
          </div>
        </div>

        {/* Bottom Metadata Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #1F2633",
            paddingTop: "24px",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#FFFFFF", fontSize: "14px", fontFamily: "monospace" }}>
              <span style={{ color: "#00D2FF" }}>01 //</span> Multi-Tenant SaaS
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#FFFFFF", fontSize: "14px", fontFamily: "monospace" }}>
              <span style={{ color: "#0052FF" }}>02 //</span> Deterministic AI
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#FFFFFF", fontSize: "14px", fontFamily: "monospace" }}>
              <span style={{ color: "#00D2FF" }}>03 //</span> Cloud &amp; K8s
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#FFFFFF", fontSize: "14px", fontFamily: "monospace" }}>
              <span style={{ color: "#0052FF" }}>04 //</span> Workflow n8n
            </div>
          </div>

          <div
            style={{
              fontSize: "14px",
              fontFamily: "monospace",
              color: "#00D2FF",
              fontWeight: "bold",
            }}
          >
            theripplenexus.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

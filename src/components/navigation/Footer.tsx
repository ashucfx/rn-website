"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ShieldCheck, Lock } from "lucide-react";
import { LegalDocType } from "@/components/legal/LegalModal";

interface FooterProps {
  onOpenLegal?: (tab: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const [timezones, setTimezones] = useState({
    utc: "12:00:00",
    nyc: "08:00:00",
    sfo: "05:00:00",
    lon: "13:00:00",
    sgp: "20:00:00",
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimezones({
        utc: now.toLocaleTimeString("en-US", { timeZone: "UTC", hour12: false }),
        nyc: now.toLocaleTimeString("en-US", { timeZone: "America/New_York", hour12: false }),
        sfo: now.toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles", hour12: false }),
        lon: now.toLocaleTimeString("en-US", { timeZone: "Europe/London", hour12: false }),
        sgp: now.toLocaleTimeString("en-US", { timeZone: "Asia/Singapore", hour12: false }),
      });
    };
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const openTab = (tab: LegalDocType) => {
    if (onOpenLegal) {
      onOpenLegal(tab);
    }
  };

  return (
    <footer className="relative bg-[#0A0D12] border-t border-[#1F2633] pt-16 pb-12 overflow-hidden text-sm">
      {/* Background Subtle Accent Grid */}
      <div className="absolute inset-0 bg-telemetry-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Global Command Telemetry Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pb-12 border-b border-[#1F2633]">
          <div className="p-3 rounded bg-[#141923] border border-[#1F2633]">
            <div className="text-[10px] font-mono text-[#8A99AD] tracking-wider">TIMEZONE // UTC</div>
            <div className="text-sm font-mono text-[#00D2FF] font-semibold mt-1" suppressHydrationWarning>
              {timezones.utc}
            </div>
            <div className="text-[9px] font-mono text-[#8A99AD]/70 mt-0.5">COORD_TIME</div>
          </div>

          <div className="p-3 rounded bg-[#141923] border border-[#1F2633]">
            <div className="text-[10px] font-mono text-[#8A99AD] tracking-wider">EAST // US-EAST (NYC)</div>
            <div className="text-sm font-mono text-white font-semibold mt-1" suppressHydrationWarning>
              {timezones.nyc}
            </div>
            <div className="text-[9px] font-mono text-[#00D2FF] mt-0.5">PRIMARY_CORE</div>
          </div>

          <div className="p-3 rounded bg-[#141923] border border-[#1F2633]">
            <div className="text-[10px] font-mono text-[#8A99AD] tracking-wider">WEST // US-WEST (SFO)</div>
            <div className="text-sm font-mono text-white font-semibold mt-1" suppressHydrationWarning>
              {timezones.sfo}
            </div>
            <div className="text-[9px] font-mono text-[#8A99AD]/70 mt-0.5">EDGE_CLUSTER</div>
          </div>

          <div className="p-3 rounded bg-[#141923] border border-[#1F2633]">
            <div className="text-[10px] font-mono text-[#8A99AD] tracking-wider">EMEA // EU-WEST (LON)</div>
            <div className="text-sm font-mono text-white font-semibold mt-1" suppressHydrationWarning>
              {timezones.lon}
            </div>
            <div className="text-[9px] font-mono text-[#8A99AD]/70 mt-0.5">WARM_STANDBY</div>
          </div>

          <div className="p-3 rounded bg-[#141923] border border-[#1F2633] col-span-2 sm:col-span-1">
            <div className="text-[10px] font-mono text-[#8A99AD] tracking-wider">APAC // AP-SE (SGP)</div>
            <div className="text-sm font-mono text-white font-semibold mt-1" suppressHydrationWarning>
              {timezones.sgp}
            </div>
            <div className="text-[9px] font-mono text-[#0052FF] mt-0.5">TRANSIT_MESH</div>
          </div>
        </div>

        {/* Middle Institutional Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#1F2633]">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#141923] border border-[#1F2633] flex items-center justify-center p-1.5">
                <Image
                  src="/assets/rn-mark.svg"
                  alt="Ripple Nexus Monogram"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-sans font-extrabold text-lg tracking-[0.16em] text-white">
                RIPPLE NEXUS
              </span>
            </div>

            <p className="text-xs text-[#8A99AD] leading-relaxed max-w-sm">
              We engineer multi-tenant SaaS backbones and private AI infrastructure for high-growth
              enterprises. Zero account-manager layers. Direct senior architect engagement. 100%
              intellectual property handover.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-[#8A99AD] mt-1">
              <span>CONTACT //</span>
              <a
                href="mailto:info@theripplenexus.com"
                className="text-[#00D2FF] hover:text-white hover:underline transition-colors"
              >
                info@theripplenexus.com
              </a>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => openTab("security")}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#141923] border border-[#1F2633] hover:border-[#00D2FF] text-[10px] font-mono text-[#00D2FF] transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>SOC 2 TYPE II AUDITED</span>
              </button>
              <button
                onClick={() => openTab("security")}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#141923] border border-[#1F2633] hover:border-[#0052FF] text-[10px] font-mono text-[#FFFFFF] transition-colors"
              >
                <Lock className="w-3.5 h-3.5 text-[#0052FF]" />
                <span>HIPAA READY</span>
              </button>
            </div>
          </div>

          {/* Architectural Pillars */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-mono tracking-widest text-[#00D2FF] uppercase">
              {"// CORE DOMAINS"}
            </h4>
            <ul className="space-y-2 text-xs text-[#8A99AD] font-mono">
              <li className="hover:text-white transition-colors cursor-default flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
                Multi-Tenant SaaS Backbones
              </li>
              <li className="hover:text-white transition-colors cursor-default flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                Deterministic AI &amp; Vector RAG
              </li>
              <li className="hover:text-white transition-colors cursor-default flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
                Cloud &amp; Multi-Region DevOps
              </li>
              <li className="hover:text-white transition-colors cursor-default flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                Workflow Automation &amp; n8n
              </li>
              <li className="hover:text-white transition-colors cursor-default flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
                Startup MVP Launchpad
              </li>
            </ul>
          </div>

          {/* Institutional Compliance & Governance */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-mono tracking-widest text-[#00D2FF] uppercase">
              {"// LEGAL & GOVERNANCE ENCLAVE"}
            </h4>
            <div className="p-4 rounded bg-[#141923] border border-[#1F2633] space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <button
                  onClick={() => openTab("terms")}
                  className="font-mono text-[#8A99AD] hover:text-white underline-offset-2 hover:underline transition-colors text-left"
                >
                  TERMS OF ENGAGEMENT:
                </button>
                <span className="font-mono text-[#00D2FF] font-semibold">100% IP HANDOVER</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <button
                  onClick={() => openTab("privacy")}
                  className="font-mono text-[#8A99AD] hover:text-white underline-offset-2 hover:underline transition-colors text-left"
                >
                  PRIVACY POLICY:
                </button>
                <span className="font-mono text-white">ZERO VENDOR RETENTION</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <button
                  onClick={() => openTab("security")}
                  className="font-mono text-[#8A99AD] hover:text-white underline-offset-2 hover:underline transition-colors text-left"
                >
                  SECURITY CONTROLS:
                </button>
                <span className="font-mono text-white">AES-256-GCM + FIPS 140-2</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <button
                  onClick={() => openTab("cookies")}
                  className="font-mono text-[#8A99AD] hover:text-[#00D2FF] underline-offset-2 hover:underline transition-colors text-left"
                >
                  COOKIE &amp; TELEMETRY:
                </button>
                <span className="font-mono text-[#0052FF] font-semibold">ESSENTIAL ONLY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Telemetry Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#8A99AD]">
          <div className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} RIPPLE NEXUS</span>
            <span>{"//"}</span>
            <span>ALL RIGHTS RESERVED</span>
            <span>{"//"}</span>
            <span className="text-[#00D2FF]">STRICT ZERO-TRUST POLICY</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => openTab("privacy")}
              className="hover:text-white transition-colors"
            >
              PRIVACY POLICY
            </button>
            <span className="text-[#1F2633]">|</span>
            <button
              onClick={() => openTab("terms")}
              className="hover:text-white transition-colors"
            >
              TERMS
            </button>
            <span className="text-[#1F2633]">|</span>
            <button
              onClick={() => openTab("security")}
              className="hover:text-white transition-colors"
            >
              SECURITY
            </button>
            <span className="text-[#1F2633]">|</span>
            <button
              onClick={() => openTab("cookies")}
              className="hover:text-[#00D2FF] transition-colors"
            >
              COOKIES
            </button>
            <span className="text-[#1F2633]">|</span>
            <span className="text-[#00D2FF] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-ping" />
              STATUS: ALL SYSTEMS NOMINAL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

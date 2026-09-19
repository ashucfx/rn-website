"use client";

import React, { useEffect, useState } from "react";
import { ShieldCheck, Lock, Server, Cpu, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  const [timezones, setTimezones] = useState({
    utc: "00:00:00",
    nyc: "00:00:00",
    sfo: "00:00:00",
    lon: "00:00:00",
    sgp: "00:00:00",
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
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[#0A0D12] border-t border-[#1F2633] pt-16 pb-12 overflow-hidden text-sm">
      {/* Background Subtle Accent Grid */}
      <div className="absolute inset-0 bg-telemetry-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Global Command Telemetry Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pb-12 border-b border-[#1F2633]">
          <div className="p-3 rounded bg-[#141923] border border-[#1F2633]">
            <div className="text-[10px] font-mono text-[#8A99AD] tracking-wider">TIMEZONE // UTC</div>
            <div className="text-sm font-mono text-[#00D2FF] font-semibold mt-1">{timezones.utc}</div>
            <div className="text-[9px] font-mono text-[#8A99AD]/70 mt-0.5">COORD_TIME</div>
          </div>

          <div className="p-3 rounded bg-[#141923] border border-[#1F2633]">
            <div className="text-[10px] font-mono text-[#8A99AD] tracking-wider">EAST // US-EAST (NYC)</div>
            <div className="text-sm font-mono text-white font-semibold mt-1">{timezones.nyc}</div>
            <div className="text-[9px] font-mono text-[#00D2FF] mt-0.5">PRIMARY_CORE</div>
          </div>

          <div className="p-3 rounded bg-[#141923] border border-[#1F2633]">
            <div className="text-[10px] font-mono text-[#8A99AD] tracking-wider">WEST // US-WEST (SFO)</div>
            <div className="text-sm font-mono text-white font-semibold mt-1">{timezones.sfo}</div>
            <div className="text-[9px] font-mono text-[#8A99AD]/70 mt-0.5">EDGE_CLUSTER</div>
          </div>

          <div className="p-3 rounded bg-[#141923] border border-[#1F2633]">
            <div className="text-[10px] font-mono text-[#8A99AD] tracking-wider">EMEA // EU-WEST (LON)</div>
            <div className="text-sm font-mono text-white font-semibold mt-1">{timezones.lon}</div>
            <div className="text-[9px] font-mono text-[#8A99AD]/70 mt-0.5">WARM_STANDBY</div>
          </div>

          <div className="p-3 rounded bg-[#141923] border border-[#1F2633] col-span-2 sm:col-span-1">
            <div className="text-[10px] font-mono text-[#8A99AD] tracking-wider">APAC // AP-SE (SGP)</div>
            <div className="text-sm font-mono text-white font-semibold mt-1">{timezones.sgp}</div>
            <div className="text-[9px] font-mono text-[#0052FF] mt-0.5">TRANSIT_MESH</div>
          </div>
        </div>

        {/* Middle Institutional Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#1F2633]">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#141923] border border-[#1F2633] flex items-center justify-center p-1.5">
                <img
                  src="/assets/rn-mark.svg"
                  alt="Ripple Nexus Monogram"
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

            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#141923] border border-[#1F2633] text-[10px] font-mono text-[#00D2FF]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>SOC 2 TYPE II AUDITED</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#141923] border border-[#1F2633] text-[10px] font-mono text-[#FFFFFF]">
                <Lock className="w-3.5 h-3.5 text-[#0052FF]" />
                <span>HIPAA READY</span>
              </div>
            </div>
          </div>

          {/* Architectural Pillars */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-mono tracking-widest text-[#00D2FF] uppercase">
              // CORE DOMAINS
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
                Multi-Region K8s VPC Topology
              </li>
              <li className="hover:text-white transition-colors cursor-default flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                Human-in-the-Loop Governance
              </li>
              <li className="hover:text-white transition-colors cursor-default flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
                Zero-Trust HSM Key Custody
              </li>
            </ul>
          </div>

          {/* Institutional Compliance & Governance */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-mono tracking-widest text-[#00D2FF] uppercase">
              // COMPLIANCE &amp; SOVEREIGNTY
            </h4>
            <div className="p-4 rounded bg-[#141923] border border-[#1F2633] space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[#8A99AD]">IP TRANSFER:</span>
                <span className="font-mono text-[#00D2FF] font-semibold">100% UNCONDITIONAL</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[#8A99AD]">DATA RETENTION:</span>
                <span className="font-mono text-white">ZERO CLOUD VENDOR RETENTION</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[#8A99AD]">ENCRYPTION STANDARD:</span>
                <span className="font-mono text-white">AES-256-GCM + FIPS 140-2</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[#8A99AD]">INFRASTRUCTURE CODE:</span>
                <span className="font-mono text-[#0052FF] font-semibold">TERRAFORM + HELM 100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Telemetry Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#8A99AD]">
          <div className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} RIPPLE NEXUS INC.</span>
            <span>//</span>
            <span>ALL RIGHTS RESERVED</span>
            <span>//</span>
            <span className="text-[#00D2FF]">STRICT ZERO-TRUST POLICY</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#brief-intake" className="hover:text-white transition-colors">
              ENGAGE ARCHITECTS
            </a>
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

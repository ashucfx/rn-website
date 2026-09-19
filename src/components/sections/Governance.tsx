"use client";

import React from "react";
import { ShieldCheck, Users, Code, Clock, Lock, CheckCircle2, ChevronRight } from "lucide-react";

export const Governance: React.FC = () => {
  const scrollToBrief = () => {
    const el = document.getElementById("brief-intake");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="governance" className="relative py-24 bg-[#0A0D12] border-t border-[#1F2633] overflow-hidden">
      <div className="absolute inset-0 bg-telemetry-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141923] border border-[#1F2633] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
            <span className="text-[11px] font-mono tracking-widest text-[#00D2FF]">
              SYSTEM GOVERNANCE // HUMAN-IN-THE-LOOP CONTROL
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            DETERMINISTIC VERIFICATION GATES &amp; COLLABORATIVE ENGINEERING.
          </h2>
          <p className="text-base text-[#8A99AD] leading-relaxed">
            Autonomous models propose state changes; deterministic mathematical rules and certified
            senior systems engineers arbitrate the commit. We eliminate autonomous model drift and
            hallucinatory state corruption before it reaches production databases.
          </p>
        </div>

        {/* Visual Governance Grid: HITL SVG & War Room SVG */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Visual 1: HITL Verification Gate Schematic */}
          <div className="p-6 rounded-xl bg-[#141923] border border-[#1F2633] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#00D2FF] tracking-wider">
                  TOPOLOGY // HITL_GATE_01
                </span>
                <span className="px-2 py-0.5 rounded bg-[#0A0D12] border border-[#1F2633] text-[10px] font-mono text-[#8A99AD]">
                  DUAL-KEY CONSENSUS
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Human-in-the-Loop AI Verification Gate
              </h3>
              <p className="text-xs text-[#8A99AD] leading-relaxed mb-6">
                Dual-key cryptographic sign-off ensures high-risk database transactions or system
                mutations cannot proceed without explicit engineer approval.
              </p>
            </div>

            <div className="relative w-full rounded-lg bg-[#0A0D12] border border-[#1F2633] p-2 overflow-hidden aspect-[16/10] flex items-center justify-center">
              <img
                src="/assets/hitl-governance.svg"
                alt="Human-in-the-Loop AI Verification Gate"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Visual 2: Collaborative Systems Engineering War Room */}
          <div className="p-6 rounded-xl bg-[#141923] border border-[#1F2633] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#0052FF] tracking-wider">
                  OPERATIONS // WAR_ROOM_HUD
                </span>
                <span className="px-2 py-0.5 rounded bg-[#0A0D12] border border-[#1F2633] text-[10px] font-mono text-[#00D2FF]">
                  LIVE ENGAGEMENT
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Collaborative Systems Engineering War Room
              </h3>
              <p className="text-xs text-[#8A99AD] leading-relaxed mb-6">
                Direct engagement with Principal Distributed Systems Architects in joint technical
                sessions. Real-time telemetry, cluster debugging, and roadmap execution.
              </p>
            </div>

            <div className="relative w-full rounded-lg bg-[#0A0D12] border border-[#1F2633] p-2 overflow-hidden aspect-[16/10] flex items-center justify-center">
              <img
                src="/assets/war-room.svg"
                alt="Collaborative Systems Engineering War Room"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* The 4 Risk-Reversal Pillars (Displayed prominently before intake engine) */}
        <div className="mt-8 pt-12 border-t border-[#1F2633]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#00D2FF] tracking-widest uppercase">
              {"// INSTITUTIONAL TRUST ARCHITECTURE"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 tracking-tight">
              THE 4 RISK-REVERSAL PILLARS
            </h3>
            <p className="text-xs text-[#8A99AD] mt-2">
              Engineered to eliminate friction, protect capital, and guarantee complete technical
              ownership from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 rounded-lg bg-[#141923] border border-[#1F2633] hover:border-[#0052FF] transition-all duration-200">
              <div className="w-10 h-10 rounded bg-[#0A0D12] border border-[#1F2633] flex items-center justify-center text-[#0052FF] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-[#00D2FF] tracking-wider mb-1">
                PILLAR 01 // DIRECT ACCESS
              </div>
              <h4 className="text-base font-bold text-white mb-2">Direct Senior Architects</h4>
              <p className="text-xs text-[#8A99AD] leading-relaxed">
                Zero intermediary account managers, junior developers, or agency layers. You work
                directly with principal engineers with 10+ years scaling hyperscale distributed
                systems.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-lg bg-[#141923] border border-[#1F2633] hover:border-[#00D2FF] transition-all duration-200">
              <div className="w-10 h-10 rounded bg-[#0A0D12] border border-[#1F2633] flex items-center justify-center text-[#00D2FF] mb-4">
                <Code className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-[#00D2FF] tracking-wider mb-1">
                PILLAR 02 // 100% OWNERSHIP
              </div>
              <h4 className="text-base font-bold text-white mb-2">100% IP &amp; Source Code</h4>
              <p className="text-xs text-[#8A99AD] leading-relaxed">
                Complete handover of clean TypeScript code, Docker images, Helm charts, and Terraform
                scripts into your enterprise repositories. Zero proprietary lock-in.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-lg bg-[#141923] border border-[#1F2633] hover:border-[#0052FF] transition-all duration-200">
              <div className="w-10 h-10 rounded bg-[#0A0D12] border border-[#1F2633] flex items-center justify-center text-[#0052FF] mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-[#00D2FF] tracking-wider mb-1">
                PILLAR 03 // ACTIONABLE
              </div>
              <h4 className="text-base font-bold text-white mb-2">48-Hour Written Brief</h4>
              <p className="text-xs text-[#8A99AD] leading-relaxed">
                Submit your requirements and receive a comprehensive, actionable 8-to-12 page
                technical architecture specification delivered within 48 hours guaranteed.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-lg bg-[#141923] border border-[#1F2633] hover:border-[#00D2FF] transition-all duration-200">
              <div className="w-10 h-10 rounded bg-[#0A0D12] border border-[#1F2633] flex items-center justify-center text-[#00D2FF] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-[#00D2FF] tracking-wider mb-1">
                PILLAR 04 // ZERO RISK
              </div>
              <h4 className="text-base font-bold text-white mb-2">Zero Data Breaches</h4>
              <p className="text-xs text-[#8A99AD] leading-relaxed">
                Uncompromising hardware security module custody, FIPS 140-2 Level 3 compliance, and
                contractually enforceable 99.999% high-availability production SLAs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Governance;

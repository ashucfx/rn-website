"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Zap, Database, Terminal, ChevronRight } from "lucide-react";
import { MonolithicRNCanvas } from "@/components/canvas/MonolithicRNCanvas";

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Atmospheric Layer */}
      <div className="absolute inset-0 bg-telemetry-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-radial-glow pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-radial-subtle pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authoritative Conversion Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Telemetry Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141923] border border-[#1F2633] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping" />
              <span className="text-[10px] sm:text-xs font-mono font-medium tracking-[0.14em] text-[#00D2FF]">
                [ PRODUCTION SYSTEMS &amp; AI ENGINEERING // REGION_GLOBAL ]
              </span>
            </div>

            {/* Display H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              WE ENGINEER <span className="text-white">MULTI-TENANT SAAS</span> BACKBONES AND{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#0052FF] to-[#00D2FF]">
                PRIVATE AI INFRASTRUCTURE.
              </span>
            </h1>

            {/* Clear Sub-headline */}
            <p className="text-base sm:text-lg text-[#8A99AD] leading-relaxed max-w-2xl mb-8">
              We take complex software platforms from architecture to high-throughput production.
              Deterministic pipelines, sub-25ms latency, zero data breaches, and 100% intellectual
              property ownership.
            </p>

            {/* Quantitative Proof Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl mb-9">
              <div className="p-2.5 rounded bg-[#141923]/90 border border-[#1F2633] flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-[#00D2FF] flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold text-white">&lt; 14.2ms</span>
                  <span className="text-[10px] font-mono text-[#8A99AD]">Mesh Latency</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-[#141923]/90 border border-[#1F2633] flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#0052FF] flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold text-white">0 Breaches</span>
                  <span className="text-[10px] font-mono text-[#8A99AD]">Hardware HSM</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-[#141923]/90 border border-[#1F2633] col-span-2 sm:col-span-1 flex items-center gap-2.5">
                <Database className="w-4 h-4 text-[#00D2FF] flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold text-white">100% IP</span>
                  <span className="text-[10px] font-mono text-[#8A99AD]">Full Handover</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo("brief-intake")}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded bg-[#0052FF] text-white font-mono text-sm font-semibold tracking-wider hover:bg-[#0043d1] transition-all duration-200 shadow-[0_0_25px_rgba(0,82,255,0.45)] hover:shadow-[0_0_35px_rgba(0,82,255,0.7)] active:scale-[0.98]"
              >
                <span>REQUEST 48-HOUR ARCHITECTURAL BRIEF</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={() => scrollTo("schematics")}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded bg-[#141923] border border-[#1F2633] text-[#8A99AD] hover:text-white font-mono text-sm tracking-wider hover:border-[#00D2FF] transition-all duration-200"
              >
                <Terminal className="w-4 h-4 text-[#00D2FF]" />
                <span>VIEW PRODUCTION SCHEMATICS</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Senior Architect Guarantee Note */}
            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-[#8A99AD]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
              <span>Direct engagement with Principal Distributed Systems Architects. Zero agency fluff.</span>
            </div>
          </div>

          {/* Right Column: 3D Kinetic Monolith Engine */}
          <div className="lg:col-span-5 relative w-full h-[420px] sm:h-[500px] lg:h-[620px] flex items-center justify-center">
            {/* Outer Decorative Target Bracket Frame */}
            <div className="absolute inset-0 pointer-events-none rounded-xl border border-[#1F2633]/60">
              {/* Corner Crosshairs */}
              <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#0052FF]" />
              <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#0052FF]" />
              <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#0052FF]" />
              <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#0052FF]" />

              {/* Top Bar Spec */}
              <div className="absolute top-2 left-4 text-[10px] font-mono text-[#8A99AD] tracking-widest">
                {"GEOMETRY: MONOLITHIC_RN_v4 // TITANIUM CORE"}
              </div>
            </div>

            {/* The WebGL 3D Canvas */}
            <MonolithicRNCanvas className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Shield, Cpu, Activity, Menu, X, ArrowRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0D12]/90 backdrop-blur-md border-b border-[#1F2633] shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-[#0A0D12]/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Brand Identity & Monogram Lockup */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Ripple Nexus Home"
        >
          <div className="relative w-9 h-9 flex-shrink-0 bg-[#141923] border border-[#1F2633] rounded flex items-center justify-center p-1.5 transition-colors duration-200 group-hover:border-[#0052FF]">
            <img
              src="/assets/rn-mark.svg"
              alt="Ripple Nexus Monogram"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-sans font-extrabold text-base tracking-[0.18em] text-white group-hover:text-[#00D2FF] transition-colors">
                RIPPLE NEXUS
              </span>
              <span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded bg-[#141923] border border-[#1F2633] text-[9px] font-mono tracking-widest text-[#00D2FF]">
                ENTERPRISE
              </span>
            </div>
            <span className="hidden sm:block text-[10px] font-mono tracking-[0.14em] text-[#8A99AD] -mt-0.5 uppercase">
              Production Systems &amp; AI Infra
            </span>
          </div>
        </a>

        {/* Center: System Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("capabilities")}
            className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#8A99AD] hover:text-white transition-colors"
          >
            <Cpu className="w-3.5 h-3.5 text-[#0052FF]" />
            <span>CAPABILITIES</span>
          </button>

          <button
            onClick={() => scrollToSection("schematics")}
            className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#8A99AD] hover:text-white transition-colors"
          >
            <Activity className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>SCHEMATICS</span>
          </button>

          <button
            onClick={() => scrollToSection("governance")}
            className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#8A99AD] hover:text-white transition-colors"
          >
            <Shield className="w-3.5 h-3.5 text-[#0052FF]" />
            <span>HITL GOVERNANCE</span>
          </button>

          <button
            onClick={() => scrollToSection("telemetry")}
            className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#8A99AD] hover:text-white transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>TELEMETRY</span>
          </button>
        </nav>

        {/* Right: Telemetry Live Status Pill & CTA */}
        <div className="flex items-center gap-4">
          {/* Live Telemetry Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded bg-[#141923] border border-[#1F2633]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D2FF]"></span>
            </span>
            <span className="text-[11px] font-mono tracking-wider text-[#00D2FF]">
              PROD // &lt;14.2MS
            </span>
          </div>

          {/* Primary CTA: Smooth Scrolls to Intake Engine */}
          <button
            onClick={() => scrollToSection("brief-intake")}
            className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded bg-[#0052FF] text-white text-xs font-mono font-semibold tracking-wider hover:bg-[#0043d1] transition-all duration-200 shadow-[0_0_20px_rgba(0,82,255,0.4)] hover:shadow-[0_0_30px_rgba(0,82,255,0.6)] active:scale-[0.98]"
          >
            <span>REQUEST 48-HOUR BRIEF</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded bg-[#141923] border border-[#1F2633] text-[#8A99AD] hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0D12]/98 border-b border-[#1F2633] px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#1F2633]">
            <span className="text-xs font-mono tracking-widest text-[#00D2FF]">
              SYS_NAV // REGION_GLOBAL
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
              <span className="text-[10px] font-mono text-[#8A99AD]">LIVE</span>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("capabilities")}
            className="flex items-center justify-between py-2 text-sm font-mono tracking-wider text-[#8A99AD] hover:text-white"
          >
            <span>01 // CAPABILITIES</span>
            <ArrowRight className="w-4 h-4 text-[#0052FF]" />
          </button>

          <button
            onClick={() => scrollToSection("schematics")}
            className="flex items-center justify-between py-2 text-sm font-mono tracking-wider text-[#8A99AD] hover:text-white"
          >
            <span>02 // SCHEMATICS &amp; TOPOLOGY</span>
            <ArrowRight className="w-4 h-4 text-[#00D2FF]" />
          </button>

          <button
            onClick={() => scrollToSection("governance")}
            className="flex items-center justify-between py-2 text-sm font-mono tracking-wider text-[#8A99AD] hover:text-white"
          >
            <span>03 // HITL GOVERNANCE</span>
            <ArrowRight className="w-4 h-4 text-[#0052FF]" />
          </button>

          <button
            onClick={() => scrollToSection("telemetry")}
            className="flex items-center justify-between py-2 text-sm font-mono tracking-wider text-[#8A99AD] hover:text-white"
          >
            <span>04 // SYSTEMS TELEMETRY</span>
            <ArrowRight className="w-4 h-4 text-[#00D2FF]" />
          </button>

          <div className="pt-4 border-t border-[#1F2633]">
            <button
              onClick={() => scrollToSection("brief-intake")}
              className="w-full py-3 rounded bg-[#0052FF] text-white text-xs font-mono font-semibold tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,82,255,0.4)]"
            >
              <span>REQUEST 48-HOUR ARCHITECTURAL BRIEF</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

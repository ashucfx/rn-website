"use client";

import React, { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import TelemetryBar from "@/components/sections/TelemetryBar";
import Capabilities from "@/components/sections/Capabilities";
import Governance from "@/components/sections/Governance";
import IntakeEngine from "@/components/sections/IntakeEngine";
import Footer from "@/components/navigation/Footer";
import LegalModal, { LegalDocType } from "@/components/legal/LegalModal";
import CookieConsent from "@/components/legal/CookieConsent";

export default function Home() {
  const [legalModalOpen, setLegalModalOpen] = useState<boolean>(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalDocType>("privacy");

  const handleOpenLegal = (tab: LegalDocType) => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0D12] text-white overflow-x-hidden selection:bg-[#0052FF] selection:text-white">
      {/* 01. Navigation Shell */}
      <Navbar />

      {/* 02. Main Architectural Narrative */}
      <main className="flex-grow">
        {/* Hero Section with 3D Monolithic RN Kinetic Engine */}
        <Hero />

        {/* Quantitative Proof Telemetry Bar */}
        <TelemetryBar />

        {/* 3 Core Service Buckets & Interactive Architectural Schematics */}
        <Capabilities />

        {/* Deterministic HITL Governance & War Room Session */}
        <Governance />

        {/* Interactive 48-Hour Architectural Brief Terminal */}
        <IntakeEngine />
      </main>

      {/* 03. Institutional Telemetry Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* 04. Cookie & Security Telemetry Consent Enclave */}
      <CookieConsent onOpenLegal={handleOpenLegal} />

      {/* 05. Interactive Legal & Governance Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        initialTab={legalModalTab}
        onClose={() => setLegalModalOpen(false)}
      />
    </div>
  );
}

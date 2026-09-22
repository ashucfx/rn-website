"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ShieldCheck, Lock, FileText, CheckCircle2, Copy, Check } from "lucide-react";

export type LegalDocType = "privacy" | "terms" | "security" | "cookies";

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = "privacy",
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<LegalDocType>(initialTab);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setActiveTab(initialTab));
    return () => cancelAnimationFrame(frame);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#0A0D12]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[88vh] bg-[#141923] border border-[#1F2633] rounded-xl shadow-2xl flex flex-col overflow-hidden text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-title"
      >
        {/* Modal Window Header */}
        <div className="px-6 py-4 bg-[#0A0D12] border-b border-[#1F2633] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-[#141923] border border-[#1F2633] flex items-center justify-center p-1">
              <Image src="/assets/rn-mark.svg" alt="Ripple Nexus" width={28} height={28} className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span id="legal-title" className="text-sm font-bold text-white tracking-wider font-sans">
                  RIPPLE NEXUS
                </span>
                <span className="text-[10px] font-mono text-[#00D2FF] px-1.5 py-0.5 rounded bg-[#141923] border border-[#1F2633]">
                  LEGAL &amp; COMPLIANCE ENCLAVE
                </span>
              </div>
              <p className="text-[10px] font-mono text-[#8A99AD]">
                GOVERNANCE SPECIFICATION // REVISION {new Date().getFullYear()}.4
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#141923] border border-[#1F2633] text-[#8A99AD] hover:text-white hover:border-[#00D2FF] transition-all"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection Bar */}
        <div className="px-6 bg-[#0A0D12]/50 border-b border-[#1F2633] flex gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab("privacy")}
            className={`py-3 px-3.5 text-xs font-mono whitespace-nowrap border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "privacy"
                ? "border-[#0052FF] text-white font-bold bg-[#141923]/60"
                : "border-transparent text-[#8A99AD] hover:text-white"
            }`}
          >
            <Lock className="w-3.5 h-3.5 text-[#0052FF]" />
            <span>01 // PRIVACY POLICY</span>
          </button>

          <button
            onClick={() => setActiveTab("terms")}
            className={`py-3 px-3.5 text-xs font-mono whitespace-nowrap border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "terms"
                ? "border-[#00D2FF] text-white font-bold bg-[#141923]/60"
                : "border-transparent text-[#8A99AD] hover:text-white"
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>02 // TERMS OF ENGAGEMENT</span>
          </button>

          <button
            onClick={() => setActiveTab("security")}
            className={`py-3 px-3.5 text-xs font-mono whitespace-nowrap border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "security"
                ? "border-[#0052FF] text-white font-bold bg-[#141923]/60"
                : "border-transparent text-[#8A99AD] hover:text-white"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#0052FF]" />
            <span>03 // SECURITY &amp; SOC-2 POSTURE</span>
          </button>

          <button
            onClick={() => setActiveTab("cookies")}
            className={`py-3 px-3.5 text-xs font-mono whitespace-nowrap border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "cookies"
                ? "border-[#00D2FF] text-white font-bold bg-[#141923]/60"
                : "border-transparent text-[#8A99AD] hover:text-white"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>04 // COOKIE &amp; TELEMETRY POLICY</span>
          </button>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-[#8A99AD] leading-relaxed flex-grow">
          {activeTab === "privacy" && (
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-[#0A0D12] border border-[#1F2633] space-y-2">
                <div className="text-[11px] font-mono text-[#00D2FF] font-bold">
                  ZERO THIRD-PARTY DATA MONETIZATION POLICY
                </div>
                <p className="text-white text-xs">
                  Ripple Nexus operates under a strict air-gapped data custody model. We do not sell,
                  rent, or monetize client data, metadata, or proprietary system telemetry under any
                  circumstances.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-2 font-mono uppercase tracking-wider">
                  1. Information We Collect
                </h4>
                <p className="mb-2">
                  When you submit an architectural brief via our Engagement Terminal, we collect
                  strictly technical parameters required to synthesize your 48-hour specification:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2 font-mono text-[11px]">
                  <li>Corporate entity and designated lead contact email</li>
                  <li>Architecture domains (SaaS backbones, vector RAG, Kubernetes VPC)</li>
                  <li>Target throughput parameters and compliance regimes (SOC 2, HIPAA, FIPS)</li>
                  <li>Technical system objective descriptions and bottleneck constraints</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-2 font-mono uppercase tracking-wider">
                  2. AI Model Training Prohibition
                </h4>
                <p>
                  Zero customer code, database schemas, or brief submissions are ever ingested into
                  public language models or used to train third-party foundation models. All AI
                  infrastructure provisioned for clients resides exclusively inside the client&apos;s
                  private VPC with dedicated KMS encryption keys.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-2 font-mono uppercase tracking-wider">
                  3. Data Retention &amp; Cryptographic Erasure
                </h4>
                <p>
                  You retain the absolute legal right to demand complete cryptographic deletion of
                  your architectural brief and associated communication logs at any time by
                  contacting our Security Enclave directly at{" "}
                  <a href="mailto:info@theripplenexus.com" className="text-[#00D2FF] hover:underline font-mono">
                    info@theripplenexus.com
                  </a>.
                </p>
              </div>
            </div>
          )}

          {activeTab === "terms" && (
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-[#0A0D12] border border-[#1F2633] space-y-2">
                <div className="text-[11px] font-mono text-[#0052FF] font-bold">
                  100% UNCONDITIONAL INTELLECTUAL PROPERTY TRANSFER
                </div>
                <p className="text-white text-xs">
                  Upon completion of engineering milestones, all deliverables (TypeScript source
                  code, Docker containers, Kubernetes manifests, and Terraform scripts) become the
                  100% exclusive intellectual property of the client.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-2 font-mono uppercase tracking-wider">
                  1. 48-Hour Written Architectural Brief Commitment
                </h4>
                <p>
                  Submissions through the intake terminal trigger a binding 48-hour turnaround SLA.
                  Ripple Nexus delivers an actionable 8-to-12 page technical synthesis outlining
                  event mesh topologies, database schemas, latency projections, and infrastructure
                  cost modeling.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-2 font-mono uppercase tracking-wider">
                  2. Mutual Non-Disclosure Agreement (NDA)
                </h4>
                <p>
                  Every engagement is automatically protected under standard bilateral enterprise
                  NDA terms. All disclosed systems architectures, throughput metrics, and business
                  objectives remain strictly confidential in perpetuity. For formal executed bilateral agreements, email{" "}
                  <a href="mailto:info@theripplenexus.com" className="text-[#00D2FF] hover:underline font-mono">
                    info@theripplenexus.com
                  </a>.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-2 font-mono uppercase tracking-wider">
                  3. Direct Senior Engineering Guarantee
                </h4>
                <p>
                  Ripple Nexus enforces a zero account-manager policy. All technical execution,
                  architectural reviews, and war room sessions are conducted exclusively by
                  Principal Distributed Systems and AI Infrastructure Architects.
                </p>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-[#0A0D12] border border-[#00D2FF] space-y-2">
                <div className="text-[11px] font-mono text-[#00D2FF] font-bold">
                  FIPS 140-2 LEVEL 3 HARDWARE SECURITY MODULE (HSM) CUSTODY
                </div>
                <p className="text-white text-xs">
                  Our systems enforce Bring-Your-Own-Key (BYOK) hardware isolation. Client encryption
                  keys reside inside dedicated HSM enclaves with zero vendor access or recovery
                  backdoors.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-2 font-mono uppercase tracking-wider">
                  1. SOC 2 Type II &amp; HIPAA Compliance Controls
                </h4>
                <p>
                  Our multi-tenant SaaS foundations are engineered to pass SOC 2 Type II and HIPAA
                  security audits out-of-the-box, featuring immutable Merkle audit ledgers, strict
                  row-level database partitioning, and automated vulnerability scanning.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-2 font-mono uppercase tracking-wider">
                  2. In-Transit &amp; At-Rest Cryptography
                </h4>
                <p>
                  All cluster traffic is secured via mTLS 1.3 with automated certificate rotation.
                  All persistent storage volumes and vector memory clusters are encrypted with
                  AES-256-GCM. For compliance attestations or vendor security audits, contact{" "}
                  <a href="mailto:info@theripplenexus.com" className="text-[#00D2FF] hover:underline font-mono">
                    info@theripplenexus.com
                  </a>.
                </p>
              </div>
            </div>
          )}

          {activeTab === "cookies" && (
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-[#0A0D12] border border-[#1F2633] space-y-2">
                <div className="text-[11px] font-mono text-[#00D2FF] font-bold">
                  ZERO ADVERTISING TRACKERS &amp; ESSENTIAL TELEMETRY ONLY
                </div>
                <p className="text-white text-xs">
                  Ripple Nexus utilizes strictly essential session cookies and sub-millisecond
                  performance telemetry. We do not embed ad-retargeting pixels, social trackers, or
                  third-party fingerprinting scripts.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-2 font-mono uppercase tracking-wider">
                  1. Essential Session Cookies
                </h4>
                <p>
                  Used solely to maintain security enclaves, prevent CSRF attacks, and preserve intake
                  form state during brief specification sessions.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-2 font-mono uppercase tracking-wider">
                  2. Performance &amp; WebGL Telemetry
                </h4>
                <p>
                  Anonymous frame-rate and shader capability metrics collected strictly to optimize
                  the 3D kinetic engine and scale particle budgets across mobile and desktop devices. For privacy questions, reach us at{" "}
                  <a href="mailto:info@theripplenexus.com" className="text-[#00D2FF] hover:underline font-mono">
                    info@theripplenexus.com
                  </a>.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-[#0A0D12] border-t border-[#1F2633] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#8A99AD]">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
            <span>AUTHENTICATED LEGAL ENCLAVE // RIPPLE NEXUS</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => copyToClipboard("https://theripplenexus.com/legal")}
              className="px-3 py-1.5 rounded bg-[#141923] border border-[#1F2633] hover:border-[#00D2FF] text-[#8A99AD] hover:text-white flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#00D2FF]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "COPIED" : "COPY LINK"}</span>
            </button>

            <button
              onClick={onClose}
              className="px-5 py-1.5 rounded bg-[#0052FF] text-white font-semibold hover:bg-[#0043d1] transition-colors"
            >
              ACKNOWLEDGE &amp; CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;

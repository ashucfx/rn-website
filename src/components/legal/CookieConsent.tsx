"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Lock, Check, FileText } from "lucide-react";
import { LegalDocType } from "./LegalModal";

interface CookieConsentProps {
  onOpenLegal: (tab: LegalDocType) => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenLegal }) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has already set cookie preference
    const consent = localStorage.getItem("rn_cookie_consent_v1");
    if (!consent) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("rn_cookie_consent_v1", "all");
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem("rn_cookie_consent_v1", "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-xl z-40 bg-[#141923]/95 backdrop-blur-md border border-[#1F2633] rounded-xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-bottom-5 duration-300"
      aria-label="Cookie and telemetry preferences"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-[#0A0D12] border border-[#00D2FF] flex items-center justify-center text-[#00D2FF]">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-mono font-bold text-white tracking-wider">
            SECURITY TELEMETRY &amp; COOKIE ENCLAVE
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#00D2FF] px-1.5 py-0.5 rounded bg-[#0A0D12] border border-[#1F2633]">
          ZERO AD TRACKERS
        </span>
      </div>

      <p className="text-xs text-[#8A99AD] leading-relaxed mb-4">
        Ripple Nexus utilizes essential session encryption keys and anonymous 60fps WebGL rendering
        telemetry to ensure sub-25ms response times. We never monetize customer data or train third-party
        AI models on your sessions.
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#1F2633]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenLegal("cookies")}
            className="text-[11px] font-mono text-[#8A99AD] hover:text-[#00D2FF] flex items-center gap-1 transition-colors"
          >
            <FileText className="w-3 h-3 text-[#00D2FF]" />
            <span>COOKIE POLICY</span>
          </button>
          <span className="text-[#1F2633] font-mono">|</span>
          <button
            onClick={() => onOpenLegal("privacy")}
            className="text-[11px] font-mono text-[#8A99AD] hover:text-[#0052FF] flex items-center gap-1 transition-colors"
          >
            <Lock className="w-3 h-3 text-[#0052FF]" />
            <span>PRIVACY</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleEssentialOnly}
            className="px-3.5 py-2 rounded bg-[#0A0D12] border border-[#1F2633] hover:border-[#00D2FF] text-[11px] font-mono text-[#8A99AD] hover:text-white transition-colors"
          >
            ESSENTIAL ONLY
          </button>

          <button
            onClick={handleAcceptAll}
            className="px-4 py-2 rounded bg-[#0052FF] hover:bg-[#0043d1] text-[11px] font-mono font-semibold text-white flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,82,255,0.4)] active:scale-[0.98]"
          >
            <Check className="w-3.5 h-3.5" />
            <span>ALLOW ALL</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CookieConsent;

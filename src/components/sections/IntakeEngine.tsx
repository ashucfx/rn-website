"use client";

import React, { useState, useId } from "react";
import { Terminal, Send, CheckCircle2, Shield, Lock, FileCode, Clock, RefreshCw } from "lucide-react";

interface FormData {
  organization: string;
  leadEmail: string;
  domain: string;
  throughput: string;
  compliance: string;
  coreObjective: string;
}

const INITIAL_FORM: FormData = {
  organization: "Acme Enterprises",
  leadEmail: "cto@acme.corp",
  domain: "multi_tenant_saas",
  throughput: "high_throughput_500k",
  compliance: "soc2_hipaa",
  coreObjective: "Architect sub-25ms event mesh with private vector RAG and zero cross-tenant contamination.",
};

export const IntakeEngine: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [briefId, setBriefId] = useState<string>("");

  const orgId = useId();
  const emailId = useId();
  const domainId = useId();
  const throughputId = useId();
  const complianceId = useId();
  const objectiveId = useId();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = "RN-BRIEF-" + Math.floor(100000 + Math.random() * 900000);
      setBriefId(generatedId);
      setSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData(INITIAL_FORM);
  };

  const generatedJson = JSON.stringify(
    {
      $schema: "urn:nexus:spec:v4:architectural_brief",
      timestamp: new Date().toISOString(),
      entity: {
        organization: formData.organization || "ANONYMOUS_TENANT",
        lead_contact: formData.leadEmail || "PENDING_VERIFICATION",
      },
      specification: {
        target_domain: formData.domain,
        target_throughput: formData.throughput,
        compliance_regime: formData.compliance,
        problem_statement: formData.coreObjective,
      },
      sla_guarantee: {
        written_brief_turnaround: "48_HOURS",
        ip_ownership_transfer: "100_PERCENT",
        nda_auto_execution: "MUTUAL_STRICT",
      },
      telemetry_state: {
        schema_valid: true,
        enclave_ready: true,
        verification_status: "AWAITING_COMMIT",
      },
    },
    null,
    2,
  );

  return (
    <section id="brief-intake" className="relative py-24 bg-[#0A0D12] border-t border-[#1F2633] overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-telemetry-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-radial-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141923] border border-[#1F2633] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest text-[#00D2FF]">
              ENGAGEMENT TERMINAL // 48-HOUR ARCHITECTURAL BRIEF
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            REQUEST YOUR 48-HOUR WRITTEN ARCHITECTURAL BRIEF.
          </h2>
          <p className="text-base text-[#8A99AD] leading-relaxed">
            Submit your technical constraints. Our Principal Systems Architects will review your
            stack and deliver a production-ready, written architecture specification within 48 hours.
            Zero commitment. 100% confidential.
          </p>
        </div>

        {/* Split Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Intake Parameters Form */}
          <div className="lg:col-span-6 bg-[#141923] border border-[#1F2633] rounded-xl p-6 sm:p-8 shadow-xl">
            {submitted ? (
              /* Success Receipt State */
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#0A0D12] border border-[#00D2FF] flex items-center justify-center text-[#00D2FF] mb-6 shadow-[0_0_25px_rgba(0,210,255,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="text-xs font-mono text-[#00D2FF] tracking-widest uppercase mb-2">
                  // BRIEF INGESTION CONFIRMED
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  Architectural Synthesis Dispatched
                </h3>

                <p className="text-xs text-[#8A99AD] max-w-md mb-6 leading-relaxed">
                  Your requirements have been cryptographically sealed and dispatched directly to
                  our Principal Systems Architecture team.
                </p>

                <div className="w-full max-w-md p-4 rounded bg-[#0A0D12] border border-[#1F2633] text-left space-y-2 mb-6 font-mono text-xs">
                  <div className="flex justify-between text-[#8A99AD]">
                    <span>RECORD_ID:</span>
                    <span className="text-[#00D2FF] font-bold">{briefId}</span>
                  </div>
                  <div className="flex justify-between text-[#8A99AD]">
                    <span>ORGANIZATION:</span>
                    <span className="text-white">{formData.organization}</span>
                  </div>
                  <div className="flex justify-between text-[#8A99AD]">
                    <span>DELIVERY SLA:</span>
                    <span className="text-white font-bold">48 HOURS // COUNTDOWN ACTIVE</span>
                  </div>
                  <div className="flex justify-between text-[#8A99AD]">
                    <span>HANDOVER CLAUSE:</span>
                    <span className="text-[#00D2FF]">100% IP &amp; SOURCE OWNERSHIP</span>
                  </div>
                </div>

                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded bg-[#1A212E] border border-[#1F2633] hover:border-[#00D2FF] text-xs font-mono text-[#8A99AD] hover:text-white flex items-center gap-2 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>INITIALIZE NEW SPECIFICATION</span>
                </button>
              </div>
            ) : (
              /* Active Input Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#1F2633]">
                  <span className="text-xs font-mono text-[#00D2FF] tracking-wider uppercase">
                    INPUT PARAMETERS
                  </span>
                  <span className="text-[10px] font-mono text-[#8A99AD]">
                    CONFIDENTIAL // STRICT NDA
                  </span>
                </div>

                {/* Organization & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor={orgId}
                      className="block text-xs font-mono text-[#8A99AD] uppercase tracking-wider mb-2"
                    >
                      Organization Name *
                    </label>
                    <input
                      id={orgId}
                      type="text"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="e.g. Palantir Technologies"
                      className="w-full px-3.5 py-2.5 rounded bg-[#0A0D12] border border-[#1F2633] text-sm text-white font-mono focus:border-[#0052FF] focus:outline-none focus:ring-1 focus:ring-[#0052FF] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor={emailId}
                      className="block text-xs font-mono text-[#8A99AD] uppercase tracking-wider mb-2"
                    >
                      Executive / Tech Lead Email *
                    </label>
                    <input
                      id={emailId}
                      type="email"
                      name="leadEmail"
                      required
                      value={formData.leadEmail}
                      onChange={handleInputChange}
                      placeholder="cto@organization.com"
                      className="w-full px-3.5 py-2.5 rounded bg-[#0A0D12] border border-[#1F2633] text-sm text-white font-mono focus:border-[#0052FF] focus:outline-none focus:ring-1 focus:ring-[#0052FF] transition-all"
                    />
                  </div>
                </div>

                {/* Target Architecture Domain */}
                <div>
                  <label
                    htmlFor={domainId}
                    className="block text-xs font-mono text-[#8A99AD] uppercase tracking-wider mb-2"
                  >
                    Target Architectural Domain *
                  </label>
                  <select
                    id={domainId}
                    name="domain"
                    value={formData.domain}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded bg-[#0A0D12] border border-[#1F2633] text-sm text-white font-mono focus:border-[#0052FF] focus:outline-none focus:ring-1 focus:ring-[#0052FF] transition-all"
                  >
                    <option value="multi_tenant_saas">
                      Bucket 01: Multi-Tenant SaaS Backbone (Isolation + RBAC + DB Partitioning)
                    </option>
                    <option value="deterministic_ai_rag">
                      Bucket 02: Deterministic AI &amp; Private Vector RAG (Zero Leakage + HITL)
                    </option>
                    <option value="cloud_k8s_infra">
                      Bucket 03: Multi-Region Kubernetes &amp; Cloud DevOps (Active-Active VPC)
                    </option>
                    <option value="full_platform_modernization">
                      Complete Platform Synthesis (SaaS Backbone + Private AI Core)
                    </option>
                  </select>
                </div>

                {/* Throughput & Compliance */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor={throughputId}
                      className="block text-xs font-mono text-[#8A99AD] uppercase tracking-wider mb-2"
                    >
                      Target Scale / Concurrency
                    </label>
                    <select
                      id={throughputId}
                      name="throughput"
                      value={formData.throughput}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded bg-[#0A0D12] border border-[#1F2633] text-sm text-white font-mono focus:border-[#0052FF] focus:outline-none focus:ring-1 focus:ring-[#0052FF] transition-all"
                    >
                      <option value="sub_50k_req">High Growth (&lt; 50,000 req/sec)</option>
                      <option value="high_throughput_500k">Enterprise (&gt; 500,000 req/sec)</option>
                      <option value="hyperscale_1m">Hyperscale (&gt; 1,000,000 req/sec)</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor={complianceId}
                      className="block text-xs font-mono text-[#8A99AD] uppercase tracking-wider mb-2"
                    >
                      Compliance &amp; Security Regime
                    </label>
                    <select
                      id={complianceId}
                      name="compliance"
                      value={formData.compliance}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded bg-[#0A0D12] border border-[#1F2633] text-sm text-white font-mono focus:border-[#0052FF] focus:outline-none focus:ring-1 focus:ring-[#0052FF] transition-all"
                    >
                      <option value="soc2_hipaa">SOC 2 Type II + HIPAA Ready</option>
                      <option value="fips_140_hsm">FIPS 140-2 Level 3 Hardware HSM</option>
                      <option value="iso27001_pci">ISO 27001 + PCI-DSS Strict</option>
                      <option value="standard_enterprise">Standard Enterprise Zero-Trust</option>
                    </select>
                  </div>
                </div>

                {/* Core Objective */}
                <div>
                  <label
                    htmlFor={objectiveId}
                    className="block text-xs font-mono text-[#8A99AD] uppercase tracking-wider mb-2"
                  >
                    Core Objective &amp; Bottlenecks
                  </label>
                  <textarea
                    id={objectiveId}
                    name="coreObjective"
                    rows={3}
                    required
                    value={formData.coreObjective}
                    onChange={handleInputChange}
                    placeholder="Describe your current system latency bottlenecks, compliance requirements, or target platform vision..."
                    className="w-full px-3.5 py-2.5 rounded bg-[#0A0D12] border border-[#1F2633] text-sm text-white font-mono focus:border-[#0052FF] focus:outline-none focus:ring-1 focus:ring-[#0052FF] transition-all resize-none"
                  />
                </div>

                {/* Trust Metrics Row */}
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#8A99AD]">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#0052FF]" />
                    <span>MUTUAL NDA INCLUDED</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#00D2FF]" />
                    <span>48-HOUR GUARANTEED SLA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#0052FF]" />
                    <span>100% IP HANDOVER</span>
                  </div>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded bg-[#0052FF] hover:bg-[#0043d1] text-white text-xs font-mono font-bold tracking-wider flex items-center justify-center gap-3 transition-all duration-200 shadow-[0_0_25px_rgba(0,82,255,0.4)] disabled:opacity-60 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-white" />
                      <span>SIGNING &amp; DISPATCHING BRIEF PAYLOAD...</span>
                    </>
                  ) : (
                    <>
                      <span>TRANSMIT &amp; EXECUTE 48-HOUR BRIEF</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Live Terminal Schema Validator */}
          <div className="lg:col-span-6 bg-[#0A0D12] border border-[#1F2633] rounded-xl overflow-hidden shadow-2xl flex flex-col">
            {/* Terminal Top Window Bar */}
            <div className="bg-[#141923] px-4 py-3 border-b border-[#1F2633] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-xs font-mono text-[#8A99AD]">
                  nexus-schema-validator --strict --json
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping" />
                <span className="text-[10px] font-mono text-[#00D2FF]">SYNTAX: VALID</span>
              </div>
            </div>

            {/* Code Output Window */}
            <div className="p-4 sm:p-6 overflow-x-auto text-xs font-mono leading-relaxed bg-[#0A0D12] min-h-[420px]">
              <div className="text-[11px] text-[#8A99AD] mb-3 pb-2 border-b border-[#1F2633]/60 flex items-center justify-between">
                <span>// REAL-TIME PAYLOAD GENERATION BUFFER</span>
                <span className="text-[#00D2FF]">BYTES: {generatedJson.length}</span>
              </div>

              <pre className="text-[#8A99AD]">
                <code>
                  {generatedJson.split("\n").map((line, i) => {
                    const isKey = line.includes('":');
                    return (
                      <div key={i} className="hover:bg-[#141923]/40 py-0.5 px-1 rounded">
                        <span className="inline-block w-8 text-[#1F2633] select-none text-[10px]">
                          {i + 1}
                        </span>
                        {isKey ? (
                          <>
                            <span className="text-[#00D2FF]">
                              {line.substring(0, line.indexOf('":') + 1)}
                            </span>
                            <span className="text-[#FFFFFF]">
                              {line.substring(line.indexOf('":') + 1)}
                            </span>
                          </>
                        ) : (
                          <span className="text-[#8A99AD]">{line}</span>
                        )}
                      </div>
                    );
                  })}
                </code>
              </pre>
            </div>

            {/* Bottom Validator Status */}
            <div className="bg-[#141923] p-4 border-t border-[#1F2633] flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-[#8A99AD]">
                <FileCode className="w-4 h-4 text-[#0052FF]" />
                <span>SPEC_VER: v4.1.8-ENTERPRISE</span>
              </div>
              <span className="text-[#00D2FF] font-semibold">200 OK // READY FOR COMMIT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntakeEngine;

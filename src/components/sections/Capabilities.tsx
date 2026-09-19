"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Server, BrainCircuit, CloudCog, CheckCircle2, ArrowRight, Eye } from "lucide-react";

interface SchematicTab {
  id: string;
  title: string;
  badge: string;
  assetPath: string;
  description: string;
  specs: { label: string; value: string }[];
}

const SCHEMATICS: SchematicTab[] = [
  {
    id: "mesh",
    title: "Deterministic Event Mesh",
    badge: "SUB-25MS LATENCY",
    assetPath: "/assets/mesh-hero.svg",
    description:
      "Kafka/NATS distributed pub-sub fabric with strict causal ordering, zero packet loss, and sub-15ms edge dispatch for millions of concurrent state events.",
    specs: [
      { label: "Throughput", value: "480K req/sec" },
      { label: "Lag Guarantee", value: "0.00ms Sync Lag" },
      { label: "Partitioning", value: "Tenant-Hash Partitioned" },
      { label: "Fault Model", value: "Raft Quorum Consensus" },
    ],
  },
  {
    id: "rag",
    title: "Private Vector RAG Pipeline",
    badge: "ZERO DATA LEAKAGE",
    assetPath: "/assets/rag-pipeline.svg",
    description:
      "Enterprise private embeddings and Milvus/Qdrant vector clustering with semantic chunking, cross-reranking, and Human-in-the-Loop deterministic verification gates.",
    specs: [
      { label: "Vector Dimension", value: "1536 Float32" },
      { label: "Inference Latency", value: "4.8ms Embedding" },
      { label: "Model Governance", value: "Air-gapped VPC" },
      { label: "Verification", value: "Dual-Key HITL Pass" },
    ],
  },
  {
    id: "cloud",
    title: "Multi-Tenant VPC & K8s Topology",
    badge: "ACTIVE-ACTIVE HA",
    assetPath: "/assets/cloud-topology.svg",
    description:
      "Global Anycast ingress routed to hardened, tenant-isolated Kubernetes pods with automated multi-region Aurora failover and zero single point of failure.",
    specs: [
      { label: "Target SLA", value: "99.999% Availability" },
      { label: "RPO / RTO", value: "0 RPO / <10s RTO" },
      { label: "Network Mesh", value: "Istio mTLS Strict" },
      { label: "Infrastructure", value: "100% Terraform / Helm" },
    ],
  },
  {
    id: "security",
    title: "Zero-Trust HSM & Cryptographic Ledger",
    badge: "SOC 2 // HIPAA",
    assetPath: "/assets/security-audit.svg",
    description:
      "Dedicated hardware security modules (CloudHSM) with Bring-Your-Own-Key custody, automated 90-day rotation, and append-only Merkle tree audit logs.",
    specs: [
      { label: "Key Custody", value: "Dedicated CloudHSM" },
      { label: "Encryption", value: "AES-256-GCM + RSA-4096" },
      { label: "Audit Storage", value: "S3 Object Lock Merkle" },
      { label: "Compliance", value: "FIPS 140-2 Level 3" },
    ],
  },
];

export const Capabilities: React.FC = () => {
  const [activeSchematic, setActiveSchematic] = useState<string>("mesh");

  const selectedSchematic =
    SCHEMATICS.find((s) => s.id === activeSchematic) || SCHEMATICS[0];

  const scrollToBrief = () => {
    const el = document.getElementById("brief-intake");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="capabilities" className="relative py-24 bg-[#0A0D12] overflow-hidden">
      {/* Grid Backing */}
      <div className="absolute inset-0 bg-telemetry-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141923] border border-[#1F2633] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
            <span className="text-[11px] font-mono tracking-widest text-[#00D2FF]">
              SYSTEM CAPABILITIES // ARCHITECTURAL DOMAINS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            BUILT FOR ENTERPRISE RESILIENCE AND DETERMINISTIC THROUGHPUT.
          </h2>
          <p className="text-base text-[#8A99AD] leading-relaxed">
            We do not build generic prototypes. We engineer mission-critical systems designed for
            tens of thousands of concurrent tenants, rigorous compliance, and zero downtime.
          </p>
        </div>

        {/* The 3 Core Service Buckets */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {/* Bucket 01: Multi-Tenant SaaS Backbones */}
          <div className="p-8 rounded-xl bg-[#141923] border border-[#1F2633] hover:border-[#0052FF] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#0A0D12] border border-[#1F2633] flex items-center justify-center text-[#0052FF] group-hover:text-[#00D2FF] transition-colors">
                  <Server className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF]">
                  BUCKET // 01
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                Multi-Tenant SaaS Backbones
              </h3>

              <p className="text-xs text-[#8A99AD] leading-relaxed mb-6">
                High-throughput distributed backends designed for extreme tenant density,
                cryptographic schema separation, and zero cross-tenant query contamination.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2.5 text-xs text-[#8A99AD]">
                  <CheckCircle2 className="w-4 h-4 text-[#0052FF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Strict Tenant Isolation:</strong> Dedicated
                    logical schemas and row-level security (RLS) enforcement.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-[#8A99AD]">
                  <CheckCircle2 className="w-4 h-4 text-[#0052FF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">High-Throughput APIs:</strong> gRPC and GraphQL
                    gateways with distributed token-bucket rate limiting.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-[#8A99AD]">
                  <CheckCircle2 className="w-4 h-4 text-[#0052FF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Granular RBAC &amp; ABAC:</strong> Attribute-based
                    permissions evaluated in &lt;1ms via OPA policy engines.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#1F2633] flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#00D2FF]">LATENCY: &lt;15MS P99</span>
              <button
                onClick={scrollToBrief}
                className="text-xs font-mono text-white group-hover:text-[#00D2FF] flex items-center gap-1.5 transition-colors"
              >
                <span>SPECIFY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bucket 02: Deterministic AI & Vector RAG */}
          <div className="p-8 rounded-xl bg-[#141923] border border-[#1F2633] hover:border-[#00D2FF] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#0A0D12] border border-[#1F2633] flex items-center justify-center text-[#00D2FF] transition-colors">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF]">
                  BUCKET // 02
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                Deterministic AI &amp; Vector RAG
              </h3>

              <p className="text-xs text-[#8A99AD] leading-relaxed mb-6">
                Private, air-gapped retrieval-augmented generation pipelines that guarantee zero
                hallucinations and 100% intellectual property privacy.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2.5 text-xs text-[#8A99AD]">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Zero Data Leakage:</strong> Self-hosted embedding
                    and vector nodes isolated inside your VPC boundary.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-[#8A99AD]">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Hybrid Retrieval &amp; Cross-Rerank:</strong> Dense
                    vector + BM25 sparse fusion for &gt;99% precision recall.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-[#8A99AD]">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">HITL Governance:</strong> Automated deterministic
                    schema guardrails and dual-key verification checkpoints.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#1F2633] flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#00D2FF]">RECALL: 99.4% VERIFIED</span>
              <button
                onClick={scrollToBrief}
                className="text-xs font-mono text-white group-hover:text-[#00D2FF] flex items-center gap-1.5 transition-colors"
              >
                <span>SPECIFY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bucket 03: Cloud & DevOps Infrastructure */}
          <div className="p-8 rounded-xl bg-[#141923] border border-[#1F2633] hover:border-[#0052FF] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#0A0D12] border border-[#1F2633] flex items-center justify-center text-[#0052FF] group-hover:text-[#00D2FF] transition-colors">
                  <CloudCog className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF]">
                  BUCKET // 03
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                Cloud &amp; DevOps Infrastructure
              </h3>

              <p className="text-xs text-[#8A99AD] leading-relaxed mb-6">
                Production-grade multi-region Kubernetes clusters provisioned entirely as
                infrastructure code with automated failover and zero cloud lock-in.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2.5 text-xs text-[#8A99AD]">
                  <CheckCircle2 className="w-4 h-4 text-[#0052FF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Active-Active Multi-Region:</strong> Automated BGP
                    Anycast failover with cross-continental Aurora replication.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-[#8A99AD]">
                  <CheckCircle2 className="w-4 h-4 text-[#0052FF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">100% Terraform &amp; Helm:</strong> Fully documented,
                    version-controlled infrastructure delivered straight to your git repo.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-[#8A99AD]">
                  <CheckCircle2 className="w-4 h-4 text-[#0052FF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Zero-Downtime Deployments:</strong> Blue-green and
                    canary progressive delivery with automated rollback probes.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#1F2633] flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#00D2FF]">SLA: 99.999% HIGH-AVAIL</span>
              <button
                onClick={scrollToBrief}
                className="text-xs font-mono text-white group-hover:text-[#00D2FF] flex items-center gap-1.5 transition-colors"
              >
                <span>SPECIFY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Architectural Schematics Workbench */}
        <div id="schematics" className="pt-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-mono text-[#00D2FF] tracking-widest uppercase mb-2">
                {"// PRODUCTION BLUEPRINTS"}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                ARCHITECTURAL SCHEMATICS &amp; TOPOLOGY
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8A99AD]">
              <Eye className="w-4 h-4 text-[#00D2FF]" />
              <span>INTERACTIVE INSPECTION BENCH</span>
            </div>
          </div>

          {/* Tab Selector Bar */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-[#1F2633] pb-4">
            {SCHEMATICS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSchematic(tab.id)}
                className={`px-4 py-2.5 rounded-t text-xs font-mono tracking-wider transition-all duration-200 flex items-center gap-2.5 border-b-2 ${
                  activeSchematic === tab.id
                    ? "bg-[#141923] text-white border-[#0052FF] shadow-sm"
                    : "bg-transparent text-[#8A99AD] border-transparent hover:text-white hover:bg-[#141923]/40"
                }`}
              >
                <span>{tab.title}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${
                    activeSchematic === tab.id
                      ? "bg-[#0052FF] text-white"
                      : "bg-[#1F2633] text-[#8A99AD]"
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Schematic Display Window */}
          <div className="rounded-xl bg-[#0A0D12] border border-[#1F2633] overflow-hidden shadow-2xl">
            {/* Top Window Telemetry Header */}
            <div className="bg-[#141923] px-6 py-3.5 border-b border-[#1F2633] flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-xs font-mono text-[#8A99AD]">
                  blueprint://{selectedSchematic.id}.spec.svg
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-[#00D2FF]">RESOLUTION: VECTOR // LOSSLESS</span>
                <span className="text-[#8A99AD]">ENCRYPTION: VERIFIED</span>
              </div>
            </div>

            {/* SVG Visual Graphic Display */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[580px] bg-[#0A0D12] flex items-center justify-center p-2 sm:p-4 overflow-hidden">
              <Image
                src={selectedSchematic.assetPath}
                alt={selectedSchematic.title}
                width={1200}
                height={675}
                className="w-full h-full object-contain filter contrast-[1.03]"
              />
            </div>

            {/* Bottom Parameter Specs Grid */}
            <div className="bg-[#141923] p-6 border-t border-[#1F2633] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {selectedSchematic.specs.map((spec, idx) => (
                <div key={idx} className="p-3 rounded bg-[#0A0D12] border border-[#1F2633]">
                  <div className="text-[10px] font-mono text-[#8A99AD] uppercase mb-1">
                    {spec.label}
                  </div>
                  <div className="text-xs font-mono font-bold text-white">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;

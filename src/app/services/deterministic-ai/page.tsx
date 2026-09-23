import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Bot, Cpu, Lock, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "Deterministic AI & Agentic Automation Systems Engineering",
  description:
    "Enterprise private AI infrastructure and hallucination-free vector RAG pipelines. Multi-agent swarms (LangGraph), private VPC deployment, and zero public model training.",
  alternates: {
    canonical: "https://theripplenexus.com/services/deterministic-ai",
  },
};

export default function DeterministicAIPage() {
  return (
    <div className="min-h-screen bg-[#0A0D12] text-white flex flex-col selection:bg-[#0052FF] selection:text-white">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#8A99AD] mb-8">
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>
          <span>/</span>
          <span className="text-[#0052FF]">SERVICES</span>
          <span>/</span>
          <span className="text-[#00D2FF]">DETERMINISTIC AI</span>
        </div>

        {/* Hero Header */}
        <div className="border-b border-[#1F2633] pb-12 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141923] border border-[#1F2633] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
            <span className="text-xs font-mono text-[#00D2FF]">CAPABILITY BUCKET 02 // PRIVATE AI &amp; AGENTIC SYSTEMS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Deterministic AI &amp; Agentic Automation Systems
          </h1>

          <p className="text-lg text-[#8A99AD] leading-relaxed max-w-3xl mb-8">
            Deploy hallucination-free vector RAG systems, autonomous multi-agent pipelines (LangGraph/LlamaIndex), and private on-premise model execution with zero data leakage to public foundation models.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/#brief-intake"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#0052FF] hover:bg-[#0043d1] text-white font-mono text-xs font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(0,82,255,0.4)]"
            >
              <span>SUBMIT 48-HOUR ARCHITECTURAL BRIEF</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Technical Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-[#141923] border border-[#1F2633] space-y-4">
            <Cpu className="w-6 h-6 text-[#00D2FF]" />
            <h3 className="text-base font-bold font-mono text-white">Deterministic RAG &amp; Citations</h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              Hybrid vector/keyword search with cross-encoder re-ranking and deterministic strict JSON output schemas.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141923] border border-[#1F2633] space-y-4">
            <Bot className="w-6 h-6 text-[#0052FF]" />
            <h3 className="text-base font-bold font-mono text-white">Autonomous Agentic Swarms</h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              State-machine coordinated agent swarms (LangGraph) with Human-in-the-Loop approval checkpoints for mission-critical operations.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141923] border border-[#1F2633] space-y-4">
            <Lock className="w-6 h-6 text-[#00D2FF]" />
            <h3 className="text-base font-bold font-mono text-white">Zero-Retention Private VPC</h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              Self-hosted model endpoints on AWS Bedrock/vLLM with customer-managed KMS keys. Zero public model ingestion.
            </p>
          </div>
        </div>

        {/* SLAs */}
        <div className="p-8 rounded-xl bg-[#141923] border border-[#1F2633] mb-16 space-y-6">
          <h2 className="text-xl font-bold font-mono text-white">{"// PRIVACY & OPERATIONAL SLA GUARANTEES"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-[#8A99AD]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Model Training Retention: Absolute 0%</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Hallucination Rate: &lt; 0.1% Guaranteed by Schema Guard</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Inference Latency: Sub-1.2s P95 Vector Retrieval</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Full Source Code Handover: 100% Client Owned</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

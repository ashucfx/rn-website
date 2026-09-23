import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "Terms of Engagement & 100% IP Transfer Guarantee",
  description:
    "Binding 48-hour architectural brief SLA, bilateral enterprise NDA protection, and 100% unconditional intellectual property handover.",
  alternates: {
    canonical: "https://theripplenexus.com/legal/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0D12] text-white flex flex-col selection:bg-[#0052FF] selection:text-white">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#8A99AD] mb-8">
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>
          <span>/</span>
          <span className="text-[#0052FF]">LEGAL</span>
          <span>/</span>
          <span className="text-[#00D2FF]">TERMS OF ENGAGEMENT</span>
        </div>

        <div className="border-b border-[#1F2633] pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141923] border border-[#1F2633] mb-4">
            <FileText className="w-4 h-4 text-[#0052FF]" />
            <span className="text-xs font-mono text-[#00D2FF]">MASTER TERMS // 100% IP TRANSFER</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Terms of Engagement &amp; IP Transfer
          </h1>
          <p className="text-xs font-mono text-[#8A99AD]">
            LAST AUDITED: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })} {"// RIPPLE NEXUS SYSTEMS"}
          </p>
        </div>

        <div className="space-y-8 text-sm text-[#8A99AD] leading-relaxed">
          <div className="p-5 rounded-lg bg-[#141923] border border-[#0052FF] space-y-2">
            <div className="text-xs font-mono text-[#0052FF] font-bold">
              100% UNCONDITIONAL INTELLECTUAL PROPERTY TRANSFER
            </div>
            <p className="text-white text-xs">
              Upon completion of engineering milestones, all deliverables (TypeScript source code, Docker containers, Kubernetes manifests, and Terraform scripts) become the 100% exclusive intellectual property of the client.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-3 font-mono uppercase tracking-wider">
              1. 48-Hour Written Architectural Brief Commitment
            </h2>
            <p>
              Submissions through the intake terminal trigger a binding 48-hour turnaround SLA. Ripple Nexus delivers an actionable 8-to-12 page technical synthesis outlining event mesh topologies, database schemas, latency projections, and infrastructure cost modeling.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-3 font-mono uppercase tracking-wider">
              2. Mutual Non-Disclosure Agreement (NDA)
            </h2>
            <p>
              Every engagement is automatically protected under standard bilateral enterprise NDA terms. All disclosed systems architectures, throughput metrics, and business objectives remain strictly confidential in perpetuity. For formal executed bilateral agreements, email{" "}
              <a href="mailto:info@theripplenexus.com" className="text-[#00D2FF] hover:underline font-mono">
                info@theripplenexus.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-3 font-mono uppercase tracking-wider">
              3. Direct Senior Engineering Guarantee
            </h2>
            <p>
              Ripple Nexus enforces a zero account-manager policy. All technical execution, architectural reviews, and war room sessions are conducted exclusively by Principal Distributed Systems and AI Infrastructure Architects.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

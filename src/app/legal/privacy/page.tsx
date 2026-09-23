import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy & Zero AI Model Training Enclave",
  description:
    "Ripple Nexus operates under a strict air-gapped data custody model. Zero client code or brief submissions are ever used to train public language models.",
  alternates: {
    canonical: "https://theripplenexus.com/legal/privacy",
  },
};

export default function PrivacyPage() {
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
          <span className="text-[#00D2FF]">PRIVACY POLICY</span>
        </div>

        <div className="border-b border-[#1F2633] pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141923] border border-[#1F2633] mb-4">
            <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
            <span className="text-xs font-mono text-[#00D2FF]">AUTHENTICATED PRIVACY ENCLAVE // ZERO MODEL TRAINING</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Privacy Policy &amp; Data Custody Enclave
          </h1>
          <p className="text-xs font-mono text-[#8A99AD]">
            LAST AUDITED: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })} {"// RIPPLE NEXUS SYSTEMS"}
          </p>
        </div>

        <div className="space-y-8 text-sm text-[#8A99AD] leading-relaxed">
          <div className="p-5 rounded-lg bg-[#141923] border border-[#0052FF] space-y-2">
            <div className="text-xs font-mono text-[#00D2FF] font-bold">
              ZERO THIRD-PARTY DATA MONETIZATION POLICY
            </div>
            <p className="text-white text-xs">
              Ripple Nexus operates under a strict air-gapped data custody model. We do not sell, rent, or monetize client data, metadata, or proprietary system telemetry under any circumstances.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-3 font-mono uppercase tracking-wider">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              When you submit an architectural brief via our Engagement Terminal, we collect strictly technical parameters required to synthesize your 48-hour specification:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2 font-mono text-xs">
              <li>Corporate entity name and designated lead contact email</li>
              <li>Architecture domains (SaaS backbones, vector RAG, Kubernetes VPC)</li>
              <li>Target throughput parameters and compliance regimes (SOC 2, HIPAA, FIPS)</li>
              <li>Technical system objective descriptions and bottleneck constraints</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-3 font-mono uppercase tracking-wider">
              2. AI Model Training Prohibition
            </h2>
            <p>
              Zero customer code, database schemas, or brief submissions are ever ingested into public language models or used to train third-party foundation models. All AI infrastructure provisioned for clients resides exclusively inside the client&apos;s private VPC with dedicated KMS encryption keys.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-3 font-mono uppercase tracking-wider">
              3. Data Retention &amp; Cryptographic Erasure
            </h2>
            <p>
              You retain the absolute legal right to demand complete cryptographic deletion of your architectural brief and associated communication logs at any time by contacting our Security Enclave directly at{" "}
              <a href="mailto:info@theripplenexus.com" className="text-[#00D2FF] hover:underline font-mono">
                info@theripplenexus.com
              </a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

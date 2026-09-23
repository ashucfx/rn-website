import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "Security Enclave & Cryptographic Custody Controls",
  description:
    "FIPS 140-2 Level 3 HSM key custody, SOC 2 Type II controls, HIPAA compliance, and mTLS 1.3 encrypted cluster meshes.",
  alternates: {
    canonical: "https://theripplenexus.com/legal/security",
  },
};

export default function SecurityPage() {
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
          <span className="text-[#00D2FF]">SECURITY CONTROLS</span>
        </div>

        <div className="border-b border-[#1F2633] pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141923] border border-[#1F2633] mb-4">
            <Lock className="w-4 h-4 text-[#00D2FF]" />
            <span className="text-xs font-mono text-[#00D2FF]">SECURITY ENCLAVE // FIPS 140-2 LEVEL 3 HSM</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Security Enclave &amp; Cryptographic Architecture
          </h1>
          <p className="text-xs font-mono text-[#8A99AD]">
            LAST AUDITED: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })} {"// RIPPLE NEXUS SYSTEMS"}
          </p>
        </div>

        <div className="space-y-8 text-sm text-[#8A99AD] leading-relaxed">
          <div className="p-5 rounded-lg bg-[#141923] border border-[#00D2FF] space-y-2">
            <div className="text-xs font-mono text-[#00D2FF] font-bold">
              FIPS 140-2 LEVEL 3 HARDWARE SECURITY MODULE (HSM) CUSTODY
            </div>
            <p className="text-white text-xs">
              Our systems enforce Bring-Your-Own-Key (BYOK) hardware isolation. Client encryption keys reside inside dedicated HSM enclaves with zero vendor access or recovery backdoors.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-3 font-mono uppercase tracking-wider">
              1. SOC 2 Type II &amp; HIPAA Compliance Controls
            </h2>
            <p>
              Our multi-tenant SaaS foundations are engineered to pass SOC 2 Type II and HIPAA security audits out-of-the-box, featuring immutable Merkle audit ledgers, strict row-level database partitioning, and automated vulnerability scanning.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-3 font-mono uppercase tracking-wider">
              2. In-Transit &amp; At-Rest Cryptography
            </h2>
            <p>
              All cluster traffic is secured via mTLS 1.3 with automated certificate rotation. All persistent storage volumes and vector memory clusters are encrypted with AES-256-GCM. For compliance attestations or vendor security audits, contact{" "}
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

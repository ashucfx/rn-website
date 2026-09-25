import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Zap, Database, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "Multi-Tenant Distributed SaaS Platform Engineering",
  description:
    "High-throughput multi-tenant SaaS architecture engineering. Row-level database partitioning, granular RBAC, sub-50ms global latency, and SOC 2 Type II compliance.",
  alternates: {
    canonical: "https://theripplenexus.com/services/multi-tenant-saas",
  },
  openGraph: {
    type: "website",
    url: "https://theripplenexus.com/services/multi-tenant-saas",
    siteName: "Ripple Nexus",
    title: "Multi-Tenant Distributed SaaS Platform Engineering | Ripple Nexus",
    description:
      "High-throughput multi-tenant SaaS architecture. Row-level isolation, granular RBAC, sub-50ms global latency, SOC 2 Type II compliance.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Tenant Distributed SaaS Platform Engineering | Ripple Nexus",
    description:
      "High-throughput multi-tenant SaaS architecture. Row-level isolation, granular RBAC, sub-50ms global latency, SOC 2 Type II compliance.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://theripplenexus.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://theripplenexus.com/#capabilities",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Multi-Tenant Distributed SaaS Platform Engineering",
      item: "https://theripplenexus.com/services/multi-tenant-saas",
    },
  ],
};


export default function MultiTenantSaaSPage() {
  return (
    <div className="min-h-screen bg-[#0A0D12] text-white flex flex-col selection:bg-[#0052FF] selection:text-white">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
        />
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#8A99AD] mb-8">
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>
          <span>/</span>
          <span className="text-[#0052FF]">SERVICES</span>
          <span>/</span>
          <span className="text-[#00D2FF]">MULTI-TENANT SAAS</span>
        </div>

        {/* Hero Header */}
        <div className="border-b border-[#1F2633] pb-12 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141923] border border-[#1F2633] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0052FF]" />
            <span className="text-xs font-mono text-[#00D2FF]">CAPABILITY BUCKET 01 // CORE SAAS BACKBONE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Multi-Tenant Distributed SaaS Platform Engineering
          </h1>

          <p className="text-lg text-[#8A99AD] leading-relaxed max-w-3xl mb-8">
            We architect and build hyperscale SaaS foundations designed to support 500,000+ concurrent requests per second with isolated tenant schemas, zero cross-tenant data leakage, and automated billing ledgers.
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

        {/* Technical Architecture Deep Dive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-[#141923] border border-[#1F2633] space-y-4">
            <Database className="w-6 h-6 text-[#0052FF]" />
            <h3 className="text-base font-bold font-mono text-white">Tenant Isolation &amp; Partitioning</h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              Row-level security (RLS), schema-per-tenant, or dedicated database-per-tier strategies with automated migration pipelines.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141923] border border-[#1F2633] space-y-4">
            <Zap className="w-6 h-6 text-[#00D2FF]" />
            <h3 className="text-base font-bold font-mono text-white">Sub-50ms Global Edge Mesh</h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              Multi-region edge routing, Redis cluster caching, and asynchronous event streams via Kafka/SQS to eliminate UI blocking.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141923] border border-[#1F2633] space-y-4">
            <ShieldCheck className="w-6 h-6 text-[#0052FF]" />
            <h3 className="text-base font-bold font-mono text-white">Enterprise RBAC &amp; Audit Logs</h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              Cryptographically verifiable Merkle audit trails, SAML/OIDC SSO, and granular role-based permissions ready for SOC 2.
            </p>
          </div>
        </div>

        {/* Guarantees & Specifications */}
        <div className="p-8 rounded-xl bg-[#141923] border border-[#1F2633] mb-16 space-y-6">
          <h2 className="text-xl font-bold font-mono text-white">{"// ARCHITECTURAL SPECIFICATIONS & SLAS"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-[#8A99AD]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Target Throughput: &gt;500,000 req/sec</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>P99 Event Latency: &lt;14.2ms</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Compliance: SOC 2 Type II, HIPAA, PCI-DSS</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>IP Handover: 100% Client Ownership</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

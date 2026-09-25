import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Workflow, Zap, Database, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "Autonomous Workflow Automation & n8n Enterprise Systems",
  description:
    "Self-hosted n8n infrastructure, eliminating 90%+ manual workflows, webhook micro-routers, enterprise CRM/ERP sync, and zero per-execution vendor tax.",
  alternates: {
    canonical: "https://theripplenexus.com/services/workflow-automation",
  },
  openGraph: {
    type: "website",
    url: "https://theripplenexus.com/services/workflow-automation",
    siteName: "Ripple Nexus",
    title: "Autonomous Workflow Automation & n8n Enterprise Systems | Ripple Nexus",
    description:
      "Self-hosted n8n, 90%+ manual task elimination, webhook micro-routers, and bi-directional CRM/ERP sync with zero SaaS execution tax.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autonomous Workflow Automation & n8n Enterprise Systems | Ripple Nexus",
    description:
      "Self-hosted n8n, 90%+ manual task elimination, webhook micro-routers, and bi-directional CRM/ERP sync with zero SaaS execution tax.",
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
      name: "Autonomous Workflow Automation & n8n Enterprise Systems",
      item: "https://theripplenexus.com/services/workflow-automation",
    },
  ],
};


export default function WorkflowAutomationPage() {
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
          <span className="text-[#00D2FF]">WORKFLOW AUTOMATION</span>
        </div>

        {/* Hero Header */}
        <div className="border-b border-[#1F2633] pb-12 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141923] border border-[#1F2633] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
            <span className="text-xs font-mono text-[#00D2FF]">CAPABILITY BUCKET 04 // WORKFLOW AUTOMATION &amp; n8n</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Autonomous Workflow Automation &amp; n8n Systems
          </h1>

          <p className="text-lg text-[#8A99AD] leading-relaxed max-w-3xl mb-8">
            Eliminate 90%+ of manual operational friction with dedicated, self-hosted n8n instances, deterministic webhook micro-routers, and real-time CRM/ERP data synchronization—without paying per-execution SaaS taxes.
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
            <Workflow className="w-6 h-6 text-[#00D2FF]" />
            <h3 className="text-base font-bold font-mono text-white">Self-Hosted Dedicated n8n</h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              Air-gapped private instances running on Docker/Kubernetes with zero data transmission to third-party automation vendors.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141923] border border-[#1F2633] space-y-4">
            <Zap className="w-6 h-6 text-[#0052FF]" />
            <h3 className="text-base font-bold font-mono text-white">Webhook Micro-Routers</h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              Sub-10ms event distribution mesh that ingests, validates, and routes thousands of incoming webhooks with dead-letter queue recovery.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141923] border border-[#1F2633] space-y-4">
            <Database className="w-6 h-6 text-[#00D2FF]" />
            <h3 className="text-base font-bold font-mono text-white">Bi-Directional CRM/ERP Sync</h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              Zero-latency synchronization across Stripe, Salesforce, HubSpot, Linear, Slack, and internal database clusters.
            </p>
          </div>
        </div>

        {/* Guarantees */}
        <div className="p-8 rounded-xl bg-[#141923] border border-[#1F2633] mb-16 space-y-6">
          <h2 className="text-xl font-bold font-mono text-white">{"// AUTOMATION ROI & METRICS"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-[#8A99AD]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Manual Task Elimination: 90%+ Reduction</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Per-Execution Cost: $0 (100% Self-Hosted)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Workflow Source Files Handover: 100% JSON Manifests</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Reliability: Automatic Retry &amp; Alert Telemetry</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

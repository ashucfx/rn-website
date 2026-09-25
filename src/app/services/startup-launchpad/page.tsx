import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Rocket, Code2, Zap, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "Startup MVP-to-Scale Launchpad — 3-4 Week Production Release",
  description:
    "Production-grade MVP development for startups and creators in 3–4 weeks. Scalable Next.js, PostgreSQL, Stripe billing, and AI pipelines ready for Series A.",
  alternates: {
    canonical: "https://theripplenexus.com/services/startup-launchpad",
  },
  openGraph: {
    type: "website",
    url: "https://theripplenexus.com/services/startup-launchpad",
    siteName: "Ripple Nexus",
    title: "Startup MVP-to-Scale Launchpad | Ripple Nexus",
    description:
      "From concept to live production in 3–4 weeks. Production-hardened Next.js, PostgreSQL, Stripe billing, and AI-ready architecture for Series A+.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup MVP-to-Scale Launchpad | Ripple Nexus",
    description:
      "From concept to live production in 3–4 weeks. Production-hardened Next.js, PostgreSQL, Stripe billing, and AI-ready architecture for Series A+.",
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
      name: "Startup MVP-to-Scale Launchpad",
      item: "https://theripplenexus.com/services/startup-launchpad",
    },
  ],
};


export default function StartupLaunchpadPage() {
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
          <span className="text-[#00D2FF]">STARTUP LAUNCHPAD</span>
        </div>

        {/* Hero Header */}
        <div className="border-b border-[#1F2633] pb-12 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141923] border border-[#1F2633] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0052FF]" />
            <span className="text-xs font-mono text-[#00D2FF]">CAPABILITY BUCKET 05 // STARTUP MVP LAUNCHPAD</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Startup MVP-to-Scale Launchpad
          </h1>

          <p className="text-lg text-[#8A99AD] leading-relaxed max-w-3xl mb-8">
            From technical concept to live production in 3–4 weeks. We engineer clean, production-hardened MVPs for venture-backed startups and creators with zero throwaway code—built to scale directly to Series A+.
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
            <Rocket className="w-6 h-6 text-[#0052FF]" />
            <h3 className="text-base font-bold font-mono text-white">14-to-28 Day Production Delivery</h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              Rapid, high-intensity sprints with weekly working deployment milestones and full continuous integration.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141923] border border-[#1F2633] space-y-4">
            <Code2 className="w-6 h-6 text-[#00D2FF]" />
            <h3 className="text-base font-bold font-mono text-white">Zero Technical Debt Foundation</h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              Modern TypeScript, Next.js, Tailwind, PostgreSQL, and Prisma/Drizzle architecture that won&apos;t need to be rewritten after fundraising.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141923] border border-[#1F2633] space-y-4">
            <Zap className="w-6 h-6 text-[#0052FF]" />
            <h3 className="text-base font-bold font-mono text-white">Turnkey Billing &amp; Auth</h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              Pre-integrated Stripe Checkout, Customer Portal, multi-tier subscriptions, and enterprise Auth/OAuth2.
            </p>
          </div>
        </div>

        {/* Guarantees */}
        <div className="p-8 rounded-xl bg-[#141923] border border-[#1F2633] mb-16 space-y-6">
          <h2 className="text-xl font-bold font-mono text-white">{"// LAUNCHPAD COMMITMENTS"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-[#8A99AD]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Full Source Code Handover: 100% Client Owned</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Sprint Turnaround: 3 to 4 Weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Direct Architect Access: Zero Account-Manager Lag</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>CI/CD &amp; Infrastructure as Code: Pre-Configured</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

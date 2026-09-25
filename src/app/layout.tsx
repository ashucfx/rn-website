import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0A0D12",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Ripple Nexus | Systems Architecture & Private AI Infrastructure",
    template: "%s | Ripple Nexus",
  },
  description:
    "Enterprise distributed systems engineering for multi-tenant SaaS backbones, deterministic AI pipelines, cloud DevOps, and autonomous workflow automation. Sub-25ms latency, zero data breaches, 100% IP handover, and 48-hour written architectural briefs.",
  keywords: [
    "Ripple Nexus",
    "Systems Architecture",
    "Private AI Infrastructure",
    "Multi-Tenant SaaS Backbone",
    "Deterministic Vector RAG",
    "Autonomous Agentic Workflows",
    "Kubernetes Multi-Cloud DevOps",
    "Self-Hosted n8n Automation",
    "Startup MVP Launchpad",
    "SOC 2 Type II Architecture",
    "HIPAA Ready Infrastructure",
    "Hardware HSM KMS Custody",
    "48-Hour Architectural Brief",
    "Sub-25ms Latency",
  ],
  authors: [{ name: "Ripple Nexus Enterprise Engineering", url: "https://theripplenexus.com" }],
  creator: "Ripple Nexus",
  publisher: "Ripple Nexus",
  metadataBase: new URL("https://theripplenexus.com"),
  alternates: {
    canonical: "https://theripplenexus.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theripplenexus.com",
    siteName: "Ripple Nexus",
    title: "Ripple Nexus | Systems Architecture & Private AI Infrastructure",
    description:
      "Enterprise systems engineering for multi-tenant SaaS backbones and deterministic AI pipelines. Sub-25ms latency, zero breaches, 100% IP handover.",
    // opengraph-image.tsx generates the canonical 1200×630 PNG at build time.
    // Do NOT specify `images` here — an explicit array would shadow that file.
  },
  twitter: {
    card: "summary_large_image",
    title: "Ripple Nexus | Systems Architecture & Private AI Infrastructure",
    description:
      "Enterprise systems engineering for multi-tenant SaaS backbones and deterministic AI pipelines. Sub-25ms latency, zero breaches, 100% IP handover.",
    // twitter-image is inherited from opengraph-image.tsx — no override needed.
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // icon.tsx and apple-icon.tsx generate the canonical PNGs.
  // Listing them here as hints keeps head tags tidy; sizes are injected by Next.js.
  icons: {
    icon: [{ url: "/icon", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RIPPLE NEXUS",
    alternateName: ["Ripple Nexus Systems", "Ripple Nexus Architecture"],
    url: "https://theripplenexus.com",
    logo: "https://theripplenexus.com/assets/rn-mark.svg",
    description:
      "Enterprise distributed systems engineering, multi-tenant SaaS backbones, and private deterministic AI infrastructure.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@theripplenexus.com",
      contactType: "technical engineering support",
      availableLanguage: ["English"],
    },
    knowsAbout: [
      "Distributed Systems Architecture",
      "Private AI Infrastructure",
      "Deterministic Vector RAG",
      "Multi-Region Kubernetes VPC",
      "Hardware HSM KMS Custody",
      "Autonomous Workflow Automation",
      "Multi-Tenant Database Partitioning",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "RIPPLE NEXUS Engineering Domains",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Multi-Tenant Distributed SaaS Platforms",
            description: "High-throughput database isolation, granular RBAC, sub-50ms global latency.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Deterministic AI & Agentic Automation Systems",
            description: "Hallucination-free LLM pipelines, autonomous multi-agent swarms, private VPC deployment.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Enterprise Cloud Architecture & Kubernetes DevOps",
            description: "Zero-trust multi-cloud infrastructure, Terraform IaC, auto-healing container clusters.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Autonomous Workflow Automation & n8n Systems",
            description: "Self-hosted dedicated n8n instances, 90%+ manual process elimination, webhook micro-routers.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Startup MVP-to-Scale Launchpad",
            description: "Production MVP deployment in 3–4 weeks for early-stage founders and creators.",
          },
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RIPPLE NEXUS",
    url: "https://theripplenexus.com",
    description: "Production Systems Architecture & Private AI Infrastructure",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Ripple Nexus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ripple Nexus is an enterprise engineering practice specializing in high-throughput multi-tenant SaaS backbones, deterministic private AI infrastructure, multi-cloud Kubernetes DevOps, and autonomous workflow automation.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 48-Hour Written Architectural Brief Commitment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Upon submitting a brief via the Ripple Nexus engagement terminal, our Principal Distributed Systems Architects synthesize and deliver a comprehensive 8-to-12 page written architecture specification detailing database schemas, event mesh topologies, latency projections, and cost modeling within 48 hours.",
        },
      },
      {
        "@type": "Question",
        name: "Who owns the intellectual property and code produced by Ripple Nexus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clients receive 100% unconditional intellectual property ownership. All deliverables—including TypeScript source code, Dockerfiles, Kubernetes manifests, and Terraform scripts—belong entirely to the client with zero vendor lock-in.",
        },
      },
      {
        "@type": "Question",
        name: "How does Ripple Nexus prevent LLM hallucinations and data leakage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ripple Nexus deploys deterministic vector RAG pipelines with private VPC model deployments, strict schema validation, and Human-in-the-Loop (HITL) checkpoints. Zero customer code or data is ever used to train public foundation models.",
        },
      },
      {
        "@type": "Question",
        name: "What compliance regimes are supported out of the box?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Architectures are engineered to satisfy SOC 2 Type II, HIPAA, ISO 27001, PCI-DSS, and FIPS 140-2 Level 3 Hardware Security Module (HSM) key custody.",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
          />
        ))}
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0A0D12] text-white selection:bg-[#0052FF] selection:text-white min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

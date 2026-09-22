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
  title: "Ripple Nexus | Production Systems Architecture & Private AI Infrastructure",
  description:
    "We engineer multi-tenant SaaS backbones and private AI infrastructure. Deterministic pipelines, sub-25ms latency, zero data breaches, and 100% intellectual property ownership.",
  keywords: [
    "Systems Architecture",
    "Private AI Infrastructure",
    "Multi-Tenant SaaS",
    "Deterministic RAG",
    "Kubernetes VPC",
    "High Throughput",
    "Hardware HSM",
    "Sub-25ms Latency",
  ],
  authors: [{ name: "Ripple Nexus Enterprise Engineering" }],
  creator: "Ripple Nexus",
  publisher: "Ripple Nexus",
  metadataBase: new URL("https://theripplenexus.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theripplenexus.com",
    siteName: "Ripple Nexus Enterprise Platform",
    title: "Ripple Nexus | Production Systems & Private AI Infrastructure",
    description:
      "Enterprise systems engineering for multi-tenant SaaS backbones and deterministic AI pipelines. Sub-25ms latency, zero breaches, 100% IP handover.",
    images: [
      {
        url: "/assets/rn-lockup-horizontal.svg",
        width: 1100,
        height: 240,
        alt: "Ripple Nexus Corporate Lockup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ripple Nexus | Production Systems & Private AI Infrastructure",
    description:
      "Enterprise systems engineering for multi-tenant SaaS backbones and deterministic AI pipelines. Sub-25ms latency, zero breaches, 100% IP handover.",
    images: ["/assets/rn-lockup-horizontal.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/rn-mark.svg",
    shortcut: "/assets/rn-mark.svg",
    apple: "/assets/rn-mark.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ripple Nexus",
  url: "https://theripplenexus.com",
  logo: "https://theripplenexus.com/assets/rn-mark.svg",
  description:
    "Enterprise distributed systems engineering, multi-tenant SaaS backbones, and private deterministic AI infrastructure.",
  knowsAbout: [
    "Distributed Systems Architecture",
    "Private AI Infrastructure",
    "Deterministic Vector RAG",
    "Multi-Region Kubernetes VPC",
    "Hardware HSM KMS Custody",
  ],
  offers: {
    "@type": "Offer",
    name: "48-Hour Written Architectural Brief",
    description:
      "Comprehensive actionable systems architecture specification delivered within 48 hours under mutual enterprise NDA.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/rn-mark.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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

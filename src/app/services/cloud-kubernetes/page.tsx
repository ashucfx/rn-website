import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Cloud, Server, Shield, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "Enterprise Cloud Architecture & Kubernetes DevOps",
  description:
    "Zero-trust multi-cloud infrastructure, Terraform / OpenTofu IaC, active-active multi-region Kubernetes clusters, and automated blue/green CI/CD pipelines.",
  alternates: {
    canonical: "https://theripplenexus.com/services/cloud-kubernetes",
  },
};

export default function CloudKubernetesPage() {
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
          <span className="text-[#00D2FF]">CLOUD &amp; KUBERNETES</span>
        </div>

        {/* Hero Header */}
        <div className="border-b border-[#1F2633] pb-12 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141923] border border-[#1F2633] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0052FF]" />
            <span className="text-xs font-mono text-[#00D2FF]">CAPABILITY BUCKET 03 // CLOUD &amp; DEVOPS INFRASTRUCTURE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Enterprise Cloud Architecture &amp; Kubernetes DevOps
          </h1>

          <p className="text-lg text-[#8A99AD] leading-relaxed max-w-3xl mb-8">
            Build resilient, multi-cloud topologies across AWS and GCP with zero-trust network boundaries, immutable Terraform IaC, auto-healing container clusters, and sub-minute disaster recovery.
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
            <Cloud className="w-6 h-6 text-[#0052FF]" />
            <h3 className="text-base font-bold font-mono text-white">Multi-Cloud VPC Topology</h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              Air-gapped private subnets, transit gateways, and automated multi-region failover across AWS us-east-1 / eu-west-1.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141923] border border-[#1F2633] space-y-4">
            <Server className="w-6 h-6 text-[#00D2FF]" />
            <h3 className="text-base font-bold font-mono text-white">Kubernetes &amp; GitOps</h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              EKS/GKE cluster meshes managed via ArgoCD and Helm charts with auto-scaling horizontal pod autoscalers (HPA).
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141923] border border-[#1F2633] space-y-4">
            <Shield className="w-6 h-6 text-[#0052FF]" />
            <h3 className="text-base font-bold font-mono text-white">Zero-Trust Security Mesh</h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              mTLS 1.3 inter-service encryption, automated HashiCorp Vault secrets injection, and AWS KMS hardware key protection.
            </p>
          </div>
        </div>

        {/* Guarantees */}
        <div className="p-8 rounded-xl bg-[#141923] border border-[#1F2633] mb-16 space-y-6">
          <h2 className="text-xl font-bold font-mono text-white">{"// INFRASTRUCTURE RELIABILITY METRICS"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-[#8A99AD]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Target Cluster Uptime SLA: 99.99%</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Disaster Recovery RTO / RPO: &lt; 5 Minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Full IaC Manifest Handover: 100% Client Owned</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Zero Vendor Lock-In: Vanilla Kubernetes &amp; Terraform</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

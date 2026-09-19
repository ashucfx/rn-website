"use client";

import React from "react";
import { Activity, ShieldAlert, KeyRound, Globe } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string;
  metricUnit: string;
  subtext: string;
  badge: string;
  icon: React.ReactNode;
  accentColor: "cobalt" | "cyan";
}

const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  metricUnit,
  subtext,
  badge,
  icon,
  accentColor,
}) => {
  return (
    <div className="relative p-6 rounded-lg bg-[#141923] border border-[#1F2633] group hover:border-[#0052FF] transition-all duration-300">
      {/* Top Border Accent */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] rounded-t ${
          accentColor === "cobalt" ? "bg-[#0052FF]" : "bg-[#00D2FF]"
        }`}
      />

      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-mono tracking-widest text-[#8A99AD] uppercase">
          {label}
        </span>
        <div className="p-2 rounded bg-[#0A0D12] border border-[#1F2633] text-[#00D2FF]">
          {icon}
        </div>
      </div>

      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
          {value}
        </span>
        <span className="text-sm font-mono text-[#00D2FF] font-semibold">{metricUnit}</span>
      </div>

      <p className="text-xs text-[#8A99AD] leading-relaxed mb-4">{subtext}</p>

      <div className="pt-3 border-t border-[#1F2633] flex items-center justify-between">
        <span className="text-[10px] font-mono tracking-wider text-[#00D2FF]">{badge}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF] group-hover:bg-[#00D2FF] transition-colors" />
      </div>
    </div>
  );
};

export const TelemetryBar: React.FC = () => {
  return (
    <section id="telemetry" className="relative py-16 bg-[#0A0D12] border-y border-[#1F2633]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono text-[#00D2FF] tracking-widest uppercase mb-2">
              {"// QUANTITATIVE SYSTEM PROOF"}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              HARD METRICS. ZERO THEORETICAL CLAIMS.
            </h2>
          </div>
          <div className="text-xs font-mono text-[#8A99AD] max-w-md">
            Production telemetry collected across active multi-tenant enterprise clusters and
            deterministic AI vector backbones.
          </div>
        </div>

        {/* 4 Quantitative Proof Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <MetricCard
            label="P99 Event Latency"
            value="< 14.2"
            metricUnit="MS"
            subtext="Sub-25ms global SLA backed by Anycast edge proxies and zero-allocation gRPC pipelines."
            badge="TARGET: < 25.0MS"
            accentColor="cyan"
            icon={<Activity className="w-4 h-4" />}
          />

          <MetricCard
            label="Security Record"
            value="0"
            metricUnit="BREACHES"
            subtext="Zero data leakage across 1,420+ operational days. Hardware HSM KMS tenant isolation."
            badge="SOC 2 TYPE II // HIPAA"
            accentColor="cobalt"
            icon={<ShieldAlert className="w-4 h-4" />}
          />

          <MetricCard
            label="Intellectual Property"
            value="100%"
            metricUnit="OWNED"
            subtext="Unconditional source code, Docker configs, and Terraform scripts transferred to your repositories."
            badge="ZERO VENDOR LOCK-IN"
            accentColor="cyan"
            icon={<KeyRound className="w-4 h-4" />}
          />

          <MetricCard
            label="Multi-Region Mesh"
            value="18"
            metricUnit="REGIONS"
            subtext="Active-active cross-continental Kubernetes failover with automated state quorum sync."
            badge="99.999% PROD UPTIME"
            accentColor="cobalt"
            icon={<Globe className="w-4 h-4" />}
          />
        </div>
      </div>
    </section>
  );
};

export default TelemetryBar;

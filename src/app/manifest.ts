import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ripple Nexus | Systems Architecture & Private AI Infrastructure",
    short_name: "Ripple Nexus",
    description:
      "Enterprise systems engineering for multi-tenant SaaS backbones and deterministic AI pipelines. Sub-25ms latency, zero breaches, 100% IP handover.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0D12",
    theme_color: "#0A0D12",
    icons: [
      {
        src: "/assets/rn-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

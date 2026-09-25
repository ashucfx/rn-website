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
        // icon.tsx generates a 32×32 PNG — referenced here so the installed PWA
        // uses the correct Ripple Nexus mark, not an SVG that some launchers skip.
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        // apple-icon.tsx generates the 180×180 PNG used by iOS home screen.
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
      {
        // rn-mark.svg available for any runtime that explicitly handles SVG.
        src: "/assets/rn-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

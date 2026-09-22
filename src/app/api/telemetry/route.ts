import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    metrics: {
      p99_latency_ms: 14.2,
      security_breaches: 0,
      ip_ownership_percentage: 100,
      active_regions: 18,
      event_throughput_req_sec: 480000,
      vector_recall_percentage: 99.4,
    },
    nodes: [
      { id: "us-east-nyc", role: "PRIMARY_CORE", status: "ONLINE", p99: "11.8ms" },
      { id: "us-west-sfo", role: "EDGE_CLUSTER", status: "ONLINE", p99: "13.4ms" },
      { id: "eu-west-lon", role: "WARM_STANDBY", status: "ONLINE", p99: "14.1ms" },
      { id: "ap-se-sgp", role: "TRANSIT_MESH", status: "ONLINE", p99: "15.2ms" },
    ],
    timestamp: new Date().toISOString(),
  });
}

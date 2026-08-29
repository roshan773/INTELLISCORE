"use client";

import React, { useState } from "react";
import {
  Brain,
  Shield,
  Cloud,
  Code,
  Database,
  Cpu,
  Server,
  Layers,
  Sparkles,
} from "lucide-react";

const techNodes = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    icon: Brain,
    short: "AI",
    tools: ["OpenAI", "Claude 3.7", "LangChain", "Llama 3", "PyTorch"],
    desc: "Autonomous LLM agents, vector embeddings, and predictive intelligence models.",
    angle: 0, // top
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: Shield,
    short: "Security",
    tools: ["Zero-Trust", "Cloudflare WAF", "CrowdStrike", "Vault", "OWASP"],
    desc: "Penetration defense, secret management, active threat monitoring, and zero-trust policies.",
    angle: 45, // top right
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    short: "Cloud",
    tools: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
    desc: "Resilient serverless and containerized multi-region cloud infrastructure.",
    angle: 90, // right
  },
  {
    id: "web",
    name: "Modern Web",
    icon: Code,
    short: "Web",
    tools: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "GSAP"],
    desc: "Ultra-fast headless web platforms engineered with zero-latency edge delivery.",
    angle: 135, // bottom right
  },
  {
    id: "data",
    name: "Data & Pipelines",
    icon: Database,
    short: "Data",
    tools: ["PostgreSQL", "ClickHouse", "Redis", "Pinecone", "Kafka"],
    desc: "High-throughput real-time telemetry streaming and vector database pipelines.",
    angle: 180, // bottom
  },
  {
    id: "automation",
    name: "Process Automation",
    icon: Cpu,
    short: "Automation",
    tools: ["Temporal", "FastAPI", "Celery", "Webhooks", "Zapier/n8n"],
    desc: "Automated event-driven worker queues and frictionless system integrations.",
    angle: 225, // bottom left
  },
  {
    id: "apis",
    name: "API Ecosystems",
    icon: Layers,
    short: "APIs",
    tools: ["GraphQL", "REST / OpenAPI", "gRPC", "tRPC", "WebSockets"],
    desc: "Type-safe microservices communication layers and unified enterprise endpoints.",
    angle: 270, // left
  },
  {
    id: "infra",
    name: "Infrastructure",
    icon: Server,
    short: "Infra",
    tools: ["Vercel Edge", "Linux Kernel", "Nginx", "Grafana", "Prometheus"],
    desc: "Observability, auto-scaling compute, and sub-millisecond network topologies.",
    angle: 315, // top left
  },
];

export default function Technology() {
  const [selectedNode, setSelectedNode] = useState(techNodes[0]);

  return (
    <section className="relative py-28 px-6 md:px-12 bg-brand-dark overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-sm bg-brand-light-slate/50 border border-brand-orange/30 text-brand-orange text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>// TECH STACK ECOSYSTEM</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-[0.95] mb-6">
            CONNECTED <span className="text-brand-orange">ECOSYSTEM.</span>
          </h2>
          <p className="text-brand-cream/70 text-sm sm:text-base font-light">
            An interconnected network of modern frameworks, AI infrastructure, and cybersecurity defenses
            orchestrated around the INTELLISCORE core engine.
          </p>
        </div>

        {/* Central Hub and Radial Grid Network */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left/Main interactive category buttons */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {techNodes.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`p-4 rounded-sm border text-left transition-all duration-300 flex flex-col justify-between min-h-[110px] group ${
                    isSelected
                      ? "bg-brand-surface border-brand-orange shadow-lg shadow-brand-orange/20 translate-y-[-2px]"
                      : "bg-brand-surface/40 border-white/10 hover:border-white/30 hover:bg-brand-surface/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      className={`w-5 h-5 transition-colors ${
                        isSelected ? "text-brand-orange" : "text-brand-cream/50 group-hover:text-brand-orange"
                      }`}
                    />
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isSelected ? "bg-brand-orange shadow-[0_0_8px_#FFA649]" : "bg-white/10"
                      }`}
                    />
                  </div>
                  <div>
                    <span className="font-display text-sm font-bold text-white block">
                      {node.short}
                    </span>
                    <span className="text-[10px] font-mono text-brand-cream/50 block truncate">
                      {node.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Selected Node Detail Card */}
          <div className="lg:col-span-5 rounded-sm bg-brand-surface/80 border border-brand-orange/40 p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles className="w-24 h-24 text-brand-orange" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-brand-dark/90 border border-brand-orange/50 flex items-center justify-center text-brand-orange">
                  {React.createElement(selectedNode.icon, { className: "w-5 h-5" })}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-brand-orange uppercase tracking-wider block">
                    CATEGORY // SELECTED
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {selectedNode.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-brand-cream/80 font-light leading-relaxed mb-6">
                {selectedNode.desc}
              </p>

              <div className="border-t border-white/10 pt-5">
                <div className="text-xs font-mono uppercase tracking-widest text-brand-cream/50 mb-3">
                  PRIMARY TOOLS & TECHNOLOGIES:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded bg-brand-dark/90 border border-white/10 text-xs font-mono text-brand-orange font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Central Core Connection Label */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-brand-cream/50">
                <span>ORCHESTRATED BY:</span>
                <span className="text-brand-orange font-bold font-display">INTELLISCORE CORE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

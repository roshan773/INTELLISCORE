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
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: Shield,
    short: "Security",
    tools: ["Zero-Trust", "Cloudflare WAF", "CrowdStrike", "Vault", "OWASP"],
    desc: "Penetration defense, secret management, active threat monitoring, and zero-trust policies.",
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    short: "Cloud",
    tools: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
    desc: "Resilient serverless and containerized multi-region cloud infrastructure.",
  },
  {
    id: "web",
    name: "Modern Web",
    icon: Code,
    short: "Web",
    tools: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "GSAP"],
    desc: "Ultra-fast headless web platforms engineered with zero-latency edge delivery.",
  },
  {
    id: "data",
    name: "Data & Pipelines",
    icon: Database,
    short: "Data",
    tools: ["PostgreSQL", "ClickHouse", "Redis", "Pinecone", "Kafka"],
    desc: "High-throughput real-time telemetry streaming and vector database pipelines.",
  },
  {
    id: "automation",
    name: "Process Automation",
    icon: Cpu,
    short: "Automation",
    tools: ["Temporal", "FastAPI", "Celery", "Webhooks", "Zapier/n8n"],
    desc: "Automated event-driven worker queues and frictionless system integrations.",
  },
  {
    id: "apis",
    name: "API Ecosystems",
    icon: Layers,
    short: "APIs",
    tools: ["GraphQL", "REST / OpenAPI", "gRPC", "tRPC", "WebSockets"],
    desc: "Type-safe microservices communication layers and unified enterprise endpoints.",
  },
  {
    id: "infra",
    name: "Infrastructure",
    icon: Server,
    short: "Infra",
    tools: ["Vercel Edge", "Linux Kernel", "Nginx", "Grafana", "Prometheus"],
    desc: "Observability, auto-scaling compute, and sub-millisecond network topologies.",
  },
];

export default function Technology() {
  const [selectedNode, setSelectedNode] = useState(techNodes[0]);

  return (
    <section id="technology" className="relative py-32 px-6 md:px-12 bg-brand-olive-dark overflow-hidden border-t border-brand-cream/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-olive-surface border border-brand-cream/20 text-brand-cream text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cream animate-pulse" />
            <span>// TECH STACK ECOSYSTEM</span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88] mb-6">
            CONNECTED <span className="text-brand-olive-light">ECOSYSTEM.</span>
          </h2>
          <p className="text-brand-cream-muted text-base sm:text-lg font-light">
            An interconnected network of modern frameworks, AI infrastructure, and cybersecurity defenses
            orchestrated around the INTELLISCORE core engine.
          </p>
        </div>

        {/* Central Hub and Radial Grid Network */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left interactive category buttons */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {techNodes.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between min-h-[120px] group cursor-pointer ${
                    isSelected
                      ? "bg-brand-olive-surface border-brand-cream shadow-xl shadow-brand-cream/15 translate-y-[-3px]"
                      : "bg-brand-olive-surface/30 border-brand-cream/15 hover:border-brand-cream/40 hover:bg-brand-olive-surface/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      className={`w-5 h-5 transition-colors ${
                        isSelected ? "text-brand-cream" : "text-brand-cream/50 group-hover:text-brand-cream"
                      }`}
                    />
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? "bg-brand-cream shadow-[0_0_8px_#FFFDD0]" : "bg-brand-cream/10"
                      }`}
                    />
                  </div>
                  <div>
                    <span className="font-display text-lg font-bold text-brand-cream block">
                      {node.short}
                    </span>
                    <span className="text-[11px] font-mono text-brand-cream-muted block truncate">
                      {node.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Selected Node Detail Card */}
          <div className="lg:col-span-5 rounded-2xl bg-brand-olive-surface border border-brand-cream/30 p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles className="w-28 h-28 text-brand-cream" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-cream text-brand-olive-dark flex items-center justify-center shadow-lg">
                  {React.createElement(selectedNode.icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-brand-olive-light uppercase tracking-wider block font-bold">
                    CATEGORY // SELECTED
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-brand-cream">
                    {selectedNode.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-brand-cream-muted font-light leading-relaxed mb-8">
                {selectedNode.desc}
              </p>

              <div className="border-t border-brand-cream/15 pt-6">
                <div className="text-xs font-mono uppercase tracking-widest text-brand-cream-muted mb-3 font-bold">
                  PRIMARY TOOLS & TECHNOLOGIES:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3.5 py-1.5 rounded-full bg-brand-olive-dark border border-brand-cream/15 text-xs font-mono text-brand-cream font-semibold"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Central Core Connection Label */}
              <div className="mt-8 pt-6 border-t border-brand-cream/15 flex items-center justify-between text-xs font-mono text-brand-cream-muted">
                <span>ORCHESTRATED BY:</span>
                <span className="text-brand-cream font-bold font-display text-base tracking-wider">
                  INTELLISCORE CORE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

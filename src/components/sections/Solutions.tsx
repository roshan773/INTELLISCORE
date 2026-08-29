"use client";

import React, { useRef } from "react";
import {
  Cpu,
  BrainCircuit,
  ShieldCheck,
  Layers,
  Cloud,
  FileCheck,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const solutions = [
  {
    icon: Cpu,
    category: "Automation",
    title: "AI Workflow Automation",
    desc: "Autonomous multi-agent pipelines replacing slow human-in-the-loop tasks with intelligent decision logic.",
    metrics: "85% Time Saved",
    tags: ["LLM Agents", "FastAPI", "Webhooks"],
  },
  {
    icon: BrainCircuit,
    category: "AI Systems",
    title: "Intelligent Business Systems",
    desc: "Domain-specific AI engines trained on proprietary company knowledge with strict governance and security.",
    metrics: "10x Insights Speed",
    tags: ["RAG Architecture", "Vector Search", "Private LLMs"],
  },
  {
    icon: ShieldCheck,
    category: "Web Platforms",
    title: "Secure Web Platforms",
    desc: "Next-generation web applications hardened against cyber threats with instant load speeds and global edge delivery.",
    metrics: "Sub-100ms TTFB",
    tags: ["Next.js", "Edge Computing", "WAF / DDoS Shield"],
  },
  {
    icon: Layers,
    category: "Enterprise",
    title: "Enterprise Applications",
    desc: "Custom distributed software designed to connect disparate databases, legacy servers, and modern APIs.",
    metrics: "99.99% Reliability",
    tags: ["Microservices", "GraphQL", "PostgreSQL"],
  },
  {
    icon: Cloud,
    category: "Cloud Ops",
    title: "Cloud Architecture & DevOps",
    desc: "Infrastructure as Code (IaC), containerized microservices, and auto-scaling Kubernetes clusters.",
    metrics: "40% Cloud Cost Cut",
    tags: ["Terraform", "Kubernetes", "AWS / GCP"],
  },
  {
    icon: FileCheck,
    category: "Security",
    title: "Continuous Security Audits",
    desc: "Proactive penetration testing, real-time vulnerability scoring, and automated compliance auditing.",
    metrics: "Zero Critical CVEs",
    tags: ["Pen Testing", "SOC2 Readiness", "SIEM"],
  },
  {
    icon: BarChart3,
    category: "Data & BI",
    title: "Data & Real-Time Analytics",
    desc: "High-throughput telemetry pipelines that transform raw operational data into actionable executive intelligence.",
    metrics: "Real-Time Streaming",
    tags: ["Apache Kafka", "ClickHouse", "BI Dashboards"],
  },
];

export default function Solutions() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="solutions"
      className="relative py-28 px-6 md:px-12 bg-brand-slate overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-brand-orange" />
            <span className="text-xs font-mono tracking-widest text-brand-orange uppercase">
              // Scalable Deployments
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
            SOLUTIONS BUILT FOR <br />
            <span className="text-brand-orange">THE FUTURE.</span>
          </h2>
        </div>

        {/* Scroll Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-11 h-11 rounded-sm bg-brand-light-slate/60 border border-white/10 hover:border-brand-orange text-white hover:text-brand-orange flex items-center justify-center transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-11 h-11 rounded-sm bg-brand-light-slate/60 border border-white/10 hover:border-brand-orange text-white hover:text-brand-orange flex items-center justify-center transition-colors focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing max-w-7xl mx-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {solutions.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="w-[320px] sm:w-[380px] shrink-0 snap-start rounded-sm bg-brand-dark/80 border border-white/10 p-8 flex flex-col justify-between hover:border-brand-orange/60 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-sm bg-brand-slate/60 border border-white/10 flex items-center justify-center text-brand-orange group-hover:border-brand-orange transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded bg-brand-slate/60 text-[10px] font-mono tracking-widest uppercase text-brand-cream/60 border border-white/5">
                    {item.category}
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-cream/70 font-light leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div>
                {/* Metric Highlight */}
                <div className="p-3 rounded-sm bg-brand-slate/40 border border-white/5 flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-brand-cream/60">Impact:</span>
                  <span className="text-xs font-mono font-bold text-brand-orange">
                    {item.metrics}
                  </span>
                </div>

                {/* Tags and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono text-brand-cream/50 bg-white/5 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-brand-orange opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

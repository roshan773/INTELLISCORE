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
      const scrollAmount = 420;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="solutions"
      className="relative py-32 px-6 md:px-12 bg-brand-olive-deep overflow-hidden border-t border-brand-cream/10"
    >
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-0.5 w-12 bg-brand-cream" />
            <span className="text-xs font-mono tracking-widest text-brand-cream uppercase font-bold">
              // SCALABLE DEPLOYMENTS
            </span>
          </div>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88]">
            SOLUTIONS BUILT FOR <br />
            <span className="text-brand-olive-light">THE FUTURE.</span>
          </h2>
        </div>

        {/* Scroll Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-12 h-12 rounded-full bg-brand-olive-surface border border-brand-cream/20 hover:border-brand-cream text-brand-cream flex items-center justify-center transition-all cursor-pointer shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-12 h-12 rounded-full bg-brand-olive-surface border border-brand-cream/20 hover:border-brand-cream text-brand-cream flex items-center justify-center transition-all cursor-pointer shadow-lg"
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
              className="w-[330px] sm:w-[400px] shrink-0 snap-start rounded-2xl bg-brand-olive-surface border border-brand-cream/15 p-8 flex flex-col justify-between hover:border-brand-cream/60 hover:-translate-y-2 transition-all duration-300 group shadow-2xl"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-full bg-brand-cream text-brand-olive-dark flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-brand-olive-dark text-[10px] font-mono tracking-widest uppercase text-brand-cream-muted border border-brand-cream/10">
                    {item.category}
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-cream mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-cream-muted font-light leading-relaxed mb-8">
                  {item.desc}
                </p>
              </div>

              <div>
                {/* Metric Highlight */}
                <div className="p-3.5 rounded-xl bg-brand-olive-dark border border-brand-cream/10 flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-brand-cream-muted">Impact:</span>
                  <span className="text-xs font-mono font-bold text-brand-cream">
                    {item.metrics}
                  </span>
                </div>

                {/* Tags and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-brand-cream/10">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono text-brand-cream/70 bg-brand-olive-dark px-2.5 py-1 rounded-full border border-brand-cream/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-brand-cream opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

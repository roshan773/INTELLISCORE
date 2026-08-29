"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, TrendingUp, ShieldCheck, Bot, Globe } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const caseStudies = [
  {
    id: "fintech-vault",
    client: "Apex Capital Systems",
    category: "Fintech & Cybersecurity",
    icon: ShieldCheck,
    title: "Zero-Trust Trading Platform & Cloud Vault",
    desc: "Engineered a high-frequency trading interface and secure cloud vault with real-time biometric verification and continuous SOC2 compliance telemetry.",
    results: [
      "Sub-15ms execution latency",
      "Zero security vulnerabilities detected over 18 months",
      "$4.2B+ daily transaction volume processed securely",
    ],
    tech: ["Next.js", "Go Microservices", "Zero-Trust IAM", "AWS GovCloud", "Redis"],
    tagline: "Ultra-low latency institutional security architecture",
  },
  {
    id: "ai-logistics",
    client: "Nexus Global Supply",
    category: "AI & Process Automation",
    icon: Bot,
    title: "Autonomous Fleet Routing & Supply Chain AI",
    desc: "Deployed a multi-agent LLM and predictive routing system that automatically dispatches shipments, resolves customs documentation, and predicts delivery delays.",
    results: [
      "78% reduction in manual dispatch overhead",
      "Saved $1.8M annually in fuel and customs fines",
      "Real-time shipment re-routing across 42 countries",
    ],
    tech: ["Python", "FastAPI", "OpenAI API", "PostgreSQL", "Kafka"],
    tagline: "Autonomous multi-agent supply chain intelligence",
  },
  {
    id: "health-portal",
    client: "BioSync Diagnostics",
    category: "Web Development & HealthTech",
    icon: Globe,
    title: "HIPAA-Compliant Patient Intelligence Portal",
    desc: "Developed a responsive web platform and patient portal enabling thousands of medical clinics to securely analyze genetic telemetry and diagnostic images.",
    results: [
      "100% HIPAA and GDPR regulatory compliance score",
      "99.99% portal uptime under surge traffic",
      "4.9/5 satisfaction rating across 50,000+ clinicians",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Docker"],
    tagline: "High-concurrency medical web platform",
  },
];

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(0);

  return (
    <section className="relative py-28 px-6 md:px-12 bg-brand-slate overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-orange" />
              <span className="text-xs font-mono tracking-widest text-brand-orange uppercase">
                // PROVEN IMPACT
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
              FEATURED CASE <br />
              <span className="text-brand-orange">STUDIES.</span>
            </h2>
          </div>
          <p className="text-brand-cream/70 max-w-md text-sm md:text-base font-light">
            Real enterprise transformations engineered with cutting-edge software, bespoke AI pipelines,
            and hardened cybersecurity postures.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {caseStudies.map((cs, idx) => {
            const Icon = cs.icon;
            const isSelected = selectedCase === idx;
            return (
              <button
                key={cs.id}
                onClick={() => setSelectedCase(idx)}
                className={`p-6 rounded-sm border text-left transition-all duration-300 ${
                  isSelected
                    ? "bg-brand-dark border-brand-orange shadow-xl shadow-brand-orange/10"
                    : "bg-brand-dark/40 border-white/10 hover:border-white/25"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-orange">
                    {cs.category}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isSelected ? "text-brand-orange" : "text-brand-cream/40"
                    }`}
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  {cs.client}
                </h3>
                <p className="text-xs text-brand-cream/60 truncate font-mono">
                  {cs.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Project Full Hero Panel */}
        {(() => {
          const current = caseStudies[selectedCase];
          return (
            <div className="rounded-sm bg-brand-dark/95 border border-white/10 p-8 md:p-12 relative overflow-hidden shadow-2xl">
              {/* Background ambient gradient */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-brand-orange bg-brand-orange/10 px-3 py-1 rounded border border-brand-orange/30 uppercase">
                      {current.category}
                    </span>
                    <span className="text-xs font-mono text-brand-cream/50 uppercase">
                      Client: {current.client}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                    {current.title}
                  </h3>

                  <p className="text-base text-brand-cream/80 font-light leading-relaxed mb-8">
                    {current.desc}
                  </p>

                  {/* Impact Results */}
                  <div className="space-y-3 mb-8">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-brand-cream/50">
                      MEASURABLE OUTCOMES:
                    </h4>
                    {current.results.map((res, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-center gap-3 text-sm text-brand-cream/90 font-light"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {current.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded bg-brand-surface border border-white/10 text-xs font-mono text-brand-orange"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Callout Box */}
                <div className="lg:col-span-5 rounded-sm bg-brand-surface/60 border border-white/10 p-8 flex flex-col justify-between gap-6">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-brand-orange mb-2">
                      ARCHITECTURAL HIGHLIGHT
                    </div>
                    <div className="font-display text-xl font-bold text-white mb-3">
                      Enterprise Reliability with High-Security SLA
                    </div>
                    <p className="text-xs text-brand-cream/70 font-light leading-relaxed">
                      Custom tailored from foundation to deployment with full source code ownership,
                      automated continuous security scans, and dedicated engineering support.
                    </p>
                  </div>

                  <MagneticButton variant="primary" href="#cta" className="w-full justify-center text-xs">
                    <span>Discuss Similar Solution</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}

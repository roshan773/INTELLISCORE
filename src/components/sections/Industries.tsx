"use client";

import React, { useState } from "react";
import {
  HeartPulse,
  Landmark,
  ShoppingBag,
  GraduationCap,
  Factory,
  Briefcase,
  Cpu,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    id: "healthcare",
    name: "Healthcare & MedTech",
    icon: HeartPulse,
    desc: "HIPAA-compliant diagnostic portals, encrypted patient records, and automated clinical triage assistants.",
    solution: "Secure Medical Platforms & Clinical Automation",
  },
  {
    id: "finance",
    name: "Banking, FinTech & VC",
    icon: Landmark,
    desc: "Low-latency algorithmic trading systems, fraud detection algorithms, and zero-trust cloud vaults.",
    solution: "FinTech Infrastructure & High-Frequency Security",
  },
  {
    id: "ecommerce",
    name: "Global E-Commerce",
    icon: ShoppingBag,
    desc: "Sub-second Next.js storefronts, AI personalized recommendation engines, and automated inventory sync.",
    solution: "High-Volume Headless Commerce & Dynamic AI",
  },
  {
    id: "education",
    name: "EdTech & Learning",
    icon: GraduationCap,
    desc: "Interactive LMS architectures, real-time grading pipelines, and adaptive student learning models.",
    solution: "Scalable EdTech Systems & Knowledge Graphs",
  },
  {
    id: "manufacturing",
    name: "Smart Manufacturing",
    icon: Factory,
    desc: "IoT telemetry integration, predictive maintenance pipelines, and supply-chain logistics AI.",
    solution: "Industrial IoT & Automated Telemetry",
  },
  {
    id: "services",
    name: "Professional Services",
    icon: Briefcase,
    desc: "Bespoke legal/accounting document extraction, automated client billing, and secure client portals.",
    solution: "Enterprise Workflow Automation & Portals",
  },
  {
    id: "technology",
    name: "Enterprise Software & SaaS",
    icon: Cpu,
    desc: "Multi-tenant cloud platforms, developer APIs, high-performance web frontends, and SOC2 readiness.",
    solution: "Full-Stack SaaS Engineering & Global Edge",
  },
  {
    id: "startups",
    name: "High-Growth Startups",
    icon: Rocket,
    desc: "Rapid MVP prototyping, scalable cloud foundations, and strategic technical co-founding expertise.",
    solution: "Zero-to-One Engineering & Rapid Scale",
  },
];

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section id="industries" className="relative py-32 px-6 md:px-12 bg-brand-olive-dark overflow-hidden border-t border-brand-cream/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-0.5 w-12 bg-brand-cream" />
            <span className="text-xs font-mono tracking-widest text-brand-cream uppercase font-bold">
              // DOMAIN EXPERTISE
            </span>
          </div>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88]">
            SECTOR-SPECIFIC <br />
            <span className="text-brand-olive-light">DIGITAL EXCELLENCE.</span>
          </h2>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isHovered = activeIndustry === idx;

            return (
              <div
                key={ind.id}
                onMouseEnter={() => setActiveIndustry(idx)}
                className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isHovered
                    ? "bg-brand-olive-surface border-brand-cream shadow-2xl shadow-black/50 -translate-y-1.5"
                    : "bg-brand-olive-surface/30 border-brand-cream/15 hover:border-brand-cream/35"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                        isHovered
                          ? "bg-brand-cream text-brand-olive-dark shadow-md"
                          : "bg-brand-olive border border-brand-cream/20 text-brand-cream"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-brand-cream/40 uppercase font-bold">
                      SEC_0{idx + 1}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-2xl sm:text-3xl font-bold mb-3 transition-colors ${
                      isHovered ? "text-brand-cream" : "text-brand-cream/85"
                    }`}
                  >
                    {ind.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-cream-muted font-light leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-cream/10 flex items-center justify-between text-[11px] font-mono text-brand-cream/60">
                  <span className="truncate pr-2">{ind.solution}</span>
                  <ArrowUpRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isHovered ? "text-brand-cream translate-x-0.5 -translate-y-0.5" : "text-brand-cream/30"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

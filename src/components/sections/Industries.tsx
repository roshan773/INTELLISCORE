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
  ShieldCheck,
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
    <section id="industries" className="relative py-28 px-6 md:px-12 bg-brand-dark overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-brand-orange" />
            <span className="text-xs font-mono tracking-widest text-brand-orange uppercase">
              // DOMAIN EXPERTISE
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
            SECTOR-SPECIFIC <br />
            <span className="text-brand-orange">DIGITAL EXCELLENCE.</span>
          </h2>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isHovered = activeIndustry === idx;

            return (
              <div
                key={ind.id}
                onMouseEnter={() => setActiveIndustry(idx)}
                className={`p-7 rounded-sm border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isHovered
                    ? "bg-brand-surface border-brand-orange shadow-xl shadow-brand-orange/10 -translate-y-1"
                    : "bg-brand-surface/30 border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-11 h-11 rounded-sm flex items-center justify-center border transition-colors ${
                        isHovered
                          ? "bg-brand-orange text-brand-dark border-brand-orange"
                          : "bg-brand-dark border-white/10 text-brand-orange"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-brand-cream/40 uppercase">
                      SEC_0{idx + 1}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-xl font-bold mb-3 transition-colors ${
                      isHovered ? "text-brand-orange" : "text-white"
                    }`}
                  >
                    {ind.name}
                  </h3>

                  <p className="text-xs text-brand-cream/70 font-light leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-brand-cream/50">
                  <span className="truncate pr-2">{ind.solution}</span>
                  <ArrowUpRight
                    className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                      isHovered ? "text-brand-orange translate-x-0.5 -translate-y-0.5" : "text-brand-cream/30"
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

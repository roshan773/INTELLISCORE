"use client";

import React, { useState } from "react";
import {
  Search,
  Target,
  PenTool,
  Code2,
  Cpu,
  ShieldCheck,
  Rocket,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    step: "01",
    name: "Discover",
    icon: Search,
    title: "Deep Technical Audit & Discovery",
    desc: "We analyze your infrastructure, business workflows, bottlenecks, security vulnerabilities, and growth goals to identify high-leverage opportunities.",
    deliverables: ["Architecture Audit", "Vulnerability Surface Map", "ROI Feasibility Report"],
  },
  {
    step: "02",
    name: "Strategize",
    icon: Target,
    title: "Blueprint & Systems Architecture",
    desc: "Formulating a bulletproof technical roadmap, selecting optimal modern frameworks, AI models, data pipelines, and compliance protocols.",
    deliverables: ["Tech Stack Selection", "Data Flow Architecture", "Security Compliance Plan"],
  },
  {
    step: "03",
    name: "Design",
    icon: PenTool,
    title: "High-Fidelity Interface & UX Systems",
    desc: "Crafting bespoke, high-converting digital interfaces and intuitive developer tooling with editorial typography and responsive excellence.",
    deliverables: ["Interactive Prototypes", "Design Tokens", "Design System Documentation"],
  },
  {
    step: "04",
    name: "Build",
    icon: Code2,
    title: "Agile Full-Stack Engineering",
    desc: "Writing clean, type-safe, and modular code with Next.js, TypeScript, and microservice APIs with continuous integration and testing.",
    deliverables: ["Production Web App", "Microservices & APIs", "Unit & E2E Test Suite"],
  },
  {
    step: "05",
    name: "Automate",
    icon: Cpu,
    title: "AI Integration & Autonomous Workflows",
    desc: "Connecting custom LLM agents, asynchronous worker queues, and automated data synchronization into the production software.",
    deliverables: ["Autonomous Agents", "Webhook Sync Engines", "LLM Fine-Tuned Models"],
  },
  {
    step: "06",
    name: "Secure",
    icon: ShieldCheck,
    title: "Hardening & Penetration Testing",
    desc: "Subjecting the entire codebase and cloud infrastructure to simulated cyber-attacks, rate limiting, and zero-trust policy enforcement.",
    deliverables: ["Penetration Audit", "WAF & DDoS Defense", "Encryption & IAM Hardening"],
  },
  {
    step: "07",
    name: "Scale",
    icon: Rocket,
    title: "Continuous Monitoring & Scalability",
    desc: "Deploying to multi-region cloud clusters with auto-scaling, automated telemetry, error tracking, and ongoing capability upgrades.",
    deliverables: ["Global CDN Edge Setup", "24/7 Telemetry Alerting", "Continuous Delivery Pipeline"],
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      className="relative py-32 px-6 md:px-12 bg-brand-olive-deep overflow-hidden border-t border-brand-cream/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-0.5 w-12 bg-brand-cream" />
            <span className="text-xs font-mono tracking-widest text-brand-cream uppercase font-bold">
              // EXECUTION FRAMEWORK
            </span>
          </div>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88]">
            THE INTELLUSCORE <br />
            <span className="text-brand-olive-light">ENGINEERING JOURNEY.</span>
          </h2>
        </div>

        {/* Timeline Nav Bar */}
        <div className="relative mb-12 overflow-x-auto pb-4 scrollbar-none">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-brand-cream/15 -translate-y-1/2 hidden md:block" />

          <div className="flex items-center justify-between min-w-[750px] relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isCurrent = activeStep === index;
              const isPast = activeStep > index;

              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className="flex flex-col items-center group focus:outline-none cursor-pointer"
                >
                  <div
                    className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isCurrent
                        ? "bg-brand-cream border-brand-cream text-brand-olive-dark shadow-xl shadow-brand-cream/30 scale-110"
                        : isPast
                        ? "bg-brand-olive-surface border-brand-cream/40 text-brand-cream"
                        : "bg-brand-olive-dark border-brand-cream/20 text-brand-cream/50 group-hover:border-brand-cream/50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[11px] font-mono uppercase tracking-widest mt-3 transition-colors ${
                      isCurrent
                        ? "text-brand-cream font-bold"
                        : isPast
                        ? "text-brand-cream-muted"
                        : "text-brand-cream/40"
                    }`}
                  >
                    {item.step}. {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Panel */}
        <div className="rounded-2xl bg-brand-olive-surface border border-brand-cream/20 p-8 md:p-14 relative overflow-hidden transition-all duration-500 shadow-2xl">
          <div className="absolute right-6 -bottom-10 font-display text-9xl font-black text-brand-cream/5 pointer-events-none select-none">
            {steps[activeStep].step}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-brand-cream bg-brand-olive px-3 py-1 rounded-full border border-brand-cream/30 uppercase font-bold">
                  Stage {steps[activeStep].step} of 07 // {steps[activeStep].name}
                </span>
              </div>
              <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brand-cream mb-4">
                {steps[activeStep].title}
              </h3>
              <p className="text-base text-brand-cream-muted font-light leading-relaxed mb-8">
                {steps[activeStep].desc}
              </p>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-brand-cream-muted mb-3 font-bold">
                  Key Deliverables:
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {steps[activeStep].deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-olive-dark border border-brand-cream/20 text-xs font-mono text-brand-cream font-medium"
                    >
                      <CheckCircle className="w-4 h-4 text-brand-olive-light" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="lg:col-span-5 flex flex-col justify-end items-start lg:items-end gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className="px-6 py-3 rounded-full border border-brand-cream/20 text-xs font-mono uppercase tracking-wider text-brand-cream/80 hover:text-white hover:border-brand-cream disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  ← Previous Stage
                </button>
                <button
                  onClick={() =>
                    setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))
                  }
                  disabled={activeStep === steps.length - 1}
                  className="px-6 py-3 rounded-full bg-brand-cream text-brand-olive-dark font-semibold text-xs font-mono uppercase tracking-wider hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-brand-cream/20"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <span className="text-[11px] font-mono text-brand-cream/50">
                Click any step above to explore that phase
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

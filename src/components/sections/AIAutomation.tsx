"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileSpreadsheet,
  Brain,
  Zap,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const stages = [
  {
    step: "01",
    title: "Manual Process",
    subtitle: "High Latency & Human Error",
    icon: FileSpreadsheet,
    desc: "Repetitive manual entry, fragmented spreadsheets, siloed tools, and delayed cross-team handoffs.",
    stats: "Slow • Error-Prone • Costly",
    status: "Before INTELLUSCORE",
  },
  {
    step: "02",
    title: "Intelligence",
    subtitle: "LLMs & Vector Extraction",
    icon: Brain,
    desc: "Domain-tuned AI agents parse unstructured documents, emails, and database queries in milliseconds.",
    stats: "Instant Classification",
    status: "AI Neural Layer",
  },
  {
    step: "03",
    title: "Automation",
    subtitle: "Autonomous Agent Execution",
    icon: Zap,
    desc: "Workflows execute automatically with self-correcting logic, asynchronous queues, and webhook triggers.",
    stats: "24/7 Zero Human Overhead",
    status: "Autonomous Engine",
  },
  {
    step: "04",
    title: "Results",
    subtitle: "Compounded Velocity & ROI",
    icon: TrendingUp,
    desc: "Operational throughput accelerates by 10x with zero data loss, audit trails, and immediate cost savings.",
    stats: "+90% Time Saved",
    status: "Business Advantage",
  },
];

export default function AIAutomation() {
  const [activeStage, setActiveStage] = useState(1);

  return (
    <section className="relative py-32 px-6 md:px-12 bg-brand-olive-dark overflow-hidden border-t border-brand-cream/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-olive-surface border border-brand-cream/20 text-brand-cream text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cream animate-pulse" />
            <span>// AUTONOMOUS SYSTEMS</span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88] mb-6">
            FROM MANUAL FRICTION <br />
            <span className="text-brand-olive-light">TO INTELLIGENT VELOCITY.</span>
          </h2>
          <p className="text-brand-cream-muted text-base sm:text-lg font-light">
            How INTELLUSCORE transforms clunky, error-prone operations into autonomous AI workflows
            that run quietly and flawlessly 24 hours a day.
          </p>
        </div>

        {/* 3D Visual Flow Banner */}
        <div className="mb-16 rounded-3xl overflow-hidden border border-brand-cream/20 relative aspect-[21/9] shadow-2xl">
          <Image
            src="/images/ai-flow.jpg"
            alt="Autonomous Multi-Agent Workflow Engine"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-olive-dark/90 via-brand-olive-dark/60 to-transparent" />
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-lg space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-olive-light font-bold">
              // MULTI-AGENT STATE MACHINE
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-cream uppercase">
              Autonomous Intelligence Mesh
            </h3>
            <p className="text-xs sm:text-sm text-brand-cream-muted font-light">
              Deterministic task routing, automated schema validation, and real-time LLM inference.
            </p>
          </div>
        </div>

        {/* 4-Stage Workflow Interactive Visual Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-16 relative">
          {stages.map((stg, idx) => {
            const Icon = stg.icon;
            const isSelected = activeStage === idx;
            return (
              <div
                key={stg.step}
                onClick={() => setActiveStage(idx)}
                className={`p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${isSelected
                    ? "bg-brand-olive-surface border-brand-cream shadow-2xl shadow-brand-cream/15 scale-[1.03]"
                    : "bg-brand-olive-surface/30 border-brand-cream/15 hover:border-brand-cream/30 hover:bg-brand-olive-surface/60"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-display text-4xl font-bold ${isSelected ? "text-brand-cream" : "text-brand-cream/30"
                        }`}
                    >
                      {stg.step}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${isSelected
                          ? "bg-brand-cream text-brand-olive-dark shadow-md"
                          : "bg-brand-olive-dark border border-brand-cream/20 text-brand-cream"
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-brand-olive-light uppercase tracking-wider mb-1 font-bold">
                    {stg.status}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-cream mb-1">
                    {stg.title}
                  </h3>
                  <div className="text-xs text-brand-cream-muted font-mono mb-4">
                    {stg.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-brand-cream-muted font-light leading-relaxed mb-6">
                    {stg.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-cream/10 text-xs font-mono font-bold text-brand-cream flex items-center justify-between">
                  <span>{stg.stats}</span>
                  {idx < stages.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-brand-cream/40 hidden md:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Transformation Visual Box */}
        <div className="rounded-2xl bg-brand-olive-surface border border-brand-cream/20 p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-brand-olive-light font-mono text-xs uppercase tracking-wider font-bold">
              <Sparkles className="w-4 h-4 text-brand-cream" />
              <span>TRANSFORMATION BENCHMARK</span>
            </div>
            <h4 className="font-display text-3xl sm:text-4xl font-bold text-brand-cream">
              Ready to replace hundreds of manual hours with custom AI agents?
            </h4>
            <p className="text-sm sm:text-base text-brand-cream-muted font-light max-w-2xl">
              We audit your team’s repetitive workflows and build bespoke agentic automations in 2 to 4 weeks.
            </p>
          </div>
          <MagneticButton variant="primary" href="/contact" className="rounded-full px-8 py-4 text-xs shrink-0">
            <span>Automate Your Workflows</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

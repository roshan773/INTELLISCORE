"use client";

import React, { useState } from "react";
import {
  FileSpreadsheet,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Cpu,
  Clock,
  ShieldAlert,
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
    status: "Before INTELLISCORE",
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
    <section className="relative py-28 px-6 md:px-12 bg-brand-dark overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-sm bg-brand-light-slate/50 border border-brand-orange/30 text-brand-orange text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>// AUTONOMOUS SYSTEMS</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-[0.95] mb-6">
            FROM MANUAL FRICTION <br />
            <span className="text-brand-orange">TO INTELLIGENT VELOCITY.</span>
          </h2>
          <p className="text-brand-cream/70 text-sm sm:text-base font-light">
            How INTELLISCORE transforms clunky, error-prone operations into autonomous AI workflows
            that run quietly and flawlessly 24 hours a day.
          </p>
        </div>

        {/* 4-Stage Workflow Interactive Visual Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 relative">
          {stages.map((stg, idx) => {
            const Icon = stg.icon;
            const isSelected = activeStage === idx;
            return (
              <div
                key={stg.step}
                onClick={() => setActiveStage(idx)}
                className={`p-6 rounded-sm border transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${
                  isSelected
                    ? "bg-brand-surface border-brand-orange shadow-2xl shadow-brand-orange/15 scale-[1.02]"
                    : "bg-brand-surface/30 border-white/10 hover:border-white/20 hover:bg-brand-surface/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-display text-2xl font-bold ${
                        isSelected ? "text-brand-orange" : "text-brand-cream/40"
                      }`}
                    >
                      {stg.step}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-sm flex items-center justify-center border transition-colors ${
                        isSelected
                          ? "bg-brand-orange text-brand-dark border-brand-orange"
                          : "bg-brand-dark border-white/10 text-brand-cream/60 group-hover:text-brand-orange"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-brand-orange uppercase tracking-wider mb-1">
                    {stg.status}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {stg.title}
                  </h3>
                  <div className="text-xs text-brand-cream/60 font-mono mb-4">
                    {stg.subtitle}
                  </div>

                  <p className="text-xs text-brand-cream/75 font-light leading-relaxed mb-6">
                    {stg.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-[11px] font-mono font-bold text-brand-orange flex items-center justify-between">
                  <span>{stg.stats}</span>
                  {idx < stages.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-brand-cream/30 hidden md:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Transformation Visual Box */}
        <div className="rounded-sm bg-brand-surface/70 border border-white/10 p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-brand-orange font-mono text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>TRANSFORMATION BENCHMARK</span>
            </div>
            <h4 className="font-display text-2xl font-bold text-white">
              Ready to replace hundreds of manual hours with custom AI agents?
            </h4>
            <p className="text-sm text-brand-cream/70 font-light max-w-2xl">
              We audit your team’s repetitive workflows and build bespoke agentic automations in 2 to 4 weeks.
            </p>
          </div>
          <MagneticButton variant="primary" href="#cta">
            <span>Automate Your Workflows</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

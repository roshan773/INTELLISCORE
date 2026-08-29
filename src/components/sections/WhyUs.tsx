"use client";

import React from "react";
import { Sparkles, Terminal, CheckCheck, ShieldCheck, Zap, Activity } from "lucide-react";

const principles = [
  {
    num: "01",
    title: "Think Forward",
    desc: "We anticipate architectural bottlenecks and cyber vectors before writing a single line of code.",
    metric: "Architectural Integrity",
  },
  {
    num: "02",
    title: "Build Smart",
    desc: "Clean modular architectures, TypeScript safety, and strict Core Web Vitals performance benchmarks.",
    metric: "Sub-Second Latency",
  },
  {
    num: "03",
    title: "Automate Better",
    desc: "Self-healing pipelines, autonomous agents, and deep workflow integrations that multiply human capacity.",
    metric: "10x Throughput",
  },
  {
    num: "04",
    title: "Secure Everything",
    desc: "Zero-Trust paradigm baked into every endpoint, database query, and infrastructure component.",
    metric: "Military-Grade Defense",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-28 px-6 md:px-12 bg-brand-dark overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-sm bg-brand-light-slate/50 border border-brand-orange/30 text-brand-orange text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>// THE INTELLISCORE PHILOSOPHY</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-[0.95] mb-6">
            WE DON&apos;T JUST BUILD TECHNOLOGY. <br />
            <span className="text-brand-orange">WE BUILD ADVANTAGE.</span>
          </h2>

          <p className="text-brand-cream/70 text-base sm:text-lg font-light leading-relaxed">
            In an era of generic code and off-the-shelf templates, INTELLISCORE engineers customized
            digital supremacy designed to outperform competitors in speed, intelligence, and resilience.
          </p>
        </div>

        {/* Technical Diagram + 4 Principles Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: 4 Principles Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((item) => (
              <div
                key={item.num}
                className="p-8 rounded-sm bg-brand-surface/70 border border-white/10 hover:border-brand-orange/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl font-extrabold text-brand-orange">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-brand-cream/40 uppercase">
                      PRINCIPLE
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-brand-cream/70 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-brand-orange">
                  <CheckCheck className="w-4 h-4" />
                  <span>{item.metric}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Interactive Technical Diagram Box */}
          <div className="lg:col-span-5 rounded-sm bg-brand-surface/40 border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 tech-grid-dense opacity-30 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-brand-orange animate-pulse" />
                  <span className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
                    SYS_DIAGNOSTIC_RADAR
                  </span>
                </div>
                <span className="text-[10px] font-mono text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded border border-brand-orange/30">
                  REALTIME
                </span>
              </div>

              {/* Technical Telemetry Bars */}
              <div className="space-y-4 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-brand-cream/80 mb-1">
                    <span>ARCHITECTURAL_RESILIENCE</span>
                    <span className="text-brand-orange">99.98%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-orange w-[99.98%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-brand-cream/80 mb-1">
                    <span>SECURITY_POSTURE_INDEX</span>
                    <span className="text-brand-orange">100 / 100</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-orange w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-brand-cream/80 mb-1">
                    <span>AUTOMATION_EFFICIENCY</span>
                    <span className="text-brand-orange">+850%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-orange w-[90%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-brand-cream/80 mb-1">
                    <span>CODE_QUALITY_SCORE</span>
                    <span className="text-brand-orange">A+ (Grade 1)</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-orange w-[96%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom code snippet box */}
            <div className="relative z-10 mt-8 p-4 rounded-sm bg-brand-dark/90 border border-white/10 font-mono text-[11px] text-brand-cream/80 space-y-1">
              <div className="text-brand-orange">// INTELLISCORE Deployment Guard</div>
              <div className="text-white/60">
                &gt; verifyArchitecture(productionSpec);
              </div>
              <div className="text-green-400">
                ✓ Ready for zero-downtime continuous scaling.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

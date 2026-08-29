"use client";

import React from "react";
import { Activity, CheckCheck } from "lucide-react";

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
    <section id="philosophy" className="relative py-32 px-6 md:px-12 bg-brand-olive-dark overflow-hidden border-t border-brand-cream/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-olive-surface border border-brand-cream/20 text-brand-cream text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cream animate-pulse" />
            <span>// THE INTELLISCORE PHILOSOPHY</span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88] mb-6">
            WE DON&apos;T JUST BUILD TECHNOLOGY. <br />
            <span className="text-brand-olive-light">WE BUILD ADVANTAGE.</span>
          </h2>

          <p className="text-brand-cream-muted text-base sm:text-lg font-light leading-relaxed">
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
                className="p-8 rounded-2xl bg-brand-olive-surface border border-brand-cream/15 hover:border-brand-cream/60 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-5xl font-extrabold text-brand-cream">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-brand-cream/40 uppercase font-bold">
                      PRINCIPLE
                    </span>
                  </div>

                  <h3 className="font-display text-3xl font-bold text-brand-cream mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-brand-cream-muted font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-brand-cream/10 flex items-center gap-2 text-xs font-mono text-brand-olive-light font-bold">
                  <CheckCheck className="w-4 h-4" />
                  <span>{item.metric}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Technical Diagram Box */}
          <div className="lg:col-span-5 rounded-2xl bg-brand-olive-surface border border-brand-cream/15 p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 tech-grid-dense opacity-20 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-brand-cream/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-brand-cream animate-pulse" />
                  <span className="text-xs font-mono text-brand-cream uppercase tracking-wider font-semibold">
                    SYS_DIAGNOSTIC_RADAR
                  </span>
                </div>
                <span className="text-[10px] font-mono text-brand-cream bg-brand-olive px-3 py-1 rounded-full border border-brand-cream/20">
                  REALTIME
                </span>
              </div>

              {/* Technical Telemetry Bars */}
              <div className="space-y-5 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-brand-cream mb-1.5 font-bold">
                    <span>ARCHITECTURAL_RESILIENCE</span>
                    <span className="text-brand-olive-light">99.98%</span>
                  </div>
                  <div className="h-2 w-full bg-brand-olive-dark rounded-full overflow-hidden">
                    <div className="h-full bg-brand-cream w-[99.98%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-brand-cream mb-1.5 font-bold">
                    <span>SECURITY_POSTURE_INDEX</span>
                    <span className="text-brand-olive-light">100 / 100</span>
                  </div>
                  <div className="h-2 w-full bg-brand-olive-dark rounded-full overflow-hidden">
                    <div className="h-full bg-brand-cream w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-brand-cream mb-1.5 font-bold">
                    <span>AUTOMATION_EFFICIENCY</span>
                    <span className="text-brand-olive-light">+850%</span>
                  </div>
                  <div className="h-2 w-full bg-brand-olive-dark rounded-full overflow-hidden">
                    <div className="h-full bg-brand-cream w-[90%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-brand-cream mb-1.5 font-bold">
                    <span>CODE_QUALITY_SCORE</span>
                    <span className="text-brand-olive-light">A+ (Grade 1)</span>
                  </div>
                  <div className="h-2 w-full bg-brand-olive-dark rounded-full overflow-hidden">
                    <div className="h-full bg-brand-cream w-[96%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom code snippet box */}
            <div className="relative z-10 mt-8 p-4 rounded-xl bg-brand-olive-dark border border-brand-cream/15 font-mono text-[11px] text-brand-cream space-y-1">
              <div className="text-brand-olive-light font-bold">// INTELLISCORE Deployment Guard</div>
              <div className="text-brand-cream-muted">
                &gt; verifyArchitecture(productionSpec);
              </div>
              <div className="text-brand-cream font-bold">
                ✓ Ready for zero-downtime continuous scaling.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

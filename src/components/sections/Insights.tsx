"use client";

import React from "react";
import { ArrowUpRight, Clock } from "lucide-react";

const articles = [
  {
    category: "Cybersecurity",
    date: "Aug 2026",
    readTime: "5 min read",
    title: "Zero-Trust Architecture in Modern Next.js Enterprise Applications",
    desc: "How to eliminate security vulnerabilities in server components, API routes, and cloud edge infrastructure without sacrificing user experience.",
  },
  {
    category: "AI & Automation",
    date: "Aug 2026",
    readTime: "7 min read",
    title: "Building Autonomous Agentic Workflows: Beyond Simple Chatbots",
    desc: "Why modern companies are shifting from prompt engineering to deterministic multi-agent state machines with self-correcting execution pipelines.",
  },
  {
    category: "Web Engineering",
    date: "Jul 2026",
    readTime: "4 min read",
    title: "Sub-100ms Web Performance: The Core Web Vitals Optimization Playbook",
    desc: "Engineering high-traffic web platforms that achieve perfect 100/100 Lighthouse scores and convert visitors at twice the industry average.",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="relative py-32 px-6 md:px-12 bg-brand-olive-deep overflow-hidden border-t border-brand-cream/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-0.5 w-12 bg-brand-cream" />
              <span className="text-xs font-mono tracking-widest text-brand-cream uppercase font-bold">
                // INTEL & THOUGHT LEADERSHIP
              </span>
            </div>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88]">
              ENGINEERING <br />
              <span className="text-brand-olive-light">INSIGHTS.</span>
            </h2>
          </div>
          <p className="text-brand-cream-muted max-w-md text-base sm:text-lg font-light leading-relaxed">
            In-depth technical analysis on software architecture, agentic automation, and defensive cyber strategy.
          </p>
        </div>

        {/* Editorial 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="p-8 rounded-2xl bg-brand-olive-surface border border-brand-cream/15 hover:border-brand-cream/60 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xl hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cream bg-brand-olive px-3 py-1 rounded-full border border-brand-cream/20 font-bold">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-brand-cream-muted">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-cream mb-4 group-hover:text-white transition-colors leading-tight">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-brand-cream-muted font-light leading-relaxed mb-8">
                  {art.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-cream/10 flex items-center justify-between text-xs font-mono text-brand-cream-muted group-hover:text-brand-cream transition-colors">
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4 text-brand-cream group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

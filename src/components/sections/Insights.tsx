"use client";

import React from "react";
import { ArrowUpRight, Clock, Tag } from "lucide-react";

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
    <section id="insights" className="relative py-28 px-6 md:px-12 bg-brand-slate overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-orange" />
              <span className="text-xs font-mono tracking-widest text-brand-orange uppercase">
                // INTEL & THOUGHT LEADERSHIP
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
              ENGINEERING <br />
              <span className="text-brand-orange">INSIGHTS.</span>
            </h2>
          </div>
          <p className="text-brand-cream/70 max-w-md text-sm md:text-base font-light">
            In-depth technical analysis on software architecture, agentic automation, and defensive cyber strategy.
          </p>
        </div>

        {/* Editorial 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="p-8 rounded-sm bg-brand-dark/80 border border-white/10 hover:border-brand-orange/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded border border-brand-orange/30">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-brand-cream/40">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-brand-orange transition-colors leading-tight">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-brand-cream/70 font-light leading-relaxed mb-8">
                  {art.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-brand-cream/50 group-hover:text-white transition-colors">
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

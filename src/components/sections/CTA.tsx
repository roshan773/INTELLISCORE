"use client";

import React, { useState } from "react";
import { ArrowRight, Send, CheckCircle2, ShieldCheck } from "lucide-react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "Web Development & AI",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="cta"
      className="relative py-32 px-6 md:px-12 bg-brand-orange text-brand-dark overflow-hidden selection:bg-brand-dark selection:text-brand-orange"
    >
      {/* Background Animated Geometric Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none tech-grid-dense" />
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full border-[40px] border-brand-dark/10 pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full border-[20px] border-brand-dark/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Big Headline & Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-brand-dark/10 border border-brand-dark/20 text-xs font-mono tracking-widest uppercase text-brand-dark font-bold">
              <span>// START A PROJECT</span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase text-brand-dark tracking-tight leading-[0.9]">
              READY TO BUILD <br />
              <span>WHAT&apos;S NEXT?</span>
            </h2>

            <p className="text-lg sm:text-xl text-brand-dark/85 font-medium leading-relaxed max-w-lg">
              Let&apos;s turn your ideas into intelligent, secure, scalable technology that powers
              exponential business growth.
            </p>

            <div className="pt-4 border-t border-brand-dark/15 space-y-2 text-sm font-mono text-brand-dark/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-dark" />
                <span>NDA Protected & Confidential Discovery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-dark" />
                <span>Enterprise Architecture Blueprint Included</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Interactive Inquiry Box */}
          <div className="lg:col-span-6">
            <div className="p-8 md:p-10 rounded-sm bg-brand-dark text-white border border-white/10 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-orange/20 border border-brand-orange text-brand-orange flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Discovery Request Received
                  </h3>
                  <p className="text-sm text-brand-cream/70 max-w-md mx-auto">
                    An INTELLISCORE principal engineer will review your project requirements and get
                    back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-brand-orange underline uppercase tracking-wider mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="font-display text-2xl font-bold text-white mb-2">
                    Initiate Technical Discovery
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-brand-cream/60 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-brand-surface border border-white/10 text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-brand-cream/60 mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="s.jenkins@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-brand-surface border border-white/10 text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-brand-cream/60 mb-1.5">
                      Primary Focus Area
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-brand-surface border border-white/10 text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
                    >
                      <option>Web Development & Platform Architecture</option>
                      <option>AI Workflow & Autonomous Agents</option>
                      <option>Cybersecurity & Vulnerability Audit</option>
                      <option>Custom Enterprise Software</option>
                      <option>Full Digital Transformation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-brand-cream/60 mb-1.5">
                      Project Goals / Scope
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your objectives, timeline, and current tech stack..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-brand-surface border border-white/10 text-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-sm bg-brand-orange hover:bg-brand-orange-light text-brand-dark font-display font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-orange/20 cursor-pointer"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

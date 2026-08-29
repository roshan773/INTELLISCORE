"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "Web Architecture & Modern Platforms",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          service: formState.service,
          message: formState.message,
          source: "homepage-cta",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.message || "Unable to complete request. Please try again later.");
      }
    } catch {
      setErrorMessage("Network connectivity issue. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="cta"
      className="relative py-36 px-6 md:px-12 bg-brand-cream-light text-brand-olive-dark overflow-hidden selection:bg-brand-olive selection:text-brand-cream"
    >
      <div className="absolute inset-0 opacity-15 pointer-events-none tech-grid-dense" />
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full border-[40px] border-brand-olive/10 pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full border-[20px] border-brand-olive/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Big Headline & Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-olive/15 border border-brand-olive/30 text-xs font-mono tracking-widest uppercase text-brand-olive font-bold">
              <span>// START A PROJECT</span>
            </div>

            <h2 className="font-display text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold uppercase text-brand-olive-dark tracking-tight leading-[0.85]">
              READY TO BUILD <br />
              <span className="text-brand-olive">WHAT&apos;S NEXT?</span>
            </h2>

            <p className="text-lg sm:text-xl text-brand-olive-deep font-normal leading-relaxed max-w-lg">
              Let&apos;s turn your ideas into intelligent, secure, scalable technology that powers
              exponential business growth.
            </p>

            <div className="pt-6 border-t border-brand-olive/20 space-y-2.5 text-sm font-mono text-brand-olive-deep">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-olive" />
                <span className="font-medium">NDA Protected & Confidential Discovery</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-brand-olive" />
                <span className="font-medium">Enterprise Architecture Blueprint Included</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Interactive Inquiry Box */}
          <div className="lg:col-span-6">
            <div className="p-8 md:p-12 rounded-3xl bg-brand-olive-dark text-brand-cream border border-brand-cream/20 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-cream/20 border border-brand-cream text-brand-cream flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-brand-cream">
                    Discovery Request Received
                  </h3>
                  <p className="text-sm text-brand-cream-muted max-w-md mx-auto">
                    An INTELLUSCORE principal engineer will review your project requirements and get
                    back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", service: "Web Architecture & Modern Platforms", message: "" });
                    }}
                    className="text-xs font-mono text-brand-cream underline uppercase tracking-wider mt-4 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="font-display text-3xl font-bold text-brand-cream mb-2">
                    Initiate Technical Discovery
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-900/30 border border-red-500/30 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-brand-cream-muted mb-1.5 font-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-brand-olive-surface border border-brand-cream/20 text-brand-cream text-sm focus:outline-none focus:border-brand-cream transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-brand-cream-muted mb-1.5 font-bold">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="s.jenkins@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-brand-olive-surface border border-brand-cream/20 text-brand-cream text-sm focus:outline-none focus:border-brand-cream transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-brand-cream-muted mb-1.5 font-bold">
                      Primary Focus Area
                    </label>
                    <select
                      name="service"
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-brand-olive-surface border border-brand-cream/20 text-brand-cream text-sm focus:outline-none focus:border-brand-cream transition-colors cursor-pointer"
                    >
                      <option>Web Architecture & Modern Platforms</option>
                      <option>AI Workflow & Autonomous Agents</option>
                      <option>Cybersecurity & Vulnerability Audit</option>
                      <option>Custom Enterprise Software</option>
                      <option>Full Digital Transformation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-brand-cream-muted mb-1.5 font-bold">
                      Project Scope & Goals
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      placeholder="Briefly describe your objectives, timeline, and current tech stack..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-brand-olive-surface border border-brand-cream/20 text-brand-cream text-sm focus:outline-none focus:border-brand-cream transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-brand-cream hover:bg-white text-brand-olive-dark font-display font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-cream/20 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Transmitting Request...</span>
                    ) : (
                      <>
                        <span>Start a Conversation</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
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

"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Lock, Send, Sparkles } from "lucide-react";

const serviceOptions = [
  "Web Architecture & Modern Platforms",
  "AI Workflow & Autonomous Agents",
  "Cybersecurity & Vulnerability Audit",
  "Custom Enterprise Software",
  "Cloud Modernization & DevOps (AWS/GCP)",
  "Full Digital Transformation",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: serviceOptions[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="p-8 md:p-12 rounded-3xl bg-brand-olive-dark text-brand-cream border border-brand-cream/20 shadow-2xl relative">
      {submitted ? (
        <div className="py-12 text-center space-y-5 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-brand-cream/20 border border-brand-cream text-brand-cream flex items-center justify-center mx-auto shadow-xl">
            <CheckCircle2 className="w-8 h-8 text-brand-cream" />
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono text-brand-olive-light uppercase tracking-widest font-bold">
              // DISCOVERY REQUEST TRANSMITTED
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-brand-cream">
              Discovery Request Received
            </h3>
            <p className="text-sm text-brand-cream-muted max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-brand-cream font-medium">{formState.name}</span>. An INTELLUSCORE
              principal engineer is reviewing your requirements and will reach out to{" "}
              <span className="text-brand-cream font-medium">{formState.email}</span> within 24 hours.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-brand-olive-surface border border-brand-cream/15 max-w-sm mx-auto text-left text-xs font-mono space-y-1.5">
            <div className="flex justify-between text-brand-cream-muted">
              <span>Reference ID:</span>
              <span className="text-brand-cream font-bold">IS-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
            <div className="flex justify-between text-brand-cream-muted">
              <span>SLA Response:</span>
              <span className="text-brand-olive-light font-bold">Within 24 Hours</span>
            </div>
            <div className="flex justify-between text-brand-cream-muted border-t border-brand-cream/10 pt-1.5">
              <span>Confidentiality:</span>
              <span className="text-brand-cream font-bold">Mutual NDA Protected</span>
            </div>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setFormState({ name: "", email: "", service: serviceOptions[0], message: "" });
            }}
            className="text-xs font-mono text-brand-cream underline uppercase tracking-wider hover:text-white transition-colors cursor-pointer pt-2 inline-block"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-olive-surface border border-brand-cream/15 text-[11px] font-mono text-brand-olive-light uppercase font-bold mb-3">
              <Sparkles className="w-3 h-3" />
              <span>// TECHNICAL DISCOVERY</span>
            </div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-brand-cream">
              Initiate Technical Discovery
            </div>
            <p className="text-xs sm:text-sm text-brand-cream-muted font-light mt-1">
              Tell us about your architecture, scaling goals, or cybersecurity requirements.
            </p>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-brand-cream-muted mb-1.5 font-bold">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-brand-olive-surface border border-brand-cream/20 text-brand-cream text-sm placeholder:text-brand-cream-muted/40 focus:outline-none focus:border-brand-cream transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-brand-cream-muted mb-1.5 font-bold">
              Work Email *
            </label>
            <input
              type="email"
              required
              placeholder="s.jenkins@company.com"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-brand-olive-surface border border-brand-cream/20 text-brand-cream text-sm placeholder:text-brand-cream-muted/40 focus:outline-none focus:border-brand-cream transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-brand-cream-muted mb-1.5 font-bold">
              Primary Focus Area *
            </label>
            <select
              value={formState.service}
              onChange={(e) => setFormState({ ...formState, service: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-brand-olive-surface border border-brand-cream/20 text-brand-cream text-sm focus:outline-none focus:border-brand-cream transition-colors cursor-pointer"
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-brand-olive-dark text-brand-cream">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-brand-cream-muted mb-1.5 font-bold">
              Project Scope & Goals *
            </label>
            <textarea
              rows={4}
              required
              placeholder="Briefly describe your objectives, timeline, and current tech stack..."
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-brand-olive-surface border border-brand-cream/20 text-brand-cream text-sm placeholder:text-brand-cream-muted/40 focus:outline-none focus:border-brand-cream transition-colors leading-relaxed"
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-brand-cream-muted pt-1">
            <div className="flex items-center gap-2 text-brand-cream">
              <ShieldCheck className="w-4 h-4 text-brand-olive-light" />
              <span>Mutual NDA Protected</span>
            </div>
            <div className="flex items-center gap-1.5 text-brand-olive-light">
              <Lock className="w-3.5 h-3.5" />
              <span>256-Bit Encrypted</span>
            </div>
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
  );
}

"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Lock, Sparkles, Send } from "lucide-react";

const serviceOptions = [
  "Next-Gen Web Architecture & Platform",
  "Autonomous AI Agent Workflows & RAG",
  "Zero-Trust Cybersecurity & Pen Testing",
  "Custom Distributed Enterprise Software",
  "Cloud Modernization & DevOps (AWS/GCP)",
  "Full-Spectrum Digital Transformation",
];

const budgetTiers = [
  "$25k – $50k",
  "$50k – $100k",
  "$100k – $250k",
  "$250k+ / Enterprise",
];

const timelineOptions = [
  "Immediate (Next 2–4 Weeks)",
  "1 – 3 Months",
  "Strategic Roadmap (3–6 Months)",
  "Exploratory Discovery",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    service: serviceOptions[0],
    budget: budgetTiers[1],
    timeline: timelineOptions[0],
    message: "",
    ndaRequired: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="p-8 md:p-14 rounded-3xl bg-brand-olive-surface border border-brand-cream/25 text-brand-cream shadow-2xl text-center space-y-6 animate-fadeIn">
        <div className="w-20 h-20 rounded-full bg-brand-cream/15 border border-brand-cream text-brand-cream flex items-center justify-center mx-auto shadow-xl">
          <CheckCircle2 className="w-10 h-10 text-brand-olive-light" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono text-brand-olive-light uppercase tracking-widest font-bold">
            // INQUIRY DISPATCHED SUCCESSFULLY
          </div>
          <h3 className="font-display text-4xl font-bold text-brand-cream">
            Discovery Brief Received
          </h3>
          <p className="text-sm sm:text-base text-brand-cream-muted max-w-lg mx-auto font-light leading-relaxed">
            Thank you, <span className="text-brand-cream font-medium">{formData.name}</span>. An INTELLISCORE
            principal systems engineer is reviewing your technical specifications and will respond at{" "}
            <span className="text-brand-cream font-medium">{formData.email}</span> within 24 hours.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-brand-olive-dark border border-brand-cream/15 max-w-md mx-auto text-left text-xs font-mono space-y-2">
          <div className="text-brand-cream-muted">Reference ID: <span className="text-brand-cream font-bold">IS-{Math.floor(100000 + Math.random() * 900000)}</span></div>
          <div className="text-brand-cream-muted">Priority: <span className="text-brand-olive-light font-bold">HIGH (Executive Desk)</span></div>
          <div className="text-brand-cream-muted">Confidentiality: <span className="text-brand-cream font-bold">Protected under Mutual NDA</span></div>
        </div>

        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-mono text-brand-cream underline uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
        >
          Submit Another Technical Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 md:p-12 rounded-3xl bg-brand-olive-surface border border-brand-cream/20 text-brand-cream shadow-2xl space-y-6 relative"
    >
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-olive-dark border border-brand-cream/15 text-[11px] font-mono text-brand-olive-light uppercase font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TECHNICAL DISCOVERY & RFP</span>
        </div>
        <h3 className="font-display text-3xl sm:text-4xl font-bold text-brand-cream">
          Initiate Engineering Consultation
        </h3>
        <p className="text-xs sm:text-sm text-brand-cream-muted font-light mt-1">
          Tell us about your architecture, scaling goals, and cybersecurity requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-brand-cream-muted mb-1.5 font-bold">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Dr. Arthur Pendelton"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-5 py-3.5 rounded-xl bg-brand-olive-dark border border-brand-cream/20 text-brand-cream text-sm focus:outline-none focus:border-brand-cream transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-brand-cream-muted mb-1.5 font-bold">
            Work Email *
          </label>
          <input
            type="email"
            required
            placeholder="a.pendelton@enterprise.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-5 py-3.5 rounded-xl bg-brand-olive-dark border border-brand-cream/20 text-brand-cream text-sm focus:outline-none focus:border-brand-cream transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-brand-cream-muted mb-1.5 font-bold">
            Company / Organization
          </label>
          <input
            type="text"
            placeholder="e.g. Apex Global Technologies"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-5 py-3.5 rounded-xl bg-brand-olive-dark border border-brand-cream/20 text-brand-cream text-sm focus:outline-none focus:border-brand-cream transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-brand-cream-muted mb-1.5 font-bold">
            Job Title / Role
          </label>
          <input
            type="text"
            placeholder="e.g. Chief Technology Officer"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-5 py-3.5 rounded-xl bg-brand-olive-dark border border-brand-cream/20 text-brand-cream text-sm focus:outline-none focus:border-brand-cream transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-brand-cream-muted mb-1.5 font-bold">
            Primary Focus Area *
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-5 py-3.5 rounded-xl bg-brand-olive-dark border border-brand-cream/20 text-brand-cream text-sm focus:outline-none focus:border-brand-cream transition-colors"
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
            Expected Investment Range
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-5 py-3.5 rounded-xl bg-brand-olive-dark border border-brand-cream/20 text-brand-cream text-sm focus:outline-none focus:border-brand-cream transition-colors"
          >
            {budgetTiers.map((b) => (
              <option key={b} value={b} className="bg-brand-olive-dark text-brand-cream">
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-brand-cream-muted mb-1.5 font-bold">
          Target Launch Timeline
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {timelineOptions.map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => setFormData({ ...formData, timeline: time })}
              className={`p-3 rounded-xl border text-[11px] font-mono transition-all text-left cursor-pointer ${
                formData.timeline === time
                  ? "bg-brand-cream text-brand-olive-dark border-brand-cream font-bold shadow-md"
                  : "bg-brand-olive-dark text-brand-cream-muted border-brand-cream/15 hover:border-brand-cream/40"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-brand-cream-muted mb-1.5 font-bold">
          Project Scope, Current Infrastructure & Goals *
        </label>
        <textarea
          rows={4}
          required
          placeholder="Briefly describe your objectives, existing tech stack, bottlenecks, or security compliance targets..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-5 py-3.5 rounded-xl bg-brand-olive-dark border border-brand-cream/20 text-brand-cream text-sm focus:outline-none focus:border-brand-cream transition-colors"
        />
      </div>

      <div className="flex items-center justify-between pt-2">
        <label className="flex items-center gap-2.5 text-xs font-mono text-brand-cream cursor-pointer">
          <input
            type="checkbox"
            checked={formData.ndaRequired}
            onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
            className="w-4 h-4 rounded border-brand-cream/30 text-brand-olive focus:ring-0"
          />
          <span>Execute Mutual Non-Disclosure Agreement (NDA)</span>
        </label>

        <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-brand-olive-light">
          <Lock className="w-3.5 h-3.5" />
          <span>256-Bit SSL Encrypted</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-full bg-brand-cream hover:bg-white text-brand-olive-dark font-display font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-cream/20 cursor-pointer disabled:opacity-50"
      >
        {loading ? (
          <span>Dispatching Brief...</span>
        ) : (
          <>
            <span>Submit Technical Discovery Request</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}

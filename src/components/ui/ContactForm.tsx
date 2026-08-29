"use client";

import React, { useState } from "react";
import {
  Globe,
  Bot,
  ShieldAlert,
  Code2,
  Cloud,
  Rocket,
  User,
  Mail,
  Building,
  Briefcase,
  Lock,
  CheckCircle2,
  Send,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Info,
} from "lucide-react";

const serviceCategories = [
  { id: "web", name: "Web Architecture", icon: Globe, sub: "High-Performance Modern Platforms" },
  { id: "ai", name: "AI & Agents", icon: Bot, sub: "Autonomous Workflows & RAG" },
  { id: "cyber", name: "Cybersecurity", icon: ShieldAlert, sub: "Zero-Trust & Pen Testing" },
  { id: "software", name: "Custom Software", icon: Code2, sub: "Distributed Systems & APIs" },
  { id: "cloud", name: "Cloud & DevOps", icon: Cloud, sub: "AWS / GCP Infrastructure" },
  { id: "transform", name: "Full Transformation", icon: Rocket, sub: "End-to-End Replatforming" },
];

const budgetTiers = [
  { label: "$25k – $50k", desc: "Targeted MVP / Audit" },
  { label: "$50k – $100k", desc: "Core Build / Automation" },
  { label: "$100k – $250k", desc: "Enterprise Platform" },
  { label: "$250k+", desc: "Full Architecture Pod" },
];

const timelineTiers = [
  "Immediate (2–4 Wks)",
  "1 – 3 Months",
  "Strategic Roadmap",
  "Exploratory Discovery",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState(serviceCategories[0].name);
  const [selectedBudget, setSelectedBudget] = useState(budgetTiers[1].label);
  const [selectedTimeline, setSelectedTimeline] = useState(timelineTiers[0]);
  const [ndaChecked, setNdaChecked] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  if (submitted) {
    return (
      <div className="p-8 md:p-14 rounded-3xl bg-brand-olive-surface border border-brand-cream/30 text-brand-cream shadow-2xl text-center space-y-6 animate-fadeIn">
        <div className="w-20 h-20 rounded-full bg-brand-cream text-brand-olive-dark flex items-center justify-center mx-auto shadow-2xl shadow-brand-cream/20 scale-110">
          <CheckCircle2 className="w-10 h-10 text-brand-olive-dark" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-olive-dark border border-brand-cream/20 text-xs font-mono text-brand-olive-light uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISPATCH CONFIRMED</span>
          </div>
          <h3 className="font-display text-4xl sm:text-5xl font-bold text-brand-cream">
            Discovery Brief Received
          </h3>
          <p className="text-sm sm:text-base text-brand-cream-muted max-w-lg mx-auto font-light leading-relaxed">
            Thank you, <span className="text-brand-cream font-semibold">{formData.name}</span>. An INTELLISCORE
            principal systems engineer is reviewing your technical specifications and will contact you at{" "}
            <span className="text-brand-cream font-semibold">{formData.email}</span> within 24 hours.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-brand-olive-dark border border-brand-cream/15 max-w-md mx-auto text-left text-xs font-mono space-y-2.5">
          <div className="flex justify-between text-brand-cream-muted">
            <span>Reference Token:</span>
            <span className="text-brand-cream font-bold">IS-{Math.floor(100000 + Math.random() * 900000)}</span>
          </div>
          <div className="flex justify-between text-brand-cream-muted">
            <span>Focus Area:</span>
            <span className="text-brand-olive-light font-bold">{selectedService}</span>
          </div>
          <div className="flex justify-between text-brand-cream-muted">
            <span>Target Budget:</span>
            <span className="text-brand-cream font-bold">{selectedBudget}</span>
          </div>
          <div className="flex justify-between text-brand-cream-muted border-t border-brand-cream/10 pt-2">
            <span>Confidentiality:</span>
            <span className="text-brand-olive-light font-bold">Protected under Mutual NDA</span>
          </div>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", company: "", role: "", message: "" });
          }}
          className="text-xs font-mono text-brand-cream underline uppercase tracking-widest hover:text-white transition-colors cursor-pointer pt-2 inline-block"
        >
          ← Submit Another Technical Brief
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 md:p-12 rounded-3xl bg-brand-olive-surface border border-brand-cream/25 text-brand-cream shadow-2xl space-y-8 relative"
    >
      {/* Form Header with Visual Instructions */}
      <div className="border-b border-brand-cream/15 pb-6">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-olive-dark border border-brand-cream/20 text-xs font-mono text-brand-olive-light uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5 text-brand-cream" />
            <span>TECHNICAL DISCOVERY & RFP FORM</span>
          </div>
          <span className="text-[11px] font-mono text-brand-cream-muted hidden sm:block">
            Estimated time: ~2 minutes
          </span>
        </div>

        <h3 className="font-display text-3xl sm:text-4xl font-bold text-brand-cream">
          Request Technical Consultation
        </h3>
        <p className="text-xs sm:text-sm text-brand-cream-muted font-light mt-1.5 leading-relaxed">
          Please complete the 3 steps below to receive a custom architecture blueprint, technical feasibility assessment, and timeline estimate.
        </p>
      </div>

      {/* STEP 1: Select Capability */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-cream font-bold">
            <span className="w-5 h-5 rounded-full bg-brand-cream text-brand-olive-dark flex items-center justify-center text-[10px] font-bold">
              1
            </span>
            <span>Select Your Primary Requirement *</span>
          </label>
          <span className="text-[10px] font-mono text-brand-cream-muted">Click to select</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {serviceCategories.map((serv) => {
            const Icon = serv.icon;
            const isSelected = selectedService === serv.name;
            return (
              <button
                key={serv.id}
                type="button"
                onClick={() => setSelectedService(serv.name)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[95px] group ${
                  isSelected
                    ? "bg-brand-cream text-brand-olive-dark border-brand-cream shadow-xl shadow-brand-cream/20 scale-[1.02]"
                    : "bg-brand-olive-dark text-brand-cream border-brand-cream/15 hover:border-brand-cream/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isSelected ? "text-brand-olive-dark" : "text-brand-olive-light"
                    }`}
                  />
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isSelected ? "bg-brand-olive-dark" : "bg-brand-cream/20"
                    }`}
                  />
                </div>
                <div>
                  <div
                    className={`font-display text-sm font-bold leading-tight ${
                      isSelected ? "text-brand-olive-dark" : "text-brand-cream"
                    }`}
                  >
                    {serv.name}
                  </div>
                  <div
                    className={`text-[10px] font-mono truncate mt-0.5 ${
                      isSelected ? "text-brand-olive-deep font-semibold" : "text-brand-cream-muted"
                    }`}
                  >
                    {serv.sub}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* STEP 2: Stakeholder Information */}
      <div className="space-y-4 pt-2 border-t border-brand-cream/10">
        <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-cream font-bold">
          <span className="w-5 h-5 rounded-full bg-brand-cream text-brand-olive-dark flex items-center justify-center text-[10px] font-bold">
            2
          </span>
          <span>Your Contact & Organization Details *</span>
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="text-[11px] font-mono text-brand-cream-muted mb-1 font-medium">
              Full Name <span className="text-brand-cream">*</span>
            </div>
            <div className="relative">
              <User className="w-4 h-4 text-brand-cream/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                required
                placeholder="e.g. Dr. Arthur Pendelton"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-brand-olive-dark border border-brand-cream/20 text-brand-cream text-sm placeholder:text-brand-cream-muted/40 focus:outline-none focus:border-brand-cream transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono text-brand-cream-muted mb-1 font-medium">
              Work Email (for MNDA & Architecture Brief) <span className="text-brand-cream">*</span>
            </div>
            <div className="relative">
              <Mail className="w-4 h-4 text-brand-cream/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                required
                placeholder="a.pendelton@enterprise.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-brand-olive-dark border border-brand-cream/20 text-brand-cream text-sm placeholder:text-brand-cream-muted/40 focus:outline-none focus:border-brand-cream transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="text-[11px] font-mono text-brand-cream-muted mb-1 font-medium">
              Company / Organization Name
            </div>
            <div className="relative">
              <Building className="w-4 h-4 text-brand-cream/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="e.g. Apex Global Technologies"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-brand-olive-dark border border-brand-cream/20 text-brand-cream text-sm placeholder:text-brand-cream-muted/40 focus:outline-none focus:border-brand-cream transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono text-brand-cream-muted mb-1 font-medium">
              Job Title / Executive Role
            </div>
            <div className="relative">
              <Briefcase className="w-4 h-4 text-brand-cream/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="e.g. CTO / VP Engineering"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-brand-olive-dark border border-brand-cream/20 text-brand-cream text-sm placeholder:text-brand-cream-muted/40 focus:outline-none focus:border-brand-cream transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* STEP 3: Project Scope, Budget & Specifications */}
      <div className="space-y-5 pt-2 border-t border-brand-cream/10">
        <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-cream font-bold">
          <span className="w-5 h-5 rounded-full bg-brand-cream text-brand-olive-dark flex items-center justify-center text-[10px] font-bold">
            3
          </span>
          <span>Scope, Budget & Architecture Requirements *</span>
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <div className="text-[11px] font-mono text-brand-cream-muted mb-1.5 font-medium">
              Target Investment Tier
            </div>
            <div className="grid grid-cols-2 gap-2">
              {budgetTiers.map((tier) => (
                <button
                  key={tier.label}
                  type="button"
                  onClick={() => setSelectedBudget(tier.label)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedBudget === tier.label
                      ? "bg-brand-cream text-brand-olive-dark border-brand-cream font-bold shadow-md"
                      : "bg-brand-olive-dark text-brand-cream-muted border-brand-cream/15 hover:border-brand-cream/40"
                  }`}
                >
                  <div className="font-mono text-xs font-bold">{tier.label}</div>
                  <div className="text-[10px] opacity-75">{tier.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono text-brand-cream-muted mb-1.5 font-medium">
              Launch Timeline Horizon
            </div>
            <div className="grid grid-cols-2 gap-2">
              {timelineTiers.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTimeline(time)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer font-mono text-xs ${
                    selectedTimeline === time
                      ? "bg-brand-cream text-brand-olive-dark border-brand-cream font-bold shadow-md"
                      : "bg-brand-olive-dark text-brand-cream-muted border-brand-cream/15 hover:border-brand-cream/40"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <div className="text-[11px] font-mono text-brand-cream-muted font-medium">
              Describe Your Technical Objectives & Existing Stack <span className="text-brand-cream">*</span>
            </div>
            <span className="text-[10px] font-mono text-brand-cream-muted">
              {formData.message.length} / 1000
            </span>
          </div>

          <textarea
            rows={4}
            required
            maxLength={1000}
            placeholder="Briefly describe your objectives, current tech stack, concurrency bottlenecks, or security targets (e.g. SOC2, HIPAA, Zero-Trust)..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-4 rounded-2xl bg-brand-olive-dark border border-brand-cream/20 text-brand-cream text-sm placeholder:text-brand-cream-muted/40 focus:outline-none focus:border-brand-cream transition-colors leading-relaxed"
          />
        </div>
      </div>

      {/* NDA & Security Guarantee Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-brand-olive-dark border border-brand-cream/15">
        <label className="flex items-center gap-3 text-xs font-mono text-brand-cream cursor-pointer">
          <input
            type="checkbox"
            checked={ndaChecked}
            onChange={(e) => setNdaChecked(e.target.checked)}
            className="w-4 h-4 rounded border-brand-cream/40 bg-brand-olive text-brand-cream focus:ring-0 cursor-pointer"
          />
          <span className="font-medium">Execute Mutual Non-Disclosure Agreement (MNDA)</span>
        </label>

        <div className="flex items-center gap-2 text-xs font-mono text-brand-olive-light font-bold">
          <Lock className="w-3.5 h-3.5" />
          <span>256-Bit SSL Encrypted</span>
        </div>
      </div>

      {/* Action Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-full bg-brand-cream hover:bg-white text-brand-olive-dark font-display font-bold uppercase tracking-wider text-sm sm:text-base flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand-cream/20 cursor-pointer disabled:opacity-50"
      >
        {loading ? (
          <span>Transmitting Discovery Brief...</span>
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

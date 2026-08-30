import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  CheckCircle2,
  ShieldCheck,
  Clock,
  ArrowRight,
  Sparkles,
  Terminal,
  Cpu,
  ArrowUpRight,
  Code2,
} from "lucide-react";

export const metadata = {
  title: "Transmission Received",
  description:
    "Your discovery inquiry has been securely transmitted. An INTELLUSCORE principal systems architect is reviewing your technical brief.",
  robots: {
    index: false,
    follow: false,
  },
};

const protocolSteps = [
  {
    code: "STAGE-01",
    title: "Payload Verification & 256-Bit Cipher",
    status: "Completed",
    statusColor: "text-emerald-400 border-emerald-400/30 bg-emerald-950/40",
    desc: "Your technical specifications have been ingested and verified under our bilateral zero-trust protocol.",
    icon: ShieldCheck,
  },
  {
    code: "STAGE-02",
    title: "Principal Architect Requirements Analysis",
    status: "In Progress",
    statusColor: "text-amber-300 border-amber-400/30 bg-amber-950/40 animate-pulse",
    desc: "A senior systems engineer is reviewing your framework requirements, scaling objectives, and technical constraints.",
    icon: Cpu,
  },
  {
    code: "STAGE-03",
    title: "Bilateral Mutual NDA Alignment",
    status: "Queued",
    statusColor: "text-brand-cream-muted border-brand-cream/20 bg-brand-olive-surface/40",
    desc: "We ensure full IP ownership and intellectual property confidentiality from initial discovery.",
    icon: Terminal,
  },
  {
    code: "STAGE-04",
    title: "30-Min Architecture Discovery Session",
    status: "Standby",
    statusColor: "text-brand-cream-muted border-brand-cream/20 bg-brand-olive-surface/40",
    desc: "We will deliver a structured roadmap, technical feasibility breakdown, and initial sprint timeline.",
    icon: Clock,
  },
];

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-brand-olive-dark text-brand-cream relative selection:bg-brand-cream selection:text-brand-olive-dark">
      <Navbar />

      {/* Hero Transmission Section */}
      <section className="relative pt-40 pb-28 px-6 md:px-12 bg-gradient-to-b from-brand-olive-dark via-brand-olive-deep to-brand-olive-dark border-b border-brand-cream/10 overflow-hidden">
        {/* Background Image with Dark Scrim */}
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: "url('/images/hero-contact-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-olive-dark/90 via-brand-olive-dark/60 to-brand-olive-dark pointer-events-none" />

        {/* Background Cybernetic Grids & Lights */}
        <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-olive/20 blur-[120px] pointer-events-none" />
        <div className="absolute -right-24 top-1/3 w-80 h-80 rounded-full border border-brand-cream/10 pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
          {/* Holographic Glowing Emblem */}
          <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-brand-olive-light/50 animate-ping opacity-30" />
            <div className="absolute inset-0 rounded-full border border-dashed border-brand-cream/30 animate-spin" style={{ animationDuration: "16s" }} />
            <div className="w-20 h-20 rounded-full bg-brand-olive-surface border border-brand-cream/40 flex items-center justify-center shadow-2xl shadow-brand-cream/25">
              <CheckCircle2 className="w-10 h-10 text-brand-cream" />
            </div>
          </div>

          {/* Holographic Protocol Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-olive-surface border border-brand-cream/20 text-xs font-mono text-brand-olive-light tracking-widest uppercase font-bold shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// TRANSMISSION CONFIRMED // PROTOCOL ACTIVE</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase text-brand-cream tracking-tight leading-[0.9]">
            TRANSMISSION RECEIVED. <br />
            <span className="text-brand-olive-light">WE ARE INITIALIZING YOUR DISCOVERY.</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-cream-muted font-light max-w-2xl mx-auto leading-relaxed">
            Thank you for reaching out to INTELLUSCORE. Your technical discovery brief has been routed to our
            principal systems engineers. We will contact you within our guaranteed 24-hour SLA.
          </p>

          {/* SLA Token Box */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 p-4 px-8 rounded-2xl bg-brand-olive-surface/80 border border-brand-cream/20 font-mono text-xs text-brand-cream backdrop-blur-md shadow-2xl">
            <div className="flex items-center gap-2">
              <span className="text-brand-cream-muted">Response SLA:</span>
              <span className="text-brand-olive-light font-bold">Within 24 Hours</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-brand-cream/20" />
            <div className="flex items-center gap-2">
              <span className="text-brand-cream-muted">Security:</span>
              <span className="text-brand-cream font-bold">Mutual NDA Protected</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-brand-cream/20" />
            <div className="flex items-center gap-2">
              <span className="text-brand-cream-muted">Direct Desk:</span>
              <a href="mailto:support.intelluscore@gmail.com" className="text-brand-cream font-bold underline hover:text-white">
                support.intelluscore@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Technical Discovery Lifecycle Tracker */}
      <section className="py-24 px-6 md:px-12 bg-brand-olive-deep border-b border-brand-cream/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="text-xs font-mono text-brand-olive-light uppercase tracking-widest font-bold">
              // LIFECYCLE ROADMAP
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-brand-cream">
              Discovery Execution Stages
            </h2>
            <p className="text-sm text-brand-cream-muted font-light max-w-xl mx-auto">
              Here is the exact progression your project will undergo with our engineering leads:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {protocolSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-brand-olive-surface border border-brand-cream/15 relative overflow-hidden group hover:border-brand-cream/40 transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-olive-dark border border-brand-cream/20 flex items-center justify-center text-brand-cream">
                        <Icon className="w-5 h-5 text-brand-olive-light" />
                      </div>
                      <span className="font-mono text-xs font-bold text-brand-cream-muted tracking-wider">
                        {step.code}
                      </span>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full border text-[11px] font-mono font-bold uppercase tracking-wider ${step.statusColor}`}
                    >
                      {step.status}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-brand-cream mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-cream-muted font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Next Exploration CTAs */}
      <section className="py-24 px-6 md:px-12 bg-brand-olive-dark">
        <div className="max-w-5xl mx-auto rounded-3xl bg-brand-olive-surface border border-brand-cream/20 p-8 sm:p-14 text-center space-y-8 shadow-2xl">
          <div className="space-y-3">
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-brand-cream">
              EXPLORE WHILE WE PREPARE YOUR BRIEF
            </h2>
            <p className="text-sm sm:text-base text-brand-cream-muted font-light max-w-xl mx-auto">
              Dive deeper into our enterprise architecture blueprints, custom AI pipelines, and tech stack standards.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <MagneticButton variant="primary" href="/solutions" className="rounded-full px-7 py-3.5 text-xs font-bold">
              <span>Explore Solutions</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton variant="secondary" href="/technology" className="rounded-full px-7 py-3.5 text-xs font-bold">
              <span>View Tech Stack</span>
              <Code2 className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton variant="outline" href="/" className="rounded-full px-7 py-3.5 text-xs font-bold">
              <span>Return Home</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

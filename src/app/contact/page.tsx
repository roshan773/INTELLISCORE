import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ui/ContactForm";
import {
  Mail,
  ShieldCheck,
  Clock,
  FileCheck2,
  PhoneCall,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Contact & Technical Discovery — INTELLUSCORE",
  description:
    "Initiate an enterprise technical discovery consultation with INTELLUSCORE principal systems architects, AI engineers, and cybersecurity consultants.",
};

const discoverySteps = [
  {
    step: "01",
    title: "Submit Requirements or Discovery Brief",
    desc: "Complete the 2-minute form or email our engineering desk with your architectural goals and current stack.",
    icon: FileCheck2,
  },
  {
    step: "02",
    title: "Senior Architect Review & MNDA",
    desc: "A principal software engineer reviews your specifications under a bilateral Mutual Non-Disclosure Agreement.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "30-Min Architecture Discovery Session",
    desc: "We deliver a customized technical feasibility roadmap, sprint timeline, and cost estimate on a private call.",
    icon: PhoneCall,
  },
];

const directChannels = [
  {
    title: "Engineering Discovery Desk",
    email: "contact@intelluscore.io",
    desc: "For general inquiries, RFPs, and architecture consultations.",
    sla: "Response within 24 hours",
  },
  {
    title: "Security & Vulnerability Desk",
    email: "security@intelluscore.io",
    desc: "For security audits, penetration reports, and emergency incidents.",
    sla: "Immediate Priority",
  },
  {
    title: "Strategic Partnerships",
    email: "partners@intelluscore.io",
    desc: "For co-founding ventures and enterprise integrations.",
    sla: "48-Hour Response",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-olive-dark text-brand-cream relative">
      <Navbar />

      {/* Section 1: Page Header with Context */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 bg-gradient-to-b from-brand-olive-dark via-brand-olive-deep to-brand-olive-dark border-b border-brand-cream/10 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6 font-mono text-xs text-brand-cream-muted uppercase">
            <Link href="/" className="hover:text-brand-cream transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-cream font-bold">Contact Us</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-olive-surface border border-brand-cream/20 text-xs font-mono text-brand-olive-light uppercase font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24-HOUR PRINCIPAL ENGINEER RESPONSE GUARANTEE</span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88] mb-8">
            START A <br />
            <span className="text-brand-olive-light">CONVERSATION.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-brand-cream-muted font-light max-w-3xl leading-relaxed">
            Whether you need a modern high-performance web platform, autonomous AI workflow pipelines,
            or zero-trust cybersecurity hardening — connect directly with our engineering leadership.
          </p>
        </div>
      </section>

      {/* Section 2: Main Interactive Discovery & Form Section */}
      <section className="py-24 px-6 md:px-12 bg-brand-olive-deep">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: What to Expect & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            {/* Guide: What Happens Next */}
            <div className="p-8 rounded-3xl bg-brand-olive-surface border border-brand-cream/20 space-y-6 shadow-2xl">
              <div className="space-y-2">
                <div className="text-xs font-mono text-brand-olive-light uppercase tracking-widest font-bold">
                  // HOW TECHNICAL DISCOVERY WORKS
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-brand-cream">
                  What Happens Next?
                </h2>
                <p className="text-xs sm:text-sm text-brand-cream-muted font-light leading-relaxed">
                  We value your time. Here is our straightforward 3-step discovery process:
                </p>
              </div>

              <div className="space-y-4">
                {discoverySteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.step}
                      className="p-4 rounded-2xl bg-brand-olive-dark border border-brand-cream/10 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-brand-cream text-brand-olive-dark flex items-center justify-center font-display font-bold text-sm shrink-0 shadow-md">
                        {step.step}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-display text-lg font-bold text-brand-cream">
                          {step.title}
                        </h3>
                        <p className="text-xs text-brand-cream-muted font-light leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-brand-cream/10 flex items-center gap-2 text-xs font-mono text-brand-olive-light font-bold">
                <ShieldCheck className="w-4 h-4 text-brand-cream" />
                <span>Protected by Mutual NDA from Day 1</span>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="p-8 rounded-3xl bg-brand-olive-surface border border-brand-cream/20 space-y-5 shadow-2xl">
              <div className="space-y-1">
                <div className="text-xs font-mono text-brand-olive-light uppercase tracking-widest font-bold">
                  // PREFER DIRECT EMAIL?
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-cream">
                  Direct Inboxes
                </h3>
              </div>

              <div className="space-y-3">
                {directChannels.map((channel, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-brand-olive-dark border border-brand-cream/10 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-base font-bold text-brand-cream">
                        {channel.title}
                      </span>
                      <span className="text-[10px] font-mono text-brand-olive-light font-bold">
                        {channel.sla}
                      </span>
                    </div>

                    <a
                      href={`mailto:${channel.email}`}
                      className="flex items-center gap-2 text-xs font-mono text-brand-cream font-bold hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5 text-brand-olive-light" />
                      <span>{channel.email}</span>
                    </a>

                    <p className="text-[11px] text-brand-cream-muted font-light">
                      {channel.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Guided Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

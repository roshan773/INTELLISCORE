import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ui/ContactForm";
import {
  Mail,
  MapPin,
  ShieldCheck,
  Lock,
  Clock,
  KeyRound,
  FileCheck,
  CheckCircle2,
  ArrowUpRight,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Contact & Technical Discovery — INTELLISCORE",
  description:
    "Initiate an enterprise technical discovery consultation with INTELLISCORE principal systems architects, AI engineers, and cybersecurity consultants.",
};

const studios = [
  {
    city: "San Francisco",
    address: "500 Howard Street, Suite 1400",
    country: "United States",
    timezone: "PST (UTC-8)",
    focus: "AI Research & Venture Engineering",
    email: "sf@intelliscore.io",
  },
  {
    city: "London",
    address: "100 Bishopsgate, Level 22",
    country: "United Kingdom",
    timezone: "GMT (UTC+0)",
    focus: "FinTech Architecture & Edge Infrastructure",
    email: "london@intelliscore.io",
  },
  {
    city: "Zurich",
    address: "Bahnhofstrasse 45",
    country: "Switzerland",
    timezone: "CET (UTC+1)",
    focus: "Zero-Trust Cryptographic Vaults",
    email: "zurich@intelliscore.io",
  },
  {
    city: "Singapore",
    address: "Marina Bay Financial Centre, Tower 2",
    country: "Singapore",
    timezone: "SGT (UTC+8)",
    focus: "Cloud Modernization & Enterprise DevOps",
    email: "apac@intelliscore.io",
  },
];

const contactChannels = [
  {
    title: "Executive Engineering Discovery",
    email: "contact@intelliscore.io",
    desc: "Direct line for CTOs, product leaders, and enterprise technical teams.",
    sla: "24-Hour Engineer SLA",
  },
  {
    title: "Security & Vulnerability Disclosure",
    email: "security@intelliscore.io",
    desc: "For coordinated vulnerability disclosure, penetration audits, and emergency response.",
    sla: "Immediate Priority",
  },
  {
    title: "Venture & Strategic Partnerships",
    email: "partners@intelliscore.io",
    desc: "Co-founding ventures, enterprise integrations, and research alliances.",
    sla: "48-Hour Response",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-olive-dark text-brand-cream relative">
      <Navbar />

      {/* Page Header */}
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

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88] mb-8">
            START A <br />
            <span className="text-brand-olive-light">CONVERSATION.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-brand-cream-muted font-light max-w-3xl leading-relaxed">
            Connect directly with our principal software architects, AI workflow engineers, and cybersecurity consultants.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <section className="py-24 px-6 md:px-12 bg-brand-olive-deep border-b border-brand-cream/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Communication Lines & SLAs */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-olive border border-brand-cream/20 text-xs font-mono tracking-widest uppercase font-bold text-brand-cream">
                // DIRECT COMMUNICATIONS
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-brand-cream">
                Direct Line to Engineering Leadership
              </h2>

              <p className="text-sm sm:text-base text-brand-cream-muted font-light leading-relaxed">
                We don&apos;t use generic sales intermediaries. Your inquiry is reviewed directly by senior
                practitioners who understand distributed systems, model fine-tuning, and zero-trust cryptography.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              {contactChannels.map((channel, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-brand-olive-surface border border-brand-cream/15 hover:border-brand-cream/40 transition-all duration-300 space-y-2 shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-brand-cream">
                      {channel.title}
                    </span>
                    <span className="text-[10px] font-mono text-brand-olive-light bg-brand-olive-dark px-2.5 py-1 rounded-full border border-brand-cream/10 font-bold">
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

                  <p className="text-xs text-brand-cream-muted font-light">
                    {channel.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Security & Confidentiality Box */}
            <div className="p-6 rounded-2xl bg-brand-olive-surface border border-brand-cream/20 space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-olive-light uppercase font-bold">
                <ShieldCheck className="w-4 h-4 text-brand-cream" />
                <span>CONFIDENTIALITY & DATA GOVERNANCE</span>
              </div>
              <p className="text-xs text-brand-cream-muted font-light leading-relaxed">
                All client discovery notes, proprietary data schemas, and architecture blueprints are protected
                under our bilateral Mutual Non-Disclosure Agreement (MNDA) before technical exploration commences.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive RFP & Technical Consultation Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Global Studios Coordinates */}
      <section className="py-28 px-6 md:px-12 bg-brand-olive-dark border-b border-brand-cream/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-olive-surface border border-brand-cream/20 text-xs font-mono tracking-widest uppercase font-bold text-brand-cream mb-4">
              // GLOBAL ENGINEERING FOOTPRINT
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase text-brand-cream tracking-tight">
              WORLDWIDE STUDIO <br />
              <span className="text-brand-olive-light">COORDINATES.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studios.map((studio, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-brand-olive-surface border border-brand-cream/15 flex flex-col justify-between shadow-2xl hover:border-brand-cream/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-brand-olive-light uppercase font-bold">
                      {studio.country}
                    </span>
                    <span className="text-[10px] font-mono text-brand-cream/40">
                      {studio.timezone}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl font-bold text-brand-cream mb-2">
                    {studio.city}
                  </h3>

                  <div className="flex items-start gap-2 text-xs font-mono text-brand-cream-muted mb-4">
                    <MapPin className="w-4 h-4 text-brand-cream shrink-0 mt-0.5" />
                    <span>{studio.address}</span>
                  </div>

                  <p className="text-xs text-brand-cream-muted font-light leading-relaxed">
                    <strong>Primary Focus:</strong> {studio.focus}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-brand-cream/10">
                  <a
                    href={`mailto:${studio.email}`}
                    className="text-xs font-mono text-brand-cream font-bold hover:underline flex items-center gap-1.5"
                  >
                    <span>{studio.email}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-olive-light" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PGP Security Line Banner */}
      <section className="py-20 px-6 md:px-12 bg-brand-olive-deep border-b border-brand-cream/10">
        <div className="max-w-5xl mx-auto rounded-3xl bg-brand-olive-surface border border-brand-cream/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-olive-light uppercase font-bold">
              <KeyRound className="w-4 h-4 text-brand-cream" />
              <span>ENCRYPTED DISCLOSURE FINGERPRINT</span>
            </div>
            <h4 className="font-display text-2xl sm:text-3xl font-bold text-brand-cream">
              PGP Security Key Fingerprint
            </h4>
            <div className="font-mono text-xs text-brand-cream-muted break-all bg-brand-olive-dark p-3 rounded-xl border border-brand-cream/10">
              4F9B 83A1 2C09 E76D 5510 4A32 8E71 90BD 3FA2 11E8
            </div>
          </div>
          <a
            href="mailto:security@intelliscore.io?subject=PGP%20Encrypted%20Communication"
            className="px-6 py-3.5 rounded-full bg-brand-cream text-brand-olive-dark font-display font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shrink-0 shadow-lg shadow-brand-cream/20"
          >
            Import PGP Key
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

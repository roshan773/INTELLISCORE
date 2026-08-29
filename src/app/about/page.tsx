import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  ShieldCheck,
  Cpu,
  Globe,
  Award,
  Users,
  Compass,
  ArrowUpRight,
  CheckCircle2,
  Lock,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "About Us — INTELLISCORE | Engineering, AI & Cybersecurity",
  description:
    "Learn about INTELLISCORE's founding vision, engineering leadership, and global standards for building resilient, high-speed digital systems.",
};

const leadership = [
  {
    name: "Dr. Ethan Vance",
    role: "Founder & Chief Technology Officer",
    bio: "Former Principal Distributed Systems Architect with 15+ years engineering high-frequency financial vaults and zero-trust cloud topologies.",
    specialty: "High-Concurrency Architecture & Cryptography",
  },
  {
    name: "Elena Rostova",
    role: "Head of Artificial Intelligence & Agents",
    bio: "Ex-AI Research Lead specialized in deterministic multi-agent state machines, LLM fine-tuning, and enterprise autonomous pipelines.",
    specialty: "Autonomous Agents & Neural Information Retrieval",
  },
  {
    name: "Marcus Sterling",
    role: "Director of Cybersecurity & Offensive Defense",
    bio: "Certified Red Team Commander and Infosec consultant guiding Fortune 500 enterprises through SOC2, ISO 27001, and zero-day threat hardening.",
    specialty: "Zero-Trust Governance & Penetration Audits",
  },
];

const globalHubs = [
  { city: "San Francisco", region: "North America", focus: "AI Research & Venture Engineering" },
  { city: "London", region: "Europe", focus: "FinTech Architecture & Quantitative Systems" },
  { city: "Zurich", region: "Europe", focus: "Cryptographic Security & Cloud Vaults" },
  { city: "Singapore", region: "Asia-Pacific", focus: "Enterprise Automation & Cloud Ops" },
];

export default function AboutPage() {
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
            <span className="text-brand-cream font-bold">About Us</span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88] mb-8">
            ENGINEERING <br />
            <span className="text-brand-olive-light">WITHOUT COMPROMISE.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-brand-cream-muted font-light max-w-3xl leading-relaxed">
            INTELLISCORE was founded on a simple conviction: modern enterprises cannot afford fragile
            software, sluggish manual processes, or bolted-on security. We build systems where speed,
            intelligence, and defense are native from day one.
          </p>
        </div>
      </section>

      {/* Visual Narrative Section */}
      <section className="py-24 px-6 md:px-12 bg-brand-olive-deep border-b border-brand-cream/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-olive border border-brand-cream/20 text-xs font-mono tracking-widest uppercase font-bold text-brand-cream">
              // OUR ORIGIN & PHILOSOPHY
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-brand-cream tracking-tight leading-[0.9]">
              BRIDGING ENGINEERING, <br />
              <span className="text-brand-olive-light">AI, AND CYBER DEFENSE.</span>
            </h2>

            <p className="text-base sm:text-lg text-brand-cream-muted font-light leading-relaxed">
              Traditional technology agencies separate web development from cybersecurity and treat AI as
              a trendy afterthought. At INTELLISCORE, every web platform we engineer is built by full-stack
              software architects, hardened by defensive cybersecurity researchers, and enhanced by
              autonomous workflow engineers.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-cream/10">
              <div className="p-4 rounded-xl bg-brand-olive-surface border border-brand-cream/15">
                <div className="font-display text-3xl font-bold text-brand-cream mb-1">0%</div>
                <div className="text-xs font-mono text-brand-cream-muted">Technical Debt Policy</div>
              </div>
              <div className="p-4 rounded-xl bg-brand-olive-surface border border-brand-cream/15">
                <div className="font-display text-3xl font-bold text-brand-cream">100%</div>
                <div className="text-xs font-mono text-brand-cream-muted">Source Code Ownership</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-brand-cream/20 shadow-2xl relative aspect-[16/10]">
              <Image
                src="/images/hero-nexus.jpg"
                alt="INTELLISCORE Quantum Technology Nexus"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-olive-dark/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-brand-cream bg-brand-olive-dark/80 backdrop-blur-md p-3.5 rounded-xl border border-brand-cream/20">
                <span>CORE_ENGINEERING // ARCHITECTURE</span>
                <span className="text-brand-olive-light font-bold">ACTIVE DEPLOYMENT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-28 px-6 md:px-12 bg-brand-olive-dark border-b border-brand-cream/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-olive-surface border border-brand-cream/20 text-xs font-mono tracking-widest uppercase font-bold text-brand-cream mb-4">
              // LEADERSHIP & ARCHITECTS
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase text-brand-cream tracking-tight leading-[0.9]">
              THE MINDS BEHIND <br />
              <span className="text-brand-olive-light">INTELLISCORE.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((leader, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-brand-olive-surface border border-brand-cream/15 flex flex-col justify-between shadow-2xl hover:border-brand-cream/50 transition-all duration-300"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-brand-cream text-brand-olive-dark font-display font-black text-xl flex items-center justify-center mb-6 shadow-lg">
                    {leader.name.split(" ")[1][0]}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-cream mb-1">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-mono text-brand-olive-light uppercase font-bold mb-4">
                    {leader.role}
                  </div>
                  <p className="text-xs sm:text-sm text-brand-cream-muted font-light leading-relaxed mb-6">
                    {leader.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-cream/10 text-[11px] font-mono text-brand-cream font-bold">
                  FOCUS: {leader.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Studios Hubs */}
      <section className="py-24 px-6 md:px-12 bg-brand-olive-deep border-b border-brand-cream/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-olive-surface border border-brand-cream/20 text-xs font-mono tracking-widest uppercase font-bold text-brand-cream mb-4">
                // GLOBAL REACH
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-brand-cream tracking-tight">
                DISTRIBUTED ENGINEERING <br />
                <span className="text-brand-olive-light">STUDIOS.</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-brand-cream-muted max-w-md font-light">
              We operate across key technology corridors, providing continuous 24/7 development and active security operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalHubs.map((hub, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-brand-olive-surface border border-brand-cream/15 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono text-brand-olive-light uppercase font-bold mb-1">
                    {hub.region}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-cream mb-2">
                    {hub.city}
                  </h3>
                  <p className="text-xs text-brand-cream-muted font-light leading-relaxed">
                    {hub.focus}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-brand-cream/10 text-[10px] font-mono text-brand-cream/40">
                  HUB_0{idx + 1} // ACTIVE
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-24 px-6 md:px-12 bg-brand-cream text-brand-olive-dark">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight leading-[0.9]">
            WANT TO PARTNER WITH <br />
            <span className="text-brand-olive">INTELLISCORE?</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-olive-deep max-w-xl mx-auto font-normal">
            Schedule an executive technical briefing to discuss your architecture, automation goals,
            and defensive security posture.
          </p>
          <div className="pt-4">
            <MagneticButton variant="olive" href="/#cta" className="rounded-full px-8 py-4 text-xs font-bold">
              <span>Schedule Executive Briefing</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

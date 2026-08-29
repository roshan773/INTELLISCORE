import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  Cpu,
  BrainCircuit,
  ShieldCheck,
  Layers,
  Cloud,
  FileCheck,
  BarChart3,
  CheckCircle2,
  ArrowUpRight,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Enterprise Solutions — INTELLUSCORE | AI, Cloud & Security Architectures",
  description:
    "Discover INTELLUSCORE's enterprise-grade solutions across autonomous workflow automation, zero-trust cloud vaults, and real-time data streaming architectures.",
};

const solutionsList = [
  {
    title: "Autonomous Multi-Agent AI Systems",
    category: "AI & Automation",
    metrics: "85% Operational Reduction",
    desc: "Autonomous agent pipelines that replace repetitive manual review cycles with deterministic LLM state machines and multi-step validation.",
    capabilities: ["Autonomous Document Triage", "Dynamic CRM & ERP Sync", "Self-Correcting Execution Queues"],
  },
  {
    title: "Zero-Trust Cloud Vaults & FinTech Security",
    category: "Cybersecurity",
    metrics: "Zero Vulnerabilities",
    desc: "Cryptographically hardened cloud vaults with automated key rotation, biometric MFA, and tamper-proof audit trails for institutional finance.",
    capabilities: ["Hardware Security Modules (HSM)", "Real-Time Intrusion Detection", "Continuous SOC2 Telemetry"],
  },
  {
    title: "Sub-Second Global Edge Platforms",
    category: "Web Engineering",
    metrics: "Sub-100ms Edge TTFB",
    desc: "Multi-region Next.js web applications distributed across global CDN nodes with automated failover and dynamic asset optimization.",
    capabilities: ["Edge Middleware Routing", "Instant Incremental Static Regeneration", "Automated Image Optimization"],
  },
  {
    title: "Real-Time Telemetry & Data Streaming",
    category: "Big Data & BI",
    metrics: "1M+ Events / Sec",
    desc: "High-throughput data pipelines using Kafka and ClickHouse to ingest, transform, and visualize operational metrics with zero latency.",
    capabilities: ["Distributed Message Brokers", "Columnar OLAP Storage", "Real-Time Executive Dashboards"],
  },
];

const comparisonTable = [
  {
    feature: "Architecture Style",
    legacy: "Monolithic & Fragile Dependencies",
    intelliscore: "Modular Microservices & Edge-Native",
  },
  {
    feature: "AI Integration",
    legacy: "Basic Chatbot Prompts",
    intelliscore: "Autonomous Multi-Agent Deterministic Workflows",
  },
  {
    feature: "Cybersecurity Posture",
    legacy: "Reactive Patching & Perimeter Firewall",
    intelliscore: "Proactive Zero-Trust, Continuous Red-Team & SAST/DAST",
  },
  {
    feature: "Page Load Speed",
    legacy: "2.5s – 5.0s (High Bounce Rate)",
    intelliscore: "Sub-500ms Edge Delivery (100/100 Lighthouse)",
  },
  {
    feature: "Code Ownership",
    legacy: "Vendor Lock-in & Proprietary Black Boxes",
    intelliscore: "100% Full Client Source Code Ownership",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-brand-olive-dark text-brand-cream relative">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 bg-gradient-to-b from-brand-olive-dark via-brand-olive-deep to-brand-olive-dark border-b border-brand-cream/10 overflow-hidden">
        {/* Background Image with Dark Scrim */}
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: "url('/images/hero-solutions-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-olive-dark/90 via-brand-olive-dark/60 to-brand-olive-dark pointer-events-none" />

        <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6 font-mono text-xs text-brand-cream-muted uppercase">
            <Link href="/" className="hover:text-brand-cream transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-cream font-bold">Solutions</span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88] mb-8">
            SOLUTIONS BUILT <br />
            <span className="text-brand-olive-light">FOR SCALE.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-brand-cream-muted font-light max-w-3xl leading-relaxed">
            Engineered software solutions solving high-concurrency, security, and automation challenges for enterprises worldwide.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-6 md:px-12 bg-brand-olive-deep border-b border-brand-cream/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsList.map((sol, idx) => (
            <div
              key={idx}
              className="p-8 md:p-12 rounded-3xl bg-brand-olive-surface border border-brand-cream/15 flex flex-col justify-between shadow-2xl hover:border-brand-cream/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-olive-light font-bold">
                    {sol.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-brand-olive-dark border border-brand-cream/15 text-xs font-mono text-brand-cream font-bold">
                    {sol.metrics}
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-bold text-brand-cream mb-4">
                  {sol.title}
                </h3>

                <p className="text-sm sm:text-base text-brand-cream-muted font-light leading-relaxed mb-8">
                  {sol.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-brand-cream/10">
                  {sol.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2.5 text-xs font-mono text-brand-cream">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-olive-light shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <MagneticButton variant="primary" href="/contact" className="w-full justify-center text-xs rounded-full py-3">
                  <span>Deploy Solution</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Shield Graphic */}
      <section className="py-20 px-6 md:px-12 bg-brand-olive-dark border-b border-brand-cream/10">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden border border-brand-cream/20 relative aspect-[21/9] shadow-2xl">
          <Image
            src="/images/cyber-shield.jpg"
            alt="Cryptographic Defense Architecture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-olive-dark/95 via-brand-olive-dark/70 to-transparent" />
          <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-center max-w-xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-olive-light font-bold">
              // ZERO-TRUST CRYPTOGRAPHY
            </span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-cream uppercase">
              Fortified Against All Attack Vectors
            </h3>
            <p className="text-sm sm:text-base text-brand-cream-muted font-light">
              We implement defense-in-depth methodologies ensuring your client telemetry, financial records,
              and intellectual property remain impenetrable.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-28 px-6 md:px-12 bg-brand-olive-deep border-b border-brand-cream/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-olive-surface border border-brand-cream/20 text-xs font-mono tracking-widest uppercase font-bold text-brand-cream mb-4">
              // THE ARCHITECTURE GAP
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase text-brand-cream tracking-tight">
              LEGACY VS. <br />
              <span className="text-brand-olive-light">INTELLUSCORE STANDARDS.</span>
            </h2>
          </div>

          <div className="rounded-3xl bg-brand-olive-surface border border-brand-cream/20 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-brand-cream/15 bg-brand-olive-dark/80 text-xs font-mono uppercase tracking-wider text-brand-cream-muted">
                    <th className="p-6">Technical Dimension</th>
                    <th className="p-6 text-red-300/80">Legacy Agency Stacks</th>
                    <th className="p-6 text-brand-cream font-bold bg-brand-olive/20">INTELLUSCORE Blueprint</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-cream/10 text-sm font-light">
                  {comparisonTable.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                      <td className="p-6 font-mono text-xs font-bold text-brand-cream">
                        {row.feature}
                      </td>
                      <td className="p-6 text-brand-cream-muted/70">
                        {row.legacy}
                      </td>
                      <td className="p-6 font-medium text-brand-cream bg-brand-olive/10">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-olive-light shrink-0" />
                          <span>{row.intelliscore}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-24 px-6 md:px-12 bg-brand-cream text-brand-olive-dark">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight leading-[0.9]">
            READY TO SCALE WITH <br />
            <span className="text-brand-olive">INTELLUSCORE SOLUTIONS?</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-olive-deep max-w-xl mx-auto font-normal">
            Request a technical feasibility session with our principal systems engineers today.
          </p>
          <div className="pt-4">
            <MagneticButton variant="olive" href="/contact" className="rounded-full px-8 py-4 text-xs font-bold">
              <span>Start Discovery Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  ShieldCheck,
  Bot,
  Globe,
  ShoppingBag,
  Lock,
  CheckCircle2,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Case Studies & Client Impact — INTELLUSCORE",
  description:
    "Explore how INTELLUSCORE engineered high-performance web systems, AI automation pipelines, and zero-trust cybersecurity for enterprise clients.",
};

const fullCases = [
  {
    id: "apex-capital",
    client: "Apex Capital Systems",
    sector: "Institutional FinTech & Cloud Vaults",
    icon: ShieldCheck,
    title: "Zero-Trust High-Frequency Trading Interface & Cloud Vault",
    challenge:
      "Apex Capital required a next-generation web trading portal capable of executing high-frequency transactions with strict sub-20ms latency while maintaining institutional SOC2 Type II and FINRA compliance under constant automated attack vectors.",
    solution:
      "INTELLUSCORE engineered a distributed micro-frontend web architecture using Next.js, Rust-backed WebAssembly compute modules, and an immutable Zero-Trust cloud vault deployed across AWS GovCloud with automated cryptographic key rotation.",
    outcomes: [
      "Sub-15ms average transaction execution latency",
      "$4.2B+ daily transaction volume processed securely",
      "Zero security incidents or vulnerabilities over 18+ months",
      "Full SOC2 Type II and ISO 27001 compliance certified",
    ],
    tech: ["Next.js", "TypeScript", "Rust / WASM", "Zero-Trust IAM", "AWS GovCloud", "Redis"],
  },
  {
    id: "nexus-supply",
    client: "Nexus Global Supply",
    sector: "Logistics & Autonomous AI",
    icon: Bot,
    title: "Autonomous Multi-Agent Freight Routing & Customs Engine",
    challenge:
      "Nexus Global operated a fragmented logistics network where customs documentation, route recalculations, and carrier assignments took an average of 48 hours of manual human review per consignment, resulting in millions in demurrage fines.",
    solution:
      "We architected a deterministic multi-agent state machine utilizing LangGraph, private Claude 3.7 LLM instances, and Kafka event queues to extract shipping manifests, validate international customs codes, and dynamically reroute cargo vessels in real time.",
    outcomes: [
      "78% reduction in manual dispatch overhead",
      "$1.8M saved annually in fuel costs and demurrage penalties",
      "Instant automated customs clearance across 42 countries",
      "24/7 continuous dispatch with zero human-in-the-loop bottlenecks",
    ],
    tech: ["Python", "FastAPI", "LangGraph", "Claude 3.7 API", "Apache Kafka", "PostgreSQL"],
  },
  {
    id: "biosync-health",
    client: "BioSync Diagnostics",
    sector: "HealthTech & Clinical Portals",
    icon: Globe,
    title: "HIPAA-Compliant Genomic Analysis & Patient Intelligence Portal",
    challenge:
      "Clinicians struggled with slow legacy portals that failed when uploading and rendering multi-gigabyte genomic sequencing files, causing diagnostic delays and posing severe HIPAA data compliance risks.",
    solution:
      "INTELLUSCORE engineered a high-concurrency Next.js web application paired with distributed chunked file upload workers and end-to-end client-side AES-256 encryption, allowing instant interactive chromosome visualization.",
    outcomes: [
      "99.99% portal uptime under surge traffic across 50,000+ clinicians",
      "100% HIPAA and GDPR regulatory compliance verification",
      "Chromosome rendering time reduced from 45 seconds to 1.2 seconds",
      "4.9/5 satisfaction rating across medical diagnostic networks",
    ],
    tech: ["Next.js", "TypeScript", "GraphQL", "Docker", "AES-256 Encryption", "GCP"],
  },
  {
    id: "quantum-commerce",
    client: "Quantum Retail Group",
    sector: "Global Headless E-Commerce",
    icon: ShoppingBag,
    title: "Sub-100ms Headless Next.js Commerce with AI Personalization",
    challenge:
      "A luxury global retailer suffered from sluggish 4.2-second page loads on their legacy monolithic platform, resulting in a 45% mobile cart abandonment rate during seasonal surges.",
    solution:
      "Rebuilt the entire global commerce platform as a headless Next.js App Router application with edge middleware rendering, dynamic vector search recommendations, and Stripe multi-currency checkout.",
    outcomes: [
      "Page load time slashed to 380ms globally (100/100 Lighthouse)",
      "+64% increase in mobile checkout conversion rate",
      "Handled Black Friday peak of 120,000 concurrent shoppers with zero slowdown",
    ],
    tech: ["Next.js", "Tailwind CSS", "Vercel Edge", "Stripe API", "Pinecone Vector Search"],
  },
];

export default function CasesPage() {
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
            <span className="text-brand-cream font-bold">Case Studies</span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88] mb-8">
            PROVEN CLIENT <br />
            <span className="text-brand-olive-light">IMPACT & ROI.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-brand-cream-muted font-light max-w-3xl leading-relaxed">
            Real enterprise transformations engineered with high-speed software, deterministic AI automation,
            and hardened cybersecurity postures.
          </p>
        </div>
      </section>

      {/* Case Studies Detailed Cards */}
      <section className="py-24 px-6 md:px-12 bg-brand-olive-deep border-b border-brand-cream/10">
        <div className="max-w-7xl mx-auto space-y-16">
          {fullCases.map((cs) => {
            const Icon = cs.icon;
            return (
              <div
                key={cs.id}
                id={cs.id}
                className="p-8 md:p-14 rounded-3xl bg-brand-olive-surface border border-brand-cream/20 shadow-2xl relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-cream text-brand-olive-dark flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-brand-olive-light uppercase font-bold block">
                          {cs.sector}
                        </span>
                        <span className="font-display text-lg font-bold text-brand-cream">
                          Client: {cs.client}
                        </span>
                      </div>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-cream">
                      {cs.title}
                    </h2>

                    <div className="space-y-4 text-sm sm:text-base text-brand-cream-muted font-light leading-relaxed">
                      <div>
                        <strong className="text-brand-cream font-bold block font-mono text-xs uppercase mb-1">
                          The Challenge:
                        </strong>
                        <p>{cs.challenge}</p>
                      </div>
                      <div>
                        <strong className="text-brand-cream font-bold block font-mono text-xs uppercase mb-1">
                          The Technical Solution:
                        </strong>
                        <p>{cs.solution}</p>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-2">
                      {cs.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3.5 py-1.5 rounded-full bg-brand-olive-dark border border-brand-cream/15 text-xs font-mono text-brand-cream font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-6 p-8 rounded-2xl bg-brand-olive-dark border border-brand-cream/15 space-y-6">
                    <div className="flex items-center gap-2 text-brand-olive-light font-mono text-xs uppercase font-bold tracking-wider">
                      <TrendingUp className="w-4 h-4" />
                      <span>QUANTIFIABLE OUTCOMES & BUSINESS METRICS:</span>
                    </div>

                    <div className="space-y-3">
                      {cs.outcomes.map((out, oIdx) => (
                        <div key={oIdx} className="flex items-start gap-3 text-sm text-brand-cream font-light">
                          <CheckCircle2 className="w-4 h-4 text-brand-olive-light shrink-0 mt-0.5" />
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-brand-cream/10">
                      <MagneticButton variant="primary" href="/#cta" className="w-full justify-center text-xs rounded-full py-3">
                        <span>Request Architecture Blueprint</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-24 px-6 md:px-12 bg-brand-cream text-brand-olive-dark">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight leading-[0.9]">
            WANT SIMILAR RESULTS <br />
            <span className="text-brand-olive">FOR YOUR ORGANIZATION?</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-olive-deep max-w-xl mx-auto font-normal">
            Let&apos;s review your current bottlenecks and architect a high-velocity solution.
          </p>
          <div className="pt-4">
            <MagneticButton variant="olive" href="/#cta" className="rounded-full px-8 py-4 text-xs font-bold">
              <span>Book Architecture Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  Search,
  Target,
  PenTool,
  Code2,
  Cpu,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  ArrowUpRight,
  Clock,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Engineering Process — INTELLUSCORE | 7-Stage Methodology",
  description:
    "Explore INTELLUSCORE's rigorous 7-stage engineering journey from technical discovery to global scaling and continuous security.",
};

const fullProcess = [
  {
    step: "01",
    name: "Discovery & Technical Audit",
    duration: "Week 1",
    icon: Search,
    summary:
      "We dissect your existing infrastructure, bottlenecks, data flows, and security posture to establish measurable project targets.",
    milestones: [
      "Codebase & architectural health assessment",
      "Vulnerability surface map & threat modeling",
      "Business workflow automation ROI analysis",
      "Stakeholder technical discovery workshops",
    ],
  },
  {
    step: "02",
    name: "Blueprint & Systems Architecture",
    duration: "Week 2",
    icon: Target,
    summary:
      "We formulate a comprehensive architectural roadmap, defining database schemas, API contracts, AI pipelines, and zero-trust policies.",
    milestones: [
      "Technology stack selection & benchmark matrix",
      "Database ERD schemas & API OpenAPI specs",
      "Security compliance readiness plan (SOC2 / ISO)",
      "High-level system topology diagrams",
    ],
  },
  {
    step: "03",
    name: "High-Fidelity Interface & UX Systems",
    duration: "Weeks 2 – 3",
    icon: PenTool,
    summary:
      "Crafting high-converting, accessible user interfaces with custom design tokens, micro-animations, and responsive layouts.",
    milestones: [
      "Component library & design token setup",
      "Interactive Figma prototyping & user testing",
      "WCAG 2.1 AA accessibility validation",
      "Motion design & GSAP interaction specs",
    ],
  },
  {
    step: "04",
    name: "Agile Full-Stack Engineering",
    duration: "Weeks 3 – 6+",
    icon: Code2,
    summary:
      "Writing modular, type-safe code in rapid 2-week sprints with automated unit tests, end-to-end coverage, and daily deployments.",
    milestones: [
      "Next.js App Router frontend engineering",
      "Microservice backend & GraphQL / REST APIs",
      "Automated CI/CD pipeline with GitHub Actions",
      "Automated unit, integration, and E2E test suite",
    ],
  },
  {
    step: "05",
    name: "AI & Autonomous Agent Integration",
    duration: "Weeks 5 – 7",
    icon: Cpu,
    summary:
      "Integrating custom LLM agents, vector embeddings, asynchronous worker queues, and third-party API webhook synchronizers.",
    milestones: [
      "Multi-agent deterministic state machine integration",
      "Enterprise RAG vector database indexing",
      "Asynchronous worker queues with Celery / Redis",
      "Automated testing of LLM responses & guardrails",
    ],
  },
  {
    step: "06",
    name: "Hardening & Penetration Testing",
    duration: "Week 7 – 8",
    icon: ShieldCheck,
    summary:
      "Subjecting the staging platform to simulated cyber attacks, load spikes, data leak tests, and strict OWASP Top-10 mitigations.",
    milestones: [
      "Automated SAST & DAST vulnerability scans",
      "Simulated red-team penetration testing",
      "Zero-Trust IAM token & session verification",
      "DDoS defense & Cloudflare WAF configuration",
    ],
  },
  {
    step: "07",
    name: "Production Launch & Continuous Scale",
    duration: "Launch & Beyond",
    icon: Rocket,
    summary:
      "Deploying to multi-region cloud clusters with real-time error tracking, automated capacity scaling, and ongoing performance optimization.",
    milestones: [
      "Zero-downtime multi-region production rollout",
      "24/7 telemetry monitoring & error logging",
      "Automated database replication & backup checks",
      "Post-launch velocity reviews & feature backlog",
    ],
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-brand-olive-dark text-brand-cream relative">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 bg-gradient-to-b from-brand-olive-dark via-brand-olive-deep to-brand-olive-dark border-b border-brand-cream/10 overflow-hidden">
        {/* Background Image with Dark Scrim */}
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: "url('/images/hero-process-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-olive-dark/90 via-brand-olive-dark/60 to-brand-olive-dark pointer-events-none" />

        <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6 font-mono text-xs text-brand-cream-muted uppercase">
            <Link href="/" className="hover:text-brand-cream transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-cream font-bold">Process</span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88] mb-8">
            THE 7-STAGE <br />
            <span className="text-brand-olive-light">ENGINEERING LIFECYCLE.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-brand-cream-muted font-light max-w-3xl leading-relaxed">
            Our systematic, test-driven methodology transforms complex requirements into resilient,
            high-speed digital infrastructure.
          </p>
        </div>
      </section>

      {/* 7-Step Detailed Process List */}
      <section className="py-24 px-6 md:px-12 bg-brand-olive-deep border-b border-brand-cream/10">
        <div className="max-w-7xl mx-auto space-y-12">
          {fullProcess.map((stg) => {
            const Icon = stg.icon;
            return (
              <div
                key={stg.step}
                className="p-8 md:p-12 rounded-3xl bg-brand-olive-surface border border-brand-cream/20 shadow-2xl relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-5xl font-black text-brand-cream/30">
                        {stg.step}
                      </span>
                      <div className="px-3.5 py-1 rounded-full bg-brand-olive-dark border border-brand-cream/20 text-xs font-mono text-brand-olive-light font-bold flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{stg.duration}</span>
                      </div>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-cream">
                      {stg.name}
                    </h2>

                    <p className="text-base text-brand-cream-muted font-light leading-relaxed">
                      {stg.summary}
                    </p>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-brand-olive-dark border border-brand-cream/15 space-y-3">
                    <div className="font-mono text-xs uppercase tracking-widest text-brand-olive-light font-bold">
                      STAGE DELIVERABLES & QUALITY GATES:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {stg.milestones.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-start gap-2.5 text-xs font-mono text-brand-cream">
                          <CheckCircle2 className="w-4 h-4 text-brand-olive-light shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </div>
                      ))}
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
            READY TO START <br />
            <span className="text-brand-olive">YOUR SPRINT?</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-olive-deep max-w-xl mx-auto font-normal">
            Book a 30-minute discovery call to map your technical requirements into an actionable sprint plan.
          </p>
          <div className="pt-4">
            <MagneticButton variant="olive" href="/contact" className="rounded-full px-8 py-4 text-xs font-bold">
              <span>Schedule Sprint Planning</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

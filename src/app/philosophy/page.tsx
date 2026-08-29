import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  Sparkles,
  CheckCheck,
  ShieldCheck,
  Zap,
  Activity,
  ArrowUpRight,
  Code2,
  Lock,
  Cpu,
  Compass,
} from "lucide-react";

export const metadata = {
  title: "Our Philosophy — INTELLISCORE | Engineering Manifesto",
  description:
    "Explore INTELLISCORE's engineering manifesto: Think Forward, Build Smart, Automate Better, Secure Everything.",
};

const pillars = [
  {
    num: "01",
    title: "Think Forward",
    icon: Compass,
    subtitle: "Anticipate Scale Before Writing Code",
    desc: "We analyze structural bottlenecks, network topology limitations, and data growth projections prior to implementation. Architecture is not an afterthought — it is the foundation of competitive longevity.",
    tenets: [
      "Modular micro-frontends designed for independent scaling",
      "Event-driven messaging preventing database locking",
      "Strict capacity planning for 100x traffic surges",
    ],
  },
  {
    num: "02",
    title: "Build Smart",
    icon: Code2,
    subtitle: "Zero Technical Debt & Strict Type Safety",
    desc: "Speed of execution should never come at the cost of codebase rot. We enforce strict TypeScript, automated end-to-end testing, and automated linting in CI/CD pipelines to deliver clean, maintainable systems.",
    tenets: [
      "100% type-safe schemas from database to frontend UI",
      "Automated CI/CD regressions testing every pull request",
      "Sub-500ms server response times across all endpoints",
    ],
  },
  {
    num: "03",
    title: "Automate Better",
    icon: Cpu,
    subtitle: "Deterministic Multi-Agent Execution",
    desc: "Manual human-in-the-loop workflows introduce latency and error. We construct self-healing autonomous AI agents and worker queues that process complex multi-step tasks with flawless precision.",
    tenets: [
      "Deterministic state machines with fallback recovery",
      "RAG pipelines extracting insights from unstructured text",
      "Asynchronous message queuing for high-throughput batching",
    ],
  },
  {
    num: "04",
    title: "Secure Everything",
    icon: ShieldCheck,
    subtitle: "Zero-Trust Cryptographic Hardening",
    desc: "Security must be native to the code, not an exterior firewall band-aid. We operate on the assumption of perimeter breach, enforcing encryption at rest, encryption in transit, and continuous authorization.",
    tenets: [
      "Zero-Trust IAM with short-lived cryptographic tokens",
      "Automated secret management with no hardcoded credentials",
      "Continuous penetration testing and SOC2 audit compliance",
    ],
  },
];

export default function PhilosophyPage() {
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
            <span className="text-brand-cream font-bold">Philosophy</span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88] mb-8">
            WE DON&apos;T JUST BUILD. <br />
            <span className="text-brand-olive-light">WE BUILD ADVANTAGE.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-brand-cream-muted font-light max-w-3xl leading-relaxed">
            The INTELLISCORE engineering manifesto: four foundational principles that govern every
            architecture we design, line of code we write, and system we fortify.
          </p>
        </div>
      </section>

      {/* Four Principles Detailed Breakdown */}
      <section className="py-24 px-6 md:px-12 bg-brand-olive-deep border-b border-brand-cream/10">
        <div className="max-w-7xl mx-auto space-y-12">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="p-8 md:p-14 rounded-3xl bg-brand-olive-surface border border-brand-cream/20 shadow-2xl relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="font-display text-6xl font-black text-brand-cream/30">
                        {p.num}
                      </span>
                      <div className="w-12 h-12 rounded-full bg-brand-cream text-brand-olive-dark flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="text-xs font-mono uppercase tracking-widest text-brand-olive-light font-bold">
                      {p.subtitle}
                    </div>

                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-cream">
                      {p.title}
                    </h2>

                    <p className="text-base sm:text-lg text-brand-cream-muted font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-6 p-8 rounded-2xl bg-brand-olive-dark border border-brand-cream/15 space-y-4">
                    <div className="font-mono text-xs uppercase tracking-widest text-brand-olive-light font-bold">
                      CORE ENGINEERING TENETS:
                    </div>
                    <div className="space-y-3">
                      {p.tenets.map((tenet, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-3 text-sm text-brand-cream/90 font-light">
                          <CheckCheck className="w-4 h-4 text-brand-olive-light shrink-0 mt-0.5" />
                          <span>{tenet}</span>
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

      {/* Quality Pledge Banner */}
      <section className="py-24 px-6 md:px-12 bg-brand-olive-dark border-b border-brand-cream/10">
        <div className="max-w-5xl mx-auto rounded-3xl bg-brand-olive-surface border border-brand-cream/25 p-8 md:p-16 text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-olive border border-brand-cream/20 text-xs font-mono tracking-widest uppercase font-bold text-brand-cream">
            // OUR CODE QUALITY PLEDGE
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-brand-cream">
            Full Transparency. Zero Lock-In.
          </h2>
          <p className="text-base sm:text-lg text-brand-cream-muted max-w-2xl mx-auto font-light leading-relaxed">
            Every software product built by INTELLISCORE comes with complete source code repository access,
            comprehensive architecture documentation, and automated deployment scripts. You own 100% of the IP.
          </p>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-24 px-6 md:px-12 bg-brand-cream text-brand-olive-dark">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight leading-[0.9]">
            ALIGN WITH OUR <br />
            <span className="text-brand-olive">ENGINEERING STANDARDS.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-olive-deep max-w-xl mx-auto font-normal">
            Build your next enterprise product with a team dedicated to technical mastery.
          </p>
          <div className="pt-4">
            <MagneticButton variant="olive" href="/#cta" className="rounded-full px-8 py-4 text-xs font-bold">
              <span>Discuss Project Roadmap</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

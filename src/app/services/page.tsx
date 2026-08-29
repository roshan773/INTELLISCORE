import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  Globe,
  Bot,
  ShieldCheck,
  CodeSquare,
  CheckCircle2,
  ArrowUpRight,
  Zap,
  Server,
  Lock,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Core Services — INTELLUSCORE | Web, AI, Cybersecurity & Custom Software",
  description:
    "Explore INTELLUSCORE's specialized services in modern web platform engineering, autonomous AI agent pipelines, zero-trust cybersecurity, and custom enterprise software.",
};

const serviceDeepDives = [
  {
    id: "web-development",
    num: "01",
    title: "Web Architecture & Platforms",
    badge: "SUB-100MS LATENCY GUARANTEE",
    icon: Globe,
    summary:
      "We design and engineer enterprise-grade web applications, headless commerce engines, and interactive digital platforms that achieve perfect Lighthouse scores and zero downtime under surge traffic.",
    deliverables: [
      "Next.js App Router & React 19 micro-frontend architectures",
      "Headless CMS, GraphQL, and edge API orchestration",
      "Global CDN edge caching and multi-region failover",
      "Core Web Vitals performance tuning (100/100 benchmark)",
      "Automated accessibility (WCAG 2.1 AA) and SEO compliance",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Vercel Edge", "Docker"],
  },
  {
    id: "ai-automation",
    num: "02",
    title: "AI & Autonomous Agent Pipelines",
    badge: "10X OPERATIONAL VELOCITY",
    icon: Bot,
    summary:
      "We build deterministic multi-agent state machines, private LLM RAG pipelines, and automated business engines that extract, process, and execute operations with zero human error.",
    deliverables: [
      "Custom multi-agent state machines (LangGraph / CrewAI)",
      "Enterprise RAG vector search over proprietary databases",
      "Automated document triage, invoice processing, and CRM sync",
      "Local/Private LLM hosting with air-gapped data protection",
      "Real-time sentiment telemetry and predictive decision models",
    ],
    tech: ["Python", "LangChain", "OpenAI / Claude API", "FastAPI", "Pinecone", "Celery"],
  },
  {
    id: "cybersecurity",
    num: "03",
    title: "Defensive Cybersecurity & Zero-Trust",
    badge: "MILITARY-GRADE DEFENSE",
    icon: ShieldCheck,
    summary:
      "We fortify digital infrastructure against modern attack vectors. From offensive penetration tests to continuous cloud posture management and SOC2 compliance readiness.",
    deliverables: [
      "Offensive penetration testing & simulated red-team attacks",
      "Zero-Trust IAM, OAuth2/OIDC, and biometric authentication",
      "Cloud security posture management (CSPM) for AWS / GCP",
      "Automated vulnerability scanning & SAST/DAST CI/CD checks",
      "SOC2 Type II, ISO 27001, and HIPAA compliance readiness",
    ],
    tech: ["Zero Trust", "Cloudflare WAF", "Vault", "OWASP Hardening", "CrowdStrike", "SIEM"],
  },
  {
    id: "custom-software",
    num: "04",
    title: "Custom Distributed Software",
    badge: "HIGH-CONCURRENCY RELIABILITY",
    icon: CodeSquare,
    summary:
      "We architect tailored distributed software solutions designed specifically for complex business logic, real-time data streaming, and seamless integration with legacy systems.",
    deliverables: [
      "Distributed microservices & event-driven message brokers",
      "Custom multi-tenant SaaS platforms with automated billing",
      "Legacy mainframe & SQL modernization with zero downtime",
      "High-throughput real-time Kafka & ClickHouse telemetry",
      "Full source code handover with zero vendor lock-in",
    ],
    tech: ["Go", "Node.js", "PostgreSQL", "Kafka", "ClickHouse", "Kubernetes"],
  },
];

const engagementModels = [
  {
    name: "Fixed-Scope Sprint",
    timeline: "2 – 6 Weeks",
    idealFor: "Rapid MVP prototyping, targeted AI automation, or comprehensive security audits.",
    features: ["Dedicated Project Lead", "Clear milestone deliverables", "Weekly code handovers", "Fixed budget certainty"],
  },
  {
    name: "Dedicated Engineering Pod",
    timeline: "3 – 12+ Months",
    idealFor: "Full product builds, legacy modernization, and ongoing platform scaling.",
    features: ["Full-stack architects & AI devs", "Embedded senior security engineer", "Daily syncs & agile sprints", "Direct Slack / Discord integration"],
  },
  {
    name: "Retained Architecture Advisory",
    timeline: "Ongoing Retainer",
    idealFor: "CTOs and technical leadership seeking strategic guidance, code reviews, and threat monitoring.",
    features: ["Executive architecture reviews", "Quarterly penetration tests", "Emergency incident response SLA", "Priority feature roadmapping"],
  },
];

export default function ServicesPage() {
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
            <span className="text-brand-cream font-bold">Services</span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88] mb-8">
            ENGINEERED <br />
            <span className="text-brand-olive-light">CAPABILITIES.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-brand-cream-muted font-light max-w-3xl leading-relaxed">
            From modern web platforms and autonomous AI pipelines to impenetrable cybersecurity architectures,
            we deliver high-impact technical excellence.
          </p>
        </div>
      </section>

      {/* Deep Dive Services List */}
      <section className="py-24 px-6 md:px-12 bg-brand-olive-deep border-b border-brand-cream/10">
        <div className="max-w-7xl mx-auto space-y-16">
          {serviceDeepDives.map((serv) => {
            const Icon = serv.icon;
            return (
              <div
                key={serv.id}
                id={serv.id}
                className="p-8 md:p-14 rounded-3xl bg-brand-olive-surface border border-brand-cream/20 shadow-2xl relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="font-display text-6xl font-black text-brand-cream/30">
                        {serv.num}
                      </span>
                      <div className="px-3.5 py-1 rounded-full bg-brand-olive-dark border border-brand-cream/20 text-[11px] font-mono text-brand-olive-light uppercase font-bold">
                        {serv.badge}
                      </div>
                    </div>

                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-cream tracking-tight">
                      {serv.title}
                    </h2>

                    <p className="text-base sm:text-lg text-brand-cream-muted font-light leading-relaxed">
                      {serv.summary}
                    </p>

                    <div className="pt-4 flex flex-wrap gap-2">
                      {serv.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3.5 py-1.5 rounded-full bg-brand-olive-dark border border-brand-cream/15 text-xs font-mono text-brand-cream font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-6 p-8 rounded-2xl bg-brand-olive-dark border border-brand-cream/15 space-y-4">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-brand-olive-light font-bold">
                      KEY DELIVERABLES & ARCHITECTURAL SPECS:
                    </h3>
                    <div className="space-y-3">
                      {serv.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3 text-sm text-brand-cream/90 font-light">
                          <CheckCircle2 className="w-4 h-4 text-brand-olive-light shrink-0 mt-0.5" />
                          <span>{del}</span>
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

      {/* Visual Asset Banner */}
      <section className="py-20 px-6 md:px-12 bg-brand-olive-dark border-b border-brand-cream/10">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden border border-brand-cream/20 relative aspect-[21/9] shadow-2xl">
          <Image
            src="/images/ai-flow.jpg"
            alt="Autonomous AI Workflow Architecture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-olive-dark/95 via-brand-olive-dark/60 to-transparent" />
          <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-center max-w-xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-olive-light font-bold">
              // SCALABLE DEPLOYMENT PIPELINES
            </span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-cream uppercase">
              Automated From End to End
            </h3>
            <p className="text-sm sm:text-base text-brand-cream-muted font-light">
              Our engineering pipelines ensure every code commit is automatically scanned, tested, containerized,
              and pushed to edge servers in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-28 px-6 md:px-12 bg-brand-olive-deep border-b border-brand-cream/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-olive-surface border border-brand-cream/20 text-xs font-mono tracking-widest uppercase font-bold text-brand-cream mb-4">
              // HOW WE ENGAGE
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase text-brand-cream tracking-tight">
              FLEXIBLE ENGAGEMENT <br />
              <span className="text-brand-olive-light">MODELS.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-brand-olive-surface border border-brand-cream/15 flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <div className="text-xs font-mono text-brand-olive-light uppercase font-bold mb-2">
                    {model.timeline}
                  </div>
                  <h3 className="font-display text-3xl font-bold text-brand-cream mb-3">
                    {model.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-cream-muted font-light leading-relaxed mb-6">
                    {model.idealFor}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-brand-cream/10">
                    {model.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-brand-cream">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-olive-light shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <MagneticButton variant="primary" href="/#cta" className="w-full justify-center text-xs rounded-full py-3">
                    <span>Select Model</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </MagneticButton>
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
            HAVE A PROJECT IN MIND? <br />
            <span className="text-brand-olive">LET&apos;S TALK ARCHITECTURE.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-olive-deep max-w-xl mx-auto font-normal">
            Get a tailored architecture roadmap, technical feasibility assessment, and timeline estimate from our senior engineering team.
          </p>
          <div className="pt-4">
            <MagneticButton variant="olive" href="/#cta" className="rounded-full px-8 py-4 text-xs font-bold">
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

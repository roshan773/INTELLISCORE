import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  Brain,
  Shield,
  Cloud,
  Code,
  Database,
  Cpu,
  Server,
  Layers,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Technology Stack — INTELLUSCORE | Modern Frameworks & Infrastructure",
  description:
    "Explore INTELLUSCORE's production technology stack across Next.js, AI LLM agents, Zero-Trust cryptography, and distributed cloud computing.",
};

const techCategories = [
  {
    category: "Frontend & Web Engineering",
    icon: Code,
    desc: "Next-generation web applications engineered for sub-second speeds, flawless SEO, and responsive fluid motion.",
    technologies: [
      { name: "Next.js 16 (App Router)", desc: "Server Components, dynamic edge rendering & streaming" },
      { name: "React 19 & TypeScript", desc: "Type-safe declarative state architectures" },
      { name: "Tailwind CSS & Vanilla CSS", desc: "Custom design token systems & zero CSS bloat" },
      { name: "GSAP & ScrollTrigger", desc: "Hardware-accelerated cinematic motion design" },
    ],
  },
  {
    category: "Artificial Intelligence & Agents",
    icon: Brain,
    desc: "Autonomous multi-agent pipelines, domain-specific RAG vector search, and custom neural model deployments.",
    technologies: [
      { name: "LangChain & LangGraph", desc: "Deterministic multi-agent state machines" },
      { name: "OpenAI & Claude 3.7", desc: "Enterprise LLM integration & fine-tuning" },
      { name: "Pinecone & Qdrant", desc: "High-dimensional vector embedding indices" },
      { name: "PyTorch & FastAPI", desc: "High-throughput machine learning inference APIs" },
    ],
  },
  {
    category: "Cybersecurity & Zero-Trust IAM",
    icon: Shield,
    desc: "Offensive security testing, secret management, and identity governance ensuring zero data breaches.",
    technologies: [
      { name: "Zero-Trust Architecture", desc: "Perimeterless micro-segmentation & continuous auth" },
      { name: "HashiCorp Vault", desc: "Automated cryptographic secret rotation" },
      { name: "Cloudflare Enterprise WAF", desc: "Layer 3/4/7 DDoS mitigation & edge bot defense" },
      { name: "OAuth2, OIDC & SAML", desc: "Enterprise Single Sign-On and multi-factor IAM" },
    ],
  },
  {
    category: "Cloud Infrastructure & DevOps",
    icon: Cloud,
    desc: "Resilient, multi-region containerized clusters with automated failover and Infrastructure-as-Code.",
    technologies: [
      { name: "AWS & Google Cloud (GCP)", desc: "Scalable compute, serverless lambda & VPCs" },
      { name: "Kubernetes & Docker", desc: "Immutable container orchestration & pod auto-scaling" },
      { name: "Terraform (IaC)", desc: "Declarative, repeatable cloud infrastructure scripts" },
      { name: "Vercel Edge Network", desc: "Global CDN edge middleware and asset distribution" },
    ],
  },
  {
    category: "Databases & Real-Time Data",
    icon: Database,
    desc: "Ultra-fast transactional databases, distributed message brokers, and columnar analytical engines.",
    technologies: [
      { name: "PostgreSQL & Prisma", desc: "ACID-compliant relational data modeling" },
      { name: "ClickHouse OLAP", desc: "Sub-millisecond analytical queries over billions of rows" },
      { name: "Redis In-Memory Cache", desc: "Low-latency session storage & distributed locks" },
      { name: "Apache Kafka", desc: "High-throughput event streaming & telemetry ingestion" },
    ],
  },
  {
    category: "APIs & Microservices",
    icon: Layers,
    desc: "Type-safe microservices communication layers and unified enterprise endpoints.",
    technologies: [
      { name: "GraphQL & Apollo", desc: "Flexible data fetching with minimal payload overhead" },
      { name: "REST & OpenAPI v3", desc: "Strictly documented enterprise RESTful interfaces" },
      { name: "gRPC & Protocol Buffers", desc: "Ultra-low-latency inter-service RPC communication" },
      { name: "WebSockets & WebRTC", desc: "Bidirectional real-time streaming and telemetry" },
    ],
  },
];

export default function TechnologyPage() {
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
            <span className="text-brand-cream font-bold">Technology Stack</span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88] mb-8">
            PRODUCTION <br />
            <span className="text-brand-olive-light">STACK & TOOLS.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-brand-cream-muted font-light max-w-3xl leading-relaxed">
            Our battle-tested technology ecosystem engineered for maximum concurrency, resilience, and developer velocity.
          </p>
        </div>
      </section>

      {/* Category Deep Dives */}
      <section className="py-24 px-6 md:px-12 bg-brand-olive-deep border-b border-brand-cream/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-8 md:p-12 rounded-3xl bg-brand-olive-surface border border-brand-cream/15 flex flex-col justify-between shadow-2xl hover:border-brand-cream/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-brand-cream text-brand-olive-dark flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-cream">
                      {cat.category}
                    </h2>
                  </div>

                  <p className="text-sm text-brand-cream-muted font-light leading-relaxed mb-8">
                    {cat.desc}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-brand-cream/10">
                    {cat.technologies.map((t, tIdx) => (
                      <div key={tIdx} className="p-3.5 rounded-xl bg-brand-olive-dark border border-brand-cream/10">
                        <div className="font-display text-base font-bold text-brand-cream">
                          {t.name}
                        </div>
                        <div className="text-xs font-mono text-brand-cream-muted">
                          {t.desc}
                        </div>
                      </div>
                    ))}
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
            WANT TO AUDIT <br />
            <span className="text-brand-olive">YOUR TECH STACK?</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-olive-deep max-w-xl mx-auto font-normal">
            Our senior architects provide an in-depth review of your libraries, cloud costs, and security risks.
          </p>
          <div className="pt-4">
            <MagneticButton variant="olive" href="/#cta" className="rounded-full px-8 py-4 text-xs font-bold">
              <span>Request Tech Stack Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

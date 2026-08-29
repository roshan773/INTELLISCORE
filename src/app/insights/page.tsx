import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MagneticButton from "@/components/ui/MagneticButton";
import NewsletterForm from "@/components/ui/NewsletterForm";
import {
  Clock,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Calendar,
  User,
} from "lucide-react";

export const metadata = {
  title: "Engineering Insights & Intel — INTELLUSCORE",
  description:
    "Technical thought leadership, benchmarks, and architectural playbooks on AI automation, Zero-Trust cybersecurity, and Next.js web platforms.",
};

const articles = [
  {
    category: "Cybersecurity",
    date: "August 2026",
    readTime: "6 min read",
    author: "Dr. Ethan Vance",
    title: "Zero-Trust Architecture in Next.js 16 Enterprise Applications",
    summary:
      "A deep dive into mitigating server component vulnerability vectors, implementing short-lived cryptographic JWT tokens, and configuring edge WAF middleware for zero-breach operations.",
    takeaways: [
      "Perimeterless micro-segmentation at the API route layer",
      "Automated cryptographic key rotation with HashiCorp Vault",
      "Defeating CSRF and Server-Side Request Forgery (SSRF) at the edge",
    ],
  },
  {
    category: "AI & Automation",
    date: "August 2026",
    readTime: "8 min read",
    author: "Elena Rostova",
    title: "Deterministic Multi-Agent State Machines: Beyond Simple Chatbots",
    summary:
      "Why leading engineering teams are abandoning brittle prompt chains in favor of deterministic state graphs with automated fallback loops and structured schema validation.",
    takeaways: [
      "Implementing cyclic graph execution with LangGraph",
      "Structured output enforcement with Pydantic and JSON Schema",
      "Reducing token hallucination rates from 18% to under 0.2%",
    ],
  },
  {
    category: "Web Engineering",
    date: "July 2026",
    readTime: "5 min read",
    author: "Alexander Vance",
    title: "Sub-100ms Web Performance: The Core Web Vitals Playbook",
    summary:
      "How to engineer high-concurrency web platforms that achieve perfect 100/100 Lighthouse performance, sub-second TTFB, and zero layout shifts on global edge CDNs.",
    takeaways: [
      "Streaming server components with Suspense boundaries",
      "Zero-runtime CSS with modern Tailwind and custom design tokens",
      "Asset pre-warming and edge cache warming algorithms",
    ],
  },
  {
    category: "Cloud & Distributed Systems",
    date: "June 2026",
    readTime: "7 min read",
    author: "Marcus Sterling",
    title: "Replacing Fragile Batch Jobs with Real-Time Kafka Stream Processing",
    summary:
      "A pragmatic migration guide from slow nightly SQL batch processing to real-time event-driven streaming with Apache Kafka and ClickHouse columnar storage.",
    takeaways: [
      "Event-driven architecture design patterns",
      "Handling out-of-order event delivery and deduplication",
      "Querying billions of telemetry rows in under 15 milliseconds",
    ],
  },
];

export default function InsightsPage() {
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
            <span className="text-brand-cream font-bold">Insights</span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88] mb-8">
            ENGINEERING <br />
            <span className="text-brand-olive-light">INTEL & INSIGHTS.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-brand-cream-muted font-light max-w-3xl leading-relaxed">
            In-depth technical analysis, architecture benchmarks, and playbooks authored by INTELLUSCORE principal engineers.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 px-6 md:px-12 bg-brand-olive-deep border-b border-brand-cream/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="p-8 md:p-12 rounded-3xl bg-brand-olive-surface border border-brand-cream/15 flex flex-col justify-between shadow-2xl hover:border-brand-cream/50 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-full bg-brand-olive text-[10px] font-mono tracking-widest uppercase font-bold text-brand-cream border border-brand-cream/20">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-cream-muted">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-cream mb-4 group-hover:text-white transition-colors leading-tight">
                  {art.title}
                </h2>

                <div className="flex items-center gap-4 text-xs font-mono text-brand-olive-light mb-6">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {art.author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 text-brand-cream-muted">
                    <Calendar className="w-3.5 h-3.5" />
                    {art.date}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-brand-cream-muted font-light leading-relaxed mb-6">
                  {art.summary}
                </p>

                <div className="space-y-2 pt-4 border-t border-brand-cream/10">
                  <div className="text-xs font-mono uppercase tracking-widest text-brand-cream font-bold mb-2">
                    Key Technical Takeaways:
                  </div>
                  {art.takeaways.map((takeaway, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2.5 text-xs font-mono text-brand-cream/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-olive-light shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-cream/10 flex items-center justify-between text-xs font-mono text-brand-cream-muted group-hover:text-brand-cream transition-colors">
                <span>Read Full Technical Paper</span>
                <ArrowUpRight className="w-4 h-4 text-brand-cream group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter / Briefing Box */}
      <section className="py-24 px-6 md:px-12 bg-brand-cream text-brand-olive-dark">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-olive/15 border border-brand-olive/30 text-xs font-mono tracking-widest uppercase font-bold text-brand-olive">
            // EXECUTIVE INTEL DISPATCH
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight">
            Subscribe to the INTELLUSCORE Briefing.
          </h2>
          <p className="text-base sm:text-lg text-brand-olive-deep max-w-xl mx-auto font-normal">
            A monthly dispatch of architecture benchmarks, zero-day threat analysis, and AI agent engineering patterns. Zero spam.
          </p>

          <NewsletterForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}

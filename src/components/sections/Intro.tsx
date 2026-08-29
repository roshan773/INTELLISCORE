"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Hammer, Cpu, ShieldCheck, ArrowUpRight, Zap, CheckCircle2, TrendingUp, Lock } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Strategy",
    icon: Compass,
    tag: "DISCOVERY & ARCHITECTURE",
    desc: "Architecting future-proof digital roadmaps aligned with business objectives, system scalability, and technical realities.",
    features: ["System Audit & Tech Debt Mapping", "Cloud Feasibility & Cost Modeling", "Zero-Trust Security Roadmaps"],
  },
  {
    num: "02",
    title: "Build",
    icon: Hammer,
    tag: "HIGH-SPEED PLATFORMS",
    desc: "Engineering high-performance web systems, custom applications, and robust digital platforms with sub-second speeds.",
    features: ["Next.js & Edge-Native Delivery", "Rust & WASM Compute Modules", "High-Concurrency Cloud Backends"],
  },
  {
    num: "03",
    title: "Automate",
    icon: Cpu,
    tag: "AGENTIC WORKFLOWS",
    desc: "Integrating intelligent agents and autonomous multi-agent pipelines to eliminate repetitive operational friction.",
    features: ["Multi-Agent Autonomous Pipelines", "Production RAG & Vector Indexing", "Enterprise API Integrations"],
  },
  {
    num: "04",
    title: "Secure",
    icon: ShieldCheck,
    tag: "ENTERPRISE DEFENSE",
    desc: "Deploying enterprise-grade cybersecurity controls, vulnerability defenses, and active threat monitoring around the clock.",
    features: ["Zero-Trust Cryptographic IAM", "Continuous SAST/DAST & Pentesting", "SOC2, HIPAA & ISO Compliance"],
  },
];

const highlights = [
  { icon: Zap, label: "Sub-500ms", sub: "Edge Platform Speeds" },
  { icon: TrendingUp, label: "10x Faster", sub: "Automated Workflows" },
  { icon: Lock, label: "Zero-Trust", sub: "Defensive Security" },
  { icon: CheckCircle2, label: "100% IP", sub: "Client Code Ownership" },
];

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".intro-title-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-6 md:px-12 bg-brand-cream-light text-brand-olive-dark overflow-hidden border-b border-brand-olive/15 selection:bg-brand-olive selection:text-brand-cream"
    >
      <div className="absolute inset-0 tech-grid-cream opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Top Header Label & Headline */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-0.5 w-12 bg-brand-olive" />
            <span className="text-xs font-mono tracking-widest text-brand-olive font-bold uppercase">
              // ABOUT INTELLUSCORE
            </span>
          </div>

          <h2 className="intro-title-text font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase text-brand-olive-dark tracking-tight leading-[0.88] max-w-6xl">
            Technology that moves{" "}
            <span className="text-brand-olive decoration-brand-olive/30">
              business forward.
            </span>
          </h2>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <p className="lg:col-span-8 text-lg sm:text-xl md:text-2xl text-brand-olive-deep/90 leading-relaxed font-normal">
              INTELLUSCORE is an elite technology studio and consultancy. We operate at the intersection of{" "}
              <strong className="text-brand-olive font-bold">software engineering</strong>,{" "}
              <strong className="text-brand-olive font-bold">AI automation</strong>, and{" "}
              <strong className="text-brand-olive font-bold">cybersecurity</strong> to build resilient digital systems
              that scale organizations into market leaders.
            </p>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-brand-olive/20 shadow-xl font-mono text-xs text-brand-olive-deep space-y-2">
              <div className="text-brand-olive font-black text-sm uppercase">
                INTELLUSCORE ADVANTAGE
              </div>
              <p className="leading-relaxed font-sans text-sm text-brand-olive-deep/80">
                Tailored engineering with zero technical debt and active defensive security embedded from day one.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-brand-olive/15 flex items-center gap-4 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-olive/10 flex items-center justify-center text-brand-olive shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-brand-olive-dark">
                    {item.label}
                  </div>
                  <div className="text-xs font-mono text-brand-olive/70 font-semibold">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 01 - 04 Four Pillars Grid */}
        <div className="intro-pillars-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="intro-pillar-card group relative p-8 rounded-3xl bg-white border border-brand-olive/15 hover:border-brand-olive hover:shadow-2xl hover:shadow-brand-olive/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl font-extrabold text-brand-olive/30 group-hover:text-brand-olive transition-colors">
                      {pillar.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-brand-olive/10 border border-brand-olive/20 flex items-center justify-center text-brand-olive group-hover:bg-brand-olive group-hover:text-brand-cream transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-brand-olive font-bold uppercase">
                      // {pillar.tag}
                    </span>
                    <h3 className="font-display text-3xl font-bold text-brand-olive-dark mt-1 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-olive-deep/80 leading-relaxed font-light mb-4">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 pt-3 border-t border-brand-olive/10 text-xs font-mono text-brand-olive-dark">
                    {pillar.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-olive shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-brand-olive/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-brand-olive/60 uppercase font-bold">
                    PHASE {pillar.num} LIFECYCLE
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-olive/40 group-hover:bg-brand-olive group-hover:scale-125 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight, ShieldCheck, Sparkles, Cpu, Terminal, ArrowDown, Activity, CheckCircle } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const tickerItems = [
  "NEXT-GEN WEB ARCHITECTURE",
  "AUTONOMOUS AI WORKFLOWS",
  "ZERO-TRUST CYBERSECURITY",
  "DISTRIBUTED CLOUD SYSTEMS",
  "ENTERPRISE LLM INTEGRATION",
  "CONTINUOUS THREAT MONITORING",
  "INTELLISCORE ENGINEERING",
  "SUB-SECOND EDGE DELIVERY",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-badge-pill", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.2,
      })
        .from(
          ".hero-headline-word",
          {
            opacity: 0,
            y: 80,
            stagger: 0.12,
            duration: 1.2,
          },
          "-=0.5"
        )
        .from(
          ".hero-paragraph",
          {
            opacity: 0,
            y: 30,
            duration: 0.9,
          },
          "-=0.7"
        )
        .from(
          ".hero-action-group",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".hero-orb-card",
          {
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
          },
          "-=0.9"
        );
    }, containerRef);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 25,
        y: (e.clientY / innerHeight - 0.5) * 25,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-36 pb-0 bg-gradient-to-b from-brand-olive-dark via-brand-olive-deep to-brand-olive-dark overflow-hidden"
    >
      {/* Background Image with Dark Cyber Gradient Scrim */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: "url('/images/hero-main-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-olive-dark/85 via-brand-olive-dark/40 to-brand-olive-dark pointer-events-none" />

      {/* Ambient Grid & Radial Lighting */}
      <div className="absolute inset-0 tech-grid opacity-35 pointer-events-none" />
      <div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-brand-olive/20 rounded-full blur-[150px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bold Headline & Editorial Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Tag */}
            <div className="hero-badge-pill inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-olive-surface border border-brand-cream/20 text-brand-cream text-xs font-mono tracking-widest uppercase mb-6 shadow-md">
              <span className="w-2 h-2 rounded-full bg-brand-cream animate-ping" />
              <span>TECHNOLOGY • AUTOMATION • SECURITY</span>
            </div>

            {/* Giant Display Title */}
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl xl:text-[9.5rem] font-bold uppercase tracking-tight text-brand-cream leading-[0.85] mb-8">
              <span className="hero-headline-word block">
                BUILD<span className="text-brand-olive-light">.</span>
              </span>
              <span className="hero-headline-word block text-brand-olive-light">
                AUTOMATE<span className="text-brand-cream">.</span>
              </span>
              <span className="hero-headline-word block">
                SECURE<span className="text-brand-olive-light">.</span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="hero-paragraph text-base sm:text-lg md:text-xl text-brand-cream-muted font-light max-w-xl leading-relaxed mb-10 border-l-2 border-brand-cream/30 pl-5">
              We engineer high-performance web platforms, orchestrate autonomous AI multi-agent workflows,
              and fortify the mission-critical systems that drive modern market leaders.
            </p>

            {/* CTA Group */}
            <div className="hero-action-group flex flex-wrap items-center gap-4 sm:gap-6">
              <MagneticButton
                variant="primary"
                href="/solutions"
                className="rounded-full text-xs sm:text-sm px-8 py-4"
              >
                <span>Explore Solutions</span>
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton
                variant="secondary"
                href="/contact"
                className="rounded-full text-xs sm:text-sm px-8 py-4"
              >
                <span>Start Project</span>
              </MagneticButton>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-12 pt-8 border-t border-brand-cream/15 w-full grid grid-cols-3 gap-6">
              <div>
                <div className="font-display text-3xl sm:text-4xl font-bold text-brand-cream">99.99%</div>
                <div className="text-[11px] font-mono uppercase text-brand-cream-muted tracking-wider">Target Uptime</div>
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl font-bold text-brand-olive-light">10x</div>
                <div className="text-[11px] font-mono uppercase text-brand-cream-muted tracking-wider">Automation ROI</div>
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl font-bold text-brand-cream">0 CVEs</div>
                <div className="text-[11px] font-mono uppercase text-brand-cream-muted tracking-wider">Zero Compromise</div>
              </div>
            </div>
          </div>

          {/* Right Column: Holographic Radar Nexus */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div
              className="hero-orb-card relative w-full aspect-square max-w-md rounded-3xl bg-brand-olive-surface border border-brand-cream/20 p-8 shadow-2xl transition-transform duration-500 ease-out flex flex-col justify-between overflow-hidden group"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 0.3}deg) rotateX(${-mousePos.y * 0.3}deg)`,
              }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-brand-cream/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-cream" />
                  <span className="font-mono text-xs text-brand-cream uppercase font-bold tracking-wider">
                    INTELLISCORE_OS // V2.4
                  </span>
                </div>
                <span className="text-[10px] font-mono text-brand-cream-muted uppercase bg-brand-olive-dark px-3 py-1 rounded-full border border-brand-cream/15 font-bold">
                  ACTIVE DEFENSE
                </span>
              </div>

              {/* Central Glowing Visual Hub */}
              <div className="relative my-auto py-8 flex flex-col items-center justify-center">
                <div className="absolute w-56 h-56 rounded-full border border-brand-cream/20 animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-44 h-44 rounded-full border border-brand-olive-light/40 border-dashed animate-[spin_12s_linear_infinite_reverse]" />
                <div className="absolute w-32 h-32 rounded-full bg-brand-olive/30 border border-brand-cream/40 animate-pulse" />

                <div className="relative z-10 w-20 h-20 rounded-2xl bg-brand-cream text-brand-olive-dark flex items-center justify-center shadow-2xl shadow-brand-cream/30 group-hover:scale-110 transition-transform duration-500">
                  <Cpu className="w-10 h-10 animate-pulse" />
                </div>

                {/* Floating Orbiting Badges */}
                <div className="absolute -top-1 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-olive-dark border border-brand-cream/20 text-[11px] font-mono text-brand-cream shadow-xl">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-olive-light" />
                  <span>ZERO-TRUST: FORTIFIED</span>
                </div>

                <div className="absolute -bottom-1 right-2 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-olive-dark border border-brand-cream/20 text-[11px] font-mono text-brand-cream shadow-xl">
                  <Sparkles className="w-3.5 h-3.5 text-brand-olive-light" />
                  <span>AGENTIC_MESH: SYNCED</span>
                </div>
              </div>

              {/* Bottom Live Terminal Output */}
              <div className="bg-brand-olive-dark p-4 rounded-2xl border border-brand-cream/15 font-mono text-[11px] text-brand-cream space-y-1.5">
                <div className="flex items-center gap-2 text-brand-cream font-bold">
                  <Terminal className="w-4 h-4 text-brand-olive-light" />
                  <span>&gt; pipeline.orchestrate(&apos;PROD_CLUSTER&apos;)</span>
                </div>
                <div className="text-brand-cream-muted pl-6 text-[10px] leading-tight">
                  [STATUS: 200 OK] 4 Services Active • Latency 12ms • Zero Vulnerabilities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Ticker */}
      <div className="w-full bg-brand-olive-surface border-y border-brand-cream/15 py-4 overflow-hidden mt-16">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 shrink-0">
              <span className="font-display text-lg sm:text-xl font-bold uppercase tracking-widest text-brand-cream">
                {item}
              </span>
              <span className="text-brand-olive-light text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

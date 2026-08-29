"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight, ShieldCheck, Cpu, GitBranch, Terminal, Lock, Sparkles } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-badge", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        delay: 0.2,
      })
        .from(
          ".hero-title-line",
          {
            opacity: 0,
            y: 60,
            rotateX: -20,
            stagger: 0.15,
            duration: 1.2,
          },
          "-=0.4"
        )
        .from(
          ".hero-desc",
          {
            opacity: 0,
            y: 30,
            duration: 0.9,
          },
          "-=0.7"
        )
        .from(
          ".hero-cta",
          {
            opacity: 0,
            y: 20,
            stagger: 0.12,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-visual-card",
          {
            opacity: 0,
            scale: 0.92,
            duration: 1.4,
          },
          "-=1.1"
        )
        .from(
          ".hero-indicator",
          {
            opacity: 0,
            y: -10,
            duration: 0.8,
          },
          "-=0.6"
        );
    }, containerRef);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
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
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-6 md:px-12 bg-brand-slate overflow-hidden"
    >
      {/* Animated Technical Grid and Ambient Glows */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-slate pointer-events-none" />

      {/* Radial soft orange accent glow */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-brand-dark/80 rounded-full blur-3xl pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`,
        }}
      />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 my-auto">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Technical Tag / Label */}
          <div className="hero-badge inline-flex items-center gap-3 px-3.5 py-1.5 rounded-sm bg-brand-light-slate/50 border border-brand-orange/30 text-brand-orange text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>TECHNOLOGY • AUTOMATION • SECURITY</span>
          </div>

          {/* Oversized Chorus Display Headline */}
          <h1
            ref={headlineRef}
            className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-[0.95] mb-8"
          >
            <span className="hero-title-line block">
              BUILD<span className="text-brand-orange">.</span>
            </span>
            <span className="hero-title-line block text-brand-orange">
              AUTOMATE<span className="text-white">.</span>
            </span>
            <span className="hero-title-line block">
              SECURE<span className="text-brand-orange">.</span>
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-desc text-lg sm:text-xl text-brand-cream/80 max-w-xl font-light leading-relaxed mb-10 border-l-2 border-brand-orange/40 pl-5">
            We build intelligent digital experiences, automate complex workflows,
            and secure the technology that powers modern, high-performing businesses.
          </p>

          {/* CTA Group */}
          <div className="hero-cta flex flex-wrap items-center gap-4 sm:gap-6">
            <MagneticButton variant="primary" href="#solutions">
              <span>Explore Our Solutions</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton variant="secondary" href="#cta">
              <span>Start a Project</span>
            </MagneticButton>
          </div>

          {/* Metrics Quick Strip */}
          <div className="hero-cta mt-12 pt-8 border-t border-white/10 w-full grid grid-cols-3 gap-4">
            <div>
              <div className="font-display text-2xl md:text-3xl font-bold text-white">99.9%</div>
              <div className="text-[11px] font-mono uppercase text-brand-cream/60 tracking-wider">Uptime & Sec</div>
            </div>
            <div>
              <div className="font-display text-2xl md:text-3xl font-bold text-brand-orange">10x</div>
              <div className="text-[11px] font-mono uppercase text-brand-cream/60 tracking-wider">Auto Velocity</div>
            </div>
            <div>
              <div className="font-display text-2xl md:text-3xl font-bold text-white">Zero</div>
              <div className="text-[11px] font-mono uppercase text-brand-cream/60 tracking-wider">Compromise</div>
            </div>
          </div>
        </div>

        {/* Right Column: Abstract Technology & AI/Security Nexus */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div
            className="hero-visual-card relative w-full aspect-square max-w-lg rounded-sm glass-panel-dark p-6 border border-white/10 shadow-2xl transition-transform duration-500 ease-out flex flex-col justify-between overflow-hidden group"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg)`,
            }}
          >
            {/* Top decorative header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-orange/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="text-[10px] font-mono text-brand-cream/50 uppercase tracking-widest">
                CORE_NEXUS // SYS_ONLINE
              </div>
            </div>

            {/* Central Node Intersection */}
            <div className="relative my-auto py-10 flex flex-col items-center justify-center">
              {/* Concentric glowing rings */}
              <div className="absolute w-56 h-56 rounded-full border border-brand-orange/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-44 h-44 rounded-full border border-white/10 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute w-32 h-32 rounded-full bg-brand-orange/5 border border-brand-orange/30 animate-pulse" />

              {/* Core emblem */}
              <div className="relative z-10 w-20 h-20 rounded-sm bg-brand-slate/90 border border-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/30 group-hover:scale-105 transition-transform duration-500">
                <Cpu className="w-9 h-9 text-brand-orange animate-pulse" />
              </div>

              {/* Orbiting Satellite Data Nodes */}
              <div className="absolute -top-3 left-10 flex items-center gap-2 px-3 py-1.5 rounded bg-brand-dark/90 border border-white/15 text-[11px] font-mono text-brand-cream/90 shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                <span>CYBER_SHIELD: 100%</span>
              </div>

              <div className="absolute -bottom-3 right-8 flex items-center gap-2 px-3 py-1.5 rounded bg-brand-dark/90 border border-white/15 text-[11px] font-mono text-brand-cream/90 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                <span>AI_AUTO_ENGINE</span>
              </div>

              <div className="absolute top-1/2 -left-6 -translate-y-1/2 flex items-center gap-2 px-2.5 py-1 rounded bg-brand-dark/90 border border-white/15 text-[10px] font-mono text-brand-cream/70">
                <GitBranch className="w-3 h-3 text-brand-orange" />
                <span>ENG_PIPELINE</span>
              </div>

              <div className="absolute top-1/2 -right-6 -translate-y-1/2 flex items-center gap-2 px-2.5 py-1 rounded bg-brand-dark/90 border border-white/15 text-[10px] font-mono text-brand-cream/70">
                <Lock className="w-3 h-3 text-brand-orange" />
                <span>ENCRYPT_256</span>
              </div>
            </div>

            {/* Bottom Terminal Output */}
            <div className="bg-brand-dark/90 p-3.5 rounded-sm border border-white/10 font-mono text-[11px] text-brand-cream/70 space-y-1">
              <div className="flex items-center gap-2 text-brand-orange">
                <Terminal className="w-3.5 h-3.5" />
                <span>&gt; pipeline.initiate(&apos;INTELLISCORE_STACK&apos;)</span>
              </div>
              <div className="text-white/60 pl-5">
                [OK] Engineering, Automation, and Security synchronized.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="hero-indicator mt-auto pt-6 flex flex-col items-center gap-2 text-brand-cream/50 hover:text-brand-orange transition-colors">
        <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL TO EXPLORE</span>
        <a href="#intro" aria-label="Scroll to introduction" className="p-2 animate-bounce">
          <ArrowDown className="w-4 h-4 text-brand-orange" />
        </a>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Hammer, Cpu, ShieldCheck } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Strategy",
    icon: Compass,
    desc: "Architecting future-proof digital roadmaps aligned with business objectives and technical realities.",
  },
  {
    num: "02",
    title: "Build",
    icon: Hammer,
    desc: "Engineering high-performance web systems, custom applications, and robust digital platforms.",
  },
  {
    num: "03",
    title: "Automate",
    icon: Cpu,
    desc: "Integrating intelligent agents and autonomous pipelines to eliminate repetitive operational friction.",
  },
  {
    num: "04",
    title: "Secure",
    icon: ShieldCheck,
    desc: "Deploying enterprise-grade cybersecurity controls, vulnerability defenses, and active threat monitoring.",
  },
];

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Intro headline reveal
      gsap.from(".intro-headline", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Pillars staggered reveal
      gsap.from(".intro-pillar", {
        scrollTrigger: {
          trigger: ".intro-pillars-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.18,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-brand-slate via-brand-dark to-brand-slate overflow-hidden border-t border-white/5"
    >
      {/* Background Accent Gradients */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Header Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-brand-orange" />
          <span className="text-xs font-mono tracking-widest text-brand-orange uppercase">
            // About INTELLISCORE
          </span>
        </div>

        {/* Enormous Chorus Typography Statement */}
        <div className="mb-20">
          <h2 className="intro-headline font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[0.95] max-w-5xl">
            Technology that moves{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-orange-light to-white">
              business forward.
            </span>
          </h2>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <p className="md:col-span-8 text-lg sm:text-xl text-brand-cream/80 leading-relaxed font-light">
              INTELLISCORE is an elite technology studio and consultancy. We operate at the intersection of{" "}
              <strong className="text-white font-medium">software engineering</strong>,{" "}
              <strong className="text-brand-orange font-medium">AI automation</strong>, and{" "}
              <strong className="text-white font-medium">cybersecurity</strong> to build resilient digital systems
              that scale organizations into market leaders.
            </p>
            <div className="md:col-span-4 p-5 rounded-sm bg-brand-light-slate/30 border border-white/10 font-mono text-xs text-brand-cream/70">
              <div className="text-brand-orange font-bold mb-1">INTELLISCORE ADVANTAGE</div>
              <div>Tailored engineering with zero technical debt and active security embedded from day one.</div>
            </div>
          </div>
        </div>

        {/* Asymmetrical 01 - 04 Four Pillars Grid */}
        <div className="intro-pillars-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="intro-pillar group relative p-8 rounded-sm bg-brand-surface/70 border border-white/10 hover:border-brand-orange/60 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Top Number and Icon */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-display text-4xl font-bold text-brand-orange/40 group-hover:text-brand-orange transition-colors">
                      {pillar.num}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-brand-light-slate/40 border border-white/10 flex items-center justify-center text-brand-cream/80 group-hover:text-brand-orange group-hover:border-brand-orange/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-brand-cream/70 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Accent Bar */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-brand-cream/40 uppercase">
                    PHASE {pillar.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-brand-orange/20 group-hover:bg-brand-orange group-hover:scale-125 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

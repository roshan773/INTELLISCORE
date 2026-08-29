"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Hammer, Cpu, ShieldCheck, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Strategy",
    icon: Compass,
    desc: "Architecting future-proof digital roadmaps aligned with business objectives, system scalability, and technical realities.",
  },
  {
    num: "02",
    title: "Build",
    icon: Hammer,
    desc: "Engineering high-performance web systems, custom applications, and robust digital platforms with sub-second speeds.",
  },
  {
    num: "03",
    title: "Automate",
    icon: Cpu,
    desc: "Integrating intelligent agents and autonomous multi-agent pipelines to eliminate repetitive operational friction.",
  },
  {
    num: "04",
    title: "Secure",
    icon: ShieldCheck,
    desc: "Deploying enterprise-grade cybersecurity controls, vulnerability defenses, and active threat monitoring around the clock.",
  },
];

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".intro-title-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
      });

      gsap.from(".intro-pillar-card", {
        scrollTrigger: {
          trigger: ".intro-pillars-container",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-12 bg-brand-cream-light text-brand-olive-dark overflow-hidden border-b border-brand-olive/15 selection:bg-brand-olive selection:text-brand-cream"
    >
      <div className="absolute inset-0 tech-grid-cream opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Header Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-0.5 w-12 bg-brand-olive" />
          <span className="text-xs font-mono tracking-widest text-brand-olive font-bold uppercase">
            // ABOUT INTELLISCORE
          </span>
        </div>

        {/* Enormous Headline in Cream Background */}
        <div className="mb-20">
          <h2 className="intro-title-text font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase text-brand-olive-dark tracking-tight leading-[0.88] max-w-6xl">
            Technology that moves{" "}
            <span className="text-brand-olive underline decoration-brand-olive/30">
              business forward.
            </span>
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <p className="md:col-span-8 text-lg sm:text-xl md:text-2xl text-brand-olive-deep/90 leading-relaxed font-normal">
              INTELLISCORE is an elite technology studio and consultancy. We operate at the intersection of{" "}
              <strong className="text-brand-olive font-bold">software engineering</strong>,{" "}
              <strong className="text-brand-olive font-bold">AI automation</strong>, and{" "}
              <strong className="text-brand-olive font-bold">cybersecurity</strong> to build resilient digital systems
              that scale organizations into market leaders.
            </p>

            <div className="md:col-span-4 p-6 rounded-2xl bg-white border border-brand-olive/20 shadow-xl font-mono text-xs text-brand-olive-deep">
              <div className="text-brand-olive font-black text-sm uppercase mb-1">
                INTELLISCORE ADVANTAGE
              </div>
              <p className="leading-relaxed">
                Tailored engineering with zero technical debt and active security embedded from day one.
              </p>
            </div>
          </div>
        </div>

        {/* 01 - 04 Four Pillars Grid */}
        <div className="intro-pillars-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="intro-pillar-card group relative p-8 rounded-2xl bg-white border border-brand-olive/15 hover:border-brand-olive hover:shadow-2xl hover:shadow-brand-olive/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-display text-5xl font-extrabold text-brand-olive/30 group-hover:text-brand-olive transition-colors">
                      {pillar.num}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-brand-olive/10 border border-brand-olive/20 flex items-center justify-center text-brand-olive group-hover:bg-brand-olive group-hover:text-brand-cream transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-display text-3xl font-bold text-brand-olive-dark mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-brand-olive-deep/80 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-brand-olive/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-brand-olive/60 uppercase font-bold">
                    PHASE {pillar.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-brand-olive/40 group-hover:bg-brand-olive group-hover:scale-125 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

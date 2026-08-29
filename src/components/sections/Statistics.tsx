"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  {
    value: "10+",
    label: "Technology Solutions",
    sub: "AI, Web, Automation & Defense",
  },
  {
    value: "25+",
    label: "Projects Delivered",
    sub: "With Zero Production Rollbacks",
  },
  {
    value: "99%",
    label: "Focus on Quality",
    sub: "Strict Performance Benchmarks",
  },
  {
    value: "24/7",
    label: "Security Mindset",
    sub: "Continuous Threat Monitoring",
  },
];

export default function Statistics() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".stat-card-pill", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 md:px-12 bg-brand-olive-deep overflow-hidden border-t border-b border-brand-cream/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="stat-card-pill p-8 rounded-2xl bg-brand-olive-surface border border-brand-cream/15 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="font-display text-6xl sm:text-7xl md:text-8xl font-black text-brand-cream mb-2 leading-none">
                  {stat.value}
                </div>
                <div className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
                  {stat.label}
                </div>
              </div>
              <div className="text-xs font-mono text-brand-cream-muted pt-4 border-t border-brand-cream/10">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

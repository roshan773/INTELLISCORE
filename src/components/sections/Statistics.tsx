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
      gsap.from(".stat-item", {
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
      className="relative py-24 px-6 md:px-12 bg-brand-slate overflow-hidden border-t border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="stat-item p-6 rounded-sm bg-brand-dark/50 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-brand-orange mb-2">
                  {stat.value}
                </div>
                <div className="font-display text-lg font-bold text-white mb-1">
                  {stat.label}
                </div>
              </div>
              <div className="text-xs font-mono text-brand-cream/50 pt-4 border-t border-white/5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

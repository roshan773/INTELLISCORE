"use client";

import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "INTELLISCORE completely restructured our enterprise architecture. Their team delivered an ultra-secure, AI-augmented trading platform that exceeded every performance metric we gave them. Truly a rare breed of elite engineers.",
    author: "Alexander Vance",
    position: "Chief Technology Officer",
    company: "Apex Capital Systems",
    rating: 5,
  },
  {
    quote:
      "The custom AI automation pipelines built by INTELLISCORE replaced weeks of repetitive manual document sorting with an instantaneous automated workflow. Our operational efficiency jumped tenfold in under a month.",
    author: "Elena Rostova",
    position: "VP of Digital Operations",
    company: "Nexus Global Supply",
    rating: 5,
  },
  {
    quote:
      "Finding a partner who understands both bleeding-edge frontend engineering and rigorous zero-trust cybersecurity is almost impossible. INTELLISCORE provided both with uncompromising precision.",
    author: "Marcus Thorne",
    position: "Head of Engineering",
    company: "BioSync Diagnostics",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    setCurrentIdx((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIdx((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  const active = testimonials[currentIdx];

  return (
    <section className="relative py-28 px-6 md:px-12 bg-brand-dark overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-brand-orange" />
            <span className="text-xs font-mono tracking-widest text-brand-orange uppercase">
              // EXECUTIVE ENDORSEMENTS
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-sm bg-brand-surface border border-white/10 hover:border-brand-orange text-white hover:text-brand-orange flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-sm bg-brand-surface border border-white/10 hover:border-brand-orange text-white hover:text-brand-orange flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Big Testimonial Display */}
        <div className="p-8 md:p-14 rounded-sm bg-brand-surface/70 border border-white/10 relative overflow-hidden shadow-2xl">
          <Quote className="w-16 h-16 text-brand-orange/15 absolute top-6 right-8 pointer-events-none" />

          {/* Rating stars */}
          <div className="flex items-center gap-1 text-brand-orange mb-8">
            {[...Array(active.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          {/* Quote text */}
          <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl text-white font-medium leading-snug mb-10">
            &ldquo;{active.quote}&rdquo;
          </blockquote>

          {/* Author info */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-display text-lg font-bold text-brand-orange">
                {active.author}
              </div>
              <div className="text-xs font-mono text-brand-cream/60">
                {active.position} — <span className="text-white">{active.company}</span>
              </div>
            </div>

            <div className="text-xs font-mono text-brand-cream/40">
              0{currentIdx + 1} / 0{testimonials.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

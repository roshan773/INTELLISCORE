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
    <section className="relative py-32 px-6 md:px-12 bg-brand-olive-dark overflow-hidden border-t border-brand-cream/10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-12 bg-brand-cream" />
            <span className="text-xs font-mono tracking-widest text-brand-cream uppercase font-bold">
              // EXECUTIVE ENDORSEMENTS
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full bg-brand-olive-surface border border-brand-cream/20 hover:border-brand-cream text-brand-cream flex items-center justify-center transition-all cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-brand-olive-surface border border-brand-cream/20 hover:border-brand-cream text-brand-cream flex items-center justify-center transition-all cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Big Testimonial Display */}
        <div className="p-8 md:p-14 rounded-2xl bg-brand-olive-surface border border-brand-cream/20 relative overflow-hidden shadow-2xl">
          <Quote className="w-20 h-20 text-brand-cream/10 absolute top-6 right-8 pointer-events-none" />

          {/* Rating stars */}
          <div className="flex items-center gap-1 text-brand-cream mb-8">
            {[...Array(active.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>

          {/* Quote text */}
          <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl text-brand-cream font-medium leading-snug mb-10">
            &ldquo;{active.quote}&rdquo;
          </blockquote>

          {/* Author info */}
          <div className="pt-6 border-t border-brand-cream/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-display text-2xl font-bold text-white">
                {active.author}
              </div>
              <div className="text-xs sm:text-sm font-mono text-brand-cream-muted">
                {active.position} — <span className="text-brand-cream font-semibold">{active.company}</span>
              </div>
            </div>

            <div className="text-xs font-mono text-brand-cream/40 font-bold">
              0{currentIdx + 1} / 0{testimonials.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

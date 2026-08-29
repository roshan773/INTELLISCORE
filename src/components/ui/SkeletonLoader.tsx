import React from "react";

export function SkeletonBase({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl bg-brand-olive-surface/60 border border-brand-cream/10 animate-shimmer relative overflow-hidden ${className}`}
    />
  );
}

export function SkeletonText({
  lines = 3,
  className = "",
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={`space-y-2.5 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-3 rounded-full bg-brand-olive-surface/80 border border-brand-cream/10 animate-shimmer"
          style={{ width: i === lines - 1 ? "60%" : i === 0 ? "100%" : "85%" }}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`p-6 sm:p-8 rounded-3xl bg-brand-olive-dark/70 border border-brand-cream/15 space-y-6 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-2xl bg-brand-olive-surface border border-brand-cream/15 animate-shimmer" />
        <div className="w-20 h-5 rounded-full bg-brand-olive-surface border border-brand-cream/10 animate-shimmer" />
      </div>

      <div className="space-y-3">
        <div className="w-3/4 h-6 rounded-lg bg-brand-olive-surface border border-brand-cream/10 animate-shimmer" />
        <SkeletonText lines={3} />
      </div>

      <div className="pt-4 border-t border-brand-cream/10 flex justify-between items-center">
        <div className="w-24 h-4 rounded bg-brand-olive-surface animate-shimmer" />
        <div className="w-8 h-8 rounded-full bg-brand-olive-surface animate-shimmer" />
      </div>
    </div>
  );
}

export function SkeletonHero() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-8 max-w-4xl mx-auto">
      <div className="w-48 h-6 rounded-full bg-brand-olive-surface border border-brand-cream/10 animate-shimmer" />
      <div className="w-full space-y-4">
        <div className="w-4/5 h-16 sm:h-20 mx-auto rounded-2xl bg-brand-olive-surface border border-brand-cream/15 animate-shimmer" />
        <div className="w-2/3 h-16 sm:h-20 mx-auto rounded-2xl bg-brand-olive-surface border border-brand-cream/15 animate-shimmer" />
      </div>
      <div className="w-full max-w-md mx-auto">
        <SkeletonText lines={2} />
      </div>
      <div className="flex gap-4 pt-4">
        <div className="w-40 h-12 rounded-full bg-brand-cream/20 border border-brand-cream/30 animate-shimmer" />
        <div className="w-40 h-12 rounded-full bg-brand-olive-surface border border-brand-cream/15 animate-shimmer" />
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

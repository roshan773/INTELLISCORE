"use client";

import React, { useEffect, useState } from "react";
import { Shield, Sparkles, Terminal } from "lucide-react";

const bootLogs = [
  "INITIALIZING INTELLUSCORE ARCHITECTURE...",
  "SYNCING DISTRIBUTED EDGE WORKERS...",
  "LOADING ZERO-TRUST CIPHER SUITES...",
  "SYSTEM STATUS: OPTIMAL // STANDBY READY",
];

export default function FuturisticLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    // Only show once per session or initial visit
    const hasLoaded = sessionStorage.getItem("intelluscore_loaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("intelluscore_loaded", "true");
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 10;
      });
    }, 120);

    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev < bootLogs.length - 1 ? prev + 1 : prev));
    }, 350);

    return () => {
      clearInterval(interval);
      clearInterval(logInterval);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-brand-olive-dark flex flex-col items-center justify-center p-6 text-brand-cream transition-opacity duration-700 pointer-events-none select-none ${
        progress >= 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background Cyber Matrix Grid */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-brand-olive/20 blur-3xl pointer-events-none animate-pulse" />

      <div className="relative z-10 max-w-md w-full text-center space-y-8">
        {/* Glowing Futuristic Emblem */}
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-brand-olive-light/40 animate-ping opacity-30" />
          <div className="absolute inset-0 rounded-full border border-dashed border-brand-cream/30 animate-spin" style={{ animationDuration: "12s" }} />
          <div className="w-20 h-20 rounded-full bg-brand-olive-deep/90 border border-brand-cream/40 flex items-center justify-center shadow-2xl shadow-brand-cream/20">
            <img
              src="/Intelluscore favicon.ico"
              alt="INTELLUSCORE"
              className="w-12 h-12 object-contain filter drop-shadow-[0_0_12px_rgba(242,238,230,0.6)]"
            />
          </div>
        </div>

        {/* Brand Wordmark & Tagline */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-olive-surface border border-brand-cream/20 text-[10px] font-mono tracking-widest text-brand-olive-light uppercase font-bold">
            <Sparkles className="w-3 h-3" />
            <span>ENTERPRISE ARCHITECTURE PROTOCOL</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-wider text-brand-cream uppercase">
            INTELLUS<span className="text-brand-olive-light">CORE</span>
          </h1>

          <p className="text-xs font-mono text-brand-cream-muted uppercase tracking-widest">
            BUILD // AUTOMATE // SECURE
          </p>
        </div>

        {/* Futuristic Cyber Progress Bar */}
        <div className="space-y-3">
          <div className="flex justify-between text-xs font-mono text-brand-cream-muted">
            <span className="flex items-center gap-1.5 text-brand-olive-light">
              <Terminal className="w-3.5 h-3.5" />
              <span>BOOT SEQUENCE</span>
            </span>
            <span className="text-brand-cream font-bold">{Math.min(progress, 100)}%</span>
          </div>

          <div className="w-full h-1.5 rounded-full bg-brand-olive-surface border border-brand-cream/15 overflow-hidden p-0.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-olive via-brand-olive-light to-brand-cream transition-all duration-200 shadow-[0_0_15px_rgba(242,238,230,0.8)]"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          {/* Terminal Diagnostic Log Line */}
          <div className="h-6 text-[11px] font-mono text-brand-cream-muted/80 truncate">
            {bootLogs[logIndex]}
          </div>
        </div>

        {/* Security Assurance Badge */}
        <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-brand-cream-muted/60">
          <Shield className="w-3 h-3 text-brand-olive-light" />
          <span>ZERO-TRUST SECURED ENVIRONMENT</span>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { Shield, Sparkles, Terminal, CheckCircle2 } from "lucide-react";

const bootLogs = [
  "INITIALIZING INTELLUSCORE ARCHITECTURE...",
  "SYNCING DISTRIBUTED EDGE WORKERS...",
  "CONNECTING CRYPTOGRAPHIC DEFENSE CIPHERS...",
  "OPTIMIZING HIGH-PERFORMANCE RUNTIMES...",
  "SYSTEM STATUS: 100% ONLINE // ACCESS GRANTED",
];

export default function FuturisticLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = "hidden";

    const duration = 2200; // total duration in ms
    const intervalTime = 35;
    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          setComplete(true);
          setLogIndex(bootLogs.length - 1);

          // Once exactly 100% is reached and displayed, smoothly reveal the site
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "";
          }, 600);

          return 100;
        }

        // Update logs based on progress percentage
        if (next < 25) setLogIndex(0);
        else if (next < 50) setLogIndex(1);
        else if (next < 75) setLogIndex(2);
        else setLogIndex(3);

        return Math.floor(next);
      });
    }, intervalTime);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-brand-olive-dark flex flex-col items-center justify-center p-6 text-brand-cream transition-all duration-700 select-none ${
        complete ? "opacity-0 pointer-events-none scale-105" : "opacity-100 pointer-events-auto scale-100"
      }`}
    >
      {/* Background Cyber Matrix Grid */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-brand-olive/25 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border border-brand-cream/10 pointer-events-none" />

      <div className="relative z-10 max-w-md w-full text-center space-y-8">
        {/* Glowing Futuristic Holographic Emblem */}
        <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-brand-olive-light/40 animate-ping opacity-40" />
          <div
            className="absolute -inset-2 rounded-full border border-dashed border-brand-cream/30 animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <div className="w-22 h-22 rounded-full bg-brand-olive-deep/95 border-2 border-brand-cream/40 flex items-center justify-center shadow-2xl shadow-brand-cream/25">
            <img
              src="/Intelluscore favicon.ico"
              alt="INTELLUSCORE"
              className="w-14 h-14 object-contain filter drop-shadow-[0_0_15px_rgba(242,238,230,0.7)]"
            />
          </div>
        </div>

        {/* Brand Wordmark & Tagline */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-olive-surface border border-brand-cream/20 text-[10px] font-mono tracking-widest text-brand-olive-light uppercase font-bold shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
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
        <div className="space-y-3 p-5 rounded-2xl bg-brand-olive-surface/80 border border-brand-cream/20 shadow-2xl backdrop-blur-md">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="flex items-center gap-2 text-brand-olive-light font-bold">
              <Terminal className="w-4 h-4" />
              <span>{complete ? "SYSTEM ONLINE" : "BOOT SEQUENCE"}</span>
            </span>
            <span className={`font-bold font-mono text-sm ${complete ? "text-emerald-400" : "text-brand-cream"}`}>
              {Math.min(progress, 100)}%
            </span>
          </div>

          <div className="w-full h-2 rounded-full bg-brand-olive-dark border border-brand-cream/20 overflow-hidden p-0.5">
            <div
              className={`h-full rounded-full transition-all duration-75 shadow-[0_0_18px_rgba(242,238,230,0.9)] ${
                complete
                  ? "bg-gradient-to-r from-emerald-400 to-emerald-300"
                  : "bg-gradient-to-r from-brand-olive via-brand-olive-light to-brand-cream"
              }`}
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          {/* Terminal Diagnostic Log Line */}
          <div className="h-6 text-[11px] font-mono flex items-center justify-center gap-1.5 text-brand-cream-muted transition-all">
            {complete ? (
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {bootLogs[bootLogs.length - 1]}
              </span>
            ) : (
              <span>{bootLogs[logIndex]}</span>
            )}
          </div>
        </div>

        {/* Security Assurance Badge */}
        <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-brand-cream-muted/70">
          <Shield className="w-3.5 h-3.5 text-brand-olive-light" />
          <span>ZERO-TRUST SECURED ENVIRONMENT</span>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useState, useRef } from "react";
import { Shield, Sparkles, Terminal, CheckCircle2, Zap, Activity, Cpu, Lock } from "lucide-react";

const bootLogs = [
  "INITIALIZING INTELLUSCORE ARCHITECTURE...",
  "SYNCING DISTRIBUTED EDGE WORKERS...",
  "CONNECTING CRYPTOGRAPHIC DEFENSE CIPHERS...",
  "OPTIMIZING HIGH-PERFORMANCE RUNTIMES...",
  "SYSTEM STATUS: 100% ONLINE // ACCESS GRANTED",
];

const telemetryChips = [
  { icon: Activity, label: "LATENCY", value: "12ms OPTIMAL" },
  { icon: Lock, label: "CIPHER", value: "AES-256-GCM" },
  { icon: Cpu, label: "RUNTIME", value: "TURBOPACK V8" },
  { icon: Shield, label: "DEFENSE", value: "ZERO-TRUST ACTIVE" },
];

export default function FuturisticLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [complete, setComplete] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [overclockCount, setOverclockCount] = useState(0);
  const [hexStream, setHexStream] = useState("0x7F4B 0x9A21 0x3E11 0x00FF");
  const containerRef = useRef<HTMLDivElement>(null);

  // Hex stream generator
  useEffect(() => {
    const hexInterval = setInterval(() => {
      const hex = Array.from({ length: 4 }, () =>
        "0x" + Math.floor(Math.random() * 0xffff).toString(16).toUpperCase().padStart(4, "0")
      ).join(" ");
      setHexStream(hex);
    }, 150);

    return () => clearInterval(hexInterval);
  }, []);

  // Main Loading Progression
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const duration = 2400; // total duration
    const intervalTime = 35;
    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          setComplete(true);
          setLogIndex(bootLogs.length - 1);

          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "";
          }, 650);

          return 100;
        }

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

  // Interactive Cursor Spotlight
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  // Interactive Click to Overclock / Accelerate
  const handleOverclock = () => {
    setOverclockCount((c) => c + 1);
    setProgress((prev) => Math.min(prev + 18, 99));
  };

  if (!loading) return null;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onClick={handleOverclock}
      className={`fixed inset-0 z-[99999] bg-brand-olive-dark flex flex-col items-center justify-between p-6 sm:p-10 text-brand-cream transition-all duration-700 select-none cursor-crosshair overflow-hidden ${
        complete ? "opacity-0 pointer-events-none scale-105" : "opacity-100 pointer-events-auto scale-100"
      }`}
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-brand-olive/30 blur-[140px] pointer-events-none transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${mousePos.x * 10 - 300}px, ${mousePos.y * 8 - 300}px)`,
        }}
      />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-35 pointer-events-none" />

      {/* Background Live Hex Code Streams */}
      <div className="absolute top-6 left-8 font-mono text-[10px] text-brand-cream-muted/30 tracking-widest hidden sm:block pointer-events-none">
        <div>STREAM // {hexStream}</div>
        <div className="text-brand-olive-light/50">SEC_LEVEL // 0x556B2F</div>
      </div>

      <div className="absolute top-6 right-8 font-mono text-[10px] text-brand-cream-muted/30 tracking-widest text-right hidden sm:block pointer-events-none">
        <div>CORE // ONLINE</div>
        <div className="text-brand-olive-light/50">ENCRYPT // TLS_1_3</div>
      </div>

      {/* Top Protocol Badge */}
      <div className="relative z-10 pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-olive-surface/90 border border-brand-cream/20 text-[10px] font-mono tracking-widest text-brand-olive-light uppercase font-bold shadow-xl backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "6s" }} />
          <span>ENTERPRISE ARCHITECTURE PROTOCOL</span>
        </div>
      </div>

      {/* Center Core HUD & Visualizer */}
      <div className="relative z-10 max-w-lg w-full text-center space-y-6 sm:space-y-8 my-auto">
        {/* Holographic Glowing Emblem */}
        <div className="relative w-28 h-28 mx-auto flex items-center justify-center group">
          <div className="absolute inset-0 rounded-full border-2 border-brand-olive-light/50 animate-ping opacity-40" />
          <div
            className="absolute -inset-3 rounded-full border border-dashed border-brand-cream/30 animate-spin"
            style={{ animationDuration: "12s" }}
          />
          <div
            className="absolute -inset-1 rounded-full border border-dotted border-brand-olive-light/40 animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "8s" }}
          />
          <div className="w-22 h-22 rounded-full bg-brand-olive-deep/95 border-2 border-brand-cream/40 flex items-center justify-center shadow-2xl shadow-brand-cream/30 group-hover:scale-105 transition-transform">
            <img
              src="/Intelluscore favicon.ico"
              alt="INTELLUSCORE"
              className="w-14 h-14 object-contain filter drop-shadow-[0_0_16px_rgba(242,238,230,0.8)]"
            />
          </div>
        </div>

        {/* Brand Title */}
        <div className="space-y-1.5">
          <div className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider text-brand-cream uppercase">
            INTELLUS<span className="text-brand-olive-light">CORE</span>
          </div>
          <p className="text-[11px] sm:text-xs font-mono text-brand-cream-muted uppercase tracking-widest">
            BUILD // AUTOMATE // SECURE
          </p>
        </div>

        {/* Interactive Progress Box */}
        <div className="space-y-3.5 p-6 rounded-3xl bg-brand-olive-surface/85 border border-brand-cream/20 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="flex items-center gap-2 text-brand-olive-light font-bold">
              <Terminal className="w-4 h-4" />
              <span>{complete ? "SYSTEM ONLINE" : "BOOT SEQUENCE"}</span>
            </span>
            <span className={`font-bold font-mono text-base ${complete ? "text-emerald-400" : "text-brand-cream"}`}>
              {Math.min(progress, 100)}%
            </span>
          </div>

          {/* Glowing Laser Progress Bar */}
          <div className="w-full h-2.5 rounded-full bg-brand-olive-dark border border-brand-cream/20 overflow-hidden p-0.5 relative">
            <div
              className={`h-full rounded-full transition-all duration-75 shadow-[0_0_20px_rgba(242,238,230,0.9)] ${
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
                <CheckCircle2 className="w-4 h-4" />
                {bootLogs[bootLogs.length - 1]}
              </span>
            ) : (
              <span>{bootLogs[logIndex]}</span>
            )}
          </div>

          {/* Interactive Equalizer Wave Bars */}
          <div className="flex items-center justify-center gap-1 pt-1">
            {[40, 70, 90, 60, 80, 50, 100, 75, 45, 85].map((h, i) => (
              <div
                key={i}
                className="w-1 rounded-full bg-brand-cream/30 animate-pulse"
                style={{
                  height: `${(h * (progress / 100)) / 4 + 4}px`,
                  animationDuration: `${0.6 + (i % 4) * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Interactive Telemetry Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
          {telemetryChips.map((chip, idx) => {
            const Icon = chip.icon;
            return (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-brand-olive-deep/70 border border-brand-cream/10 text-left space-y-1 hover:border-brand-cream/40 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-brand-cream-muted font-bold">
                  <Icon className="w-3 h-3 text-brand-olive-light" />
                  <span>{chip.label}</span>
                </div>
                <div className="text-[10px] font-mono font-bold text-brand-cream truncate">
                  {chip.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Interactive HUD Action Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between w-full max-w-lg gap-3 pt-2 text-[11px] font-mono">
        <div className="flex items-center gap-2 text-brand-cream-muted/70">
          <Shield className="w-3.5 h-3.5 text-brand-olive-light" />
          <span>ZERO-TRUST SECURED ENVIRONMENT</span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleOverclock();
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-cream/10 hover:bg-brand-cream/20 border border-brand-cream/20 text-brand-cream text-[10px] font-mono uppercase tracking-wider font-bold transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
        >
          <Zap className="w-3 h-3 text-amber-300 animate-bounce" />
          <span>{overclockCount > 0 ? `Overclocked x${overclockCount}` : "Click to Overclock ⚡"}</span>
        </button>
      </div>
    </div>
  );
}

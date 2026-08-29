"use client";

import React from "react";
import {
  ShieldAlert,
  Lock,
  Eye,
  Server,
  FileCheck,
  KeyRound,
  CheckCircle2,
  AlertCircle,
  Terminal,
} from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const securityFeatures = [
  {
    icon: Lock,
    title: "Application Security",
    desc: "Rigorous OWASP Top-10 mitigation, secure coding guidelines, automated SAST/DAST testing in CI/CD pipelines.",
  },
  {
    icon: Server,
    title: "Infrastructure Hardening",
    desc: "Cloud security posture management (CSPM), immutable Kubernetes infrastructure, and strict firewall policies.",
  },
  {
    icon: ShieldAlert,
    title: "Vulnerability Assessment",
    desc: "Proactive penetration tests, red-team simulation scenarios, and continuous automated exploit scanning.",
  },
  {
    icon: Eye,
    title: "24/7 Security Monitoring",
    desc: "Real-time threat detection, AI-driven anomaly telemetry, and rapid incident response orchestration.",
  },
  {
    icon: FileCheck,
    title: "Risk & Compliance",
    desc: "Comprehensive readiness protocols for SOC 2 Type II, ISO 27001, HIPAA, and GDPR regulatory frameworks.",
  },
  {
    icon: KeyRound,
    title: "Data Protection & IAM",
    desc: "End-to-end AES-256 encryption at rest and in transit, multi-factor authentication, and Zero-Trust access control.",
  },
];

export default function Cybersecurity() {
  return (
    <section className="relative py-28 px-6 md:px-12 bg-brand-slate overflow-hidden border-t border-white/5">
      {/* Background Subtle Cyber Grids */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Headline */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-brand-orange" />
            <span className="text-xs font-mono tracking-widest text-brand-orange uppercase">
              // DEFENSIVE ARCHITECTURE
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-[0.95] mb-6">
            SECURITY IS NOT AN OPTION. <br />
            <span className="text-brand-orange">IT&apos;S THE FOUNDATION.</span>
          </h2>

          <p className="text-brand-cream/70 text-base sm:text-lg font-light leading-relaxed">
            Every digital platform built by INTELLISCORE is engineered with offensive defense in mind.
            We ensure your enterprise assets remain fortified against evolving global attack vectors.
          </p>
        </div>

        {/* 6 Security Vectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-sm bg-brand-dark/80 border border-white/10 hover:border-brand-orange/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-sm bg-brand-slate/60 border border-white/10 flex items-center justify-center text-brand-orange group-hover:scale-105 group-hover:border-brand-orange/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-brand-cream/40 uppercase">
                      VEC_0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-brand-cream/70 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-brand-cream/50">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange" />
                  <span>INTELLISCORE FORTIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Threat Telemetry Box */}
        <div className="rounded-sm bg-brand-dark/95 border border-white/10 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
            <div>
              <div className="font-mono text-xs text-brand-cream/50 uppercase tracking-widest">
                ACTIVE DEFENSE STATUS
              </div>
              <div className="font-display text-lg font-bold text-white">
                Zero Breaches Recorded Across All Client Deployments
              </div>
            </div>
          </div>
          <MagneticButton variant="outline" href="#cta" className="text-xs">
            <span>Request Security Vulnerability Audit</span>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

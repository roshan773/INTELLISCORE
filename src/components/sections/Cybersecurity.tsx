"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldAlert,
  Lock,
  Eye,
  Server,
  FileCheck,
  KeyRound,
  CheckCircle2,
  ArrowUpRight,
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
    <section className="relative py-32 px-6 md:px-12 bg-brand-olive-deep overflow-hidden border-t border-brand-cream/10">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Headline */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-0.5 w-12 bg-brand-cream" />
            <span className="text-xs font-mono tracking-widest text-brand-cream uppercase font-bold">
              // DEFENSIVE ARCHITECTURE
            </span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88] mb-6">
            SECURITY IS NOT AN OPTION. <br />
            <span className="text-brand-olive-light">IT&apos;S THE FOUNDATION.</span>
          </h2>

          <p className="text-brand-cream-muted text-base sm:text-lg font-light leading-relaxed">
            Every digital platform built by INTELLUSCORE is engineered with offensive defense in mind.
            We ensure your enterprise assets remain fortified against evolving global attack vectors.
          </p>
        </div>

        {/* 3D Visual Asset Banner */}
        <div className="mb-16 rounded-3xl overflow-hidden border border-brand-cream/20 relative aspect-[21/9] shadow-2xl">
          <Image
            src="/images/cyber-shield.jpg"
            alt="INTELLUSCORE Zero-Trust Cyber Vault Defense"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-olive-dark/90 via-brand-olive-dark/60 to-transparent" />
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-lg space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-olive-light font-bold">
              // CRYPTOGRAPHIC VAULT
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-cream uppercase">
              Zero-Trust Perimeterless Defense
            </h3>
            <p className="text-xs sm:text-sm text-brand-cream-muted font-light">
              Continuous authorization and real-time biometric access tokens guarding your cloud infrastructure 24/7.
            </p>
          </div>
        </div>

        {/* 6 Security Vectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-brand-olive-surface border border-brand-cream/15 hover:border-brand-cream/60 transition-all duration-300 group flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-brand-cream text-brand-olive-dark flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-brand-cream/40 uppercase font-bold">
                      VEC_0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-brand-cream mb-3 group-hover:text-white transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-brand-cream-muted font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-brand-cream/10 flex items-center gap-2 text-xs font-mono text-brand-cream/60">
                  <CheckCircle2 className="w-4 h-4 text-brand-olive-light" />
                  <span>INTELLUSCORE FORTIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Threat Telemetry Box */}
        <div className="rounded-2xl bg-brand-olive-surface border border-brand-cream/20 p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-3.5 h-3.5 rounded-full bg-brand-cream animate-ping" />
            <div>
              <div className="font-mono text-xs text-brand-cream-muted uppercase tracking-widest font-bold">
                ACTIVE DEFENSE STATUS
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold text-brand-cream">
                Zero Breaches Recorded Across All Client Deployments
              </div>
            </div>
          </div>
          <MagneticButton variant="primary" href="/contact" className="rounded-full px-7 py-3 text-xs">
            <span>Request Vulnerability Audit</span>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

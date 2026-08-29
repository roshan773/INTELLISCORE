"use client";

import React, { useState } from "react";
import { ArrowUpRight, Globe, Bot, ShieldAlert, CodeSquare, CheckCircle2 } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const services = [
  {
    num: "01",
    title: "Web Development",
    tagline: "High-Performance Modern Web Platforms",
    icon: Globe,
    description:
      "We design and engineer enterprise-grade web applications, interactive digital platforms, and ultra-fast web experiences engineered for speed, SEO, accessibility, and high conversion.",
    capabilities: [
      "Next.js & React Architecture",
      "Headless CMS & API Integration",
      "Full-Stack Cloud Deployment",
      "Core Web Vitals Optimization",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Node.js"],
  },
  {
    num: "02",
    title: "AI & Automation",
    tagline: "Autonomous Agentic Pipelines & Workflows",
    icon: Bot,
    description:
      "Transform repetitive business operations into intelligent automated workflows. We build custom AI agents, LLM integrations, predictive pipelines, and automated business engines.",
    capabilities: [
      "Custom AI Agents & Copilots",
      "Workflow & Process Automation",
      "LLM Fine-Tuning & RAG Systems",
      "Intelligent Data Extraction",
    ],
    tech: ["Python", "LangChain", "OpenAI / Claude API", "FastAPI", "Vector DBs"],
  },
  {
    num: "03",
    title: "Cybersecurity",
    tagline: "Zero-Trust Protection & Risk Mitigation",
    icon: ShieldAlert,
    description:
      "Safeguard your applications, cloud infrastructure, and sensitive customer data against modern threat vectors with proactive vulnerability assessment, penetration testing, and 24/7 security postures.",
    capabilities: [
      "Vulnerability Assessment & Pen Testing",
      "Cloud & Infrastructure Hardening",
      "Zero-Trust Architecture & IAM",
      "Compliance Auditing (SOC2 / ISO)",
    ],
    tech: ["Zero Trust", "Cloudflare", "SIEM", "OWASP Hardening", "OAuth2 / SAML"],
  },
  {
    num: "04",
    title: "Custom Software",
    tagline: "Tailored Engineering for Complex Requirements",
    icon: CodeSquare,
    description:
      "Develop mission-critical software solutions specifically architected for your distinct business logic, scaling demands, and existing enterprise software stack.",
    capabilities: [
      "Microservices & Distributed Systems",
      "Custom SaaS Product Development",
      "Legacy System Modernization",
      "Real-Time Data Processing",
    ],
    tech: ["Go", "Node.js", "PostgreSQL", "Docker", "AWS / GCP"],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<number>(0);

  return (
    <section
      id="services"
      className="relative py-28 px-6 md:px-12 bg-brand-dark overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-orange" />
              <span className="text-xs font-mono tracking-widest text-brand-orange uppercase">
                // Core Capabilities
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
              SERVICES ENGINEERED <br />
              <span className="text-brand-orange">FOR DOMINANCE.</span>
            </h2>
          </div>
          <p className="text-brand-cream/70 max-w-md text-sm md:text-base font-light">
            Comprehensive digital capabilities designed to accelerate growth, modernize infrastructure,
            and ensure total operational security.
          </p>
        </div>

        {/* Interactive Stacked Service Panels */}
        <div className="flex flex-col gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;

            return (
              <div
                key={service.num}
                onMouseEnter={() => setActiveService(index)}
                onClick={() => setActiveService(index)}
                className={`relative rounded-sm transition-all duration-500 cursor-pointer overflow-hidden border ${
                  isActive
                    ? "bg-brand-surface/90 border-brand-orange shadow-2xl shadow-brand-orange/10 p-8 md:p-10"
                    : "bg-brand-surface/40 border-white/10 hover:border-white/20 p-6 md:p-8"
                }`}
              >
                {/* Active Left Indicator Bar */}
                <div
                  className={`absolute top-0 left-0 bottom-0 w-1.5 bg-brand-orange transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Service Number & Header */}
                  <div className="lg:col-span-5 flex items-start gap-6">
                    <span
                      className={`font-display text-3xl md:text-5xl font-extrabold transition-all duration-300 ${
                        isActive ? "text-brand-orange scale-105" : "text-brand-cream/30"
                      }`}
                    >
                      {service.num}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <Icon
                          className={`w-5 h-5 transition-colors ${
                            isActive ? "text-brand-orange" : "text-brand-cream/50"
                          }`}
                        />
                        <span className="text-xs font-mono tracking-wider text-brand-orange uppercase">
                          {service.tagline}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Service Description and Capabilities (Expands on Desktop/Mobile) */}
                  <div className="lg:col-span-6">
                    <p className="text-sm md:text-base text-brand-cream/80 font-light leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {isActive && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-white/10 animate-fadeIn">
                        {service.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-mono text-brand-cream/90">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action Arrow */}
                  <div className="lg:col-span-1 flex justify-end">
                    <div
                      className={`w-12 h-12 rounded-sm border flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-brand-orange border-brand-orange text-brand-dark rotate-45 scale-110"
                          : "border-white/10 text-white/40"
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Tech Badges Footer on Active */}
                {isActive && (
                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-brand-cream/40 uppercase mr-2">
                      TECH STACK //
                    </span>
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-brand-dark/70 border border-white/10 text-[11px] font-mono text-brand-orange"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-16 p-8 rounded-sm bg-brand-slate/60 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-display text-xl font-bold text-white mb-1">
              Need a custom engineering solution?
            </h4>
            <p className="text-sm text-brand-cream/70">
              We consult directly with technical leaders to architect tailored digital ecosystems.
            </p>
          </div>
          <MagneticButton variant="primary" href="#cta">
            <span>Schedule Discovery Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

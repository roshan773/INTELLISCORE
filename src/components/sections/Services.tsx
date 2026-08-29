"use client";

import React, { useState } from "react";
import { ArrowUpRight, Globe, Bot, ShieldAlert, CodeSquare, CheckCircle2 } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const services = [
  {
    num: "01",
    title: "Web Architecture",
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
      className="relative py-32 px-6 md:px-12 bg-brand-olive-dark overflow-hidden border-t border-brand-cream/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-0.5 w-12 bg-brand-cream" />
              <span className="text-xs font-mono tracking-widest text-brand-cream uppercase font-bold">
                // CORE CAPABILITIES
              </span>
            </div>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold uppercase text-brand-cream tracking-tight leading-[0.88]">
              SERVICES ENGINEERED <br />
              <span className="text-brand-olive-light">FOR DOMINANCE.</span>
            </h2>
          </div>
          <p className="text-brand-cream-muted max-w-md text-base sm:text-lg font-light leading-relaxed">
            Comprehensive digital capabilities designed to accelerate growth, modernize infrastructure,
            and ensure total operational security.
          </p>
        </div>

        {/* Stacked Service Panels */}
        <div className="flex flex-col gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;

            return (
              <div
                key={service.num}
                onMouseEnter={() => setActiveService(index)}
                onClick={() => setActiveService(index)}
                className={`relative rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden border ${isActive
                    ? "bg-brand-olive-surface border-brand-cream shadow-2xl shadow-black/60 p-8 md:p-12"
                    : "bg-brand-olive-surface/30 border-brand-cream/15 hover:border-brand-cream/40 p-6 md:p-8"
                  }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Number & Title */}
                  <div className="lg:col-span-5 flex items-start gap-6">
                    <span
                      className={`font-display text-5xl md:text-7xl font-black transition-all duration-300 ${isActive ? "text-brand-cream" : "text-brand-cream/25"
                        }`}
                    >
                      {service.num}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <Icon
                          className={`w-5 h-5 ${isActive ? "text-brand-olive-light" : "text-brand-cream/50"
                            }`}
                        />
                        <span className="text-xs font-mono tracking-wider text-brand-olive-light uppercase font-bold">
                          {service.tagline}
                        </span>
                      </div>
                      <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-cream tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Middle Column: Description & Capabilities */}
                  <div className="lg:col-span-6">
                    <p className="text-sm sm:text-base text-brand-cream-muted font-light leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {isActive && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-brand-cream/15 animate-fadeIn">
                        {service.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs font-mono text-brand-cream">
                            <CheckCircle2 className="w-4 h-4 text-brand-olive-light shrink-0" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Arrow Button */}
                  <div className="lg:col-span-1 flex justify-end">
                    <div
                      className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive
                          ? "bg-brand-cream border-brand-cream text-brand-olive-dark rotate-45 scale-110 shadow-lg shadow-brand-cream/20"
                          : "border-brand-cream/20 text-brand-cream/40"
                        }`}
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Tech Badges Footer on Active */}
                {isActive && (
                  <div className="mt-8 pt-6 border-t border-brand-cream/15 flex flex-wrap items-center gap-2.5">
                    <span className="text-[10px] font-mono tracking-widest text-brand-cream-muted uppercase mr-2 font-bold">
                      TECH STACK //
                    </span>
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3.5 py-1 rounded-full bg-brand-olive-dark border border-brand-cream/20 text-xs font-mono text-brand-cream font-medium"
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

        {/* Bottom Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-brand-olive-surface border border-brand-cream/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="font-display text-2xl sm:text-3xl font-bold text-brand-cream mb-1">
              Need a custom engineering solution?
            </h4>
            <p className="text-sm text-brand-cream-muted">
              We consult directly with technical leaders to architect tailored digital ecosystems.
            </p>
          </div>
          <MagneticButton variant="primary" href="/contact" className="rounded-full px-8 py-3.5 text-xs">
            <span>Schedule Discovery Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

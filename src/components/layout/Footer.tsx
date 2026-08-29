"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Twitter, ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-brand-dark text-brand-cream border-t border-white/10 pt-20 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-brand-light-slate/60 border border-brand-orange/40 rounded-sm">
                <span className="w-2.5 h-2.5 bg-brand-orange rotate-45 transform" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                INTELLI<span className="text-brand-orange">SCORE</span>
              </span>
            </div>

            <p className="text-sm text-brand-cream/70 font-light leading-relaxed max-w-sm">
              An elite technology studio building next-generation web platforms, autonomous AI workflows,
              and fortified enterprise cybersecurity architectures.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-sm bg-brand-surface border border-white/10 hover:border-brand-orange text-brand-cream/70 hover:text-brand-orange flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-sm bg-brand-surface border border-white/10 hover:border-brand-orange text-brand-cream/70 hover:text-brand-orange flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-sm bg-brand-surface border border-white/10 hover:border-brand-orange text-brand-cream/70 hover:text-brand-orange flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links: Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-orange">
              // Services
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-brand-cream/70">
              <li>
                <a href="#services" className="hover:text-brand-orange transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange transition-colors">
                  AI & Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange transition-colors">
                  Cybersecurity Defense
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange transition-colors">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange transition-colors">
                  Cloud Engineering
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Solutions */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-orange">
              // Solutions
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-brand-cream/70">
              <li>
                <a href="#solutions" className="hover:text-brand-orange transition-colors">
                  AI Agent Pipelines
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-brand-orange transition-colors">
                  Secure Cloud Vaults
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-brand-orange transition-colors">
                  Zero-Trust IAM
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-brand-orange transition-colors">
                  Real-Time Analytics
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-brand-orange transition-colors">
                  Industry Frameworks
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Company & Compliance */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-orange">
              // Company
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-brand-cream/70">
              <li>
                <a href="#about" className="hover:text-brand-orange transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-brand-orange transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-brand-orange transition-colors">
                  Insights & Intel
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-brand-orange transition-colors">
                  Careers (We&apos;re Hiring)
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-brand-orange transition-colors">
                  Security Vulnerability Disclosure
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-orange">
              // Direct Line
            </h4>
            <div className="space-y-2.5 text-xs font-mono text-brand-cream/70">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span className="truncate">contact@intelliscore.io</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span>Global Distributed Studios</span>
              </div>
              <div className="flex items-center gap-2 text-brand-orange pt-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SOC2 & ISO Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-cream/40">
          <div>
            © {new Date().getFullYear()} INTELLISCORE INC. — BUILD. AUTOMATE. SECURE. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-brand-cream/70 hover:text-brand-orange transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

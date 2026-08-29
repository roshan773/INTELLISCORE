"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ShieldCheck, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-brand-olive-dark text-brand-cream border-t border-brand-cream/10 pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-brand-cream/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-cream text-brand-olive-dark flex items-center justify-center font-display font-black text-xs">
                IS
              </div>
              <span className="font-display text-2xl font-bold tracking-wider text-brand-cream">
                INTELLI<span className="text-brand-olive-light">SCORE</span>
              </span>
            </Link>

            <p className="text-sm text-brand-cream-muted font-light leading-relaxed max-w-sm">
              An elite technology studio building next-generation web platforms, autonomous AI workflows,
              and fortified enterprise cybersecurity architectures.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-brand-olive-surface border border-brand-cream/15 hover:border-brand-cream text-brand-cream-muted hover:text-brand-cream flex items-center justify-center transition-colors shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-brand-olive-surface border border-brand-cream/15 hover:border-brand-cream text-brand-cream-muted hover:text-brand-cream flex items-center justify-center transition-colors shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-10 h-10 rounded-full bg-brand-olive-surface border border-brand-cream/15 hover:border-brand-cream text-brand-cream-muted hover:text-brand-cream flex items-center justify-center transition-colors shadow-md"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links: Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-cream font-bold">
              // Services
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-brand-cream-muted">
              <li>
                <Link href="/services#web-development" className="hover:text-brand-cream transition-colors">
                  Web Architecture
                </Link>
              </li>
              <li>
                <Link href="/services#ai-automation" className="hover:text-brand-cream transition-colors">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/services#cybersecurity" className="hover:text-brand-cream transition-colors">
                  Cyber Defense
                </Link>
              </li>
              <li>
                <Link href="/services#custom-software" className="hover:text-brand-cream transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-brand-cream transition-colors">
                  Cloud Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Links: Solutions */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-cream font-bold">
              // Solutions
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-brand-cream-muted">
              <li>
                <Link href="/solutions" className="hover:text-brand-cream transition-colors">
                  AI Agent Pipelines
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-brand-cream transition-colors">
                  Secure Cloud Vaults
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-brand-cream transition-colors">
                  Zero-Trust IAM
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-brand-cream transition-colors">
                  Real-Time Telemetry
                </Link>
              </li>
              <li>
                <Link href="/cases" className="hover:text-brand-cream transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Links: Company */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-cream font-bold">
              // Company
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-brand-cream-muted">
              <li>
                <Link href="/about" className="hover:text-brand-cream transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/philosophy" className="hover:text-brand-cream transition-colors">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-brand-cream transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-brand-cream transition-colors">
                  Insights & Intel
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-cream transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-cream font-bold">
              // Direct Line
            </h4>
            <div className="space-y-2.5 text-xs font-mono text-brand-cream-muted">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-cream shrink-0" />
                <a href="mailto:contact@intelliscore.io" className="truncate hover:text-brand-cream">
                  contact@intelliscore.io
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-cream shrink-0" />
                <span>Global Distributed Studios</span>
              </div>
              <div className="flex items-center gap-2 text-brand-cream pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-olive-light" />
                <span>SOC2 & ISO Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-cream-muted/50">
          <div>
            © {new Date().getFullYear()} INTELLISCORE INC. — BUILD. AUTOMATE. SECURE. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-brand-cream hover:text-white transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

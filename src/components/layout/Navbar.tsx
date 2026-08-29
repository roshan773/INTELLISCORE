"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Shield, Cpu, Code2, Sparkles } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#intro" },
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Industries", href: "#industries" },
  { name: "Insights", href: "#insights" },
  { name: "Contact", href: "#cta" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-brand-dark/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="INTELLISCORE Home"
          >
            <div className="relative w-8 h-8 flex items-center justify-center bg-brand-light-slate/60 border border-brand-orange/40 rounded-sm group-hover:border-brand-orange transition-all duration-300">
              <span className="w-2.5 h-2.5 bg-brand-orange rounded-none rotate-45 transform group-hover:scale-125 transition-transform duration-300" />
              <div className="absolute inset-0 bg-brand-orange/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-brand-orange transition-colors duration-300">
                INTELLI<span className="text-brand-orange">SCORE</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] text-brand-cream/60 uppercase font-mono">
                Build • Automate • Secure
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs font-medium uppercase tracking-widest text-brand-cream/70 hover:text-white transition-colors duration-300 py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-orange transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Primary CTA and Mobile Toggle */}
          <div className="flex items-center gap-4">
            <MagneticButton
              variant="primary"
              href="#cta"
              className="hidden sm:inline-flex text-xs px-5 py-2.5"
            >
              <span>Let&apos;s Build Together</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </MagneticButton>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-sm bg-brand-light-slate/40 border border-white/10 text-white hover:text-brand-orange hover:border-brand-orange/40 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-2xl lg:hidden transition-all duration-500 flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-widest text-brand-orange font-mono">
            // Navigation
          </p>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl uppercase tracking-wide text-brand-cream/80 hover:text-brand-orange transition-colors flex items-center justify-between py-2 border-b border-white/5"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-5 h-5 text-brand-orange/60" />
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-6">
          <MagneticButton
            variant="primary"
            href="#cta"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-4 text-center justify-center text-sm"
          >
            <span>Let&apos;s Build Together</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
          <div className="flex items-center justify-between text-xs text-brand-cream/50 pt-2 border-t border-white/10">
            <span>© INTELLISCORE</span>
            <span>BUILD • AUTOMATE • SECURE</span>
          </div>
        </div>
      </div>
    </>
  );
}

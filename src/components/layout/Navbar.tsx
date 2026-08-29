"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Process", href: "/process" },
  { name: "Tech Stack", href: "/technology" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = mounted && scrolled;

  return (
    <div className="relative w-full">
      {/* Floating Header */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
        <header
          className={`pointer-events-auto transition-all duration-500 rounded-full flex items-center justify-between px-4 sm:px-6 py-2.5 max-w-5xl w-full ${isScrolled
            ? "glass-island shadow-2xl shadow-black/80 border-brand-cream/25"
            : "bg-brand-olive-deep/70 backdrop-blur-md border border-brand-cream/15"
            }`}
        >
          {/* Brand Wordmark & Emblem */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="INTELLUSCORE Home"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-brand-olive-dark font-display font-black text-sm group-hover:rotate-45 transition-transform duration-300">
              <img src="/Intelluscore favicon.ico" alt="" />
            </div>
            <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-brand-cream">
              INTELLUS<span className="text-brand-olive-light">CORE</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-display text-xs uppercase tracking-widest text-brand-cream/70 hover:text-brand-cream transition-colors duration-200 py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-cream transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <MagneticButton
              variant="primary"
              href="/contact"
              className="text-xs px-5 sm:px-6 py-2 sm:py-2.5 rounded-full"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-brand-olive-card border border-brand-cream/20 text-brand-cream hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-brand-olive-dark/98 backdrop-blur-2xl lg:hidden transition-all duration-500 flex flex-col justify-between p-8 pt-32 ${mobileMenuOpen
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-6"
          }`}
      >
        <div className="flex flex-col gap-6 max-w-md mx-auto w-full">
          <div className="text-xs font-mono uppercase tracking-widest text-brand-olive-light">
            // Navigation
          </div>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl uppercase tracking-wide text-brand-cream/80 hover:text-brand-cream flex items-center justify-between py-2 border-b border-brand-cream/10"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-5 h-5 text-brand-olive-light" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="max-w-md mx-auto w-full pt-6 border-t border-brand-cream/10">
          <MagneticButton
            variant="primary"
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-4 text-center justify-center text-sm rounded-full"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}

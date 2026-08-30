"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  ShieldAlert,
  ArrowLeft,
  ArrowUpRight,
  Compass,
  Search,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Lock,
  Workflow,
  Radio,
  Home,
  MessageSquare,
  HelpCircle,
} from "lucide-react";

interface QuickRoute {
  title: string;
  category: string;
  description: string;
  href: string;
  icon: React.ElementType;
  tag: string;
}

const quickRoutes: QuickRoute[] = [
  {
    title: "AI Automation & Agents",
    category: "Solutions",
    description: "Autonomous workflow pipelines, LLM fine-tuning, and deterministic multi-agent architectures.",
    href: "/solutions",
    icon: Cpu,
    tag: "SUITE-01",
  },
  {
    title: "Cyber Defense & Audits",
    category: "Services",
    description: "Zero-trust hardening, automated penetration testing, and enterprise SOC2 compliance.",
    href: "/services",
    icon: Lock,
    tag: "SUITE-02",
  },
  {
    title: "Engineering & Cloud",
    category: "Services",
    description: "High-concurrency web platforms, microservices, and distributed cloud infrastructure.",
    href: "/services",
    icon: Layers,
    tag: "SUITE-03",
  },
  {
    title: "Technology Stack",
    category: "Standards",
    description: "Next.js, Three.js, Rust, Python, and cryptographic security primitives.",
    href: "/technology",
    icon: Terminal,
    tag: "SPECS",
  },
  {
    title: "Execution Process",
    category: "Methodology",
    description: "Our 4-stage sprint delivery framework: Discover, Architect, Harden, Deploy.",
    href: "/process",
    icon: Workflow,
    tag: "ROADMAP",
  },
  {
    title: "Executive Technical Desk",
    category: "Inquiries",
    description: "Initiate direct communication with our principal architects under bilateral NDA.",
    href: "/contact",
    icon: MessageSquare,
    tag: "DIRECT",
  },
];

export default function NotFound() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRoutes = quickRoutes.filter(
    (route) =>
      route.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <main className="min-h-screen bg-brand-olive-dark text-brand-cream relative selection:bg-brand-cream selection:text-brand-olive-dark flex flex-col justify-between">
      <Navbar />

      {/* Main 404 Content Container */}
      <div className="relative pt-36 sm:pt-44 pb-20 px-4 sm:px-6 md:px-12 flex-1 flex flex-col justify-center">
        {/* Background Visual Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: "url('/images/hero-nexus.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-olive-dark/95 via-brand-olive-dark/80 to-brand-olive-dark pointer-events-none" />
        <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-brand-olive/20 blur-[130px] pointer-events-none" />
        <div className="absolute top-2/3 right-10 w-72 h-72 rounded-full bg-brand-olive-light/10 blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12">
          {/* Header & Status Indicator */}
          <div className="text-center space-y-6">
            {/* Holographic Radar Pulse Beacon */}
            <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-brand-olive-light/40 animate-ping opacity-40" />
              <div
                className="absolute inset-0 rounded-full border border-dashed border-brand-cream/30 animate-spin"
                style={{ animationDuration: "20s" }}
              />
              <div className="w-18 h-18 rounded-full bg-brand-olive-surface border border-brand-cream/30 flex items-center justify-center shadow-2xl shadow-brand-cream/20">
                <ShieldAlert className="w-9 h-9 text-brand-olive-light" />
              </div>
            </div>

            {/* Diagnostic Protocol Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-olive-surface/90 border border-brand-cream/20 text-xs font-mono tracking-widest uppercase font-bold text-brand-olive-light shadow-xl backdrop-blur-md">
              <Radio className="w-3.5 h-3.5 text-brand-olive-glow animate-pulse" />
              <span>// HTTP_STATUS_CODE: 404 // NODE_UNRESOLVED</span>
            </div>

            {/* Giant Display Headline */}
            <div className="space-y-2">
              <div className="font-display text-8xl sm:text-9xl md:text-[11rem] font-extrabold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-brand-cream via-brand-cream-muted to-brand-olive-light leading-none select-none drop-shadow-sm">
                404
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-brand-cream tracking-tight leading-[0.95]">
                SIGNAL LOST IN <span className="text-brand-olive-light">CYBERSPACE.</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-brand-cream-muted font-light max-w-2xl mx-auto leading-relaxed">
              The coordinate or endpoint you are attempting to resolve does not exist or has been relocated within our zero-trust mesh network.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <MagneticButton variant="primary" href="/" className="rounded-full px-7 py-3.5 text-xs font-bold shadow-xl">
                <Home className="w-4 h-4" />
                <span>Return To Main Hub</span>
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                onClick={handleGoBack}
                className="rounded-full px-7 py-3.5 text-xs font-bold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Coordinate</span>
              </MagneticButton>

              <MagneticButton
                variant="outline"
                href="/contact"
                className="rounded-full px-7 py-3.5 text-xs font-bold"
              >
                <span>Engineering Desk</span>
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>

          {/* Diagnostic Console Box */}
          <div className="max-w-4xl mx-auto rounded-2xl bg-brand-olive-dark/90 border border-brand-cream/20 p-5 sm:p-6 shadow-2xl backdrop-blur-xl space-y-4">
            <div className="flex items-center justify-between border-b border-brand-cream/10 pb-3">
              <div className="flex items-center gap-2 font-mono text-xs text-brand-cream">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 animate-pulse" />
                <span className="text-brand-cream-muted uppercase font-semibold">DIAGNOSTIC_TELEMETRY</span>
              </div>
              <div className="text-[11px] font-mono text-brand-cream/50 uppercase tracking-widest hidden sm:block">
                SYS_ERR: 0x404_NULL_ROUTE
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-brand-olive-surface/60 border border-brand-cream/10">
                <div className="text-brand-cream/50 text-[10px] uppercase">Routing Protocol</div>
                <div className="text-brand-cream font-bold mt-0.5">TLS 1.3 / HTTP 3.0</div>
              </div>
              <div className="p-3 rounded-lg bg-brand-olive-surface/60 border border-brand-cream/10">
                <div className="text-brand-cream/50 text-[10px] uppercase">Target Vector</div>
                <div className="text-brand-olive-light font-bold mt-0.5">NON_EXISTENT</div>
              </div>
              <div className="p-3 rounded-lg bg-brand-olive-surface/60 border border-brand-cream/10">
                <div className="text-brand-cream/50 text-[10px] uppercase">Firewall Shield</div>
                <div className="text-emerald-400 font-bold mt-0.5">100% OPERATIONAL</div>
              </div>
              <div className="p-3 rounded-lg bg-brand-olive-surface/60 border border-brand-cream/10">
                <div className="text-brand-cream/50 text-[10px] uppercase">Recovery Action</div>
                <div className="text-brand-cream font-bold mt-0.5">AUTO_RE-ROUTE READY</div>
              </div>
            </div>
          </div>

          {/* Quick Route Suggester & Search Filter */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
              <div className="text-left">
                <div className="text-xs font-mono text-brand-olive-light uppercase tracking-wider font-bold">
                  // RE-ROUTE TO VERIFIED MATRIX SECTORS
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-brand-cream">
                  Available Systems & Destinations
                </h2>
              </div>

              {/* Dynamic Quick Filter */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-cream/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter destinations..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-brand-olive-surface border border-brand-cream/20 text-xs font-mono text-brand-cream placeholder:text-brand-cream/40 focus:outline-none focus:border-brand-cream/60 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-brand-cream/60 hover:text-brand-cream"
                  >
                    CLEAR
                  </button>
                )}
              </div>
            </div>

            {/* Quick Routes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {filteredRoutes.length > 0 ? (
                filteredRoutes.map((route, idx) => {
                  const Icon = route.icon;
                  return (
                    <Link
                      key={idx}
                      href={route.href}
                      className="group p-6 rounded-2xl bg-brand-olive-surface/80 border border-brand-cream/15 hover:border-brand-cream/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1 backdrop-blur-sm"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-brand-olive-dark border border-brand-cream/20 flex items-center justify-center text-brand-olive-light group-hover:text-brand-cream group-hover:border-brand-cream/40 transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-mono text-[10px] text-brand-cream-muted uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-brand-olive-dark/70 border border-brand-cream/10">
                            {route.tag}
                          </span>
                        </div>

                        <div>
                          <div className="text-[11px] font-mono text-brand-olive-light uppercase font-bold mb-1">
                            {route.category}
                          </div>
                          <h3 className="font-display text-xl font-bold text-brand-cream group-hover:text-white transition-colors">
                            {route.title}
                          </h3>
                        </div>

                        <p className="text-xs text-brand-cream-muted font-light leading-relaxed">
                          {route.description}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-brand-cream/10 flex items-center justify-between text-xs font-mono text-brand-cream group-hover:text-brand-olive-light transition-colors">
                        <span>Access Gateway</span>
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </Link>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-12 rounded-2xl bg-brand-olive-surface/50 border border-brand-cream/15 space-y-3">
                  <HelpCircle className="w-8 h-8 text-brand-cream/40 mx-auto" />
                  <div className="font-display text-xl uppercase text-brand-cream">
                    No Matching Coordinates Found
                  </div>
                  <p className="text-xs font-mono text-brand-cream-muted">
                    No sector matches &quot;{searchQuery}&quot;. Try exploring our main directories or return to home.
                  </p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="inline-block mt-2 text-xs font-mono uppercase text-brand-olive-light underline hover:text-brand-cream"
                  >
                    Reset Filter
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Direct Assistance Banner */}
          <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-brand-olive-surface via-brand-olive-card to-brand-olive-surface border border-brand-cream/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase font-bold text-brand-olive-light">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Need Direct Technical Assistance?</span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-brand-cream">
                Can&apos;t Find What You&apos;re Looking For?
              </h3>
              <p className="text-xs sm:text-sm text-brand-cream-muted font-light max-w-lg">
                Our principal systems engineers are available 24/7. Reach our direct engineering desk at{" "}
                <a
                  href="mailto:support.intelluscore@gmail.com"
                  className="text-brand-cream font-medium underline hover:text-white"
                >
                  support.intelluscore@gmail.com
                </a>
              </p>
            </div>

            <MagneticButton
              variant="olive"
              href="/contact"
              className="rounded-full px-6 py-3 text-xs font-bold whitespace-nowrap shadow-lg flex-shrink-0"
            >
              <span>Contact Desk</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

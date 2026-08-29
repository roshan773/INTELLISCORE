import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Services from "@/components/sections/Services";
import Solutions from "@/components/sections/Solutions";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Technology from "@/components/sections/Technology";
import Cybersecurity from "@/components/sections/Cybersecurity";
import AIAutomation from "@/components/sections/AIAutomation";
import CaseStudies from "@/components/sections/CaseStudies";
import Industries from "@/components/sections/Industries";
import Statistics from "@/components/sections/Statistics";
import Testimonials from "@/components/sections/Testimonials";
import Insights from "@/components/sections/Insights";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-slate text-brand-cream relative">
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <Solutions />
      <WhyUs />
      <Process />
      <Technology />
      <Cybersecurity />
      <AIAutomation />
      <CaseStudies />
      <Industries />
      <Statistics />
      <Testimonials />
      <Insights />
      <CTA />
      <Footer />
    </main>
  );
}

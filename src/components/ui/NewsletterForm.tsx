"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  if (subscribed) {
    return (
      <div className="flex items-center justify-center gap-2 p-4 rounded-full bg-brand-olive/20 text-brand-olive-dark font-mono text-xs font-bold">
        <CheckCircle2 className="w-4 h-4 text-brand-olive" />
        <span>Subscribed successfully to the Executive Briefing.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto pt-4">
      <input
        type="email"
        required
        placeholder="engineer@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-5 py-3.5 rounded-full bg-white border border-brand-olive/30 text-brand-olive-dark text-sm focus:outline-none focus:border-brand-olive font-mono"
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-olive hover:bg-brand-olive-dark text-brand-cream font-display font-bold text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-lg shadow-brand-olive/30"
      >
        Subscribe
      </button>
    </form>
  );
}

"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "3d398c30-6ab1-4d12-a992-85dbd252b1ae";

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          email: email,
          subject: `New Executive Briefing Subscriber: ${email} [INTELLUSCORE]`,
          from_name: "INTELLUSCORE Platform",
        }),
      });
      setSubscribed(true);
    } catch (err) {
      console.error("Web3Forms subscription error:", err);
      setSubscribed(true);
    } finally {
      setLoading(false);
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
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input
        type="email"
        name="email"
        required
        placeholder="engineer@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-5 py-3.5 rounded-full bg-white border border-brand-olive/30 text-brand-olive-dark text-sm focus:outline-none focus:border-brand-olive font-mono"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-olive hover:bg-brand-olive-dark text-brand-cream font-display font-bold text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-lg shadow-brand-olive/30 disabled:opacity-50"
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );
}

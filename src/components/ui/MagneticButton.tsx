"use client";

import React, { useRef, useState } from "react";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "olive" | "outline" | "ghost";
  className?: string;
  href?: string;
}

export default function MagneticButton({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.25;
    const y = (e.clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center font-display tracking-wider font-semibold uppercase text-xs sm:text-sm px-7 py-3.5 rounded-sm transition-all duration-300 group overflow-hidden cursor-pointer";

  const variantStyles = {
    primary:
      "bg-brand-cream text-brand-olive-dark hover:bg-white shadow-lg shadow-brand-cream/15 hover:shadow-brand-cream/30",
    olive:
      "bg-brand-olive text-brand-cream hover:bg-brand-olive-light shadow-lg shadow-brand-olive/30",
    secondary:
      "bg-brand-surface text-brand-cream border border-brand-cream/15 hover:border-brand-cream/50 hover:bg-brand-surface-card backdrop-blur-sm",
    outline:
      "border border-brand-cream/40 text-brand-cream hover:bg-brand-cream hover:text-brand-olive-dark",
    ghost:
      "text-brand-cream/80 hover:text-brand-cream bg-transparent hover:bg-white/5",
  };

  const content = (
    <span
      className="relative z-10 flex items-center gap-2.5 transition-transform duration-200"
      style={{ transform: `translate(${position.x * 0.5}px, ${position.y * 0.5}px)` }}
    >
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: position.x === 0 ? "transform 0.5s ease-out" : "none",
        }}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 ? "transform 0.5s ease-out" : "none",
      }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {content}
    </button>
  );
}

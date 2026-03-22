import React from "react";
import { clsx } from "clsx";

interface TierCardProps {
  tier: string;
  badge: string;
  badgeColor: string; // Tailwind bg- class e.g. "bg-amber-500"
  title: string;
  features: string[];
  featured?: boolean;
  className?: string;
}

/** Partner-tier card with coloured badge, title, and feature list. */
export default function TierCard({
  tier,
  badge,
  badgeColor,
  title,
  features,
  featured = false,
  className,
}: TierCardProps) {
  return (
    <div
      className={clsx(
        "relative rounded-xl border bg-white p-7 shadow-sm transition-shadow hover:shadow-md",
        featured
          ? "border-2 border-brand-blue"
          : "border-brand-gray-border",
        className
      )}
    >
      {featured && (
        <span className="absolute -top-3 right-5 rounded-full bg-brand-blue px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
          Most popular
        </span>
      )}

      {/* Badge */}
      <span
        className={clsx(
          "inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white",
          badgeColor
        )}
      >
        {badge}
      </span>

      {/* Tier name */}
      <h3 className="mt-4 text-xl font-extrabold text-brand-navy">{tier}</h3>
      <p className="mt-1 text-sm text-brand-gray-muted">{title}</p>

      {/* Features */}
      <ul className="mt-5 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm leading-relaxed text-brand-gray-text">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

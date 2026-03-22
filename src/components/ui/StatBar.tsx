import React from "react";
import { clsx } from "clsx";

interface Stat {
  value: string;
  label: string;
}

interface StatBarProps {
  stats: Stat[];
  className?: string;
  /** Use dark variant for navy backgrounds */
  dark?: boolean;
}

/** Horizontal bar showing 3–4 stats with large value + label. */
export default function StatBar({ stats, className, dark = false }: StatBarProps) {
  return (
    <div
      className={clsx(
        "flex flex-wrap items-center justify-center gap-8 rounded-xl px-6 py-6 sm:gap-12 lg:gap-16",
        dark
          ? "bg-brand-navy-mid text-white"
          : "border border-brand-gray-border bg-white text-brand-navy",
        className
      )}
    >
      {stats.map((s, i) => (
        <div key={i} className="text-center">
          <div className="text-2xl font-extrabold sm:text-3xl">{s.value}</div>
          <div
            className={clsx(
              "mt-1 text-xs font-medium uppercase tracking-wider",
              dark ? "text-white/60" : "text-brand-gray-muted"
            )}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

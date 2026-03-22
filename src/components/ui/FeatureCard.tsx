import React from "react";
import { clsx } from "clsx";

interface FeatureCardProps {
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

/** Card with a left blue border accent, numbered label, title, and body text. */
export default function FeatureCard({
  number,
  title,
  children,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={clsx(
        "rounded-lg border border-brand-gray-border bg-white p-6 border-l-[3px] border-l-brand-blue shadow-sm",
        className
      )}
    >
      <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
        {number}
      </span>
      <h3 className="mt-2 text-lg font-bold text-brand-navy">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-brand-gray-muted">
        {children}
      </div>
    </div>
  );
}

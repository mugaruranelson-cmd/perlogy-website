import React from "react";
import { clsx } from "clsx";

interface PledgeRowProps {
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

/** Two-column row with a large number on the left and title + paragraph on the right. */
export default function PledgeRow({
  number,
  title,
  children,
  className,
}: PledgeRowProps) {
  return (
    <div
      className={clsx(
        "flex flex-col sm:grid gap-4 sm:gap-10 border-b border-brand-gray-border py-8 last:border-b-0 sm:grid-cols-[100px_1fr]",
        className
      )}
    >
      <div className="text-5xl font-extrabold text-brand-blue">{number}</div>
      <div>
        <h3 className="text-xl font-bold text-brand-navy">{title}</h3>
        <div className="mt-2 leading-relaxed text-brand-gray-muted">{children}</div>
      </div>
    </div>
  );
}

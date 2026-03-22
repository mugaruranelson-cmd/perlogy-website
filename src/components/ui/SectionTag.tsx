import React from "react";
import { clsx } from "clsx";

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

/** Small uppercase label with a 3 px blue-to-orange gradient accent bar below. */
export default function SectionTag({ children, className }: SectionTagProps) {
  return (
    <div className={clsx("inline-block", className)}>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
        {children}
      </span>
      <div className="mt-1.5 h-[3px] w-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-orange" />
    </div>
  );
}

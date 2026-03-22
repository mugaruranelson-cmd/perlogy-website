import React from "react";
import { clsx } from "clsx";
import SectionTag from "./SectionTag";

interface Stat {
  value: string;
  label: string;
}

interface CaseStudyBlockProps {
  tag?: string;
  title: string;
  description?: string;
  stats?: Stat[];
  children?: React.ReactNode; // body sections
  className?: string;
}

/** Dark navy block with tag, title, description, stat row, and body content slots. */
export default function CaseStudyBlock({
  tag,
  title,
  description,
  stats,
  children,
  className,
}: CaseStudyBlockProps) {
  return (
    <section
      className={clsx(
        "bg-brand-navy rounded-2xl px-6 py-12 text-white lg:px-12 lg:py-16",
        className
      )}
    >
      {tag && (
        <SectionTag className="mb-4 [&_span]:text-brand-orange">{tag}</SectionTag>
      )}

      <h2 className="text-2xl font-extrabold sm:text-3xl">{title}</h2>

      {description && (
        <p className="mt-3 max-w-2xl leading-relaxed text-white/70">
          {description}
        </p>
      )}

      {/* Stat row */}
      {stats && stats.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-8">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-2xl font-extrabold text-brand-orange">
                {s.value}
              </div>
              <div className="mt-0.5 text-xs font-medium uppercase tracking-wider text-white/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Body sections */}
      {children && <div className="mt-10 space-y-6">{children}</div>}
    </section>
  );
}

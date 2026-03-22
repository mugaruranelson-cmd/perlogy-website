import React from "react";
import { clsx } from "clsx";

interface SIBannerProps {
  headline: string;
  subtext?: string;
  statValue?: string;
  statLabel?: string;
  children?: React.ReactNode; // button slot
  className?: string;
}

/** Dark navy CTA banner with headline, subtext, button slot, and optional right-side stat. */
export default function SIBanner({
  headline,
  subtext,
  statValue,
  statLabel,
  children,
  className,
}: SIBannerProps) {
  return (
    <section
      className={clsx(
        "si-banner bg-brand-navy-mid rounded-2xl px-6 py-12 text-white lg:px-12",
        className
      )}
    >
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 lg:flex-row lg:justify-between">
        {/* Left — copy + CTA */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-2xl font-extrabold sm:text-3xl">{headline}</h2>

          {subtext && (
            <p className="mt-3 leading-relaxed text-white/70">{subtext}</p>
          )}

          {children && <div className="mt-6">{children}</div>}
        </div>

        {/* Right — optional big stat */}
        {statValue && (
          <div className="hidden lg:block text-center">
            <div className="text-5xl font-extrabold text-brand-orange sm:text-6xl">
              {statValue}
            </div>
            {statLabel && (
              <div className="mt-1 text-sm font-medium uppercase tracking-wider text-white/50">
                {statLabel}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

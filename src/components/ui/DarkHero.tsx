import React from "react";
import Image, { StaticImageData } from "next/image";
import { clsx } from "clsx";
import SectionTag from "./SectionTag";

interface DarkHeroProps {
  tag?: string;
  /** Accepts ReactNode so callers can embed styled spans (e.g. coloured words). */
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode; // CTA slot
  className?: string;
  bgImage?: StaticImageData | string;
}

/** Full-width navy hero section with tag, h1, subtext, and optional CTA slot. */
export default function DarkHero({
  tag,
  title,
  subtitle,
  children,
  className,
  bgImage,
}: DarkHeroProps) {
  return (
    <section
      className={clsx(
        "hero-section relative overflow-hidden bg-brand-navy px-4 py-20 text-white lg:px-8 lg:py-28",
        className
      )}
    >
      {bgImage && (
        <Image
          src={bgImage}
          alt="Hero background"
          fill
          priority
          className="object-cover opacity-50 pointer-events-none"
          placeholder={typeof bgImage === "object" ? "blur" : "empty"}
        />
      )}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {tag && (
          <SectionTag className="mb-5 [&_span]:text-brand-orange">
            {tag}
          </SectionTag>
        )}

        <h1 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            {subtitle}
          </p>
        )}

        {children && <div className="mt-8 flex justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
}

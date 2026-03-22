import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

type Variant = "primary" | "orange" | "outline-blue" | "outline-dark" | "outline-white";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
}

const base =
  "inline-flex items-center justify-center min-h-[44px] rounded-[6px] px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue-dark focus-visible:ring-brand-blue",
  orange:
    "bg-brand-orange text-white hover:bg-brand-orange-light focus-visible:ring-brand-orange",
  "outline-blue":
    "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white focus-visible:ring-brand-blue",
  "outline-dark":
    "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white focus-visible:ring-brand-navy",
  "outline-white":
    "border border-white/40 text-white hover:bg-white/10 focus-visible:ring-white",
};

export default function Button({
  variant = "primary",
  href,
  className,
  children,
  ...rest
}: ButtonProps) {
  const cls = clsx(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

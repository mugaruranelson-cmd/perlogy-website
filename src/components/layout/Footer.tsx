import React from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const footerSolutions = [
  { label: "Hospitality", href: "/solutions/hospitality" },
  { label: "Digital Signage", href: "/solutions/digital-signage" },
  { label: "Airports", href: "/solutions/airports" },
  { label: "Corporate AV", href: "/solutions/corporate-av" },
];

const footerPartners = [
  { label: "Partner Programme", href: "/partners" },
  { label: "Become a Partner", href: "/partners/apply" },
];

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-brand-gray-border bg-white">
      {/* ── Main grid ── */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Company */}
          <div className="space-y-4">
            <Logo width={150} />
            <p className="text-sm leading-relaxed text-brand-gray-muted">
              Enterprise technology solutions for hospitality, digital signage,
              and beyond.
            </p>
          </div>

          {/* Col 2 — Solutions */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-navy">
              Solutions
            </h4>
            <ul className="space-y-2">
              {footerSolutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-brand-gray-muted transition-colors hover:text-brand-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Partners */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-navy">
              Partners
            </h4>
            <ul className="space-y-2">
              {footerPartners.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-brand-gray-muted transition-colors hover:text-brand-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-navy">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-brand-gray-muted">
              <li>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-brand-navy/70">Warehouse</span>
                Jebel Ali, Dubai
              </li>
              <li>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-brand-navy/70">Support Teams</span>
                Nairobi, Kenya
              </li>
              <li>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-brand-navy/70">Telephone</span>
                <a
                  href="tel:+254792651241"
                  className="transition-colors hover:text-brand-blue"
                >
                  +254 792 651 241
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@perlogy.africa"
                  className="transition-colors hover:text-brand-blue"
                >
                  info@perlogy.africa
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-medium text-brand-blue transition-colors hover:text-brand-blue-dark"
                >
                  Get in touch →
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-brand-navy/70 mb-2">Regions Served</span>
              <div className="flex flex-wrap gap-1.5">
                {['Nairobi', 'Kenya', 'Uganda', 'Tanzania', 'Nigeria', 'Ghana', 'Zambia', 'Rwanda', 'Cameroon', 'Ethiopia', 'DRC', 'Seychelles'].map((r) => (
                  <span
                    key={r}
                    className="inline-block rounded-full border border-brand-gray-border bg-gray-50 px-2.5 py-1 text-[10px] font-medium text-brand-gray-muted"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-4 flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/PerlogyTechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-gray-border bg-gray-50 text-brand-gray-muted transition-all hover:border-brand-blue hover:text-brand-blue"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/perlogy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-gray-border bg-gray-50 text-brand-gray-muted transition-all hover:border-brand-blue hover:text-brand-blue"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a
                href="https://x.com/perlogyT"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-gray-border bg-gray-50 text-brand-gray-muted transition-all hover:border-brand-blue hover:text-brand-blue"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-brand-gray-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-brand-gray-muted sm:flex-row lg:px-8">
          <span>&copy; {year} Perlogy Technologies LLC. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-brand-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-blue transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

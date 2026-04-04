"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/components/ui/Logo";

/* ── Nav data ───────────────────────────────────── */
const solutions = [
  { label: "Hospitality", href: "/solutions/hospitality" },
  { label: "Digital Signage", href: "/solutions/digital-signage" },
  { label: "Airports", href: "/solutions/airports" },
  { label: "Corporate AV", href: "/solutions/corporate-av" },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions", children: solutions },
  { label: "Brands", href: "/brands" },
  { label: "Partners", href: "/partners" },
  { label: "Case Studies", href: "/resources/case-studies" },
  { label: "Contact", href: "/contact" },
];

/* ── Component ──────────────────────────────────── */
export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Track scroll position for floating nav effect
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 accent-bar">
      {/* ── Main bar ── */}
      <nav
        className={`backdrop-blur-md border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/95 border-brand-gray-border shadow-md"
            : "bg-white/90 border-brand-gray-border"
        }`}
        style={{ height: 58 }}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <Logo width={140} showSubtext={false} />
          </Link>

          {/* ── Desktop links ── */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((p) => !p)}
                    className={`flex min-h-[44px] items-center gap-1 text-[13px] font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-brand-blue"
                        : "text-brand-gray-muted hover:text-brand-blue"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Dropdown */}
                  {dropdownOpen && (
                    <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-lg border border-brand-gray-border bg-white py-2 shadow-lg min-w-[180px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`flex min-h-[44px] items-center px-4 py-2 text-[13px] transition-colors ${
                            isActive(child.href)
                              ? "text-brand-blue bg-brand-light-blue-bg"
                              : "text-brand-gray-text hover:bg-brand-light-blue-bg hover:text-brand-blue"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`flex min-h-[44px] items-center text-[13px] font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-brand-blue"
                        : "text-brand-gray-muted hover:text-brand-blue"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/partners/apply"
              className="hidden md:inline-flex min-h-[44px] items-center rounded-[6px] bg-brand-blue px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-brand-blue-dark"
            >
              Become a partner
            </Link>

            <button
              className="md:hidden flex min-h-[44px] w-[44px] items-center justify-center text-brand-gray-text"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed inset-0 z-40 bg-brand-navy/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[280px] max-w-[80vw] bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-brand-gray-border px-4" style={{ height: 58 }}>
            <span className="font-bold text-brand-navy">Menu</span>
            <button
              className="flex h-[44px] w-[44px] items-center justify-center text-brand-gray-text"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="overflow-y-auto px-4 py-6 space-y-1 h-[calc(100vh-58px)]">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className={`flex min-h-[44px] items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-brand-blue bg-brand-light-blue-bg"
                      : "text-brand-gray-text hover:bg-brand-light-blue-bg hover:text-brand-blue"
                  }`}
                >
                  {link.label}
                </Link>

                {link.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`flex min-h-[44px] items-center rounded-md px-3 py-2 text-[13px] transition-colors ${
                          isActive(child.href)
                            ? "text-brand-blue bg-brand-light-blue-bg"
                            : "text-brand-gray-muted hover:text-brand-blue bg-gray-50/50"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/partners/apply"
              className="mt-6 flex min-h-[44px] items-center justify-center rounded-[6px] bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark transition-colors"
            >
              Become a partner
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { Button } from "@/components/primitives/button/Button";
import { NavLink } from "@/components/primitives/nav-link/NavLink";

const NAV_LINKS = [
  { href: "#home", label: "Home", active: true },
  { href: "#registry", label: "Registry", active: false },
  { href: "#marketplace", label: "Marketplace", active: false },
  { href: "#how-it-works", label: "How it works", active: false },
  { href: "#about", label: "About us", active: false },
  { href: "#faq", label: "FAQ", active: false },
] as const;

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on Escape and lock body scroll while the mobile panel is open.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-black/15 border-b border-white/10" : ""
      }`}
    >
      {/* Figma Frame: W: 1440 Fill, H: 99 Hug, Padding: px-[50px] py-[25px] */}
      <div className="mx-auto flex h-[99px] w-full max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-[50px]">
        {/* Logo tile + wordmark (Figma node-id: 191:83) */}
        <a
          href="#home"
          className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
            <Image
              src={ASSETS.logoMark}
              alt="Payless Protocol mark"
              width={26}
              height={26}
              className="h-[26px] w-[26px]"
              priority
            />
          </span>
          <span className="font-display text-[16px] font-semibold text-cream">
            Payless Protocol
          </span>
        </a>

        {/* Center-right links — desktop only (Figma node-id: 191:87) */}
        <nav className="hidden items-center gap-1.5 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} active={link.active}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* CTA — desktop (Figma node-id: 195:9383) */}
          <div className="hidden lg:block">
            <Button
              variant="black-sm"
              icon="arrow"
              href="https://payless-frontend-eight.vercel.app/"
              target="_blank"
            >
              Get Started
            </Button>
          </div>

          {/* Hamburger button for mobile */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 text-white lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path
                  d="M5 5l12 12M17 5L5 17"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path
                  d="M3 6h16M3 11h16M3 16h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel — full width below the fixed header */}
      {open && (
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile"
          className="border-t border-white/15 bg-primary px-6 pb-8 pt-4 lg:hidden shadow-xl"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    link.active
                      ? "flex min-h-[44px] items-center font-display text-[16px] font-semibold text-cream"
                      : "flex min-h-[44px] items-center font-display text-[16px] text-cream/60 transition-colors hover:text-cream"
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            variant="black"
            icon="arrow"
            href="https://payless-frontend-eight.vercel.app/"
            target="_blank"
            className="mt-6 w-full min-h-[44px] justify-center"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Button>
        </nav>
      )}
    </header>
  );
};

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
    <header className="bg-primary">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
        {/* Logo tile + wordmark */}
        <a href="#home" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
            <Image
              src={ASSETS.logoMark}
              alt="Payless Protocol mark"
              width={26}
              height={26}
              className="h-[26px] w-[26px]"
            />
          </span>
          <span className="text-h7 font-semibold text-white">Payless Protocol</span>
        </a>

        {/* Center-right links — desktop only */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} active={link.active} className="text-[15px]">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* CTA — hidden on mobile; it lives inside the panel instead */}
          <div className="hidden lg:block">
            <Button variant="black-sm" icon="arrow" href="#get-started">
              Get Started
            </Button>
          </div>

          {/* Hamburger — below the lg breakpoint */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/30 text-white lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path
                  d="M5 5l12 12M17 5L5 17"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
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

      {/* Mobile panel — full width below the header */}
      {open && (
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile"
          className="border-t border-white/15 bg-primary px-6 pb-8 pt-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    link.active
                      ? "flex min-h-[44px] items-center text-[16px] font-semibold text-white"
                      : "flex min-h-[44px] items-center text-[16px] text-white/60 transition-colors hover:text-white"
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
            href="#get-started"
            className="mt-6 w-full min-h-[44px] justify-center"
          >
            Get Started
          </Button>
        </nav>
      )}
    </header>
  );
};

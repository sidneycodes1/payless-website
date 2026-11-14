import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/assets";

export const metadata = {
  title: "Partner Hub — Payless Protocol",
  description:
    "Payless Protocol is an open hardware trust layer designed for secondhand gadget markets in emerging economies.",
};

const CORE_PROBLEMS = [
  {
    title: "No Free Verification",
    description:
      "Buyers and honest vendors have no open, accessible way to confirm whether a device has been reported stolen before buying or restocking it.",
  },
  {
    title: "High Cost of Reporting",
    description:
      "When a phone is stolen, victims often face steep, informal tracking costs and bureaucratic hurdles when reporting the theft, leaving most stolen devices unrecorded and easily resold.",
  },
  {
    title: "Vendor Liability",
    description:
      "Legitimate secondhand vendors risk severe legal and financial consequences if they unknowingly buy or resell a stolen device.",
  },
];

const KEY_CAPABILITIES = [
  {
    title: "Privacy-Preserving Identifiers",
    description:
      "Device identifiers (such as IMEI or serial numbers) are hashed before touching the blockchain, ensuring sensitive hardware data is verifiable without exposing raw user information publicly.",
  },
  {
    title: "Zero-Friction User Experience",
    description:
      "Powered by Account Abstraction and Paymaster sponsorship, users and vendors can query or update device records without holding crypto, managing seed phrases, or paying gas fees.",
  },
  {
    title: "Open Verification Layer",
    description:
      "Any buyer, vendor, or third-party platform can check a device's status in seconds to confirm whether it has a clean record or an active theft flag.",
  },
];

export default function PartnerHubPage() {
  return (
    <div className="min-h-screen bg-primary text-cream selection:bg-blue-light-active selection:text-near-black">
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-primary/95 backdrop-blur-md">
        <div className="mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-[50px]">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
              <Image
                src={ASSETS.logoMark}
                alt="Payless Protocol mark"
                width={26}
                height={26}
                className="h-[26px] w-[26px]"
              />
            </span>
            <span className="font-display text-[16px] font-semibold text-cream">
              Payless Protocol
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl border border-cream/30 px-4 py-2 font-display text-[14px] font-semibold text-cream transition-colors hover:bg-white/10"
            >
              ← Back to Home
            </Link>
            <a
              href="https://payless-frontend-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center rounded-xl bg-near-black px-4 py-2 font-display text-[14px] font-semibold text-cream transition-colors hover:bg-near-black/80 shadow-sm"
            >
              Open Registry ↗
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-[1440px] px-6 py-12 sm:px-8 sm:py-16 lg:px-[50px] lg:py-20">
        {/* ================= HERO / OVERVIEW SECTION ================= */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-cream/30 bg-blue-light/20 px-3.5 py-1 text-xs font-semibold text-blue-light-active">
              Partner Hub
            </span>
            <span className="inline-flex items-center rounded-full border border-cream/20 px-3 py-1 text-xs font-medium text-cream/70">
              Ecosystem Documentation
            </span>
          </div>

          <h1 className="font-display text-3xl font-bold leading-[1.2] text-cream sm:text-4xl lg:text-5xl">
            Overview & Ecosystem <span className="text-near-black">Vision.</span>
          </h1>

          <div className="flex flex-col gap-4 text-cream/90 lg:max-w-4xl">
            <p className="font-sans text-lg font-medium leading-relaxed sm:text-xl text-cream">
              Payless Protocol is an open hardware trust layer designed for secondhand gadget markets in emerging economies.
            </p>
            <p className="font-sans text-base leading-relaxed text-cream/80 sm:text-lg">
              The ecosystem is built to make stolen electronics unsellable and give everyday buyers and vendors a simple,
              reliable way to verify device history before money changes hands. Instead of exposing users to wallets,
              gas fees, or technical jargon, Payless runs on Base in the background while delivering a familiar, fast web experience.
            </p>
          </div>
        </section>

        {/* ================= CORE PROBLEM SECTION (Cream Card) ================= */}
        <section className="mt-14 rounded-[32px] bg-cream p-6 text-near-black sm:p-10 lg:mt-20 lg:rounded-[45px] lg:p-14 border border-near-black/10 shadow-lg">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit rounded-full border border-near-black bg-blue-light-active px-3.5 py-1.5 text-xs font-semibold text-near-black">
              The Problem
            </span>
            <h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl text-near-black">
              The Core <span className="text-primary">Problem.</span>
            </h2>
            <p className="font-sans text-base leading-relaxed text-near-black/90 lg:max-w-3xl">
              Secondhand (used) smartphones and laptops power digital access across emerging markets, yet the market operates almost entirely without reliable ownership records:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_PROBLEMS.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col rounded-[24px] border border-near-black/15 bg-white/70 p-6 shadow-sm transition-all hover:bg-white"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-near-black font-display text-sm font-bold text-white">
                  0{index + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-near-black">
                  {item.title}
                </h3>
                <p className="mt-2.5 font-sans text-sm leading-relaxed text-near-black/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PAYLESS REGISTRY SECTION ================= */}
        <section className="mt-14 lg:mt-20">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit rounded-full border border-cream/30 bg-blue-light/20 px-3.5 py-1.5 text-xs font-semibold text-blue-light-active">
              Foundation Product
            </span>
            <h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl text-cream">
              The Payless Device <span className="text-near-black">Registry.</span>
            </h2>
            <p className="font-sans text-base leading-relaxed text-cream/90 lg:max-w-3xl sm:text-lg">
              The Payless Registry is the foundational product of the ecosystem. It serves as an immutable, tamper-proof ledger for recording device ownership status and theft reports.
            </p>
          </div>

          {/* ================= KEY CAPABILITIES GRID ================= */}
          <div className="mt-10">
            <h3 className="font-display text-xl font-bold text-cream sm:text-2xl mb-6">
              Key Capabilities
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {KEY_CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="flex flex-col rounded-[24px] border-[1.5px] border-near-black bg-blue-light-active p-6 text-near-black shadow-md transition-transform hover:-translate-y-1"
                >
                  <div className="mb-3 flex size-8 items-center justify-center rounded-lg bg-near-black text-white">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="font-display text-lg font-bold leading-snug text-near-black">
                    {cap.title}
                  </h4>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-near-black/85">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA BANNER ================= */}
        <section className="mt-16 rounded-[32px] border border-white/20 bg-blue-light/25 p-8 text-center sm:p-12 backdrop-blur-md lg:mt-24">
          <h2 className="font-display text-2xl font-bold text-cream sm:text-3xl">
            Partner with Payless Protocol
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-sans text-sm sm:text-base leading-relaxed text-cream/80">
            Join trusted gadget vendors, repair centers, and tech hubs building safer, verified electronics commerce across emerging markets.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://payless-frontend-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[16px] bg-near-black px-6 py-3.5 font-display text-[14px] font-semibold text-white shadow-md transition-colors hover:bg-near-black/80"
            >
              Get Started on Registry ↗
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-[16px] border-2 border-cream px-6 py-3.5 font-display text-[14px] font-semibold text-cream transition-colors hover:bg-white/10"
            >
              Back to Landing Page
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-primary py-8 text-center text-xs text-cream/60">
        <p>© {new Date().getFullYear()} Payless Protocol. All rights reserved.</p>
      </footer>
    </div>
  );
}

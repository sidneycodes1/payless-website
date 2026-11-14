import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/assets";

export const metadata = {
  title: "Payless Marketplace — Coming Soon",
  description: "The verified phone marketplace is coming soon. Use our Registry to check devices now.",
};

export default function ComingSoon() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-primary px-6 py-12 text-center text-cream">
      <div className="flex flex-col items-center max-w-lg">
        {/* Logo Tile */}
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md">
          <Image
            src={ASSETS.logoMark}
            alt="Payless Protocol"
            width={34}
            height={34}
            className="h-[34px] w-[34px]"
            priority
          />
        </div>

        {/* Badge */}
        <span className="inline-flex rounded-full border border-cream/30 bg-blue-light/10 px-4 py-1.5 text-xs font-semibold text-cream">
          Payless Marketplace
        </span>

        {/* Headline */}
        <h1 className="mt-6 font-display text-4xl sm:text-5xl font-bold leading-tight text-cream">
          Coming Soon.
        </h1>

        {/* Description */}
        <p className="mt-4 font-sans text-base leading-relaxed text-cream/80">
          We&apos;re putting the finishing touches on our verified marketplace so you can buy and sell phones with escrow protection.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-3 w-full sm:w-auto sm:flex-row">
          <a
            href="https://payless-frontend-eight.vercel.app/search"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-[16px] border-2 border-cream px-6 py-3 text-[14px] font-semibold text-cream transition-colors hover:bg-white/10"
          >
            Check a Phone on Registry
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-[16px] bg-near-black px-6 py-3 text-[14px] font-semibold text-cream transition-colors hover:bg-near-black/80"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

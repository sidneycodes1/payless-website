import Image from "next/image";
import { Button } from "@/components/primitives/button/Button";
import { ASSETS } from "@/lib/assets";

const CHECKLIST = [
  { lead: "No listing fees.", rest: " Selling costs nothing upfront." },
  {
    lead: "Meet in person, not blind.",
    rest: " Every trade happens at a real shop, not a stranger's doorstep.",
  },
  {
    lead: "Your money is protected.",
    rest: " Payment only releases after you've checked the phone.",
  },
  {
    lead: "Stolen phones lose their value.",
    rest:
      " Because buyers can check before they pay, stolen devices become hard to sell — which is the whole point.",
  },
  {
    lead: "Free to check, always.",
    rest: " Anyone, anywhere, can look up a phone before buying — even outside the marketplace.",
  },
];

const StatPill = ({ value, label, className }: { value: string; label: string; className?: string }) => (
  <div
    className={`flex w-fit items-center gap-3 rounded-2xl bg-near-black px-4 py-2.5 sm:px-5 sm:py-3 shadow-md ${className ?? ""}`}
  >
    <span className="text-xl sm:text-2xl font-bold text-white">{value}</span>
    <span aria-hidden="true" className="h-7 w-px shrink-0 bg-white/40" />
    <span className="max-w-[110px] text-[11px] sm:text-xs font-semibold leading-tight text-white">{label}</span>
  </div>
);

export const Benefits = () => {
  return (
    <section className="bg-cream py-12 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[50px]">
        {/* Top Header Row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit rounded-full border border-near-black bg-blue-light-active px-3.5 py-1.5 text-h8 font-semibold text-near-black">
              Why Payless?
            </span>
            <h2 className="max-w-xl text-h2 font-semibold leading-[1.2] text-near-black">
              The <span className="text-primary">safer way</span> to buy and sell phones.
            </h2>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <p className="max-w-md text-h7 leading-relaxed text-near-black lg:text-right">
              Buying and selling phones without the risk. Your money stays safe until you&apos;re satisfied, every
              trade happens face-to-face at a trusted shop, and listing is free.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="outline-dark"
                icon="arrow"
                href="https://payless-frontend-eight.vercel.app/search"
                target="_blank"
                className="w-full sm:w-auto"
              >
                Check a Phone
              </Button>
              <Button
                variant="black"
                icon="link"
                href="/coming-soon"
                target="_blank"
                className="w-full sm:w-auto"
              >
                Start selling
              </Button>
            </div>
          </div>
        </div>

        {/* Content Row: Checklist Left, Visual Box Right */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Checklist */}
          <ul className="flex flex-col">
            {CHECKLIST.map(({ lead, rest }) => (
              <li
                key={lead}
                className="flex items-start gap-4 border-b border-near-black/20 py-4 sm:py-5"
              >
                <Image
                  src={ASSETS.arrowUpRight}
                  alt=""
                  width={18}
                  height={18}
                  className="mt-1 shrink-0"
                />
                <p className="text-[14px] leading-relaxed text-near-black">
                  <span className="font-semibold">{lead}</span>
                  {rest}
                </p>
              </li>
            ))}
          </ul>

          {/* Right Visual Box with Photo and Overlays */}
          <div className="relative mx-auto h-[440px] w-full max-w-[540px] rounded-3xl lg:h-[480px]">
            {/* Center photo */}
            <div className="absolute left-1/2 top-1/2 h-[220px] w-[80%] max-w-[390px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[40px] shadow-sm">
              <Image
                src={ASSETS.benefitsPhoto}
                alt="Person holding a phone out towards the camera"
                width={866}
                height={475}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Stat 1: 100% Free IMEI Checks */}
            <StatPill
              value="100%"
              label="Free IMEI Checks"
              className="absolute right-2 top-4 sm:right-6 sm:top-8 z-10"
            />

            {/* Stat 2: 12-hour Buyer Protection Window */}
            <StatPill
              value="12-hour"
              label="Buyer Protection Window"
              className="absolute bottom-4 left-2 sm:bottom-8 sm:left-4 z-10"
            />

            {/* Stat 3: Flag a stolen phone in under 60 seconds */}
            <div className="absolute bottom-16 right-2 sm:bottom-20 sm:right-4 z-10 max-w-[200px] rounded-2xl bg-near-black/15 p-3.5 backdrop-blur-md sm:max-w-[220px]">
              <p className="text-[12px] leading-snug text-near-black">
                Flag a stolen phone in under 60 seconds — no forms, no waiting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

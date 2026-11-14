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

          {/* Right Visual Box with Photo and Overlays — Exact Figma Frame 125 (632x539) */}
          <div className="relative mx-auto flex w-full items-center justify-center lg:justify-end">
            <div className="relative h-[290px] w-[340px] sm:h-[360px] sm:w-[420px] lg:h-[539px] lg:w-[632px] origin-center lg:origin-top-right transform scale-[0.54] sm:scale-[0.66] lg:scale-[0.84] xl:scale-[0.92] 2xl:scale-100 transition-transform">
              <div className="absolute left-0 top-0 h-[539px] w-[632px]">
                {/* Frame 121: Photo (W: 432.54px, H: 237.32px, X: 63.46px, Y: 145.66px, rounded: 63.8px) */}
                <div className="absolute left-[63.46px] top-[145.66px] h-[237.32px] w-[432.54px] overflow-hidden rounded-[63.8px] shadow-sm">
                  <Image
                    src={ASSETS.benefitsPhoto}
                    alt="Person holding a phone out towards the camera"
                    width={866}
                    height={475}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Frame 97: Stat 1 (W: 189px, H: 53.34px Hug, X: 357px, Y: 58.98px) */}
                <div className="absolute left-[357px] top-[58.98px] z-10 flex h-[53.34px] w-[189px] items-center gap-[8.5px] rounded-[17px] bg-near-black px-[15px] py-[10px] shadow-md">
                  <span className="text-[20px] font-bold text-white leading-none">100%</span>
                  <span aria-hidden="true" className="h-6 w-px shrink-0 bg-white/40" />
                  <span className="text-[11px] font-semibold leading-tight text-white">Free IMEI Checks</span>
                </div>

                {/* Frame 123: Stat 2 (W: 270px, H: 61.78px Hug, X: 33px, Y: 412.98px) */}
                <div className="absolute left-[33px] top-[412.98px] z-10 flex h-[61.78px] w-[270px] items-center gap-[8.7px] rounded-[22px] bg-near-black px-[15.6px] py-[13.9px] shadow-md">
                  <span className="text-[22px] font-bold text-white leading-none whitespace-nowrap">12-hour</span>
                  <span aria-hidden="true" className="h-7 w-px shrink-0 bg-white/40" />
                  <span className="text-[12px] font-semibold leading-tight text-white">Buyer Protection Window</span>
                </div>

                {/* Frame 124: Stat 3 (W: 211px, H: 86px Hug, X: 387px, Y: 342.98px, rounded: 25px) */}
                <div className="absolute left-[387px] top-[342.98px] z-10 flex h-[86px] w-[211px] items-center gap-[10px] rounded-[25px] bg-near-black/20 px-[18px] py-[16px] backdrop-blur-[25px] shadow-sm">
                  <p className="font-sans text-[12px] font-medium leading-[1.4] text-near-black">
                    Flag a stolen phone in under 60 seconds — no forms, no waiting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { Button } from "@/components/primitives/button/Button";

const HERO_PARAGRAPH =
  "Every device on Payless is checked against a stolen-phone registry before you ever meet the seller. No hidden risk, no guesswork.";
const GLASS_CHECK =
  "Check any phone before you buy. Enter the IMEI to see if it's clean or flagged — no account needed.";
const GLASS_FIND =
  "Find verified phones near you, with secure payments and Registry checks that help you buy from strangers safely.";
const PEACE_PILL = "Get to buy and sell in peace.......";

export const Hero = () => {
  return (
    <section id="home" className="overflow-hidden bg-primary pt-[120px] pb-14 sm:pt-[135px] lg:pt-[149px] lg:pb-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 sm:px-8 lg:px-[50px] lg:flex-row lg:items-start lg:justify-between">
        {/* ================= LEFT COLUMN ================= */}
        {/* Figma: Frame 93, max-width: 669px */}
        <div className="flex w-full flex-col gap-6 lg:w-1/2 lg:max-w-[669px]">
          {/* Headline: "Buy and sell phones" on line 1, "without the fear." on line 2 */}
          <div className="w-full">
            <h1 className="font-display text-[38px] sm:text-[46px] lg:text-[48px] 2xl:text-[54px] font-semibold leading-[1.25] text-cream">
              Buy and sell <span className="text-near-black">phones</span>
              <br className="hidden sm:inline" /> without the fear.
            </h1>
          </div>

          {/* Desktop Left Visual (Figma Frame 89: W: 669px, H: 371px) */}
          <div className="relative hidden h-[371px] w-[669px] origin-top-left transform lg:scale-[0.84] xl:scale-[0.92] 2xl:scale-100 lg:block">
            {/* Phone Mockup: Frame 95 (W: 278px, H: 371px, X: 167px, Y: 0px) */}
            <div className="absolute left-[167px] top-0 h-[371px] w-[278px]">
              <Image
                src={ASSETS.heroPhoneMock}
                alt="Tilted phone lock-screen mockup"
                width={278}
                height={371}
                priority
                fetchPriority="high"
                sizes="(min-width: 1024px) 278px, 250px"
                className="h-[371px] w-[278px] object-contain"
              />
            </div>

            {/* 2k+ Happy Users Chip: Frame 97 (W: 317px, H: 74px, X: 0px, Y: 41px) */}
            <div className="absolute left-0 top-[41px] z-10 flex h-[74px] w-[317px] items-center gap-[10px] rounded-[20px] bg-[rgba(203,200,197,0.25)] px-[18px] py-[12px] backdrop-blur-[12.5px]">
              {/* 4 Avatar circles (50px circles with mr-[-10px] border-2 border-cream) */}
              <div className="flex items-center">
                <div className="relative mr-[-10px] size-[50px] shrink-0 overflow-hidden rounded-full border-2 border-cream">
                  <Image
                    src={ASSETS.avatar1}
                    alt=""
                    width={50}
                    height={50}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative mr-[-10px] size-[50px] shrink-0 overflow-hidden rounded-full border-2 border-cream">
                  <Image
                    src={ASSETS.avatar2}
                    alt=""
                    width={50}
                    height={50}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="relative mr-[-10px] size-[50px] shrink-0 overflow-hidden rounded-full border-2 border-cream bg-cover"
                  style={{
                    backgroundImage: `url("${ASSETS.avatar3CardCrop}")`,
                    backgroundSize: "280%",
                    backgroundPosition: "50% 20%",
                  }}
                />
                <div className="relative size-[50px] shrink-0 overflow-hidden rounded-full border-2 border-cream">
                  <Image
                    src={ASSETS.avatar4}
                    alt=""
                    width={50}
                    height={50}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Divider & Text */}
              <div className="flex items-center justify-center border-l-2 border-cream px-[10px]">
                <div className="font-display text-[16px] font-semibold leading-[1.2] text-cream whitespace-nowrap">
                  <p className="mb-0">2k+ Happy</p>
                  <p>Users</p>
                </div>
              </div>
            </div>

            {/* Glass Card: Frame 96 (W: 357px, H: Hug/86px, X: 266px, Y: 227px) */}
            <div className="absolute left-[266px] top-[227px] z-10 flex w-[357px] flex-col gap-[15px] rounded-[20px] bg-[rgba(203,200,197,0.25)] px-[18px] py-[16px] backdrop-blur-[12.5px]">
              <p className="font-sans text-[12px] font-medium leading-[1.5] text-cream">
                {GLASS_FIND}
              </p>
            </div>
          </div>

          {/* Mobile/Tablet Fallback for Left Visual */}
          <div className="relative mx-auto mt-2 h-[320px] sm:h-[360px] w-full max-w-[320px] sm:max-w-[390px] lg:hidden">
            <div className="absolute left-1/2 top-3 h-[270px] sm:h-[310px] w-[210px] sm:w-[240px] -translate-x-1/2">
              <Image
                src={ASSETS.heroPhoneMock}
                alt="Tilted phone lock-screen mockup"
                width={278}
                height={371}
                priority
                fetchPriority="high"
                sizes="(min-width: 640px) 240px, 210px"
                className="h-full w-full object-contain drop-shadow-xl"
              />
            </div>
            {/* 2k+ chip */}
            <div className="absolute left-0 top-0 z-10 flex items-center gap-2 rounded-[16px] bg-[rgba(203,200,197,0.25)] px-3 py-1.5 backdrop-blur-[14px] border border-white/15 shadow-sm">
              <div className="flex -space-x-2">
                <Image src={ASSETS.avatar1} alt="" width={32} height={32} className="size-8 rounded-full border border-cream object-cover" />
                <Image src={ASSETS.avatar2} alt="" width={32} height={32} className="size-8 rounded-full border border-cream object-cover" />
                <Image src={ASSETS.avatar4} alt="" width={32} height={32} className="size-8 rounded-full border border-cream object-cover" />
              </div>
              <span className="h-5 w-px bg-cream/40" />
              <span className="font-display text-[12px] sm:text-[13px] font-semibold text-cream leading-tight">2k+ Happy Users</span>
            </div>
            {/* Glass Card */}
            <div className="absolute bottom-0 right-0 z-10 w-[84%] sm:w-[80%] rounded-[18px] bg-[rgba(203,200,197,0.25)] p-3 backdrop-blur-[14px] border border-white/15 shadow-md">
              <p className="text-[11.5px] sm:text-[12px] leading-relaxed text-cream font-medium">{GLASS_FIND}</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        {/* Figma: Frame 90, max-width: 669px */}
        <div className="flex w-full flex-col gap-6 lg:w-1/2 lg:max-w-[669px] lg:items-end">
          {/* Desktop Right Visual (Figma Frame 195:9381: W: 669px, H: 371px) */}
          <div className="relative hidden h-[371px] w-[669px] origin-top-right transform lg:scale-[0.84] xl:scale-[0.92] 2xl:scale-100 lg:block">
            {/* Photo: Frame 203:73 (W: 337px, H: 254px, Top: 65px, rounded: 40px) */}
            <div className="absolute left-[calc(50%+29.5px)] top-[65px] h-[254px] w-[337px] -translate-x-1/2 overflow-hidden rounded-[40px] shadow-sm">
              <Image
                src={ASSETS.heroPhoto}
                alt="Hand holding a phone showing a payment screen"
                width={674}
                height={508}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Top-Right Glass Card: Frame 203:74 (W: 293px, Left: 353px, Top: 22px) */}
            <div className="absolute left-[353px] top-[22px] z-10 flex w-[293px] flex-col rounded-[20px] bg-[rgba(203,200,197,0.25)] px-[18px] py-[16px] backdrop-blur-[12.5px]">
              <p className="font-sans text-[12px] font-medium leading-[1.5] text-cream">
                {GLASS_CHECK}
              </p>
            </div>

            {/* Bottom-Left Peace Pill: Frame 204:77 (Left: 12px, Top: 221px) */}
            <div className="absolute left-[12px] top-[221px] z-10 flex rounded-[20px] bg-[rgba(203,200,197,0.25)] px-[18px] py-[16px] backdrop-blur-[12.5px]">
              <p className="font-sans text-[12px] font-semibold leading-[1.5] text-cream whitespace-nowrap">
                {PEACE_PILL}
              </p>
            </div>
          </div>

          {/* Mobile/Tablet Fallback for Right Visual */}
          <div className="relative mx-auto my-2 h-[260px] sm:h-[300px] w-full max-w-[320px] sm:max-w-[390px] lg:hidden">
            <div className="absolute left-1/2 top-4 h-[190px] sm:h-[220px] w-[250px] sm:w-[290px] -translate-x-1/2 overflow-hidden rounded-[26px] sm:rounded-[32px] shadow-md border border-white/10">
              <Image
                src={ASSETS.heroPhoto}
                alt="Hand holding a phone showing a payment screen"
                width={674}
                height={508}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute right-0 top-0 z-10 w-[80%] sm:w-[75%] rounded-[16px] bg-[rgba(203,200,197,0.25)] p-2.5 sm:p-3 backdrop-blur-[14px] border border-white/15 shadow-md">
              <p className="text-[11px] sm:text-[12px] leading-relaxed text-cream font-medium">{GLASS_CHECK}</p>
            </div>
            <div className="absolute bottom-0 left-0 z-10 rounded-[14px] bg-[rgba(203,200,197,0.25)] px-3.5 py-2 backdrop-blur-[14px] border border-white/15 shadow-sm">
              <p className="text-[11.5px] sm:text-[12px] font-semibold text-cream whitespace-nowrap">{PEACE_PILL}</p>
            </div>
          </div>

          {/* Subline paragraph & Buttons below visual */}
          <div className="flex w-full flex-col gap-6 lg:items-end">
            <p className="font-sans text-[15px] sm:text-[16px] font-medium leading-[1.5] text-cream lg:max-w-[560px] 2xl:max-w-[608px] lg:text-right">
              {HERO_PARAGRAPH}
            </p>

            {/* CTAs row */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4 2xl:gap-[25px] lg:justify-end">
              <span id="registry-anchor" className="sr-only" aria-hidden="true" />
              <Button
                variant="outline"
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
              <span id="marketplace-anchor" className="sr-only" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

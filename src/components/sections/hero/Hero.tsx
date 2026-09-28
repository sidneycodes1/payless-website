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

/**
 * Mobile-first hero: ONE column in reading order — headline, subline,
 * buttons (full width, stacked), then the two phone visuals with their glass
 * cards in normal flow (never overlapping text). At lg it becomes the design's
 * two-column layout via grid placement + order utilities; desktop rendering is
 * unchanged from the approved design.
 */
export const Hero = () => {
  return (
    <section id="home" className="overflow-hidden bg-primary pt-12 pb-20 lg:pt-16 lg:pb-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Headline */}
        <h1 className="text-h1 font-bold leading-[1.12] text-cream lg:col-start-1 lg:row-start-1">
          Buy and sell <span className="text-near-black">phones</span> without the fear.
        </h1>

        {/* Subline */}
        <p className="text-h7 leading-relaxed text-cream lg:col-start-2 lg:row-start-2 lg:ml-auto lg:max-w-xl lg:self-end lg:text-right">
          {HERO_PARAGRAPH}
        </p>

        {/* CTAs — full width + stacked on mobile, inline right at lg */}
        <div className="mt-7 flex flex-col gap-3 lg:col-start-2 lg:row-start-3 lg:mt-10 lg:flex-row lg:justify-end lg:gap-3 lg:self-start">
          <span id="registry-anchor" className="sr-only" aria-hidden="true" />
          <Button variant="outline" icon="arrow" href="#registry" className="w-full lg:w-auto">
            Check a Phone
          </Button>
          <Button variant="black" icon="link" href="#marketplace" className="w-full lg:w-auto">
            Start selling
          </Button>
        </div>

        {/* LEFT visual — tilted phone mock with avatar chip + glass card */}
        <div className="relative mx-auto mt-16 w-full max-w-[340px] lg:mx-0 lg:mt-0 lg:w-full lg:max-w-none lg:col-start-1 lg:row-start-2 lg:row-end-4 lg:self-start">
          <div className="relative mx-auto w-[240px] sm:w-[300px] lg:w-[300px]">
            <Image
              src={ASSETS.heroPhoneMock}
              alt="Tilted phone lock-screen mockup"
              width={556}
              height={742}
              className="h-auto w-full"
            />

            {/* Avatar chip — below the phone on mobile/tablet; overlaps its
                left edge only from xl up (at lg the viewport is too narrow). */}
            <div className="mx-auto mt-6 flex w-fit items-center rounded-2xl bg-white/10 py-3 pl-3 pr-5 backdrop-blur-md xl:absolute xl:-left-44 xl:top-8 xl:mx-0 xl:mt-0">
              <div className="flex -space-x-2.5">
                <Image
                  src={ASSETS.avatar1}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-white/70"
                />
                <Image
                  src={ASSETS.avatar2}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-white/70"
                />
                {/* Face #3 cropped out of the founder card via background-position */}
                <div
                  aria-hidden="true"
                  className="h-11 w-11 overflow-hidden rounded-full bg-cover ring-2 ring-white/70"
                  style={{
                    backgroundImage: `url("${ASSETS.avatar3CardCrop}")`,
                    backgroundSize: "280%",
                    backgroundPosition: "50% 20%",
                  }}
                />
                <Image
                  src={ASSETS.avatar4}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-white/70"
                />
              </div>
              <span className="mx-3 h-9 w-px shrink-0 bg-white/50" />
              <span className="w-[64px] text-[13px] font-semibold leading-snug text-white">
                2k+ Happy Users
              </span>
            </div>

            {/* Glass card — under the phone on mobile/tablet, over its
                right side from xl up */}
            <div className="mx-auto mt-6 w-full max-w-[300px] rounded-xl bg-white/10 p-4 backdrop-blur-md xl:absolute xl:-left-44 xl:-right-44 xl:top-[54%] xl:mx-0 xl:mt-0 xl:max-w-none">
              <p className="text-[13px] leading-relaxed text-white">{GLASS_FIND}</p>
            </div>
          </div>
        </div>

        {/* RIGHT visual — photo with glass overlays */}
        <div className="relative mx-auto w-full max-w-[360px] lg:mx-auto lg:mr-[6%] lg:col-start-2 lg:row-start-1 lg:row-end-3">
          <Image
            src={ASSETS.heroPhoto}
            alt="Hand holding a phone showing a payment screen"
            width={674}
            height={508}
            className="h-auto w-full rounded-2xl object-cover"
          />

          {/* Top-right glass card — below the photo on mobile, overlapping at lg */}
          <div className="mt-4 w-full rounded-xl bg-white/10 p-4 backdrop-blur-md lg:absolute lg:-right-5 lg:-top-10 lg:mt-0 lg:w-[280px]">
            <p className="text-[13px] leading-relaxed text-white">{GLASS_CHECK}</p>
          </div>

          {/* Floating pill — normal flow on mobile, mid-left over the photo at lg */}
          <div className="mt-4 rounded-full bg-white/10 px-5 py-3 text-center backdrop-blur-md lg:absolute lg:-left-28 lg:top-1/2 lg:mt-0 lg:inline-block lg:w-auto lg:-translate-y-1/2 lg:text-left">
            <p className="text-[13px] font-semibold text-white lg:whitespace-nowrap">{PEACE_PILL}</p>
          </div>

          <span id="marketplace-anchor" className="sr-only" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

import Image from "next/image";
import { ASSETS } from "@/lib/assets";

/**
 * NOTE ON ASSETS: the three `founderCards` images in public/Admin_Resources are
 * pre-rendered finished cards — the #1E3ED9 border, the periwinkle→dark gradient
 * overlay and the "Name / Role" caption are baked into the PNG. They are the
 * only founder imagery available in public/ (there are no raw headshots), so we
 * render them as-is inside a 200x230 frame instead of layering a duplicate DOM
 * border/gradient/text on top of the baked-in ones.
 */
const FOUNDER_CARDS = ASSETS.founderCards;

const PARAGRAPH_ONE =
  "Payless started with a simple observation: phone theft isn't really a hardware problem, it's an information problem. A stolen phone works exactly the same as a clean one — the only thing missing is a way for the next buyer to know the difference.";
const PARAGRAPH_TWO =
  "We built Payless to close that gap. It's free to check a phone, free to report one stolen, and built to work reliably even on a slow connection at a busy market stall. We started in Ilorin and we're growing city by city — because trust works best when it's local, and a face-to-face handshake still beats any app.";

export const About = () => {
  return (
    <section id="about" className="bg-primary">
      {/* Blue frame around the cream card: 16px mobile -> generous frame on desktop */}
      <div className="mx-auto w-full max-w-[1440px] p-4 sm:p-6 lg:p-10 xl:p-[64px]">
        <div className="flex flex-col gap-12 rounded-[32px] bg-cream p-6 lg:rounded-[50px] lg:p-[50px] xl:grid xl:grid-cols-[1.45fr_1fr] xl:grid-rows-[auto_1fr] xl:gap-x-[70px] xl:gap-y-0">
          {/* Headline group — top-left. DOM order 1 (headline first on mobile). */}
          <div className="flex w-full flex-col gap-[15px] xl:col-start-1 xl:row-start-1">
            <span className="inline-flex w-fit rounded-[15px] border-2 border-near-black bg-blue-light-active px-[10px] py-[8px] font-sans text-[12px] font-semibold leading-none text-near-black">
              About Us
            </span>
            <h2 className="w-full font-display text-[30px] font-semibold leading-[1.5] text-near-black sm:text-[40px] lg:text-[48px]">
              Built for how <span className="text-primary">devices</span> are traded.
            </h2>
          </div>

          {/* RIGHT column — quote / paragraphs / closing quote.
              DOM order 2 (sits under the headline on mobile); spans both
              grid rows on the right at lg. */}
          <div className="flex w-full flex-col gap-[30px] py-[10px] lg:gap-[50px] lg:py-[30px] lg:pr-[40px] xl:col-start-2 xl:row-start-1 xl:row-span-2 xl:self-center">
            <Image
              src={ASSETS.quoteMark}
              alt=""
              width={100}
              height={100}
              className="h-[50px] w-[50px] self-start object-contain"
            />

            <div className="flex flex-col gap-5 text-left font-sans text-[14px] font-medium leading-[1.5] text-near-black lg:text-right">
              <p>{PARAGRAPH_ONE}</p>
              <p>{PARAGRAPH_TWO}</p>
            </div>

            <Image
              src={ASSETS.quoteMark}
              alt=""
              width={100}
              height={100}
              className="h-[50px] w-[50px] rotate-180 self-end object-contain"
            />
          </div>

          {/* Founder cards — DOM order 3. Three equal flex cards that always
              fit the available width (no horizontal scroll at any breakpoint). */}
          <div className="flex w-full gap-2 sm:gap-4 xl:col-start-1 xl:row-start-2 xl:self-end">
            {FOUNDER_CARDS.map((src, i) => (
              <div
                key={src}
                className="aspect-[200/230] min-w-0 flex-1 overflow-hidden rounded-[25px]"
              >
                <Image
                  src={src}
                  alt={`Payless co-founder ${i + 1}`}
                  width={400}
                  height={460}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import Image from "next/image";
import { ASSETS } from "@/lib/assets";

/**
 * NOTE ON ASSETS: the three `founderCards` images in public/Admin_Resources are
 * pre-rendered finished cards — the #1E3ED9 border, the periwinkle→dark gradient
 * overlay and the "Name / Role" caption are baked into the PNG.
 */
const FOUNDER_CARDS = ASSETS.founderCards;

const PARAGRAPH_ONE =
  "Payless started with a simple observation: phone theft isn't really a hardware problem, it's an information problem. A stolen phone works exactly the same as a clean one — the only thing missing is a way for the next buyer to know the difference.";
const PARAGRAPH_TWO =
  "We built Payless to close that gap. It's free to check a phone, free to report one stolen, and built to work reliably even on a slow connection at a busy market stall. We started in Ilorin and we're growing city by city — because trust works best when it's local, and a face-to-face handshake still beats any app.";

export const About = () => {
  return (
    <section id="about" className="bg-primary py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-[50px]">
        {/* Cream Card Container */}
        <div className="flex flex-col gap-10 rounded-[32px] bg-cream p-6 sm:p-8 lg:rounded-[45px] lg:p-12 xl:grid xl:grid-cols-[1.3fr_1fr] xl:gap-14 xl:items-center">
          {/* Left Column: Heading + Founder Cards */}
          <div className="flex flex-col justify-between gap-8 h-full">
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit rounded-[14px] border-2 border-near-black bg-blue-light-active px-3 py-1.5 text-h8 font-semibold text-near-black">
                About Us
              </span>
              <h2 className="text-h2 font-semibold leading-[1.2] text-near-black">
                Built for how <span className="text-primary">devices</span> are traded.
              </h2>
            </div>

            {/* Founder Cards */}
            <div className="flex w-full max-w-[580px] gap-3 sm:gap-4">
              {FOUNDER_CARDS.map((src, i) => (
                <div
                  key={src}
                  className="aspect-[200/230] min-w-0 flex-1 overflow-hidden rounded-[20px] shadow-sm"
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

          {/* Right Column: Quotes & Description */}
          <div className="flex flex-col justify-between gap-6 py-2">
            <Image
              src={ASSETS.quoteMark}
              alt=""
              width={45}
              height={45}
              className="h-10 w-10 self-start object-contain"
            />

            <div className="flex flex-col gap-5 text-left text-[14px] sm:text-[15px] font-medium leading-relaxed text-near-black lg:text-right">
              <p>{PARAGRAPH_ONE}</p>
              <p>{PARAGRAPH_TWO}</p>
            </div>

            <Image
              src={ASSETS.quoteMark}
              alt=""
              width={45}
              height={45}
              className="h-10 w-10 rotate-180 self-end object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

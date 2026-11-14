import Image from "next/image";
import { ASSETS } from "@/lib/assets";

const PROBLEM_BODY =
  "You meet a stranger, hand over cash, and hope for the best. There's no way to know if the phone in your hand was stolen last week in another city — carriers don't share that information across networks, and by the time a police report goes through, the phone has already been resold three times.";
const PROBLEM_RESULT =
  "The result: honest buyers unknowingly fund theft, and honest sellers get treated with the same suspicion as thieves.";

export const Problem = () => {
  return (
    <section className="bg-primary py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-[50px]">
        {/* Top Row: Body left / Badge + Headline right (Figma Frame 108) */}
        <div className="mt-8 flex flex-col gap-8 lg:mt-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="order-2 w-full max-w-[608px] text-h7 leading-relaxed text-cream lg:order-1">
            {PROBLEM_BODY}
          </p>
          <div className="order-1 flex w-full max-w-[669px] flex-col items-start gap-4 lg:order-2 lg:items-end">
            <span className="rounded-full bg-blue-light-active px-3.5 py-1.5 text-h8 font-semibold text-near-black">
              The Problem
            </span>
            <h2 className="text-h2 font-bold leading-[1.25] text-cream lg:text-right">
              Buying a used phone in Nigeria is a <span className="text-near-black">gamble.</span>
            </h2>
          </div>
        </div>

        {/* Bottom Row: Illustration left / Result line right (Figma Frame 110) */}
        <div className="mt-12 flex flex-col gap-8 lg:mt-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex w-full justify-start lg:w-auto">
            <div className="relative h-[250px] w-full max-w-[486px] overflow-hidden rounded-[50px] border-2 border-cream/80 shadow-sm">
              <Image
                src={ASSETS.problemIllustration}
                alt="Person holding a phone beside a card and keys"
                width={972}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="w-full max-w-[561px] text-h7 leading-relaxed text-cream lg:text-right">
            {PROBLEM_RESULT}
          </p>
        </div>
      </div>
    </section>
  );
};

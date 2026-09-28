import Image from "next/image";
import { ASSETS } from "@/lib/assets";

const PROBLEM_BODY =
  "You meet a stranger, hand over cash, and hope for the best. There's no way to know if the phone in your hand was stolen last week in another city — carriers don't share that information across networks, and by the time a police report goes through, the phone has already been resold three times.";
const PROBLEM_RESULT =
  "The result: honest buyers unknowingly fund theft, and honest sellers get treated with the same suspicion as thieves.";

export const Problem = () => {
  return (
    <section className="bg-primary pt-20 pb-20 lg:pt-24 lg:pb-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Badge — right aligned */}
        <div className="flex justify-end">
          <span className="rounded-full bg-blue-light-active px-4 py-2 text-h8 font-semibold text-near-black">
            The Problem
          </span>
        </div>

        {/* Headline first on mobile; body left / headline right at lg */}
        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <p className="order-2 max-w-xl text-h7 leading-relaxed text-cream lg:order-1">
            {PROBLEM_BODY}
          </p>
          <h2 className="order-1 text-h2 font-bold leading-[1.15] text-cream lg:order-2 lg:text-center">
            Buying a used phone in Nigeria is a <span className="text-near-black">gamble.</span>
          </h2>
        </div>

        {/* Illustration left / result line right */}
        <div className="mt-16 grid items-end gap-12 lg:mt-24 lg:grid-cols-2 lg:gap-16">
          <Image
            src={ASSETS.problemIllustration}
            alt="Person holding a phone beside a card and keys"
            width={972}
            height={500}
            className="h-auto w-full max-w-[620px] rounded-2xl object-cover lg:ml-16"
          />
          <p className="max-w-md text-h7 leading-relaxed text-cream lg:ml-auto lg:text-right">
            {PROBLEM_RESULT}
          </p>
        </div>
      </div>
    </section>
  );
};

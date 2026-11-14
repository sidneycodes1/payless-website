import { Fragment } from "react";

const REGISTRY_STEPS = [
  "Enter the IMEI number. That's the phone's serial number — dial *#06# on any phone to find it.",
  "Get a secret phrase. Three random words, generated instantly. This is your key to update the report later.",
  "The phone is flagged immediately. Anyone who checks that IMEI from this point on sees it's stolen.",
  "Found your phone? Clear the flag. Use your secret phrase to mark it safe again — no office visit, no waiting.",
];

const MARKETPLACE_STEPS = [
  "Find a phone near you. Browse listings in your city — every one already checked against the registry.",
  "Pay, and your money is held. Not the seller's, not ours — held safely until you confirm the phone is what you paid for.",
  "Meet at a trusted location. A nearby partner shop, not a random street corner.",
  "Inspect, then release payment. Only when you're happy does the seller get paid.",
];

const ArrowPath = () => (
  <path
    d="M3.33 10h13.34M11.67 5l5 5-5 5"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

/* Right-pointing arrow between cards in the lg flex row. */
const StepArrow = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className="hidden shrink-0 self-center text-blue-light-hover lg:block"
  >
    <ArrowPath />
  </svg>
);

/* Down-pointing arrow between stacked cards on mobile only. */
const StepArrowDown = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className="mx-auto rotate-90 text-blue-light-hover md:hidden lg:hidden"
  >
    <ArrowPath />
  </svg>
);

const StepCard = ({ body, i }: { body: string; i: number }) => (
  <div className="h-full rounded-2xl border-[1.5px] border-near-black bg-blue-light-active p-4 lg:p-5 lg:flex-1">
    <p className="text-h7 font-bold text-near-black">Step {i + 1}</p>
    <p className="mt-3 text-[12px] leading-relaxed text-near-black sm:text-[13px]">{body}</p>
  </div>
);

/**
 * Steps layout: 1 column on mobile with arrows rotated to point down,
 * 2x2 at md (no connectors — none fit a wrapped grid cleanly),
 * 4-across with right-pointing arrows at lg.
 */
const StepRow = ({ steps }: { steps: string[] }) => (
  <div className="mt-6 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4 lg:flex lg:flex-row lg:items-center lg:gap-4">
    {steps.map((body, i) => (
      <Fragment key={body}>
        {i > 0 && <StepArrowDown />}
        <StepCard body={body} i={i} />
        {i < steps.length - 1 && <StepArrow />}
      </Fragment>
    ))}
  </div>
);

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-primary py-12 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[50px]">
        {/* Badge — right aligned on blue */}
        <div className="flex justify-end">
          <span className="rounded-full bg-blue-light/20 px-4 py-2 text-h8 font-semibold text-blue-light-active">
            How It Works
          </span>
        </div>

        <h2 className="mt-6 text-right text-h2 font-semibold leading-[1.25] text-white">
          Get To <span className="text-near-black">Understand.</span>
        </h2>

        {/* Block 1 — Registry, left aligned */}
        <div className="mt-10 lg:mt-12">
          <h3 className="text-h3 font-semibold text-white">
            How the <span className="text-near-black">Registry</span> Works.
          </h3>
          <p className="mt-4 max-w-[800px] text-[13px] leading-relaxed text-blue-light-hover sm:text-[14px]">
            Lost your phone? Enter its IMEI (dial *#06# to find it) and Payless flags it instantly. You&apos;ll get a
            secret 3-word phrase — keep it safe, it&apos;s your key to clear the flag later if you get the phone back.
            From that moment, anyone who checks that IMEI sees it&apos;s stolen.
          </p>

          <StepRow steps={REGISTRY_STEPS} />

          <p className="mt-6 max-w-[540px] text-[13px] leading-relaxed text-blue-light-hover sm:text-[14px]">
            Before you buy, enter the phone&apos;s IMEI (dial *#06# to find it) and Payless checks it against the
            registry instantly. Clean means it&apos;s safe to buy. Flagged means walk away — no forms, no waiting.
          </p>

          <div className="mt-12 text-left lg:text-right">
            <h3 className="text-h3 font-semibold text-white">
              How the <span className="text-near-black">Marketplace</span> Works
            </h3>
            <p className="mt-4 max-w-[650px] text-[13px] leading-relaxed text-blue-light-hover sm:text-[14px] lg:ml-auto">
              Find a phone for sale near you and pay — your money is held safely, not sent to the seller yet. Meet at a
              trusted local shop to inspect the phone in person. Happy with it? Release payment on the spot. Not happy?
              Walk away, no money lost.
            </p>
            <StepRow steps={MARKETPLACE_STEPS} />
            <p className="mt-6 max-w-[540px] text-[13px] leading-relaxed text-blue-light-hover sm:text-[14px] lg:ml-auto">
              List your phone free in minutes, get matched with a nearby buyer, meet at a trusted local shop, and get
              paid the moment they confirm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

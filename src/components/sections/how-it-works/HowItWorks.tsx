import { Fragment } from "react";

const REGISTRY_STEPS = [
  "Enter the IMEI number. That's the phone's serial number — dial *#06# on any phone to find it.",
  "Get a secret phrase. Three random words, generated instantly. This is your key to update the report later.",
  "The phone is flagged immediately. Anyone who checks that IMEI from this point on sees it's stolen.",
  "Found your phone? Clear the flag. Use your secret phrase to mark it safe again — no office visit, no waiting.",
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
  <div className="h-full rounded-xl border border-near-black bg-blue-light-active px-6 py-6 lg:flex-1">
    <p className="text-h7 font-bold text-near-black">Step {i + 1}</p>
    <p className="mt-4 text-[15px] leading-[1.45] text-near-black">{body}</p>
  </div>
);

/**
 * Steps layout: 1 column on mobile with arrows rotated to point down,
 * 2x2 at md (no connectors — none fit a wrapped grid cleanly),
 * 4-across with right-pointing arrows at lg.
 */
const StepRow = ({ steps }: { steps: string[] }) => (
  <div className="mt-12 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5 lg:flex lg:flex-row lg:items-stretch lg:gap-5">
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
    <section id="how-it-works" className="bg-primary">
      <div className="mx-auto max-w-[1789px] px-6 pt-14 pb-16 lg:px-24">
        {/* Badge — right aligned on blue */}
        <div className="flex justify-end">
          <span className="rounded-full bg-blue-light/20 px-5 py-2.5 text-h8 font-semibold text-blue-light-active">
            How It Works
          </span>
        </div>

        <h2 className="mt-9 text-right text-h2 font-semibold text-white">
          Get To <span className="text-near-black">Understand.</span>
        </h2>

        {/* Block 1 — Registry, left aligned */}
        <div className="mt-24">
          <h3 className="text-h3 font-semibold text-white">
            How the <span className="text-near-black">Registry</span> Works.
          </h3>
          <p className="mt-7 max-w-[800px] text-[14px] leading-[1.55] text-blue-light-hover">
            Lost your phone? Enter its IMEI (dial *#06# to find it) and Payless flags it instantly. You&apos;ll get a
            secret 3-word phrase — keep it safe, it&apos;s your key to clear the flag later if you get the phone back.
            From that moment, anyone who checks that IMEI sees it&apos;s stolen.
          </p>

          <StepRow steps={REGISTRY_STEPS} />

          <p className="mt-12 max-w-[540px] text-[14px] leading-[1.55] text-blue-light-hover">
            Before you buy, enter the phone&apos;s IMEI (dial *#06# to find it) and Payless checks it against the
            registry instantly. Clean means it&apos;s safe to buy. Flagged means walk away — no forms, no waiting.
          </p>
        </div>
      </div>
    </section>
  );
};

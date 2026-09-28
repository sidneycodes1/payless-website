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
    className={`mt-4 flex w-fit items-center gap-3.5 rounded-2xl bg-black px-6 py-3.5 lg:mt-0 ${className ?? ""}`}
  >
    <span className="text-h5 font-bold text-white">{value}</span>
    <span aria-hidden="true" className="h-9 w-px shrink-0 bg-white/50" />
    <span className="max-w-[104px] text-h8 font-semibold leading-[1.3] text-white">{label}</span>
  </div>
);

export const Benefits = () => {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1789px] px-6 pt-16 pb-28 lg:px-24">
        {/* Badge */}
        <span className="inline-flex rounded-full border border-near-black bg-blue-light-active px-5 py-2.5 text-h8 font-semibold text-near-black">
          Why Payless?
        </span>

        <div className="mt-10 grid gap-20 lg:grid-cols-[1fr_600px] lg:gap-24">
          {/* Left — headline + checklist */}
          <div>
            <h2 className="max-w-[640px] text-h2 font-semibold leading-[1.15] text-near-black">
              The <span className="text-primary">safer way</span> to buy and sell phones.
            </h2>

            <ul className="mt-20 max-w-[660px]">
              {CHECKLIST.map(({ lead, rest }) => (
                <li
                  key={lead}
                  className="flex items-start gap-4 border-b border-near-black/20 pt-12 pb-6"
                >
                  <Image
                    src={ASSETS.arrowUpRight}
                    alt=""
                    width={20}
                    height={20}
                    className="mt-1 shrink-0"
                  />
                  <p className="text-h7 leading-[1.45] text-near-black">
                    <span className="font-semibold">{lead}</span>
                    {rest}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — paragraph, buttons, photo with overlays */}
          <div>
            <p className="max-w-[560px] text-[18px] leading-[1.5] text-near-black lg:ml-auto lg:text-right">
              Buying and selling phones without the risk. Your money stays safe until you&apos;re satisfied, every
              trade happens face-to-face at a trusted shop, and listing is free.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Button variant="outline-dark" icon="arrow" className="w-full sm:w-auto">
                Check a Phone
              </Button>
              <Button variant="black" icon="link" className="w-full sm:w-auto">
                Start selling
              </Button>
            </div>

            {/* Photo + overlay cards — cards sit in normal flow on mobile,
                overlap the photo edges only from lg up (matches the design). */}
            <div className="relative mt-12 flex w-full flex-col gap-4 lg:mt-40 lg:max-w-[520px] lg:-ml-10 lg:block lg:gap-0">
              <Image
                src={ASSETS.benefitsPhoto}
                alt="Person holding a phone out towards the camera"
                width={866}
                height={475}
                className="w-full rounded-2xl object-cover"
              />

              <StatPill
                value="100%"
                label="Free IMEI Checks"
                className="lg:absolute lg:-top-[102px] lg:right-0 lg:-right-[65px] lg:mt-0"
              />
              <StatPill
                value="12-hour"
                label="Buyer Protection Window"
                className="lg:absolute lg:-bottom-[86px] lg:left-0 lg:-left-[37px] lg:mt-0"
              />

              <div className="w-full rounded-2xl bg-near-black/20 p-5 backdrop-blur-md lg:absolute lg:-bottom-[41px] lg:right-0 lg:w-[245px] lg:-right-[125px] lg:mt-0">
                <p className="text-[14px] leading-[1.45] text-near-black">
                  Flag a stolen phone in under 60 seconds — no forms, no waiting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

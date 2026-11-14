import { Button } from "@/components/primitives/button/Button";

const PANEL_COPY =
  "A public record where anyone can report a lost or stolen phone in seconds, and anyone can check a phone before buying it. No account needed to search. It takes the IMEI number (the phone's serial number) and tells you: clean, or flagged.";

type ProductCardProps = {
  id: string;
  tag: string;
  title: string;
  buttonHref?: string;
  buttonTarget?: string;
};

const ProductCard = ({
  id,
  tag,
  title,
  buttonHref = "https://payless-frontend-eight.vercel.app/",
  buttonTarget = "_blank",
}: ProductCardProps) => {
  return (
    <article
      id={id}
      className="mx-auto flex w-full max-w-[485px] flex-col justify-between rounded-[32px] border-[1.5px] border-near-black p-6 lg:rounded-[37px] lg:p-7"
    >
      <div>
        <span className="inline-flex rounded-full border border-near-black bg-blue-light-active px-3 py-1.5 text-h8 font-semibold text-near-black">
          {tag}
        </span>

        <h3 className="mt-6 text-h4 font-bold leading-[1.3] text-near-black">
          {title}{" "}
          <span className="ml-1 whitespace-nowrap text-h8 font-semibold text-primary">By payless</span>
        </h3>
      </div>

      <div className="mt-10 rounded-[22px] border border-near-black bg-blue-light-active p-5 lg:mt-12">
        <p className="text-[12px] leading-relaxed text-near-black">{PANEL_COPY}</p>
        <div className="mt-4 flex justify-end">
          <Button
            variant="black-sm"
            icon="arrow"
            href={buttonHref}
            target={buttonTarget}
          >
            Get Started
          </Button>
        </div>
      </div>
    </article>
  );
};

export const Solution = () => {
  return (
    <section className="bg-cream py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-[50px]">
        {/* Centered badge */}
        <div className="flex justify-center">
          <span className="rounded-full border border-near-black bg-blue-light-active px-3.5 py-1.5 text-h8 font-semibold text-near-black">
            The Solution
          </span>
        </div>

        {/* Centered headline + label */}
        <div className="mt-6 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2 text-center">
          <h2 className="text-h2 font-bold leading-[1.2] text-near-black">
            Two things, <span className="text-primary">working</span> together.
          </h2>
          <span className="text-h8 font-semibold text-primary">By payless</span>
        </div>

        {/* Product cards */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-12 lg:gap-12">
          <ProductCard
            id="registry"
            tag="Product 01"
            title="Registry — Free, for everyone."
            buttonHref="https://payless-frontend-eight.vercel.app/"
            buttonTarget="_blank"
          />
          <ProductCard
            id="marketplace"
            tag="Product 02"
            title="Marketplace — Where you buy and sell."
            buttonHref="/coming-soon"
            buttonTarget="_blank"
          />
        </div>
      </div>
    </section>
  );
};

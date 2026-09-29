import { Button } from "@/components/primitives/button/Button";

const PANEL_COPY =
  "A public record where anyone can report a lost or stolen phone in seconds, and anyone can check a phone before buying it. No account needed to search. It takes the IMEI number (the phone's serial number) and tells you: clean, or flagged.";

type ProductCardProps = {
  id: string;
  tag: string;
  title: string;
};

const ProductCard = ({ id, tag, title }: ProductCardProps) => {
  return (
    <article id={id} className="rounded-2xl border border-near-black p-7 lg:p-9">
      <span className="inline-flex rounded-full border border-near-black bg-blue-light-active px-3.5 py-1.5 text-h8 font-semibold text-near-black">
        {tag}
      </span>

      <h3 className="mt-7 text-h4 font-bold leading-[1.3] text-near-black">
        {title}{" "}
        <span className="ml-1 whitespace-nowrap text-h8 font-semibold text-primary">By payless</span>
      </h3>

      <div className="mt-9 rounded-2xl border border-near-black bg-blue-light-active p-6">
        <p className="text-h8 leading-relaxed text-near-black">{PANEL_COPY}</p>
        <div className="mt-7 flex justify-end">
          <Button variant="black-sm" icon="arrow" href="#get-started">
            Get Started
          </Button>
        </div>
      </div>
    </article>
  );
};

export const Solution = () => {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Centered badge */}
        <div className="flex justify-center">
          <span className="rounded-full border border-near-black bg-blue-light-active px-4 py-2 text-h8 font-semibold text-near-black">
            The Solution
          </span>
        </div>

        {/* Centered headline + tiny label */}
        <div className="mt-9 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2">
          <h2 className="text-h2 font-bold leading-[1.2] text-near-black">
            Two things, <span className="text-primary">working</span> together.
          </h2>
          <span className="text-h8 font-semibold text-primary">By payless</span>
        </div>

        {/* Product card */}
        <div className="mt-14 grid gap-8 lg:mt-16 lg:gap-10">
          <ProductCard id="registry" tag="Product 01" title="Registry — Free, for everyone." />
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/primitives/button/Button";
import { Footer } from "@/components/sections/footer/Footer";

export const GetStarted = () => {
  return (
    <section id="get-started" className="bg-primary py-8 lg:py-12">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[50px]">
        {/* Cream card container */}
        <div className="rounded-[32px] bg-cream p-6 sm:p-10 lg:rounded-[45px] lg:p-12">
          {/* Card top row: badge + heading left, paragraph + buttons right */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit rounded-full border border-near-black bg-blue-light-active px-3.5 py-1.5 text-h8 font-semibold text-near-black">
                Use Payless Now!!!
              </span>
              <h2 className="text-h2 font-bold leading-[1.2] text-near-black">
                Get started with <span className="text-primary">Payless</span>.
              </h2>
            </div>

            <div className="flex w-full flex-col items-start gap-5 lg:w-auto lg:max-w-[500px] lg:items-end">
              <p className="w-full text-h7 leading-relaxed text-near-black lg:text-right">
                Check a phone, list one for sale, or just see what&apos;s nearby — no account required to browse.
              </p>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button
                  variant="outline-dark"
                  icon="arrow"
                  href="https://payless-frontend-eight.vercel.app/search"
                  target="_blank"
                  className="w-full sm:w-auto"
                >
                  Check a Phone
                </Button>
                <Button
                  variant="black"
                  icon="link"
                  href="/coming-soon"
                  target="_blank"
                  className="w-full sm:w-auto"
                >
                  Start selling
                </Button>
              </div>
            </div>
          </div>

          {/* Footer inside the cream card */}
          <Footer />
        </div>
      </div>
    </section>
  );
};

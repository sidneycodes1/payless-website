import Image from "next/image";
import { Button } from "@/components/primitives/button/Button";
import { Footer } from "@/components/sections/footer/Footer";
import { ASSETS } from "@/lib/assets";

/**
 * The five staggered photo cards, in design order. Heights follow the native
 * asset proportions with bottoms flush, so the tall middle card rises above the rest.
 */
const photoCards = [
  {
    src: ASSETS.getStartedPhotos[0],
    aspect: "lg:aspect-[416/544]",
    alt: "Hands reaching toward a floating gold smartphone",
  },
  {
    src: ASSETS.getStartedPhotos[1],
    aspect: "lg:aspect-[416/422]",
    alt: "Silhouetted profile holding a gold phone against a sunset",
  },
  {
    src: ASSETS.getStartedPhotos[2],
    aspect: "lg:aspect-[416/688]",
    alt: "Two hands exchanging a white smartphone over a pink and green gradient",
  },
  {
    src: ASSETS.getStartedPhotos[3],
    aspect: "lg:aspect-[416/604]",
    alt: "Person in a grey sweater holding a white smartphone behind their back",
  },
  {
    src: ASSETS.getStartedPhotos[4],
    aspect: "lg:aspect-[416/508]",
    alt: "Person in sunglasses holding a phone and a coffee cup outdoors",
  },
];

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

            <div className="flex flex-col items-start gap-5 lg:items-end">
              <p className="max-w-md text-h7 leading-relaxed text-near-black lg:text-right">
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

          {/* Staggered photo row */}
          <div className="-mx-6 mt-10 flex snap-x snap-mandatory items-end gap-3.5 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-5 sm:gap-4 sm:overflow-visible sm:px-0">
            {photoCards.map((photo) => (
              <div
                key={photo.src}
                className={`relative aspect-[416/508] w-[65vw] max-w-[240px] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-auto sm:max-w-none sm:shrink ${photo.aspect}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 65vw, 20vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Footer inside the cream card */}
          <Footer />
        </div>
      </div>
    </section>
  );
};

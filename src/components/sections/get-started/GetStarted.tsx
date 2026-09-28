import Image from "next/image";
import { Button } from "@/components/primitives/button/Button";
import { Footer } from "@/components/sections/footer/Footer";
import { ASSETS } from "@/lib/assets";

/**
 * The five staggered photo cards, in design order. Heights follow the native
 * asset proportions (416x544 / 416x422 / 416x688 / 416x604 / 416x508) with
 * bottoms flush, so the tall middle card rises above the rest.
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
    <section id="get-started" className="bg-primary py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* One big cream card holds the CTA block, the photo row and the footer */}
        <div className="rounded-3xl bg-cream p-6 md:p-12">
          {/* Card top row: badge + heading left, paragraph + buttons right */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-flex rounded-full border border-near-black bg-blue-light-active px-4 py-2 text-h8 font-semibold text-near-black">
                Use Payless Now!!!
              </span>
              <h2 className="mt-8 text-2xl font-bold leading-[1.15] text-near-black sm:text-4xl lg:text-5xl">
                Get started with <span className="text-primary">Payless</span>.
              </h2>
            </div>

            <div className="flex flex-col items-start gap-6 lg:items-end">
              <p className="max-w-md text-h7 text-near-black lg:text-right">
                Check a phone, list one for sale, or just see what&apos;s nearby — no account required to browse.
              </p>
              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <Button variant="outline-dark" icon="arrow" className="w-full sm:w-auto">
                  Check a Phone
                </Button>
                <Button variant="black" icon="link" className="w-full sm:w-auto">
                  Start selling
                </Button>
              </div>
            </div>
          </div>

          {/* Staggered photo row, bottoms flush — horizontal scroll-snap
              strip on mobile, grid from sm up. */}
          <div className="-mx-6 mt-12 flex snap-x snap-mandatory items-end gap-5 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-5 lg:gap-12">
            {photoCards.map((photo) => (
              <div
                key={photo.src}
                className={`relative aspect-[416/508] w-[70vw] max-w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-auto sm:max-w-none sm:shrink ${photo.aspect}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Footer lives inside this cream card */}
          <Footer />
        </div>
      </div>
    </section>
  );
};

import { Accordion } from "@/components/primitives/accordion/accordion";

// LOCKED COPY: the six answer strings below are carried verbatim, character
// for character, from the previous Faq.tsx implementation. Do not reword.
const faqItems = [
  {
    question: "Is Payless free?",
    answer:
      "Payless started with a simple observation: phone theft isn't really a hardware problem, it's an information problem. A stolen phone works exactly the same as a clean one — the only thing missing is a way for the next buyer to know the difference.",
  },
  {
    question: "Do I need a crypto wallet or anything technical?",
    answer: "No. You sign up with just your phone number. Everything else runs quietly in the background.",
  },
  {
    question: "How do I check if a phone is stolen?",
    answer:
      "Search its IMEI number (dial *#06# on most phones to find it) on the Registry. You'll see instantly if it's flagged.",
  },
  {
    question: "What if I have a problem during a trade?",
    answer: "Meet at a partner shop and only release payment after you have inspected the phone and are satisfied.",
  },
  {
    question: "What if my phone gets found after I've flagged it stolen?",
    answer: "You can clear the flag yourself using the secret phrase you were given when you reported it.",
  },
  {
    question: "Which cities is Payless in?",
    answer: "Payless is growing city by city, starting with trusted local partner shops and communities.",
  },
];

export const Faq = () => {
  return (
    <section id="faq" className="bg-primary py-12 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[50px]">
        {/* Top row: intro left, badge + heading right (per design mock) */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <p className="order-2 max-w-xl text-h7 leading-relaxed text-cream lg:order-1">
            Everything you need to know about checking, buying, and selling safely on Payless — no crypto jargon, we
            promise.
          </p>
          <div className="order-1 flex flex-col items-start gap-4 lg:order-2 lg:items-end">
            <span className="rounded-full bg-white/20 px-3.5 py-1.5 text-h8 font-semibold text-white/90">FAQ Section</span>
            <h2 className="text-h2 font-bold leading-[1.2] text-cream">
              Got <span className="text-near-black">questions?</span>
            </h2>
          </div>
        </div>

        {/* Centered accordion column */}
        <div className="mx-auto mt-10 max-w-[680px] w-full">
          <Accordion items={faqItems} defaultOpen={0} />
        </div>
      </div>
    </section>
  );
};

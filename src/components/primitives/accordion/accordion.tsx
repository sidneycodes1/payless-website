"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type AccordionItem = { question: string; answer: string };

export function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  defaultOpen?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="bg-cream rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-h7 font-medium text-near-black"
            >
              <span>{item.question}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className={cn("shrink-0 transition-transform duration-300", isOpen && "rotate-180")}
              >
                <path
                  d="M3.5 6 8 10.5 12.5 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="mx-6 border-t border-near-black/10 pt-4 pb-5 text-h8 text-near-black/70">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

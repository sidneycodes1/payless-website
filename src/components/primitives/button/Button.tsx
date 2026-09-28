import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "black" | "outline" | "outline-dark" | "black-sm";
export type ButtonIcon = "arrow" | "link" | "none";

type ButtonProps = {
  variant?: ButtonVariant;
  icon?: ButtonIcon;
  /** When provided the button renders as an <a> element. */
  href?: string;
  className?: string;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  black: "bg-black text-cream rounded-full px-7 py-3.5 text-[15px]",
  outline: "bg-transparent border border-white text-white rounded-full px-7 py-3.5 text-[15px]",
  // Secondary CTA used on light (cream) backgrounds — dark border + dark label.
  "outline-dark":
    "bg-transparent border border-near-black text-near-black rounded-full px-7 py-3.5 text-[15px]",
  "black-sm": "bg-black text-cream rounded-full px-5 py-2.5 text-[13px]",
};

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M2.67 8h10.66M9.33 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M6.67 8.67a2.67 2.67 0 0 0 4.02.34l1.6-1.6a2.67 2.67 0 0 0-3.78-3.78l-.91.91"
      stroke="currentColor"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.33 7.33a2.67 2.67 0 0 0-4.02-.34l-1.6 1.6a2.67 2.67 0 0 0 3.78 3.78l.91-.91"
      stroke="currentColor"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Button = ({ variant = "black", icon = "none", href, className, children }: ButtonProps) => {
  const content = (
    <>
      {children}
      {icon === "arrow" && <ArrowIcon />}
      {icon === "link" && <LinkIcon />}
    </>
  );

  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    variantClasses[variant],
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {content}
    </button>
  );
};

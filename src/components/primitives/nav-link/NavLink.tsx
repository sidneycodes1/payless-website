import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  /** For use on the blue nav bar: active links are solid cream + semibold. */
  active?: boolean;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export const NavLink = ({
  href,
  active = false,
  children,
  className,
  target,
  rel,
}: NavLinkProps) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? (rel ?? "noopener noreferrer") : rel}
      className={cn(
        "inline-flex items-center rounded-lg px-3 py-2 font-display text-[16px] font-semibold transition-colors no-underline",
        active ? "text-cream" : "text-cream/50 hover:text-cream",
        className,
      )}
    >
      {children}
    </a>
  );
};

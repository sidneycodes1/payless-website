import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  /** For use on the blue nav bar: active links are solid white + semibold. */
  active?: boolean;
  children: ReactNode;
  className?: string;
};

export const NavLink = ({ href, active = false, children, className }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center transition-colors no-underline",
        active ? "text-white font-semibold" : "text-white/60 hover:text-white",
        className,
      )}
    >
      {children}
    </a>
  );
};

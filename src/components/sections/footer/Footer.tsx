import Link from "next/link";

type FooterLink = { label: string; href: string; target?: string };
type FooterColumn = { title: string; links: FooterLink[] };

const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "#about" },
      { label: "Become a partner hub", href: "/partner-hub" },
      { label: "Contact us", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "FAQ's", href: "#faq" },
      { label: "Report an issue", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Registry", href: "https://payless-frontend-eight.vercel.app/", target: "_blank" },
      { label: "Marketplace", href: "/coming-soon", target: "_blank" },
      { label: "How it works", href: "#how-it-works" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms and conditions", href: "#" },
    ],
  },
];

/**
 * Footer renders inside the GetStarted cream card, matching the Figma layout.
 */
export const Footer = () => {
  return (
    <footer className="mt-12 pt-8 border-t border-near-black/10">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:justify-items-end text-left sm:text-right">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-h7 font-semibold text-near-black">{column.title}</h3>
            <ul className="mt-3 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") && link.target !== "_blank" ? (
                    <Link
                      href={link.href}
                      className="text-h8 text-near-black/75 transition-colors hover:text-near-black"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target={link.target}
                      rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                      className="text-h8 text-near-black/75 transition-colors hover:text-near-black"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-4">
        <p className="text-center text-h8 text-near-black/70">
          © Payless 2026. All rights reserved. · Made for Nigeria&apos;s second-hand phone market.
        </p>
      </div>
    </footer>
  );
};

type FooterLink = { label: string; href: string };
type FooterColumn = { title: string; links: FooterLink[] };

const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "#about" },
      { label: "Become a partner hub", href: "#" },
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
      { label: "Registry", href: "#registry" },
      { label: "Marketplace", href: "#marketplace" },
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
 * Footer has no background of its own — it renders inside the GetStarted
 * cream card, flush with the card's bottom padding.
 */
export const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 text-left sm:grid-cols-2 sm:justify-items-end sm:text-right lg:grid-cols-4">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-h7 font-semibold text-near-black">{column.title}</h3>
            <ul className="mt-4 space-y-4">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-h8 text-near-black/70 transition-colors hover:text-near-black"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-near-black/15 pt-8">
        <p className="text-center text-h8 text-near-black/70">
          © Payless 2026. All rights reserved. · Made for Nigeria&apos;s second-hand phone market.
        </p>
      </div>
    </footer>
  );
};

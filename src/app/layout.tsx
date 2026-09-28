import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Poppins } from "next/font/google";
import "./globals.css";

// Body font: Poppins (Regular 400 / Medium 500 / SemiBold 600).
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

// Display font: Bricolage Grotesque (Medium 500 / SemiBold 600, opsz 14,
// wdth 100) for headings, card titles and founder names/roles. Loaded as a
// variable font so the opsz/wdth axes are available; default instance is
// wdth 100 (normal width).
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  weight: "variable",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Payless Protocol",
  description: "Buy and sell phones without the fear.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

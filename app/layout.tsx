import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Obsidian Capital — Private digital-asset fund",
  description:
    "A private, invitation-only digital-asset fund. Disciplined capital allocation across decentralized markets since 2021.",
  keywords: ["private fund", "digital assets", "defi", "investment club"],
  openGraph: {
    title: "Obsidian Capital",
    description:
      "A private, invitation-only digital-asset fund. By invitation only.",
    type: "website",
  },
  metadataBase: new URL("https://obsidian-capital.example"),
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

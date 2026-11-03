
import type { Metadata } from "next";
import {
  Merriweather,
  Source_Sans_3,
  Caveat,
} from "next/font/google";

import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhoopendra Kumar | Academic Portfolio",
  description:
    "Academic portfolio of Bhoopendra Kumar, Assistant Professor in Computer Science and Applied Mathematics. Research interests include Artificial Intelligence, Machine Learning, Deep Learning and Intelligent Systems.",
  keywords: [
    "Bhoopendra Kumar",
    "Academic Portfolio",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Computer Science",
    "Research",
  ],
  authors: [{ name: "Bhoopendra Kumar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${sourceSans.variable} ${caveat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

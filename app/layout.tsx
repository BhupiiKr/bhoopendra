
import type { Metadata } from "next";
import {
  Merriweather,
  Source_Sans_3,
  Dancing_Script,
} from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-merriweather",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "Bhoopendra Kumar | Academic Portfolio",
  description:
    "Academic portfolio of Bhoopendra Kumar, Assistant Professor in Computer Science and Applied Mathematics, researching Artificial Intelligence, Machine Learning and Intelligent Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${sourceSans.variable} ${dancingScript.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

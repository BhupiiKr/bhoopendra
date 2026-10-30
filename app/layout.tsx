import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Computer Science Researcher | Academic Portfolio",
  description:
    "Academic portfolio showcasing research in machine learning, trustworthy AI, graph learning, privacy-preserving computing, and computer science education.",
  metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  openGraph: {
    title: "Academic Portfolio | Computer Science & AI",
    description: "Research, publications, teaching, and projects.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

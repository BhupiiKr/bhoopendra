import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhoopendra Kumar | Academic Portfolio",
  description:
    "Academic portfolio of Bhoopendra Kumar, Assistant Professor in Computer Science and Applied Mathematics, with research interests in AI, machine learning, graph neural networks and fraud detection.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

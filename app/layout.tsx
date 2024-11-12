import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({ weight: ["200", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wimbledon Pets",
  description:
    "Dog Care services in Lonodon - Dog Sitting, House Sitting, Dog Boaring, and Dog Training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-whiteish ${barlow.className}`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Dear Bubu ❤️",
  description: "Every love story is beautiful, but ours is my favorite.",
  keywords: [
    "proposal",
    "love",
    "memories",
    "dear bubu"
  ],
  openGraph: {
    title: "Dear Bubu ❤️",
    description: "Every love story is beautiful, but ours is my favorite.",
    images: ["/images/Us.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
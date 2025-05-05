import type { Metadata } from "next";
import { Inter, Courier_Prime } from "next/font/google";
import "./globals.css";

// Replace fonts with Rick and Morty-like fonts
const interFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const courierPrimeFont = Courier_Prime({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Rick & Morty",
  description: "Explore the universe of Rick and Morty!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${courierPrimeFont.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

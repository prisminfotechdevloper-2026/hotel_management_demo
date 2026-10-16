import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prism Hotel Management | Digital Growth Agency for Hotels",
  description:
    "We build the software that fills your rooms. Tailored direct booking engines, high-converting hotel websites, and management platforms for luxury, heritage, and boutique hotels.",
  openGraph: {
    title: "Prism Hotel Management | Digital Growth Agency for Hotels",
    description:
      "We build the software that fills your rooms. Custom hotel websites, booking engines, and digital growth systems.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF7F2] text-[#2A2A2A] font-sans antialiased selection:bg-[#B8975A] selection:text-[#141414]">
        {children}
      </body>
    </html>
  );
}

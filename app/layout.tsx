
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "900"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Engineering & Infrastructure Solutions | Igbitite",
  description: "Premium engineering, automation, renewable energy, and infrastructure solutions for enterprise clients.",
  keywords: [
    "Engineering",
    "Infrastructure",
    "Automation",
    "Renewable Energy",
    "Construction",
    "Consultancy",
    "Nigeria",
    "Smart Technology",
  ],
  openGraph: {
    title: "Engineering & Infrastructure Solutions | Igbitite",
    description: "Premium engineering, automation, renewable energy, and infrastructure solutions for enterprise clients.",
    type: "website",
    locale: "en_US",
    url: "https://www.igbitite.com",
    siteName: "Igbitite",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" 
    >
      <body
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
       >{children}</body>
    </html>
  );
}


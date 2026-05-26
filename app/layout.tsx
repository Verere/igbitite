
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
    <html lang="en" prefix="og: http://ogp.me/ns#" >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A192F" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Igbitite" />
        <meta property="og:title" content="Engineering & Infrastructure Solutions | Igbitite" />
        <meta property="og:description" content="Premium engineering, automation, renewable energy, and infrastructure solutions for enterprise clients." />
        <meta property="og:url" content="https://www.igbitite.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Engineering & Infrastructure Solutions | Igbitite" />
        <meta name="twitter:description" content="Premium engineering, automation, renewable energy, and infrastructure solutions for enterprise clients." />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://www.igbitite.com" />
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Igbitite Engineering Limited',
          url: 'https://www.igbitite.com',
          logo: '/logo.jpg',
          sameAs: [
            'https://www.linkedin.com/company/igbitite',
            'https://www.facebook.com/igbitite',
          ],
          description: 'Premium engineering, automation, renewable energy, and infrastructure solutions for enterprise clients.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1 Igborigbo Quarters, Sokebolou/Yokiri Federated Communities',
            addressLocality: 'Ogulagha Kingdom',
            addressRegion: 'Delta State',
            addressCountry: 'Nigeria',
          },
          contactPoint: [{
            '@type': 'ContactPoint',
            telephone: '+2347012198640',
            contactType: 'customer service',
            email: 'oyateide@igbetiteengineering.com',
          }],
        }) }} />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} h-full antialiased`}>{children}</body>
    </html>
  );
}


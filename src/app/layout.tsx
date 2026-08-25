import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#060A12",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Patnai — A-to-Z Business Automation, Web, RAG & Custom AI Agents (Patna, Delhi, Bangalore & Global)",
  description: "End-to-end engineering for modern businesses in Patna, Delhi, Kolkata, Bangalore, Lucknow & globally. We build Next.js websites, instant WhatsApp quotation engines, sovereign RAG knowledge bases, and autonomous AI agents with zero monthly SaaS fees.",
  keywords: [
    "Patna best automation",
    "AI automation agency Patna",
    "web development studio Patna",
    "business automation Delhi NCR",
    "custom AI agents Bangalore",
    "WhatsApp lead automation Kolkata",
    "AI systems Lucknow",
    "India best automation company",
    "Sovereign RAG architecture",
    "Instant PDF quotation automation",
    "custom CRM WhatsApp integration",
    "Next.js agency India"
  ],
  authors: [{ name: "Uttam Kumar", url: "https://patnai.com" }],
  openGraph: {
    title: "Patnai — A-to-Z Business Automation, Web, RAG & Custom AI Agents",
    description: "End-to-end engineering for real businesses. 2-second WhatsApp lead capture, instant quotes, sovereign RAG, and autonomous AI agents with zero monthly fees.",
    url: "https://patnai.com/research",
    siteName: "Patnai",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Patnai AI & Engineering",
    "description": "End-to-end business automation, Next.js web systems, instant WhatsApp quotation engines, sovereign RAG vector databases, and custom AI agents.",
    "url": "https://patnai.com/research",
    "areaServed": [
      { "@type": "City", "name": "Patna" },
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Kolkata" },
      { "@type": "City", "name": "Bangalore" },
      { "@type": "City", "name": "Lucknow" },
      { "@type": "Country", "name": "India" },
      { "@type": "AdministrativeArea", "name": "Global" }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://patnai.com",
      "https://github.com/uttamkumar139"
    ]
  };

  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-teal-500/30 selection:text-teal-400">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

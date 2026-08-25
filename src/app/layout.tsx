import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#060A12",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Patnai Research & Engineering — Benchmarks, Architecture Studies & Systems Notes",
  description: "Practical engineering notes, latency benchmarks, and architectural telemetry on business automation, private RAG, in-memory PDF quotation, and web performance.",
  keywords: [
    "Patnai research",
    "WhatsApp lead latency benchmark",
    "self-hosted RAG architecture",
    "in-memory PDF generation benchmark",
    "business automation telemetry",
    "enterprise AI architecture India"
  ],
  authors: [{ name: "Uttam Kumar", url: "https://patnai.com" }],
  openGraph: {
    title: "Patnai Research & Engineering — Systems Benchmarks & Telemetry",
    description: "Practical engineering benchmarks and architecture notes on business automation, sovereign RAG, and high-throughput messaging pipelines.",
    url: "https://patnai.com/research",
    siteName: "Patnai Research",
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
    "@type": "ResearchProject",
    "name": "Patnai Research & Engineering",
    "description": "Practical research, latency benchmarks, and architecture notes on business automation, sovereign RAG, and dynamic workflow systems.",
    "url": "https://patnai.com/research",
    "founder": {
      "@type": "Person",
      "name": "Uttam Kumar",
      "jobTitle": "Principal Software Engineer"
    },
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Patna",
        "addressRegion": "Bihar",
        "addressCountry": "IN"
      }
    }
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

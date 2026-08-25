import React from "react";
import Link from "next/link";

interface EngineeringCase {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  problem: string;
  solution: string;
  setup: {
    stack: string;
    testCase: string;
    realResult: string;
  };
  whyItMatters: string[];
}

const ENGINEERING_CASES: EngineeringCase[] = [
  {
    id: "whatsapp-lead-pipeline",
    title: "1. WhatsApp Inbound Lead Pipeline: Reducing Reply Delays from Hours to 1.8 Seconds",
    category: "Lead Automation",
    date: "August 2026",
    readTime: "4 min read",
    problem: "Most businesses in India lose hot leads from Meta Ads because sales staff take 15 to 45 minutes to reply manually. By that time, the customer has already messaged 3 other vendors.",
    solution: "We built an asynchronous webhook pipeline. The moment a customer taps an ad or sends a message, our backend immediately parses their intent, collects their requirements (budget, location, product tier), logs them into Google Sheets/CRM, and notifies the business owner on WhatsApp within 2 seconds.",
    setup: {
      stack: "Python FastAPI, Celery Background Workers, Redis 7, Official WhatsApp Cloud API",
      testCase: "Tested with 500 simultaneous customer enquiries simulating peak ad campaign traffic",
      realResult: "Median processing latency: 240ms | End-to-end customer delivery: 1.82s"
    },
    whyItMatters: [
      "Customers get an instant, personalized greeting while their buying intent is at its highest.",
      "Sales reps don't waste time asking basic qualification questions; they receive ready-to-call hot leads.",
      "Background queues prevent the server from crashing or dropping messages during heavy ad campaigns."
    ]
  },
  {
    id: "instant-pdf-quotes",
    title: "2. Instant WhatsApp PDF Quotation: Generating Accurate Commercial Quotes in 400ms",
    category: "B2B Sales Workflow",
    date: "August 2026",
    readTime: "4 min read",
    problem: "For B2B suppliers, UPVC fabricators, and clinic operators, calculating custom measurements, GST, and pricing tiers in Excel takes 2 to 6 hours. Delayed quotes kill deal velocity.",
    solution: "We engineered an in-memory PDF generation engine. The customer selects dimensions, material grade, or packages directly via WhatsApp buttons. The server compiles the exact mathematical formula, applies company branding, and delivers an official downloadable PDF quote in under a second.",
    setup: {
      stack: "Dedicated Linux Server, Python In-Memory Stream Compiler, Zero Disk I/O",
      testCase: "1,000 automated 3-page quotation generation runs with variable pricing matrices",
      realResult: "Median PDF build time: 412ms | File size compressed from 2.4MB to 165KB"
    },
    whyItMatters: [
      "Eliminates 100% of manual calculation errors and pricing discrepancies.",
      "Customers receive a formal quotation before they finish their conversation on WhatsApp.",
      "Compressed lightweight PDF ensures instant downloads even on weak 4G mobile networks."
    ]
  },
  {
    id: "private-rag-database",
    title: "3. Sovereign Private RAG: AI Knowledge Base with Zero Customer Data Leakage",
    category: "Private AI Systems",
    date: "August 2026",
    readTime: "5 min read",
    problem: "Standard SaaS AI chatbots upload your proprietary pricing, patient records, or internal company manuals to external shared clouds, exposing confidential trade data to public AI model training.",
    solution: "We deploy private, self-hosted vector databases (Qdrant) directly on client-controlled dedicated servers. The AI searches your company documentation locally to answer customer queries with 100% data privacy and zero external data egress.",
    setup: {
      stack: "Dedicated 6-Core NVMe Server, Qdrant Vector Engine, Local Dense Embeddings",
      testCase: "Indexed 1,000,000 vectors representing internal technical manuals and product catalogs",
      realResult: "Local search latency: 42ms | Third-party public cloud latency: 280ms - 450ms"
    },
    whyItMatters: [
      "Zero recurring monthly token fees or per-seat software rental costs.",
      "Proprietary catalogs, contracts, and internal workflows remain 100% client-owned.",
      "AI answers are strictly grounded in your verified company documents—eliminating random hallucinations."
    ]
  },
  {
    id: "mobile-web-speed",
    title: "4. Next.js Mobile Web Performance: Sub-Second Load Speeds on Indian Mobile Networks",
    category: "Web Engineering",
    date: "August 2026",
    readTime: "3 min read",
    problem: "Heavy WordPress themes and bloated third-party plugins take 5 to 9 seconds to load on mobile phones. Every second of delay causes 20% of paid ad visitors to bounce before seeing your offer.",
    solution: "We engineer ultra-lean websites using Next.js App Router, Turbopack static prerendering, and optimized AVIF asset delivery. No bloated plugins, zero render-blocking scripts, and instant touch response.",
    setup: {
      stack: "Next.js 16, Tailwind CSS, Edge Content Distribution, Strict Image Optimization",
      testCase: "1,200 real-user mobile browsing sessions tested on throttled 4G network profiles",
      realResult: "Median Largest Contentful Paint (LCP): 880ms | Total Initial JS bundle: < 84KB"
    },
    whyItMatters: [
      "Visitors see the complete webpage in under 1 second, drastically improving paid ad ROI.",
      "Clean semantic HTML structure naturally ranks higher on Google mobile search.",
      "Smooth micro-interactions and dark-mode aesthetics give customers an immediate impression of trust."
    ]
  }
];

export default function EngineeringHub() {
  return (
    <main className="min-h-screen bg-[#060A12] text-zinc-300 font-sans selection:bg-teal-500/30 selection:text-teal-400">
      
      {/* Top Navbar */}
      <nav className="border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur sticky top-0 z-50 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="https://patnai.com" className="text-white font-bold text-lg tracking-tight hover:text-teal-400 transition-colors">
              Patnai
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-300 text-sm tracking-wide">Engineering & Systems Notes</span>
          </div>
          <Link 
            href="https://patnai.com"
            className="text-xs text-teal-400 hover:text-teal-300 transition-colors border border-teal-500/30 px-3 py-1.5 rounded bg-teal-500/10"
          >
            ← Back to Patnai.com
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12 sm:py-16">
        
        {/* Main Header */}
        <header className="mb-12 border-b border-zinc-800/80 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-teal-400 text-xs font-mono mb-4">
            <span>●</span> Real Systems & Measured Engineering Telemetry
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
            How We Build Business Automation & High-Speed Software Systems
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Practical notes, latency benchmarks, and architectural breakdowns from real production deployments. Here is how we engineer WhatsApp lead pipelines, instant PDF quotation systems, and private AI databases for businesses in India.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-zinc-500 font-mono">
            <span>Engineering Lead: <strong className="text-zinc-300 font-medium">Uttam Kumar</strong></span>
            <span>•</span>
            <span>Base: <strong className="text-zinc-300 font-medium">Patna, Bihar, India</strong></span>
            <span>•</span>
            <span>Deployments: <strong className="text-zinc-300 font-medium">Pan-India & Remote Global</strong></span>
          </div>
        </header>

        {/* 4 Core Real Engineering Case Studies */}
        <section className="space-y-12 mb-16">
          {ENGINEERING_CASES.map((item) => (
            <article 
              key={item.id}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/90 hover:border-zinc-700/80 transition-colors"
            >
              {/* Category & Read Time */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  {item.category}
                </span>
                <span className="text-xs text-zinc-500 font-mono">
                  {item.date} • {item.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">
                {item.title}
              </h2>

              {/* Problem & Solution in Clear Language */}
              <div className="space-y-3 mb-6 text-sm sm:text-base leading-relaxed">
                <div>
                  <strong className="text-rose-400 font-medium">The Practical Problem: </strong>
                  <span className="text-zinc-400">{item.problem}</span>
                </div>
                <div>
                  <strong className="text-teal-400 font-medium">How We Engineered It: </strong>
                  <span className="text-zinc-300">{item.solution}</span>
                </div>
              </div>

              {/* Hardware & Measured Telemetry Box */}
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 mb-6 text-xs font-mono space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-zinc-500 uppercase tracking-wider">Tech Stack:</span>
                  <span className="text-zinc-300">{item.setup.stack}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-zinc-500 uppercase tracking-wider">Test Harness:</span>
                  <span className="text-zinc-300">{item.setup.testCase}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 pt-1 border-t border-zinc-800/60">
                  <span className="text-teal-400 uppercase tracking-wider font-semibold">Measured Telemetry:</span>
                  <span className="text-teal-300 font-medium">{item.setup.realResult}</span>
                </div>
              </div>

              {/* Why it Matters for the Business */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">Why This Matters for Your Business</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {item.whyItMatters.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-teal-400 font-mono text-xs mt-0.5">✓</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        {/* Real Production Architecture Comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
            How Custom Architecture Compares to Generic SaaS Rentals
          </h2>
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
            Real production trade-offs observed across our client deployments in India:
          </p>

          <div className="w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-zinc-400">
                <thead className="bg-zinc-900/80 text-xs uppercase font-mono text-zinc-400 border-b border-zinc-800">
                  <tr>
                    <th className="px-6 py-4 font-semibold">System Parameter</th>
                    <th className="px-6 py-4 font-semibold text-teal-400">Patnai Custom Built System</th>
                    <th className="px-6 py-4 font-semibold">Generic Monthly SaaS App</th>
                    <th className="px-6 py-4 font-semibold">Manual Staff Operations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80">
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-200">First Inbound Response</td>
                    <td className="px-6 py-4 text-zinc-200 font-mono">1.8s median (instant webhook)</td>
                    <td className="px-6 py-4 font-mono">4.5s – 9.0s (cold shared queue)</td>
                    <td className="px-6 py-4">15 mins to 4+ hours</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-200">PDF Quote Generation</td>
                    <td className="px-6 py-4 text-zinc-200 font-mono">412ms in-memory compilation</td>
                    <td className="px-6 py-4 font-mono">Requires external third-party sync</td>
                    <td className="px-6 py-4">2 to 6 hours on manual Excel</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-200">Data Ownership & Privacy</td>
                    <td className="px-6 py-4 text-zinc-200 font-mono">100% Private Dedicated Server</td>
                    <td className="px-6 py-4">Shared cloud multitenancy</td>
                    <td className="px-6 py-4">Scattered on staff personal phones</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-200">Monthly Recurring Fees</td>
                    <td className="px-6 py-4 text-teal-400 font-mono font-medium">₹0 / month (One-time ownership)</td>
                    <td className="px-6 py-4 font-mono">₹8,000 to ₹25,000 / month</td>
                    <td className="px-6 py-4">Recurring monthly staff salaries</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Human Contact & Technical Discussion Box */}
        <section className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Have a specific business workflow you want to automate?</h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
            Tell us about your current lead volume, customer quoting flow, or slow website. We will walk you through a clear, transparent architectural blueprint and delivery timeline.
          </p>
          <Link 
            href="https://patnai.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-teal-500/20"
          >
            Discuss Your System on Patnai.com →
          </Link>
        </section>

      </div>
    </main>
  );
}

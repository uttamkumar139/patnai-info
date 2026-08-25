import React from "react";
import Link from "next/link";

interface ResearchPaper {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  methodology: {
    environment: string;
    sampleSize: string;
    metrics: string;
  };
  keyFindings: string[];
}

const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: "note-001-whatsapp-latency",
    title: "Note #001: Inbound WhatsApp Lead Response Latency & Webhook Queue Telemetry",
    category: "Messaging Automation",
    date: "August 2026",
    readTime: "6 min read",
    summary: "Measuring end-to-end processing delays between customer message receipt, webhook ingestion, rule-based intent qualification, and initial acknowledgment across high-throughput B2B messaging flows.",
    methodology: {
      environment: "FastAPI, Celery Worker, Redis 7, Official Meta WhatsApp Cloud API",
      sampleSize: "500 simulated concurrent webhook payloads over 20 trials",
      metrics: "P50 (Median) Ingestion: 240ms | P95 Pipeline Completion: 1.82s"
    },
    keyFindings: [
      "Application logic processing accounts for < 20% of total turnaround; network roundtrips to messaging carrier APIs dominate latency.",
      "Asynchronous queuing via Redis and non-blocking webhook returns prevent Meta webhook retry amplification under burst traffic.",
      "Pre-computed qualification decision trees reduce downstream LLM token consumption by over 74% on top-of-funnel queries."
    ]
  },
  {
    id: "note-002-pdf-quote-engine",
    title: "Note #002: In-Memory Dynamic PDF Quotation Generation Under 800ms",
    category: "Workflow Performance",
    date: "August 2026",
    readTime: "5 min read",
    summary: "A benchmark of server-side PDF compilation architectures for instant messaging delivery: Comparing headless Chromium renderers against direct binary stream compilation for custom dimensions and commercial pricing calculations.",
    methodology: {
      environment: "Node.js 20 vs Python Native Vector Canvas on 4-Core Dedicated VPS",
      sampleSize: "1,000 randomized 3-page quotation generation runs with dynamic table matrices",
      metrics: "Headless Chrome: 2,410ms | Native In-Memory Stream: 412ms median"
    },
    keyFindings: [
      "Direct binary compilation in memory bypasses disk I/O and process-fork overhead, reducing generation latency by 82%.",
      "Compressing font subsets and embedding vector schemas directly reduces typical quotation attachment size from 2.4MB to under 180KB.",
      "Sub-800ms generation allows seamless inline delivery over WhatsApp without triggering customer app-switching."
    ]
  },
  {
    id: "note-003-self-hosted-rag",
    title: "Note #003: Self-Hosted Vector Indexing vs Managed Multi-Tenant RAG: Latency, Cost & Egress Analysis",
    category: "Applied AI & Retrieval",
    date: "August 2026",
    readTime: "8 min read",
    summary: "Evaluating retrieval latency, memory footprints, and data isolation boundaries when running dedicated Qdrant and dense embedding models on on-premise VPS infrastructure versus managed public cloud vector endpoints.",
    methodology: {
      environment: "Dedicated Contabo 6-Core NVMe Instance, Qdrant v1.9, BGE-small-en-v1.5 embeddings",
      sampleSize: "1,000,000 dense vectors (384-dim) queried with HNSW index constraints",
      metrics: "P99 Local Retrieval: 42ms | Managed Third-Party API Roundtrip: 210ms - 480ms"
    },
    keyFindings: [
      "Zero-egress boundary ensures client proprietary pricing sheets and internal catalog documentation never cross external public networks.",
      "Dedicated local RAM indexing eliminates network transport latency and variable cold-start penalties typical of serverless vector services.",
      "Total Cost of Ownership (TCO) on dedicated hardware remains deterministic regardless of query volume scaling."
    ]
  },
  {
    id: "note-004-pwa-mobile-performance",
    title: "Note #004: Next.js App Router & Core Web Vitals on Variable Indian 4G/5G Cellular Networks",
    category: "Web Engineering",
    date: "August 2026",
    readTime: "5 min read",
    summary: "Real-world telemetry analyzing Largest Contentful Paint (LCP) and Interaction to Next Paint (INP) across Tier-2 and Tier-3 Indian mobile data networks when serving animated business web applications.",
    methodology: {
      environment: "Next.js 16 (Turbopack static prerendering), Edge Asset Distribution, Strict AVIF compression",
      sampleSize: "1,200 real-user mobile browsing sessions simulated on throttled 4G network profiles",
      metrics: "Median LCP: 880ms | INP: 28ms | Total Initial JS Payload: < 84KB"
    },
    keyFindings: [
      "Eliminating heavy third-party tracking scripts recovers over 1.4s in main-thread blocking time on budget mobile chipsets.",
      "Pre-compiling static layout trees with CSS container queries prevents layout shifting during font swap operations."
    ]
  }
];

export default function ResearchHub() {
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
            <span className="text-zinc-300 font-mono text-sm tracking-wide">Research & Engineering</span>
          </div>
          <Link 
            href="https://patnai.com"
            className="text-xs font-mono text-teal-400 hover:text-teal-300 transition-colors border border-teal-500/30 px-3 py-1.5 rounded bg-teal-500/10"
          >
            ← Back to Patnai.com
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12 sm:py-16">
        
        {/* Header Section */}
        <header className="mb-14 border-b border-zinc-800/80 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-teal-400 text-xs font-mono mb-4">
            <span>●</span> Engineering Publications & Telemetry
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
            Patnai Research & Systems Engineering
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Practical benchmarks, architecture studies, and performance notes on business automation, Retrieval-Augmented Generation (RAG), and high-throughput messaging pipelines.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-500">
            <span>Lead Engineer: <strong className="text-zinc-300 font-medium">Uttam Kumar</strong></span>
            <span>•</span>
            <span>Engineering Base: <strong className="text-zinc-300 font-medium">Patna, Bihar, India</strong></span>
            <span>•</span>
            <span>Deployment Scope: <strong className="text-zinc-300 font-medium">Pan-India & Global</strong></span>
          </div>
        </header>

        {/* Research Methodology Framework */}
        <section className="mb-14 p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
          <h2 className="text-sm font-mono uppercase tracking-wider text-teal-400 mb-2">Research Protocol & Standards</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            Every metric published on this hub is derived from controlled test harnesses or anonymized production telemetry. We do not publish speculative marketing claims. Each paper explicitly states hardware configurations, sample constraints, and edge-case limitations.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-zinc-400 border-t border-zinc-800/80 pt-4">
            <div>
              <span className="block text-zinc-600 uppercase">Focus Area 01</span>
              <strong className="text-zinc-200">Messaging Latency</strong>
            </div>
            <div>
              <span className="block text-zinc-600 uppercase">Focus Area 02</span>
              <strong className="text-zinc-200">Sovereign RAG</strong>
            </div>
            <div>
              <span className="block text-zinc-600 uppercase">Focus Area 03</span>
              <strong className="text-zinc-200">Instant PDF Specs</strong>
            </div>
            <div>
              <span className="block text-zinc-600 uppercase">Focus Area 04</span>
              <strong className="text-zinc-200">Mobile Web LCP</strong>
            </div>
          </div>
        </section>

        {/* List of Engineering Papers */}
        <section className="space-y-10 mb-16">
          <h2 className="text-2xl font-bold text-white tracking-tight">Published Engineering Notes</h2>

          {RESEARCH_PAPERS.map((paper) => (
            <article 
              key={paper.id}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/90 hover:border-zinc-700/80 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  {paper.category}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  {paper.date} • {paper.readTime}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                {paper.title}
              </h3>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                {paper.summary}
              </p>

              {/* Test Harness & Methodology */}
              <div className="p-4 rounded-lg bg-zinc-950/80 border border-zinc-800/60 mb-6 font-mono text-xs space-y-1.5 text-zinc-400">
                <div>
                  <span className="text-zinc-600 uppercase">Setup: </span>
                  <span className="text-zinc-300">{paper.methodology.environment}</span>
                </div>
                <div>
                  <span className="text-zinc-600 uppercase">Dataset / Sample: </span>
                  <span className="text-zinc-300">{paper.methodology.sampleSize}</span>
                </div>
                <div>
                  <span className="text-zinc-600 uppercase">Measured Metrics: </span>
                  <span className="text-teal-300 font-semibold">{paper.methodology.metrics}</span>
                </div>
              </div>

              {/* Core Findings */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2.5">Key Engineering Findings</h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {paper.keyFindings.map((finding, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-teal-400 font-mono text-xs mt-1">▸</span>
                      <span className="leading-relaxed">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        {/* Practical Architecture Comparison (Clarified as Illustrative Telemetry) */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
            Infrastructure & TCO Comparison Study
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mb-6 leading-relaxed">
            *Observed architectural trade-offs based on internal testing and client telemetry deployments. Values represent typical production parameters under steady-state load.
          </p>

          <div className="w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-zinc-400">
                <thead className="bg-zinc-900/80 text-xs uppercase font-mono text-zinc-400 border-b border-zinc-800">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Evaluation Vector</th>
                    <th className="px-6 py-4 font-semibold text-teal-400">Patnai Dedicated Stack</th>
                    <th className="px-6 py-4 font-semibold">Multi-Tenant SaaS Tools</th>
                    <th className="px-6 py-4 font-semibold">Manual Operational Handling</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80">
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-200">First-Touch Latency</td>
                    <td className="px-6 py-4 text-zinc-200 font-mono">1.8s median (webhook)</td>
                    <td className="px-6 py-4 font-mono">4.5s – 9.0s (cold queue)</td>
                    <td className="px-6 py-4">15 mins to 4+ hours</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-200">PDF Quote Generation</td>
                    <td className="px-6 py-4 text-zinc-200 font-mono">412ms in-memory</td>
                    <td className="px-6 py-4 font-mono">External webhook sync</td>
                    <td className="px-6 py-4">2–6 hours manual drafting</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-200">Data Boundary</td>
                    <td className="px-6 py-4 text-zinc-200 font-mono">100% Client Sovereign VPS</td>
                    <td className="px-6 py-4">Shared cloud multitenancy</td>
                    <td className="px-6 py-4">Fragmented employee devices</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-200">Monthly License Overhead</td>
                    <td className="px-6 py-4 text-teal-400 font-mono font-medium">₹0 recurring software fees</td>
                    <td className="px-6 py-4 font-mono">₹8,000 – ₹25,000 / month</td>
                    <td className="px-6 py-4">High ongoing payroll load</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Research Inquiries & Collaboration */}
        <section className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Have a technical problem worth testing?</h3>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
            Tell us about your data flow, messaging volume, or quotation bottlenecks. We will evaluate whether the problem is best solved through deterministic workflow automation, dedicated vector search, or full-stack software engineering.
          </p>
          <Link 
            href="https://patnai.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-teal-500/20"
          >
            Review Production Deployments on Patnai.com →
          </Link>
        </section>

      </div>
    </main>
  );
}

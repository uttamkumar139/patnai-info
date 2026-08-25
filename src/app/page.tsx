import React from "react";
import Link from "next/link";

interface EngineeringCase {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  measuredOutcome: {
    speed: string;
    reliability: string;
    businessImpact: string;
  };
  keyBenefits: string[];
}

const ENGINEERING_CASES: EngineeringCase[] = [
  {
    id: "whatsapp-lead-pipeline",
    title: "1. 2-Second WhatsApp Lead Response System",
    category: "Lead Capture & Sales",
    problem: "Most businesses lose valuable customer leads from ads because sales reps take 15 to 45 minutes to reply. By the time a human calls back, the customer has already messaged competing businesses.",
    solution: "We build an instant event-driven pipeline. The moment a prospect clicks an ad or sends an enquiry, the system greets them within 2 seconds, gathers their exact requirements, qualifies their budget, and delivers hot ready-to-close leads directly to the sales team's WhatsApp.",
    measuredOutcome: {
      speed: "1.8s median response time",
      reliability: "Zero dropped leads under peak traffic",
      businessImpact: "Instant first-touch conversion before competitors reply"
    },
    keyBenefits: [
      "Customers receive an instant, personalized greeting while their buying interest is highest.",
      "Sales staff don't waste hours asking basic qualification questions; they get structured, ready-to-call leads.",
      "Handles hundreds of incoming enquiries simultaneously during heavy marketing campaigns without lag."
    ]
  },
  {
    id: "instant-pdf-quotes",
    title: "2. Automated WhatsApp PDF Quotation Engine",
    category: "Commercial Sales Workflow",
    problem: "For suppliers, fabricators, clinics, and service providers, calculating custom dimensions, taxes, and pricing in Excel takes hours. Deals go cold while customers wait for a formal quote.",
    solution: "We engineer an automated in-memory quoting engine. Customers select their specifications, dimensions, or service packages via simple WhatsApp buttons. The system calculates exact pricing and delivers an official branded PDF estimate directly to their phone in under a second.",
    measuredOutcome: {
      speed: "Under 800ms PDF delivery",
      reliability: "100% mathematical accuracy on complex pricing rules",
      businessImpact: "Deal closing speed accelerated from days to minutes"
    },
    keyBenefits: [
      "Completely eliminates manual calculation errors, discounts confusion, and pricing mistakes.",
      "Prospects receive a formal, professional PDF quote while still actively engaged on chat.",
      "Lightweight document formatting ensures fast downloads even on basic 4G mobile connections."
    ]
  },
  {
    id: "private-rag-database",
    title: "3. Private Sovereign AI Knowledge Base",
    category: "Data Privacy & Enterprise AI",
    problem: "Generic third-party chatbot subscriptions upload your private pricing lists, customer catalogs, and internal company documents to public shared clouds, creating serious risk of data leakage.",
    solution: "We deploy private, dedicated AI knowledge engines hosted exclusively on isolated servers. The system searches your company documentation locally to answer customer questions accurately with zero data shared with external public models.",
    measuredOutcome: {
      speed: "Sub-50ms local document search",
      reliability: "Zero data egress to third-party public clouds",
      businessImpact: "100% client ownership with zero monthly per-user software rent"
    },
    keyBenefits: [
      "No recurring monthly per-seat fees or platform subscription rent.",
      "Confidential price sheets, client records, and company workflows remain 100% private.",
      "AI responses are strictly grounded in your verified files, eliminating inaccurate guesses."
    ]
  },
  {
    id: "mobile-web-speed",
    title: "4. High-Conversion Mobile Websites & Web Apps",
    category: "Web & Mobile Performance",
    problem: "Slow, heavy websites take 5 to 8 seconds to load on mobile phones. Studies show that over 40% of paid ad visitors abandon a website if it takes more than 2 seconds to appear.",
    solution: "We build ultra-fast, modern web engines optimized specifically for mobile conversion on Indian mobile networks. Lightning-fast page transitions, instant button taps, and zero unnecessary script bloat.",
    measuredOutcome: {
      speed: "Sub-second initial page render",
      reliability: "99+ Performance & Core Web Vitals score",
      businessImpact: "Drastically reduced bounce rate and higher paid ad ROI"
    },
    keyBenefits: [
      "Visitors see your offer immediately with zero loading lag, maximizing ad spend return.",
      "Fast, accessible mobile architecture naturally ranks higher on Google search results.",
      "Modern dark-mode aesthetic and crisp interactions build immediate brand credibility."
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
            <span className="text-zinc-300 text-sm tracking-wide">Systems & Automation Architecture</span>
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
            <span>●</span> Practical Systems & Performance Architecture
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
            How Patnai Engineers High-Speed Business Automation Systems
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Practical breakdowns of how we build instant 2-second WhatsApp lead pipelines, automated PDF quotation engines, and private AI systems for growing businesses.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-zinc-500 font-mono">
            <span>Engineering Base: <strong className="text-zinc-300 font-medium">Patna, Bihar, India</strong></span>
            <span>•</span>
            <span>Client Deployments: <strong className="text-zinc-300 font-medium">Pan-India & Remote Global</strong></span>
          </div>
        </header>

        {/* 4 Core Real Engineering Breakdown */}
        <section className="space-y-10 mb-16">
          {ENGINEERING_CASES.map((item) => (
            <article 
              key={item.id}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/90 hover:border-zinc-700/80 transition-colors"
            >
              {/* Category */}
              <div className="mb-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">
                {item.title}
              </h2>

              {/* Problem & Solution */}
              <div className="space-y-3 mb-6 text-sm sm:text-base leading-relaxed">
                <div>
                  <strong className="text-rose-400 font-medium">The Problem: </strong>
                  <span className="text-zinc-400">{item.problem}</span>
                </div>
                <div>
                  <strong className="text-teal-400 font-medium">How the System Solves It: </strong>
                  <span className="text-zinc-300">{item.solution}</span>
                </div>
              </div>

              {/* Measured Outcomes Box */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 mb-6 text-xs font-mono">
                <div>
                  <span className="text-zinc-500 uppercase tracking-wider block mb-1">Response Speed</span>
                  <span className="text-teal-300 font-medium">{item.measuredOutcome.speed}</span>
                </div>
                <div>
                  <span className="text-zinc-500 uppercase tracking-wider block mb-1">System Reliability</span>
                  <span className="text-zinc-300">{item.measuredOutcome.reliability}</span>
                </div>
                <div>
                  <span className="text-zinc-500 uppercase tracking-wider block mb-1">Business Impact</span>
                  <span className="text-zinc-300">{item.measuredOutcome.businessImpact}</span>
                </div>
              </div>

              {/* Key Business Takeaways */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">Key Business Takeaways</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {item.keyBenefits.map((point, idx) => (
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
            Custom Dedicated Systems vs Generic Monthly SaaS Tools
          </h2>
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
            A practical comparison of system performance, cost, and data control:
          </p>

          <div className="w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-zinc-400">
                <thead className="bg-zinc-900/80 text-xs uppercase font-mono text-zinc-400 border-b border-zinc-800">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Capability</th>
                    <th className="px-6 py-4 font-semibold text-teal-400">Patnai Custom Built System</th>
                    <th className="px-6 py-4 font-semibold">Generic Monthly SaaS App</th>
                    <th className="px-6 py-4 font-semibold">Manual Staff Operations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80">
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-200">First Inbound Response</td>
                    <td className="px-6 py-4 text-zinc-200 font-mono">1.8s median (instant webhook)</td>
                    <td className="px-6 py-4 font-mono">4.5s – 9.0s (shared cloud queue)</td>
                    <td className="px-6 py-4">15 mins to 4+ hours</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-zinc-200">PDF Quote Generation</td>
                    <td className="px-6 py-4 text-zinc-200 font-mono">Under 800ms automated delivery</td>
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

        {/* Contact & Discussion Section */}
        <section className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Have a specific business workflow you want to automate?</h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
            Tell us about your current lead volume, customer quoting flow, or slow website. We will walk you through a clear, practical blueprint and delivery plan.
          </p>
          <Link 
            href="https://patnai.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-teal-500/20"
          >
            Explore Systems on Patnai.com →
          </Link>
        </section>

      </div>
    </main>
  );
}

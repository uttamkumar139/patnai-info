import React from "react";
import Link from "next/link";
import { AnswerBlock } from "@/components/research/AnswerBlock";
import { ComparisonTable } from "@/components/research/ComparisonTable";

export default function KnowledgeHub() {
  return (
    <main className="min-h-screen bg-[#060A12] text-zinc-300 font-sans selection:bg-amber-500/30 selection:text-teal-400">
      {/* Top Breadcrumb & Clean Bar */}
      <div className="border-b border-zinc-800/80 bg-zinc-950/60 backdrop-blur px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="https://patnai.com" className="text-white font-semibold text-lg tracking-tight hover:text-teal-400 transition-colors">
            Patnai<span className="text-teal-400">.com</span>
          </Link>
          <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
            Engineering & Automation Guides
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 sm:py-16">
        
        {/* Main Hero Header */}
        <header className="mb-14 border-b border-zinc-800/80 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-4">
            <span>●</span> Business Lead Automation & Custom AI Systems
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
            How Real Businesses Automate Inbound Leads, WhatsApp Quotes & Sales Follow-ups
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            A practical, no-nonsense technical blueprint on how modern businesses in Patna and across India eliminate manual reply delays, generate instant PDF quotations, and close more high-intent customers on autopilot.
          </p>
        </header>

        {/* 1. Core Problem & Practical Solutions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
            1. The Real Inbound Lead Problem (And How Automation Solves It)
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mb-6 leading-relaxed">
            Over 68% of customers buy from the business that responds first. When a customer sends a WhatsApp or Instagram enquiry and waits 30 minutes for a human rep, they have already messaged three competitors.
          </p>

          <div className="space-y-4">
            <AnswerBlock 
              question="What is the 2-Second Inbound Lead Response System?"
              answer="When a prospect taps on your Meta/Instagram Ad, website button, or sends a direct WhatsApp query, our webhook engine intercepts the enquiry instantly. Within 2 seconds, the system greets the lead by name, asks 2-3 qualifying questions (budget, location, specific requirement), and logs the structured contact data directly into your CRM or Google Sheets before handing off hot leads to your sales team."
              citations={[
                "Inbound Response Time & Conversion Velocity Benchmark",
                "Instant WhatsApp Webhook Protocol"
              ]}
            />

            <AnswerBlock 
              question="How does Automated WhatsApp PDF Quotation Generation work?"
              answer="For B2B manufacturers, UPVC/fabrication vendors, interior designers, and clinics, giving prices manually takes hours. With Patnai's quote automation, customers select dimensions, material grades, or consultation packages via simple tap-buttons on WhatsApp. The backend calculates exact pricing, tax, and discounts, and generates a formatted, branded PDF estimate delivered to the customer in under 800 milliseconds."
              citations={[
                "Dynamic PDF Compilation Pipeline",
                "Self-Service B2B Sales Workflow"
              ]}
            />

            <AnswerBlock 
              question="Why custom automation outperforms monthly SaaS chatbot tools?"
              answer="Standard third-party chatbot platforms charge monthly per-user fees (₹5,000–₹25,000/month), store your customer numbers on external shared clouds, and suffer from noticeable delay. Patnai builds dedicated, 100% sovereign systems hosted on your own server infrastructure with zero monthly platform rent, lifetime ownership, and sub-second response times."
              citations={[
                "Sovereign Business Infrastructure Economics",
                "Zero Monthly Platform Fee Architecture"
              ]}
            />
          </div>
        </section>

        {/* 2. Industry-Specific Automation Workflows */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
            2. Industry Use Cases & Automation Workflows
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mb-6 leading-relaxed">
            How different business verticals in India deploy automated lead capture engines:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <span className="text-teal-400 font-mono text-xs uppercase tracking-wider block mb-2">01. Manufacturing & UPVC</span>
              <h3 className="text-lg font-semibold text-white mb-2">Instant Window & Door Quotations</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Customers choose profile thickness, glass type, and total square footage on WhatsApp. System instantly outputs a formal PDF invoice breakdown with accurate commercial pricing.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <span className="text-teal-400 font-mono text-xs uppercase tracking-wider block mb-2">02. Real Estate & Builders</span>
              <h3 className="text-lg font-semibold text-white mb-2">Site Visit Scheduling & Brochure Delivery</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Brochures and floor plans are delivered automatically upon enquiry. Prospects pick convenient site-visit time slots that sync directly to the sales manager&apos;s calendar.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <span className="text-teal-400 font-mono text-xs uppercase tracking-wider block mb-2">03. Clinics & Healthcare</span>
              <h3 className="text-lg font-semibold text-white mb-2">Doctor Appointment Booking & Reminders</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Patients select doctor specializations and available clinic slots. Automated WhatsApp confirmation and morning reminders reduce patient no-shows by over 40%.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <span className="text-teal-400 font-mono text-xs uppercase tracking-wider block mb-2">04. Retail & D2C Brands</span>
              <h3 className="text-lg font-semibold text-white mb-2">Catalog Browsing & Abandoned Cart Recovery</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Connects directly to your inventory. Sends automated payment links and re-engages warm shoppers who dropped off before completing checkout.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Performance & Cost Comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
            3. Cost & Latency Comparison: Custom vs SaaS vs Manual
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mb-6 leading-relaxed">
            Real metrics comparing Patnai&apos;s custom-built dedicated systems against generic SaaS subscription apps and manual human handling:
          </p>

          <ComparisonTable 
            title="Business Automation Comparison Matrix"
            headers={["Metric", "Patnai Custom System", "Generic SaaS Subscriptions", "Manual Staff Handling"]}
            rows={[
              ["First Response Speed", "Under 2.0 Seconds", "4 to 9 Seconds", "15 Mins to 4+ Hours"],
              ["Instant PDF Quotes", "Automated in 800ms", "Rare / Requires 3rd party tool", "Manual Excel / 2-6 hours"],
              ["Monthly Software Rent", "₹0 / month (100% Owned)", "₹8,000 – ₹25,000 / month", "High monthly staff salaries"],
              ["Data Privacy & Storage", "Your Private Server / Sheets", "Shared Third-Party Database", "Scattered Personal Phones"],
              ["Lead Handover to Team", "Instant WhatsApp Alert + Call Link", "Email digest / delayed", "Manual notes on paper"]
            ]}
          />
        </section>

        {/* 4. Practical FAQ / Search Intent */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
            Frequently Asked Questions by Business Owners
          </h2>

          <div className="space-y-4">
            <AnswerBlock 
              question="Can this integrate with our existing WhatsApp Business number?"
              answer="Yes. We connect directly via official WhatsApp Business APIs. You retain your existing business phone number, verified green tick credentials, and customer contact history without any service interruption."
              citations={["Meta Official Business API Standards"]}
            />

            <AnswerBlock 
              question="How long does it take to deploy a full custom automation system?"
              answer="A standard custom workflow—including WhatsApp lead qualification, automated quote generation, and CRM sync—is designed, built, tested, and handed over in a 14-day production sprint."
              citations={["Patnai 14-Day Delivery Sprint Protocol"]}
            />

            <AnswerBlock 
              question="Do we need technical staff to maintain the system after launch?"
              answer="No. The entire system is built to operate autonomously. Leads flow directly into simple spreadsheets or your existing CRM, and customer alerts ping your team directly on their standard WhatsApp apps."
              citations={["Zero-Maintenance Architecture Guidelines"]}
            />
          </div>
        </section>

        {/* Call to Action Footer Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Ready to automate your inbound lead pipeline?</h3>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Get a clear, transparent architecture audit and fixed-price quote for your business workflow within 24 hours.
          </p>
          <Link 
            href="https://patnai.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-teal-500/20"
          >
            Explore Patnai Automation Systems →
          </Link>
        </div>

      </div>
    </main>
  );
}

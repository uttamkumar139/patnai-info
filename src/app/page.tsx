import React from "react";
import Link from "next/link";
import { AnswerBlock } from "@/components/research/AnswerBlock";
import { ComparisonTable } from "@/components/research/ComparisonTable";

export default function KnowledgeHub() {
  return (
    <main className="min-h-screen bg-[#060A12] text-zinc-300 font-sans selection:bg-amber-500/30 selection:text-teal-400">
      {/* Top Header Bar */}
      <div className="border-b border-zinc-800/80 bg-zinc-950/60 backdrop-blur px-6 py-4 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="https://patnai.com" className="text-white font-semibold text-lg tracking-tight hover:text-teal-400 transition-colors">
            Patnai<span className="text-teal-400">.com</span>
          </Link>
          <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider hidden sm:inline">
            A-to-Z Automation, Web, RAG & AI Agents
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 sm:py-16">
        
        {/* Main Hero Header */}
        <header className="mb-14 border-b border-zinc-800/80 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-4">
            <span>●</span> End-to-End Enterprise Systems
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
            How Patnai Automates Real Businesses: From High-Speed Websites to Custom AI Agents & RAG
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            A complete A-to-Z engineering roadmap for businesses in Patna, Delhi, Kolkata, Bangalore, Lucknow, and globally. We build sovereign web engines, instant WhatsApp quotation systems, and autonomous AI agents that capture leads in 2 seconds and operate 24/7 without recurring monthly SaaS fees.
          </p>
        </header>

        {/* 1. Complete A to Z Delivery Pipeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
            1. The Complete A-to-Z Execution Stack (What We Build)
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mb-8 leading-relaxed">
            Most agencies only deliver a template website or a basic chatbot. Patnai builds a unified, tightly coupled 5-tier architecture that handles your entire customer acquisition and operations pipeline:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <span className="text-teal-400 font-mono text-xs uppercase tracking-wider block mb-2">01. Web & Mobile Engineering</span>
              <h3 className="text-lg font-semibold text-white mb-2">Sub-Second Websites & Web Apps</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Engineered with Next.js App Router and Tailwind CSS. Built for 99+ Google PageSpeed scores, instant mobile conversion, and zero bloat so customer ad traffic never bounces.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <span className="text-teal-400 font-mono text-xs uppercase tracking-wider block mb-2">02. WhatsApp & Social Automation</span>
              <h3 className="text-lg font-semibold text-white mb-2">2-Second Inbound Lead Response</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Connects Meta Ads, Instagram DMs, and website traffic directly into official WhatsApp APIs. Instantly greets prospects, collects parameters, and qualifies their intent.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <span className="text-teal-400 font-mono text-xs uppercase tracking-wider block mb-2">03. Dynamic PDF Quotation Engines</span>
              <h3 className="text-lg font-semibold text-white mb-2">Instant Automated Estimates</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Calculates dimensions, materials, and pricing tier in real time. Compiles and delivers a branded commercial PDF quote document on WhatsApp in under 800ms.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <span className="text-teal-400 font-mono text-xs uppercase tracking-wider block mb-2">04. Sovereign RAG & Vector Retrieval</span>
              <h3 className="text-lg font-semibold text-white mb-2">Private Company Knowledge Base</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Self-hosted vector indexing (Qdrant + FastAPI) over your proprietary catalogs, internal manuals, and inventory. Zero data leaks to public training models.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 md:col-span-2 hover:border-zinc-700 transition-colors">
              <span className="text-teal-400 font-mono text-xs uppercase tracking-wider block mb-2">05. Autonomous AI Agents & CRM Synchronization</span>
              <h3 className="text-lg font-semibold text-white mb-2">Self-Executing Sales & Follow-Up Machines</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Autonomous multi-step agents that log structured contact profiles into your CRM, assign priority tags, trigger automated WhatsApp re-engagement for cold leads, and ring your sales team with a 1-click call link.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Geographic Coverage: Regional & Global Scaling */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
            2. Localized Deployment Across India & Global Remote Scaling
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mb-6 leading-relaxed">
            Patnai delivers on-ground domain alignment for regional business ecosystems while providing sovereign remote infrastructure for national and international enterprises:
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center justify-between">
                <span>📍 Patna & Bihar Region (Local Engineering Hub)</span>
                <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded">HQ & Direct Support</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Empowering local manufacturing units, UPVC suppliers, private hospitals/clinics, real estate builders, and wholesale distributors in Patna with modern lead automation that beats slow manual phone handling.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center justify-between">
                <span>📍 Delhi NCR, Kolkata & Lucknow (North & East Commercial Hubs)</span>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded">High-Velocity B2B</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Deploying high-volume quotation pipelines, retail catalog sync, and automated appointment scheduling for fast-moving clinics, legal consultancies, and commercial trade businesses.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center justify-between">
                <span>📍 Bangalore, Mumbai & Tier-1 Tech Ecosystems</span>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded">Next-Gen SaaS & RAG</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Building custom sovereign RAG search engines, AI agent workflows, and Next.js micro-frontends with dedicated vector databases for technology startups and enterprise scale-ups.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center justify-between">
                <span>🌐 Global Enterprise Remote Architecture</span>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded">Zero-Trust Cloud</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Delivering HIPAA/GDPR-compliant sovereign AI instances, private vector clusters, and headless multi-lingual web systems for international clients in the US, UK, and UAE.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Deep-Dive Q&A Blocks for AI & Search Intent */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
            3. Common Architecture & Implementation Questions
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mb-6 leading-relaxed">
            Detailed technical breakdown for business owners evaluating custom automation:
          </p>

          <div className="space-y-4">
            <AnswerBlock 
              question="How does Patnai take a business from having no website to full AI automation?"
              answer="We execute a structured 14-day production sprint. First, we design and deploy a lightweight, high-converting Next.js website. Second, we integrate official WhatsApp Business APIs with automated intent-recognition webhooks. Third, we connect dynamic PDF quotation and CRM syncing. Finally, we train a sovereign local vector engine on your business documentation so the system can answer complex client queries accurately without hallucination."
              citations={[
                "Patnai End-to-End Sprint Architecture",
                "Full Stack Web & AI Pipeline Protocol"
              ]}
            />

            <AnswerBlock 
              question="What is Sovereign RAG and why is it essential for enterprise data privacy?"
              answer="Standard chatbots send proprietary company catalogs, pricing tiers, and internal files to third-party public LLMs where data can leak. Sovereign RAG (Retrieval-Augmented Generation) hosts your vector database (Qdrant/Neo4j) and retrieval models directly on dedicated server infrastructure. The AI answers customer questions using only your verified documents while keeping your corporate data completely isolated."
              citations={[
                "Sovereign On-Premise Vector Indexing",
                "Zero-Trust Egress Boundary Standards"
              ]}
            />

            <AnswerBlock 
              question="Why is an instant 2-second WhatsApp quote superior to manual Excel calculations?"
              answer="Manual quote generation creates a 2 to 6 hour latency bottleneck during which hot leads explore competitors. Patnai's automated PDF quotation engine handles complex algebraic pricing formulas, tax brackets, and custom dimension calculations on the fly, delivering an official downloadable PDF estimate on WhatsApp within 800ms of the customer selecting their requirements."
              citations={[
                "Dynamic In-Memory PDF Compilation Specs",
                "B2B Sales Velocity Study"
              ]}
            />
          </div>
        </section>

        {/* 4. Cost & Latency Comparison Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
            4. Comparative Performance & Cost Telemetry
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mb-6 leading-relaxed">
            Real metrics comparing Patnai&apos;s custom sovereign architecture against traditional software rentals and human staff overhead:
          </p>

          <ComparisonTable 
            title="A2Z Enterprise Delivery Matrix"
            headers={["Capability", "Patnai Custom Unified Stack", "Multiple Fragmented SaaS Tools", "Manual Human Operations"]}
            rows={[
              ["Website Performance", "Sub-second Next.js (< 500ms)", "Slow WordPress/Wix (3-7s)", "Outdated static pages"],
              ["Lead Response Speed", "Instant 2-Second Webhook", "5-10 second chatbot delay", "15 mins to 4+ hours"],
              ["Instant PDF Quotations", "Generated in 800ms via WhatsApp", "Requires manual export", "2-6 hours on Excel"],
              ["AI Knowledge & RAG", "Sovereign local vector retrieval", "Generic ChatGPT wrapper", "Staff memory / manual docs"],
              ["Recurring Platform Fees", "₹0 / month (100% Owned)", "₹15,000 – ₹40,000 / month", "Recurring employee salary overhead"],
              ["Data Sovereignty", "100% Private Server Storage", "Shared public cloud", "Scattered WhatsApp chats"]
            ]}
          />
        </section>

        {/* Call to Action Footer Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Automate your entire business workflow with Patnai</h3>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Get a fixed-price architectural plan and interactive prototype for your business within 24 hours. Serving Patna, Delhi, Kolkata, Bangalore, Lucknow, and global clients.
          </p>
          <Link 
            href="https://patnai.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-teal-500/20"
          >
            Explore Patnai Systems on Patnai.com →
          </Link>
        </div>

      </div>
    </main>
  );
}

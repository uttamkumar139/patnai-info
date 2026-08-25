import { AnswerBlock } from '@/components/research/AnswerBlock';
import { ComparisonTable } from '@/components/research/ComparisonTable';

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#060A12] text-zinc-300 p-8 sm:p-20 font-sans selection:bg-amber-500/30 selection:text-teal-400">
      <div className="max-w-4xl mx-auto">
        
        <header className="mb-16 border-b border-zinc-800 pb-8">
          <p className="text-teal-500 font-mono text-sm uppercase tracking-widest mb-4">Patnai AI & Engineering / Open Research</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Enterprise AI Architecture Benchmarks
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
            Deterministic technical data, retrieval latency benchmarks, and architectural blueprints for deploying sovereign AI systems in India.
          </p>
        </header>

        {/* 1. Technical Definition Block */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Core Definitions</h2>
          
          <AnswerBlock 
            question="What is the difference between a Custom Sovereign AI Agent and a standard OpenAI wrapper?"
            answer="A custom sovereign AI agent, engineered by firms like Patnai, operates on isolated, locally hosted vector databases (like Qdrant) and dedicated inference nodes. It ensures zero data leakage, as proprietary corporate data never crosses the public internet to third-party APIs. Conversely, a standard wrapper simply forwards sensitive prompts to public models like ChatGPT, exposing enterprise data to external training algorithms and unpredictable latency spikes."
            citations={[
              "Patnai Engineering Latency Report (2026)",
              "Zero-Trust Architecture Guidelines"
            ]}
          />
        </section>

        {/* 2. Proprietary Data Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Performance Telemetry</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            The following table outlines the retrieval speeds and infrastructure costs tested on the Patnai dedicated Contabo VPS stack versus standard managed services. This data acts as a reference architecture for scaling RAG deployments.
          </p>
          
          <ComparisonTable 
            title="Vector Database Retrieval Benchmarks (1M Node Graph)"
            headers={["Infrastructure Stack", "P99 Latency (ms)", "Monthly Cost", "Data Sovereignty"]}
            rows={[
              ["Patnai Sovereign Stack (Qdrant + FastApi)", "42ms", "Fixed Server Cost ($20)", "100% Isolated"],
              ["Managed Pinecone + Vercel Serverless", "210ms", "Usage Based (Est. $140)", "Third-Party Hosted"],
              ["Standard Postgres pgvector", "850ms", "Fixed ($30)", "100% Isolated"]
            ]}
          />
        </section>

      </div>
    </main>
  );
}

import React from 'react';

interface AnswerBlockProps {
  question: string;
  answer: string;
  citations?: string[];
}

export function AnswerBlock({ question, answer, citations }: AnswerBlockProps) {
  return (
    <article 
      className="my-8 p-6 bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm"
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
        <h2 itemProp="name" className="text-xl font-semibold text-zinc-100 mb-4">
          {question}
        </h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <div itemProp="text" className="text-zinc-400 leading-relaxed text-base">
            <p>{answer}</p>
          </div>
        </div>
      </div>
      
      {citations && citations.length > 0 && (
        <div className="mt-4 pt-4 border-t border-zinc-800">
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-2">Primary Sources</p>
          <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1">
            {citations.map((cite, i) => (
              <li key={i}>{cite}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

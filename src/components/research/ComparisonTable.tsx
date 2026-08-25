import React from 'react';

interface ComparisonTableProps {
  title: string;
  headers: string[];
  rows: string[][];
}

export function ComparisonTable({ title, headers, rows }: ComparisonTableProps) {
  return (
    <div className="my-10 w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
      <div className="p-4 bg-zinc-900 border-b border-zinc-800">
        <h3 className="text-lg font-medium text-zinc-100">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-zinc-400">
          <thead className="bg-zinc-900/50 text-xs uppercase text-zinc-500">
            <tr>
              {headers.map((header, i) => (
                <th key={i} scope="col" className="px-6 py-4 font-semibold tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-zinc-900/50 transition-colors">
                {row.map((cell, cellIndex) => (
                  <td 
                    key={cellIndex} 
                    className={`px-6 py-4 ${cellIndex === 0 ? 'font-medium text-zinc-200' : ''}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BenefitsTradeoffs() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const rows = [
    {
      category: '⚡ Performance',
      benefit: 'Fast first paint because HTML is pre-rendered.',
      tradeoff: 'Longer server response time (TTFB) for each user.',
    },
    {
      category: '🔍 SEO',
      benefit: 'Bots see complete content instantly, improving indexing.',
      tradeoff: 'Slightly slower compared to pre-rendered (SSG) content.',
    },
    {
      category: '🧠 Personalization',
      benefit: 'Supports dynamic, user-specific content (e.g., dashboards).',
      tradeoff: 'Can’t use CDN-level caching effectively.',
    },
    {
      category: '♻️ Freshness',
      benefit: 'Always fetches up-to-date data on each request.',
      tradeoff: 'Adds load to your server and database.',
    },
    {
      category: '🛠 Complexity',
      benefit: 'Simplifies dynamic rendering compared to CSR workarounds.',
      tradeoff: 'More moving parts: auth, DB, caching, etc. to manage.',
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-purple-700 mb-12 text-center" data-aos="fade-up">
        🎯 Benefits & Trade-offs of Server-Side Rendering
      </h1>

      <p className="text-lg text-center mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        Like every great tool, SSR comes with pros and cons. Here’s a side-by-side breakdown to help you choose wisely.
      </p>

      <div className="overflow-x-auto" data-aos="zoom-in" data-aos-delay="200">
        <table className="min-w-full bg-white shadow-lg rounded-xl overflow-hidden">
          <thead className="bg-purple-100 text-purple-800 text-left text-sm uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4">Aspect</th>
              <th className="py-3 px-4">✅ Benefit</th>
              <th className="py-3 px-4">⚠️ Trade-off</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b last:border-none hover:bg-purple-50 transition">
                <td className="py-4 px-4 font-medium">{row.category}</td>
                <td className="py-4 px-4 text-green-700">{row.benefit}</td>
                <td className="py-4 px-4 text-red-600">{row.tradeoff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
        <h2 className="text-xl font-semibold text-purple-600 mb-3">🤔 When to Use SSR?</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Use SSR when your content needs to be dynamic, fresh, and SEO-friendly — but weigh the performance and infrastructure trade-offs carefully.
        </p>
      </div>
    </main>
  );
}

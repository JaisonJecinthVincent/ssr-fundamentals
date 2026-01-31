'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RenderingStrategies() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-12 text-teal-600 text-center" data-aos="fade-up">
        🧩 CSR vs SSR vs SSG vs ISR
      </h1>

      <p className="text-lg text-center mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        Modern frontend frameworks like Next.js offer multiple rendering methods. Each balances speed, SEO, and complexity differently.
        Here&apos;s a side-by-side breakdown of the four main strategies:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CSR */}
        <div data-aos="zoom-in" className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-600">🖥️ CSR (Client-Side Rendering)</h2>
          <ul className="list-disc space-y-2 pl-5 text-lg">
            <li>Content is rendered in the browser after JavaScript loads</li>
            <li>Initial HTML is mostly empty</li>
            <li>Fast after load, but poor SEO & slow first paint</li>
            <li>Used in SPAs (e.g., Create React App)</li>
          </ul>
        </div>

        {/* SSR */}
        <div data-aos="zoom-in" className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-blue-500">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">🌐 SSR (Server-Side Rendering)</h2>
          <ul className="list-disc space-y-2 pl-5 text-lg">
            <li>HTML is rendered on the server for every request</li>
            <li>Great SEO & fast first paint</li>
            <li>Slower TTFB, higher server load</li>
            <li>Used via <code className="bg-gray-100 px-1 rounded">getServerSideProps()</code> in Next.js</li>
          </ul>
        </div>

        {/* SSG */}
        <div data-aos="zoom-in" className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-green-500">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">📦 SSG (Static Site Generation)</h2>
          <ul className="list-disc space-y-2 pl-5 text-lg">
            <li>Pages are pre-rendered at build time</li>
            <li>Blazing fast — content served from CDN</li>
            <li>Not ideal for rapidly changing content</li>
            <li>Used via <code className="bg-gray-100 px-1 rounded">getStaticProps()</code></li>
          </ul>
        </div>

        {/* ISR */}
        <div data-aos="zoom-in" className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-purple-500">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">⏱️ ISR (Incremental Static Regeneration)</h2>
          <ul className="list-disc space-y-2 pl-5 text-lg">
            <li>Mix of SSG + SSR — static pages updated on demand</li>
            <li>Gives you speed of static with dynamic freshness</li>
            <li>Great for blogs, e-commerce, dashboards</li>
            <li>Set revalidation period using <code className="bg-gray-100 px-1 rounded">revalidate</code> option</li>
          </ul>
        </div>
      </div>

      {/* Comparison Table */}
      <div data-aos="fade-up" className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">📊 Quick Comparison</h2>
        <div className="overflow-auto">
          <table className="min-w-full border text-left text-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Method</th>
                <th className="px-4 py-2">Speed</th>
                <th className="px-4 py-2">SEO</th>
                <th className="px-4 py-2">Freshness</th>
                <th className="px-4 py-2">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">CSR</td>
                <td className="px-4 py-2">⚡ After JS Loads</td>
                <td className="px-4 py-2">🚫 Poor</td>
                <td className="px-4 py-2">✅ Always Fresh</td>
                <td className="px-4 py-2">Apps, Dashboards</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">SSR</td>
                <td className="px-4 py-2">✅ First Load</td>
                <td className="px-4 py-2">✅ Good</td>
                <td className="px-4 py-2">✅ Always Fresh</td>
                <td className="px-4 py-2">News, Dynamic Pages</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">SSG</td>
                <td className="px-4 py-2">🚀 Very Fast</td>
                <td className="px-4 py-2">✅ Excellent</td>
                <td className="px-4 py-2">❌ Stale if content changes</td>
                <td className="px-4 py-2">Blogs, Docs</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">ISR</td>
                <td className="px-4 py-2">⚡ CDN + Background Refresh</td>
                <td className="px-4 py-2">✅ Excellent</td>
                <td className="px-4 py-2">✅ Smart Refresh</td>
                <td className="px-4 py-2">Hybrid Pages, Product Listings</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

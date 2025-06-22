'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SeoAndSsr() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-emerald-600 mb-10 text-center" data-aos="fade-up">
        🕷️ SEO & Server-Side Rendering
      </h1>

      {/* Intro */}
      <section className="mb-12">
        <p
          className="text-lg text-center mb-6 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Server-Side Rendering (SSR) is a powerful tool for improving your site’s visibility in search engines. Unlike Client-Side Rendering (CSR), SSR sends fully rendered HTML to crawlers — making it easier for search engines to index content.
        </p>
      </section>

      {/* Googlebot Crawl Comparison */}
      <section
        className="bg-emerald-50 p-6 rounded-xl mb-12"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
          🕸️ How Googlebot Sees SSR vs CSR
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-sm">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-emerald-600 mb-2">With SSR</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>HTML is fully rendered with actual content.</li>
              <li>Googlebot reads it immediately and indexes your page.</li>
              <li>Improves SEO for blogs, news, e-commerce, etc.</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-red-500 mb-2">With CSR</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Initial HTML is mostly empty (just divs/scripts).</li>
              <li>Google must wait to render JavaScript, which delays indexing.</li>
              <li>May miss dynamic content, hurting SEO.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Metaphor */}
      <section className="mb-12" data-aos="fade-up" data-aos-delay="300">
        <h2 className="text-2xl font-bold text-emerald-700 mb-4">🔍 Metaphor: The Librarian</h2>
        <p className="text-lg text-gray-700">
          Imagine Googlebot as a librarian scanning every book (webpage). SSR hands over a fully printed book. CSR gives a blank book and says, “Wait a second while I write it.” Which one do you think gets indexed faster?
        </p>
      </section>

      {/* SSR + SEO Best Practices */}
      <section className="bg-gray-100 p-6 rounded-xl" data-aos="fade-up" data-aos-delay="400">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">🧠 SSR SEO Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Use descriptive, semantic HTML (e.g., <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>)</li>
          <li>Set <code>title</code> and <code>meta</code> tags dynamically using <code>next/head</code></li>
          <li>Ensure pages return meaningful content on initial render</li>
          <li>Use structured data (JSON-LD) for articles, products, etc.</li>
          <li>Keep page load fast — Google also ranks based on performance</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="mt-16 text-center" data-aos="fade-up" data-aos-delay="500">
        <h2 className="text-xl font-semibold text-emerald-600 mb-3">✅ TL;DR</h2>
        <ul className="text-lg space-y-2 list-disc list-inside text-gray-800">
          <li>SSR helps search engines discover your content faster.</li>
          <li>Great for content-heavy, frequently updated websites.</li>
          <li>Don’t forget to optimize metadata and HTML structure.</li>
        </ul>
      </section>
    </main>
  );
}

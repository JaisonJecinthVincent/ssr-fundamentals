'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WhenToUseSSR() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-10 text-rose-600 text-center" data-aos="fade-up">
        🍽️ When Should You Use Server-Side Rendering (SSR)?
      </h1>

      <p className="text-lg mb-10 text-center max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        Server-Side Rendering is powerful, but not always the best choice. Use it when you need fresh content, SEO benefits, or personalization.
        Think of it like a restaurant cooking your order fresh each time 🍝 — perfect for some cases, overkill for others.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Use Case 1 */}
        <div data-aos="zoom-in" className="bg-white shadow-md p-6 rounded-xl border-t-4 border-rose-400">
          <h2 className="text-xl font-semibold mb-3 text-rose-600">📢 SEO Matters</h2>
          <p className="text-lg text-gray-700">
            SSR is ideal when search engines need to see your content immediately — like marketing pages, blogs, and news articles.
          </p>
        </div>

        {/* Use Case 2 */}
        <div data-aos="zoom-in" data-aos-delay="100" className="bg-white shadow-md p-6 rounded-xl border-t-4 border-rose-400">
          <h2 className="text-xl font-semibold mb-3 text-rose-600">🕒 Frequently Updated Content</h2>
          <p className="text-lg text-gray-700">
            Use SSR when content changes often — like stock prices, weather data, or real-time dashboards.
          </p>
        </div>

        {/* Use Case 3 */}
        <div data-aos="zoom-in" data-aos-delay="200" className="bg-white shadow-md p-6 rounded-xl border-t-4 border-rose-400">
          <h2 className="text-xl font-semibold mb-3 text-rose-600">👤 User-Specific Pages</h2>
          <p className="text-lg text-gray-700">
            Pages that rely on user authentication or show custom data (e.g., dashboards, profiles) benefit from SSR to ensure privacy and accuracy.
          </p>
        </div>

        {/* Use Case 4 */}
        <div data-aos="zoom-in" data-aos-delay="300" className="bg-white shadow-md p-6 rounded-xl border-t-4 border-rose-400">
          <h2 className="text-xl font-semibold mb-3 text-rose-600">🧩 Dynamic Routes</h2>
          <p className="text-lg text-gray-700">
            If you're rendering dynamic pages (like `/product/[id]`) with content that changes often, SSR ensures fresh, relevant content on each visit.
          </p>
        </div>
      </div>

      <div className="mt-16" data-aos="fade-up" data-aos-delay="400">
        <h2 className="text-2xl font-bold mb-4 text-center text-rose-700">📌 Metaphor Time</h2>
        <p className="text-lg text-center max-w-2xl mx-auto">
          <span className="font-bold">SSR is like a restaurant 🍽️</span> — it prepares your food (HTML) fresh per request. Great when you want it hot, personalized, and SEO-ready. But if everyone's ordering the same dish, maybe pre-cooked (SSG) is better!
        </p>
      </div>
    </main>
  );
}

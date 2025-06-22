'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CaseStudies() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const demos = [
    {
      title: '📰 Blog Page',
      desc: 'SSR version shows pre-rendered content with better SEO & TTFB.',
      ssrLink: '/demos/blog/ssr',
      csrLink: '/demos/blog/csr',
    },
    {
      title: '🛒 Product Page',
      desc: 'SSR version loads metadata + product data before client JS.',
      ssrLink: '/demos/product/ssr',
      csrLink: '/demos/product/csr',
    },
    {
      title: '📋 Dashboard',
      desc: 'SSR dashboard preloads auth + API data server-side.',
      ssrLink: '/demos/dashboard/ssr',
      csrLink: '/demos/dashboard/csr',
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-600 mb-10 text-center" data-aos="fade-up">
        🧪 Case Studies & Demos
      </h1>

      <p className="text-lg text-center mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        Explore real examples of SSR vs CSR in action. Each demo page loads differently — giving you insight into Time To First Byte (TTFB), SEO, and user experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="zoom-in-up" data-aos-delay="200">
        {demos.map((demo, i) => (
          <div key={i} className="bg-white p-6 shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{demo.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{demo.desc}</p>
            <div className="flex justify-between items-center">
              <a
                href={demo.ssrLink}
                className="text-sm text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 transition"
              >
                View SSR
              </a>
              <a
                href={demo.csrLink}
                className="text-sm text-blue-600 border border-blue-600 px-4 py-1 rounded hover:bg-blue-50 transition"
              >
                View CSR
              </a>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-16" data-aos="fade-up" data-aos-delay="300">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">📈 Performance Tip</h2>
        <p className="text-center max-w-2xl mx-auto text-gray-700">
          Use <code>lighthouse</code> or <code>web-vitals</code> to measure Core Web Vitals like TTFB, LCP, and FCP on your demo pages. SSR often improves **First Contentful Paint** and **SEO scores**.
        </p>
      </section>
    </main>
  );
}

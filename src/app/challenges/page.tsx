'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ssr-challenges.css'; // Flip card styling

export default function SSRChallenges() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const challenges = [
    {
      title: '🕓 Slower TTFB (Time to First Byte)',
      problem: 'Each request is rendered on the fly, increasing backend response time.',
      solution: 'Use caching (full-page, data-level) and edge SSR (like Next.js with Vercel).',
    },
    {
      title: '🧠 Session Management',
      problem: 'You need to handle user sessions or tokens securely on the server.',
      solution: 'Use secure HTTP-only cookies or libraries like `next-auth` for session control.',
    },
    {
      title: '🧩 Third-Party Scripts',
      problem: 'Scripts expecting the DOM may break when run server-side.',
      solution: 'Load such scripts dynamically on the client using `useEffect` or `next/dynamic`.',
    },
    {
      title: '🔁 Redundant Data Fetching',
      problem: 'The same data might be fetched twice — once on server, then rehydrated on client.',
      solution: 'Use React Query, SWR, or serialize preloaded data using `getServerSideProps`.',
    },
    {
      title: '🚫 No CDN Caching',
      problem: 'Pages rendered per request can’t be cached at the CDN edge easily.',
      solution: 'Consider ISR (Incremental Static Regeneration) when freshness isn’t critical.',
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-red-600 text-center mb-12" data-aos="fade-up">
        🐞 Common SSR Challenges & Solutions
      </h1>

      <p className="text-lg text-center mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        SSR is powerful, but comes with engineering challenges. Here’s a set of real-world issues — and how to solve them.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" data-aos="zoom-in-up" data-aos-delay="200">
        {challenges.map((c, i) => (
          <div key={i} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front p-6 bg-white shadow-lg rounded-xl border border-gray-200">
                <h2 className="text-xl font-semibold mb-4">{c.title}</h2>
                <p className="text-gray-700 text-sm">{c.problem}</p>
              </div>
              <div className="flip-card-back p-6 bg-green-100 shadow-lg rounded-xl border border-green-400 text-green-900">
                <h3 className="text-lg font-bold mb-2">✅ Solution</h3>
                <p className="text-sm">{c.solution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

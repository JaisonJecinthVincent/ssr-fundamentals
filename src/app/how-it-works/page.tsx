'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HowSSRWorks() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center" data-aos="fade-up">
        ⚙️ How Server-Side Rendering (SSR) Works
      </h1>

      {/* Basic Concept */}
      <section className="mb-12">
        <p className="text-lg text-center mb-6 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          SSR means that your page is rendered on the server <strong>per request</strong>. The HTML is generated and sent to the browser, ready to be displayed — which is great for SEO and initial load performance.
        </p>
      </section>

      {/* Diagram */}
      <section className="bg-blue-50 p-6 rounded-xl mb-12" data-aos="zoom-in">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600 text-center">🔄 SSR Request–Response Flow</h2>
        <ol className="space-y-4 text-lg list-decimal pl-6 text-gray-700">
          <li>User requests a page (e.g., `/profile`).</li>
          <li>The server runs React code and fetches necessary data.</li>
          <li>Server renders the full HTML and sends it back to the browser.</li>
          <li>The browser displays the pre-rendered HTML while hydrating the React app.</li>
        </ol>
      </section>

      {/* Metaphor */}
      <section className="mb-12" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">🍽️ Metaphor: The Restaurant Kitchen</h2>
        <p className="text-lg text-gray-700">
          Think of SSR like a restaurant. You (the client) place an order (page request), the kitchen (server) freshly prepares your dish (HTML), and serves it ready to eat (rendered page).
        </p>
      </section>

      {/* Code Example */}
      <section className="bg-gray-100 p-6 rounded-xl" data-aos="fade-up" data-aos-delay="300">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">🧪 Example: `getServerSideProps` in Next.js</h2>
        <pre className="bg-gray-800 text-white text-sm p-4 rounded-md overflow-auto">
{`// pages/profile.tsx
export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/user');
  const user = await res.json();

  return {
    props: { user }, // passed to the page component
  };
}

export default function ProfilePage({ user }) {
  return (
    <div>
      <h1>Hello, {user.name}!</h1>
    </div>
  );
}`}
        </pre>
        <p className="text-sm text-gray-600 mt-2">
          🔍 This fetches fresh data on every request — ideal for authenticated or dynamic pages.
        </p>
      </section>

      {/* Summary */}
      <section className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
        <h2 className="text-xl font-semibold text-blue-600 mb-3">✅ TL;DR</h2>
        <ul className="text-lg space-y-2 list-disc list-inside">
          <li>SSR renders HTML on each request, ensuring fresh content.</li>
          <li>It improves SEO and first paint performance.</li>
          <li>Use it for dynamic, user-specific, or frequently updated pages.</li>
        </ul>
      </section>
    </main>
  );
}

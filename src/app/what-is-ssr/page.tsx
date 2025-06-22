'use client';

import React from 'react';

export default function WhatIsSSR() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">What is Server-Side Rendering (SSR)?</h1>

      <p className="text-lg mb-6">
        <strong>Server-Side Rendering (SSR)</strong> is a web development technique where the content of your web page is generated on the <span className="font-semibold">server</span> rather than in the browser.
        When a user requests a page, the server sends back a fully-rendered HTML document — ready to be displayed immediately.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">🧠 How it Works</h2>
      <ul className="list-disc pl-6 text-lg space-y-2">
        <li>The user sends a request to your server (e.g., example.com/page).</li>
        <li>The server runs JavaScript (e.g., Next.js + React) to generate the HTML for that page.</li>
        <li>The server sends back the HTML — already containing content.</li>
        <li>The browser paints the page — and then hydrates it with client-side JavaScript.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">🎯 Why Use SSR?</h2>
      <ul className="list-disc pl-6 text-lg space-y-2">
        <li>✅ Great for SEO — search engines get content instantly.</li>
        <li>✅ Faster First Contentful Paint (FCP) for users on slow networks.</li>
        <li>✅ Dynamic content rendering based on requests (e.g., user sessions, location).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">⚖️ SSR vs CSR (Client-Side Rendering)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
        <div className="bg-blue-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-blue-700 mb-2">SSR</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>HTML generated on server</li>
            <li>Faster page load for initial request</li>
            <li>Better SEO by default</li>
          </ul>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-yellow-700 mb-2">CSR</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>HTML is mostly empty on first load</li>
            <li>JS runs in browser to build content</li>
            <li>Slower for SEO & first paint</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">🔧 SSR in Next.js</h2>
      <p className="text-lg mb-4">
        In Next.js, you can implement SSR using the <code className="bg-gray-100 px-2 py-1 rounded text-sm">getServerSideProps</code> function:
      </p>

      <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">
        <code>
{`export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-4">🚀 Real-Life Examples</h2>
      <ul className="list-disc pl-6 text-lg space-y-2">
        <li>eCommerce sites showing prices and availability</li>
        <li>News websites rendering fresh content on every visit</li>
        <li>Personalized dashboards or user-based content</li>
      </ul>
    </main>
  );
}

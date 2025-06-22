'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HistoryOfSSR() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-10 text-purple-600" data-aos="fade-up">
        🕰️ The History of Server-Side Rendering
      </h1>

      <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
        Server-side rendering has evolved from simple HTML file generation to powerful JavaScript-based rendering engines.
        Let's explore how SSR has transformed over the years.
      </p>

      <div className="relative border-l-4 border-purple-300 pl-6 space-y-12">
        {/* 1990s */}
        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full"></div>
          <h2 className="text-xl font-semibold text-purple-700">🧾 1990s – The Birth of Server Rendering</h2>
          <p className="text-gray-700 text-lg mt-2">
            Websites were purely static HTML. Server-side rendering meant literally writing the HTML on the server and sending it directly to the browser.
          </p>
        </div>

        {/* Early 2000s */}
        <div data-aos="fade-up" data-aos-delay="100" className="relative">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full"></div>
          <h2 className="text-xl font-semibold text-purple-700">🛠️ 2000s – Dynamic Rendering with PHP, JSP, ASP.NET</h2>
          <p className="text-gray-700 text-lg mt-2">
            Platforms like PHP and JSP allowed dynamic HTML generation using server-side logic and databases. Every request generated a new page from scratch.
          </p>
        </div>

        {/* 2010s */}
        <div data-aos="fade-up" data-aos-delay="200" className="relative">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full"></div>
          <h2 className="text-xl font-semibold text-purple-700">⚙️ 2010s – Rise of Client-Side Rendering</h2>
          <p className="text-gray-700 text-lg mt-2">
            JavaScript frameworks like React, Angular, and Vue shifted rendering to the client. This led to faster navigation but slower first paint and poor SEO.
          </p>
        </div>

        {/* Mid-Late 2010s */}
        <div data-aos="fade-up" data-aos-delay="300" className="relative">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full"></div>
          <h2 className="text-xl font-semibold text-purple-700">🔁 2016+ – The Return of SSR with React</h2>
          <p className="text-gray-700 text-lg mt-2">
            Frameworks like Next.js and Nuxt.js brought back SSR — but with modern JavaScript, enabling dynamic, fast, and SEO-friendly pages.
          </p>
        </div>

        {/* 2020s */}
        <div data-aos="fade-up" data-aos-delay="400" className="relative">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full"></div>
          <h2 className="text-xl font-semibold text-purple-700">🚀 2020s – SSR + Edge + AI</h2>
          <p className="text-gray-700 text-lg mt-2">
            Modern SSR is hybrid. With the rise of <strong>SSG</strong>, <strong>ISR</strong>, and <strong>Edge Functions</strong>,
            rendering is now dynamic, fast, and global — tailored per user and location.
          </p>
        </div>
      </div>

      <p className="mt-16 text-lg text-center text-gray-600" data-aos="fade-up" data-aos-delay="500">
        The journey of SSR is far from over. It's evolving faster than ever!
      </p>
    </main>
  );
}

'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WebVitalsDisplay from './WebVitalsDisplay';

interface DemoSwitcherProps {
  ssrDemo: React.ReactElement;
  csrDemo: React.ReactElement;
}

export default function DemoSwitcher({ ssrDemo, csrDemo }: DemoSwitcherProps) {
  const [showDemos, setShowDemos] = useState(false);
  const [renderKey, setRenderKey] = useState(0);
  const [csrMetrics] = useState({ ttfb: 25, fcp: 600, lcp: 650, seo: 45 });

  const ssrMetrics = { ttfb: 610, fcp: 615, lcp: 620, seo: 98 };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const demo = {
    title: '📋 Dashboard',
    desc: 'Compare how SSR and CSR handle data loading for a typical dashboard.',
  };

  const handleCompareClick = () => {
    setShowDemos(true);
    setRenderKey(prevKey => prevKey + 1);
  };

  return (
    <>
      <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition" data-aos="zoom-in-up" data-aos-delay="200">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">{demo.title}</h2>
        <p className="text-sm text-gray-600 mb-4">{demo.desc}</p>
        <div className="flex justify-center items-center">
          <button
            onClick={handleCompareClick}
            className="w-full text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Compare SSR vs CSR
          </button>
        </div>
      </div>

      {showDemos && (
        <div key={renderKey} className="mt-12 p-8 bg-gray-50 rounded-xl shadow-inner border" data-aos="fade-up">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border bg-white rounded-lg p-4">
              {ssrDemo}
              <WebVitalsDisplay metrics={ssrMetrics} />
            </div>
            <div className="border bg-white rounded-lg p-4">
              {csrDemo}
              <WebVitalsDisplay metrics={csrMetrics} />
            </div>
          </div>
        </div>
      )}
    </>
  );
} 
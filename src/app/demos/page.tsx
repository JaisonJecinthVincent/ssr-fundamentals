import React from 'react';
import DemoSwitcher from './DemoSwitcher';
import DashboardCSRPage from './dashboard/csr/page';
import DashboardSSRPage from './dashboard/ssr/page';

export default function CaseStudies() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-600 mb-10 text-center">
        🧪 Case Studies & Demos
      </h1>

      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        Explore real examples of SSR vs CSR in action. Each demo page loads differently — giving you insight into Time To First Byte (TTFB), SEO, and user experience.
      </p>

      <div className="grid gap-8">
        <DemoSwitcher
          ssrDemo={<DashboardSSRPage />}
          csrDemo={<DashboardCSRPage />}
        />
      </div>

      
    </main>
  );
}

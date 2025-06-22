'use client';

interface WebVitalsProps {
  metrics: {
    ttfb: number;
    fcp: number;
    lcp: number;
    seo: number;
  };
}

export default function WebVitalsDisplay({ metrics }: WebVitalsProps) {
  return (
    <div className="mt-4 text-xs text-gray-500 bg-gray-100 p-3 rounded-lg">
      <h4 className="font-bold mb-2">📊 Web Vitals (Simulated)</h4>
      <p>
        <strong>TTFB:</strong>{' '}
        <span className="text-green-600 font-mono">{metrics.ttfb.toFixed(0)}ms</span>
        <span className="text-gray-400"> (Time to First Byte)</span>
      </p>
      <p>
        <strong>FCP:</strong>{' '}
        <span className="text-purple-600 font-mono">{metrics.fcp.toFixed(0)}ms</span>
        <span className="text-gray-400"> (First Contentful Paint)</span>
      </p>
      <p>
        <strong>LCP:</strong>{' '}
        <span className="text-orange-600 font-mono">{metrics.lcp.toFixed(0)}ms</span>
        <span className="text-gray-400"> (Largest Contentful Paint)</span>
      </p>
       <p className="mt-2 pt-2 border-t">
        <strong>SEO Score:</strong>{' '}
        <span className="text-blue-600 font-bold">{metrics.seo}/100</span>
        <span className="text-gray-400"> (Crawler-friendly)</span>
      </p>
    </div>
  );
} 
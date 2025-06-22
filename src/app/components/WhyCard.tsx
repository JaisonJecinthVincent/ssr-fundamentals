// components/HowCard.tsx
export default function WhyCard({ onClose }: { onClose: () => void }) {
    return (
      <div className="mx-auto mt-6 max-w-xl p-6 bg-white rounded-xl shadow-lg border border-gray-200 text-gray-800">
        <h3 className="text-lg font-bold mb-3">Why use Next.js for SSR?</h3>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Built-in SSR support with `getServerSideProps`</li>
          <li>Automatic routing and code splitting</li>
          <li>SEO and performance optimizations</li>
          <li>Full-stack capabilities with API routes</li>
          <li>Easy deployment and scalability</li>
        </ul>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    );
  }
  
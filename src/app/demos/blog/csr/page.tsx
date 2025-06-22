'use client';

import { useEffect, useState } from 'react';

export default function BlogCSRPage() {
  const [data, setData] = useState<{ title: string; content: string } | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ title: "Client-Rendered Blog", content: "This blog content was fetched on the client." });
    }, 500);
  }, []);

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-orange-500 mb-4">{data?.title || 'Loading...'}</h1>
      <p className="text-lg text-gray-700">{data?.content}</p>
    </main>
  );
}
'use client';

import { useEffect, useState } from 'react';

export default function ProductCSRPage() {
  const [product, setProduct] = useState<{ name: string; price: string } | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setProduct({ name: "CSR Laptop", price: "$1499" });
    }, 400);
  }, []);

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-yellow-500 mb-4">{product?.name || 'Loading...'}</h1>
      <p className="text-lg">Price: <strong>{product?.price}</strong></p>
    </main>
  );
}
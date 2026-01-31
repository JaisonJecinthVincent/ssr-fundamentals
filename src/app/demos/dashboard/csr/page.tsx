'use client';

import { useEffect, useState } from 'react';

export default function DashboardCSRPage() {
  const [stats, setStats] = useState<{ users: number; tasks: number } | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setStats({ users: 128, tasks: 45 });
    }, 600);
  }, []);

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">Admin Dashboard (CSR)</h1>
      <p className="text-lg">Active Users: {stats?.users ?? '...'}</p>
      <p className="text-lg">Pending Tasks: {stats?.tasks ?? '...'}</p>
    </main>
  );
}

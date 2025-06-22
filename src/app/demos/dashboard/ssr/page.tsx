export const metadata = {
    title: "SSR Dashboard Demo",
    description: "A dashboard page rendered using SSR.",
  };
  interface Stats{
    users:number,
    tasks:number
  }
  export default async function DashboardSSRPage() {
    const stats:Stats = await new Promise((res) =>
      setTimeout(() => res({ users: 128, tasks: 45 }), 600)
    );
  
    return (
      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-cyan-600 mb-4">Admin Dashboard (SSR)</h1>
        <p className="text-lg">Active Users: {stats.users}</p>
        <p className="text-lg">Pending Tasks: {stats.tasks}</p>
      </main>
    );
}
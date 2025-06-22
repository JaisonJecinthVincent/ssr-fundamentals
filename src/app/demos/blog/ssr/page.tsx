export const metadata = {
    title: "SSR Blog Demo",
    description: "A blog page rendered using SSR.",
  };
  interface BlogData {
    title: string;
    content: string;
  }
  export default async function BlogSSRPage() {
    // Simulate server-side fetch
    const blogData:BlogData = await new Promise((res) =>
      setTimeout(() => res({ title: "Server-Rendered Blog", content: "This blog content was fetched on the server." }), 500)
    );
  
    return (
      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-purple-600 mb-4">{blogData.title}</h1>
        <p className="text-lg text-gray-700">{blogData.content}</p>
      </main>
    );
  }
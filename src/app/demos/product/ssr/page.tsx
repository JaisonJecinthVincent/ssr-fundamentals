export const metadata = {
    title: "SSR Product Demo",
    description: "A product page rendered using SSR.",
  };
  interface Product{
    name:string,
    price:string
  }
  export default async function ProductSSRPage() {
    const product:Product = await new Promise((res) =>
      setTimeout(() => res({ name: "SSR Laptop", price: "$1499" }), 400)
    );
  
    return (
      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-green-600 mb-4">{product.name}</h1>
        <p className="text-lg">Price: <strong>{product.price}</strong></p>
      </main>
    );
  }
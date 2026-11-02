import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h2>Produkter</h2>

      <input
        type="text"
        placeholder="Søg efter produkter..."
        className="w-full rounded-lg bg-lightblue p-3"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

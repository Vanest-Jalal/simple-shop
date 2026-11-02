import ProductSearch from "@/components/ProductSearch";

export default async function ProductsPage() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h2>Produkter</h2>

      <ProductSearch products={products} />
    </main>
  );
}

import { Suspense } from "react";
import ProductSearch from "@/components/ProductSearch";

// Henter produkterne fra DummyJSON
async function ProductList() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;

  return <ProductSearch products={products} />;
}

// Viser produktsiden
export default function ProductsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h2>Produkter</h2>

      <Suspense fallback={<p>Indlæser produkter...</p>}>
        <ProductList />
      </Suspense>
    </main>
  );
}

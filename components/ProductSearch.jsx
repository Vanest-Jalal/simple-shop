"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function ProductSearch({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ].filter((category) => category !== "furniture" && category !== "groceries");

  const filteredProducts = products.filter(
    (product) =>
      product.category !== "furniture" &&
      product.category !== "groceries" &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "all" || product.category === selectedCategory),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Søg efter produkter..."
        className="w-full rounded-lg bg-lightblue p-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-wrap gap-3 my-6">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === "all" ? "bg-blue text-white" : "bg-lightblue"
          }`}
        >
          Alle
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full hover:bg-blue hover:text-white transition-colors ${
              selectedCategory === category
                ? "bg-blue text-white"
                : "bg-lightblue"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Cart from "./Cart";
import { useCartStore } from "../store/cartStore";

// Komponent til at tilføje et produkt til indkøbskurven
export default function AddToCartButton({ product }) {
  // Holder styr på om indkøbskurven er åben eller lukket
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Henter addToCart funktionen fra vores Zustand store
  const addToCart = useCartStore(
    (state) => state.addToCart,
  );

  // Funktion der tilføjer produktet til indkøbskurven
  function handleAddToCart() {
    addToCart(product);
    setIsCartOpen(true);
  }

  return (
    <>
      {/* Knap til at tilføje produktet */}
      <button
        type="button"
        onClick={handleAddToCart}
        aria-label={`Tilføj ${product.title} til kurven`}
      >
        🛒
      </button>

      {/* Viser indkøbskurven når den er åben */}
      {isCartOpen && (
        <Cart onClose={() => setIsCartOpen(false)} />
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import Cart from "./Cart";
import { useCartStore } from "../store/cartStore";
import { IoCartOutline } from "react-icons/io5";

// Komponent til at tilføje et produkt til indkøbskurven
export default function AddToCartButton({
  product,
  variant = "icon",
}) {
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
        className={
          variant === "text"
            ? "w-fit rounded-md bg-blue px-10 py-4 text-white transition-colors hover:bg-lightblue hover:text-foreground"
            : "bg-blue text-white w-14 h-14 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
        }
      >
        {variant === "text" ? (
          "Læg i kurv"
        ) : (
          <IoCartOutline size={28} />
        )}
      </button>

      {/* Viser indkøbskurven når den er åben */}
      {isCartOpen && (
        <Cart onClose={() => setIsCartOpen(false)} />
      )}
    </>
  );
}

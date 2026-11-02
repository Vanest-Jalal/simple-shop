"use client";

import Link from "next/link";
import { useCartStore } from "../store/cartStore";

// Komponent, der skal vise vores indkøbskurv
export default function Cart({ onClose }) {
  // Henter produkterne i indkøbskurven fra vores Zustand store
  const cart = useCartStore((state) => state.cart);

  // Beregner den samlede pris for alle produkter i kurven
  const totalPrice = cart.reduce((total, product) => {
    // Ganger produktets pris med antallet og lægger det til totalen
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className="absolute top-0 right-0 z-50 w-72 rounded-lg bg-background p-5 text-foreground shadow-lg border border-lightblue">
      {/* Overskrift og luk-knap */}
      <div className="flex items-center justify-between mb-5">
        <h2>Indkøbskurv</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Luk indkøbskurv"
        >
          ✕
        </button>
      </div>

      {/* Viser produkterne i kurven */}
      {cart.length === 0 ? (
        <p>Din indkøbskurv er tom</p>
      ) : (
        cart.map((product) => (
          <div
            key={product.id}
            className="border-b border-lightblue py-3"
          >
            <p>{product.title}</p>
            <p>{product.price} kr.</p>
            <p>Antal: {product.quantity}</p>
          </div>
        ))
      )}

      {/* Samlet pris */}
      <p className="mt-5 font-semibold">
        Total: {totalPrice.toFixed(2)} kr.
      </p>

      {/* Link til betaling */}
      <Link
        href="/payment"
        className="mt-4 block rounded-md bg-blue px-4 py-2 text-center text-white"
      >
        Gå til betaling
      </Link>
    </div>
  );
}

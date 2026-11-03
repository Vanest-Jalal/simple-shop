"use client";

import { useCartStore } from "../../store/cartStore";

// Komponent til betalingssiden
export default function PaymentPage() {
  // Henter produkterne fra indkøbskurven
  const cart = useCartStore((state) => state.cart);

  // Beregner den samlede pris
  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  // Henter funktionen til at tømme indkøbskurven
  const clearCart = useCartStore(
    (state) => state.clearCart,
  );

  // Simulerer en betaling uden at trække penge
  function handlePayment() {
    alert(
      "Tak for din bestilling! Din betaling er gennemført.",
    );

    // Tømmer indkøbskurven efter betaling
    clearCart();
  }

  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      <h1>Betaling</h1>

      <section className="mt-8 rounded-lg bg-white p-6">
        <h2>Din ordre</h2>

        {/* Viser produkterne i indkøbskurven */}
        {cart.length === 0 ? (
          <p className="mt-4">Din indkøbskurv er tom</p>
        ) : (
          cart.map((product) => (
            <div
              key={product.id}
              className="flex justify-between border-b border-lightblue py-4"
            >
              <div>
                <h3>{product.title}</h3>
                <p>Antal: {product.quantity}</p>
              </div>

              <p>
                {(product.price * product.quantity).toFixed(
                  2,
                )}{" "}
                kr.
              </p>
            </div>
          ))
        )}

        {/* Viser den samlede pris */}
        <div className="mt-6 flex justify-between font-semibold">
          <p>Total</p>
          <p>{totalPrice.toFixed(2)} kr.</p>
        </div>

        {/* Fake betalingsknap */}
        <button
          type="button"
          onClick={handlePayment}
          disabled={cart.length === 0}
          className="mt-6 w-full rounded-md bg-blue px-4 py-3 font-semibold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Gennemfør betaling
        </button>
      </section>
    </main>
  );
}

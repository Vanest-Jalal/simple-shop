import { create } from "zustand";

// Opretter en Zustand store til vores indkøbskurv
export const useCartStore = create((set) => ({
  // Et tomt array, som skal indeholde produkterne i kurven
  cart: [],

  // Funktion til at tilføje et produkt til kurven
  addToCart: (product) =>
    set((state) => {
      // Tjekker om produktet allerede findes i kurven
      const existingProduct = state.cart.find(
        (item) => item.id === product.id,
      );

      // Hvis produktet allerede findes, øges antallet med 1
      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      // Tilføjer produktet med et antal på 1
      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }),

  // Fjerner et produkt fra indkøbskurven
  removeFromCart: (productId) =>
    set((state) => ({
      // Beholder alle produkter undtagen det valgte
      cart: state.cart.filter(
        (product) => product.id !== productId,
      ),
    })),

  // Mindsker antallet af et produkt med 1, men aldrig under 1
  decreaseQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    })),

  // Tømmer hele indkøbskurven efter betaling
  clearCart: () => set({ cart: [] }),
}));

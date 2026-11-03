"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, Suspense } from "react";
import { IoCartOutline } from "react-icons/io5";
import Cart from "../../components/Cart";

// Indeholder navigationen og bruger usePathname
function NavigationContent() {
  // Finder den side, som brugeren er på
  const pathname = usePathname();

  // Holder styr på, om indkøbskurven er åben
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center gap-6">
        <Link
          href="/products"
          className={`text-lg font-normal leading-[1.6] transition-colors hover:text-lightblue ${
            pathname.startsWith("/products")
              ? "text-lightblue"
              : "text-foreground"
          }`}
        >
          produkter
        </Link>

        {/* Åbner indkøbskurven i stedet for at gå til /cart */}
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          aria-label="Åbn indkøbskurven"
          className="text-foreground transition-colors hover:text-lightblue"
        >
          <IoCartOutline size={28} />
        </button>
      </nav>

      {/* Viser indkøbskurven, når man klikker på ikonet */}
      {isCartOpen && (
        <Cart onClose={() => setIsCartOpen(false)} />
      )}
    </>
  );
}

// Suspense håndterer usePathname under prerendering
export default function Navigation() {
  return (
    <Suspense fallback={null}>
      <NavigationContent />
    </Suspense>
  );
}

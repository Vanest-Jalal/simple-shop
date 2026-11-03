
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, Suspense } from "react";
import { IoCartOutline } from "react-icons/io5";
import Cart from "../../components/Cart";

// Navigation med produktlink og indkøbskurv
function NavigationContent() {
  // Finder den aktuelle side
  const pathname = usePathname();

  // Holder styr på, om indkøbskurven er åben
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isProductsPage = pathname.startsWith("/products");

  return (
    <>
      <nav className="flex items-center gap-8 font-medium">
        {/* Link til produktsiden */}
        <Link
          href="/products"
          className={`group relative pb-2 transition-colors duration-300 ${
            isProductsPage
              ? "text-blue"
              : "text-foreground hover:text-blue"
          }`}
        >
          Produkter

          {/* Blå understregning ved hover og aktiv side */}
          <span
            className={`absolute bottom-0 left-0 h-[2px] bg-blue transition-all duration-300 ${
              isProductsPage ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>

        {/* Åbner indkøbskurven ved klik */}
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          aria-label="Åbn indkøbskurven"
          className="group relative flex items-center pb-2 text-foreground transition-colors duration-300 hover:text-blue"
        >
          <IoCartOutline size={28} />

          {/* Blå understregning ved hover */}
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue transition-all duration-300 group-hover:w-full" />
        </button>
      </nav>

      {/* Viser kurven, når brugeren klikker på ikonet */}
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

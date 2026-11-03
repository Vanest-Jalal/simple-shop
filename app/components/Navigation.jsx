
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCartOutline } from "react-icons/io5";

export default function Navigation() {
  // Finder den aktuelle side
  const pathname = usePathname();

  // Tjekker hvilken side der er aktiv
  const isProductsPage = pathname.startsWith("/products");
  const isCartPage = pathname === "/cart";

  return (
    <nav className="flex items-center gap-8 font-medium">
      {/* Link til produkter */}
      <Link
        href="/products"
        className={`group relative pb-2 transition-colors duration-300 ${
          isProductsPage
            ? "text-blue"
            : "text-foreground hover:text-blue"
        }`}
      >
        Produkter

        {/* Stregen animeres frem ved hover og bliver stående på produktsiden */}
        <span
          className={`absolute bottom-0 left-0 h-[2px] bg-blue transition-all duration-300 ${
            isProductsPage ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </Link>

      {/* Link til kurven */}
      <Link
        href="/cart"
        aria-label="Gå til kurv"
        className={`group relative flex items-center pb-2 transition-colors duration-300 ${
          isCartPage
            ? "text-blue"
            : "text-foreground hover:text-blue"
        }`}
      >
        <IoCartOutline size={28} />

        {/* Stregen animeres frem ved hover og bliver stående på kurvesiden */}
        <span
          className={`absolute bottom-0 left-0 h-[2px] bg-blue transition-all duration-300 ${
            isCartPage ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </Link>
    </nav>
  );
}













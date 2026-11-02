
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
    <nav className="flex items-center gap-8">
      {/* Link til produkter */}
      <Link
        href="/products"
        className={`transition-colors ${
          isProductsPage
            ? "text-foreground underline underline-offset-8"
            : "text-foreground hover:text-lightblue"
        }`}
      >
        Produkter
      </Link>

      {/* Link til kurven */}
      <Link
        href="/cart"
        aria-label="Gå til kurv"
        className={`flex items-center border-b-2 pb-1 transition-colors ${
          isCartPage
            ? "border-foreground text-foreground"
            : "border-transparent text-foreground hover:text-lightblue"
        }`}
      >
        <IoCartOutline size={28} />
      </Link>
    </nav>
  );
}








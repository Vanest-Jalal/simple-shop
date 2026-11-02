"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCartOutline } from "react-icons/io5";

export default function Navigation() {
  // Finder den side som brugeren er på
  const pathname = usePathname();

  return (
    //Afstand mellem links
    <nav className="flex items-center gap-6">
      <Link
      // Produktlink's og styling
        href="/products"
        className={`text-lg font-normal leading-[1.6] transition-colors hover:text-lightblue ${
          pathname.startsWith("/products")
            ? "text-lightblue"
            : "text-foreground"
        }`}
      >
        produkter
      </Link>

      <Link
        href="/cart"
        aria-label="Gå til indkøbskurven"
        className={`transition-colors hover:text-lightblue ${
          pathname.startsWith("/cart")
            ? "text-lightblue"
            : "text-foreground"
        }`}
      >
    
        <IoCartOutline size={28} />
      </Link>
    </nav>
  );
}






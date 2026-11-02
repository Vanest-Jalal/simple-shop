
import Link from "next/link";

export default function Logo() {
  return (
    // Klik på navnet for at komme til forsiden
    <Link
      href="/"
      className="text-2xl font-semibold tracking-tight text-blue"
    >
      BeautyShop
    </Link>
  );
}

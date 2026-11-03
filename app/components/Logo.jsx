
import Link from "next/link";

export default function Logo() {
  return (
    // Klik på logoet for at komme til forsiden
    <Link
      href="/"
      className="text-2xl font-semibold tracking-tight text-[#141B21]"
    >
      BeautyShop
    </Link>
  );
}


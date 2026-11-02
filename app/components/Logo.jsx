import Link from "next/link";
import { GiLipstick } from "react-icons/gi";

export default function Logo() {
  return (
    <Link href="/" aria-label="Gå til forsiden">
      <GiLipstick size={32} />
    </Link>
  );
}

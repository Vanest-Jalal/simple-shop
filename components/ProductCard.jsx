import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-2">
      <Link href={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-48 h-48 object-contain rounded-lg"
        />
      </Link>
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button
        type="button"
        aria-label={`Tilføj ${product.title} til kurven`}
        className="bg-blue text-white p-3 rounded-lg hover:opacity-80 transition-opacity"
      >
        <IoCartOutline size={32} />
      </button>
    </div>
  );
}

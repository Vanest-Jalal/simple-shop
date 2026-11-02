import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-2 h-full">
      <Link href={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-48 h-48 object-contain rounded-lg"
        />
      </Link>
      <h3>{product.title}</h3>

      <div className="mt-auto flex flex-col items-start gap-3">
        <p className="font-bold">${product.price}</p>
        <button
          type="button"
          aria-label={`Tilføj ${product.title} til kurven`}
          className="bg-blue text-white w-14 h-14 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <IoCartOutline size={28} />
        </button>
      </div>
    </div>
  );
}

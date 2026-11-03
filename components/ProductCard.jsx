import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

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
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}

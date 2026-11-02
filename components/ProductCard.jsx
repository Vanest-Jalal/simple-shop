import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div>
      <Link href={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-48 h-48 object-contain rounded-lg"
        />
      </Link>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
}


import Link from "next/link";
import { FaArrowLeft, FaTruck, FaBoxOpen, FaBox } from "react-icons/fa";

export default async function ProductDetails({ params }) {
  // Henter produktets ID fra URL'en
  const { id } = await params;

  // Henter det valgte produkt fra DummyJSON API'et
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">

      {/* Tilbage til produktoversigten */}
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-blue"
      >
        <FaArrowLeft aria-hidden="true" />
        Tilbage til produkter
      </Link>

      {/* Produktbillede og produktinformation */}
      <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2">

        {/* Produktbillede */}
        <div className="rounded-lg bg-white p-8">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-96 w-full object-contain"
          />
        </div>

        {/* Produktinformation */}
        <div className="flex flex-col justify-center">

          {/* Produktnavn */}
          <h1>{product.title}</h1>

          {/* Produktbeskrivelse */}
          <p className="mt-4">{product.description}</p>

          {/* Produktpris */}
          <p className="mt-6">{product.price} $</p>

          {/* Læg i kurv knap */}
          <button
            type="button"
            className="mt-6 w-fit rounded-md bg-blue px-10 py-4 text-white transition-colors hover:bg-lightblue hover:text-foreground"
          >
            Læg i kurv
          </button>

          {/* Information om levering, retur og indpakning */}
          <div className="mt-10 flex flex-col gap-6 border-t border-foreground/20 pt-6 text-foreground">

            {/* Hurtig levering */}
            <div className="flex items-center gap-4">
              <FaTruck className="shrink-0 text-2xl" />
              <div>
                <p className="font-semibold">Hurtig levering</p>
                <p className="text-sm">
                  Levering inden for 1-3 hverdage
                </p>
              </div>
            </div>

            {/* Returret */}
            <div className="flex items-center gap-4">
              <FaBoxOpen className="shrink-0 text-2xl" />
              <div>
                <p className="font-semibold">30 dages returret</p>
                <p className="text-sm">
                  Nem og fleksibel returnering
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}




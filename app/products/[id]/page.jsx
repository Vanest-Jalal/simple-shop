
export default async function ProductDetails({ params }) {
  // Henter produktets ID fra URL'en
  const { id } = await params;

  // Henter produktet fra API'et
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

        {/* Produktbillede - rykket længere ned */}
        <div className="mt-16 rounded-lg bg-white p-8">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-96 w-full object-contain"
          />
        </div>

      {/* Produktinformation */}
<div className="mt-32">
          <h1>{product.title}</h1>

          {/* Produktbeskrivelse */}
          <p className="mt-4">{product.description}</p>

          {/* Pris */}
          <p className="mt-6 text-2xl font-semibold">
            {product.price} $
          </p>

          {/* Læg i kurv-knap */}
          <button
            type="button"
            className="mt-6 rounded-md bg-blue px-10 py-4 text-white hover:bg-lightblue hover:text-foreground"
          >
            Læg i kurv
          </button>
        </div>

      </div>
    </main>
  );
}


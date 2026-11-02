
import Link from "next/link";
import Image from "next/image";

// Opretter vores forside
export default function Home() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero-sektion med billede som baggrund */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-center px-10 md:px-20">

        {/* Hero billede, som fylder hele hero sektionen */}
        <Image
          src="/beautyhero.jpg"
          alt="Parfume og skønhedsprodukter"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />

        {/* Indholdet placeres foran billedet */}
        <div className="relative z-10">

          <h1>Find dine beauty essentials</h1>

          <p className="mt-4 max-w-sm">
            Opdag vores udvalg af makeup og parfume.
            <br />
            Find dine nye favoritter.
          </p>

          {/* Knap til produktsiden */}
          <Link
            href="/products"
            className="mt-6 inline-block rounded-md bg-lightblue px-10 py-4 text-foreground transition-colors hover:bg-blue hover:text-white"
          >
            shop nu
          </Link>

        </div>
      </section>
    </main>
  );
}


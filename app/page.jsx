
import Link from "next/link";

// Opretter vores forside
export default function Home() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero-sektion med indholdet placeret til venstre */}
      <section className="flex min-h-[calc(100vh-80px)] items-center px-10 md:px-20 flex-col items-start justify-center">

        {/* H1 bruger styling fra globals.css */}
        <h1>Find dine beauty essentials</h1>
       <p className="mt-4 max-w-md">
  Udforsk vores udvalg af makeup og parfume,
  og find dine nye favoritter til enhver anledning.
</p>

        {/* Knap til produktsiden */}
        <Link
          href="/products"
          className="mt-6 rounded-md bg-lightblue px-10 py-4 text-foreground transition-colors hover:bg-blue hover:text-white"
        >
          shop nu
        </Link>

      </section>
    </main>
  );
}


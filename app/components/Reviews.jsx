const reviews = [
  {
    id: 1,
    name: "Emma",
    rating: 5,
    text: "Super fine produkter og hurtig levering!",
  },
  {
    id: 2,
    name: "Sofie",
    rating: 5,
    text: "Jeg er virkelig glad for mine nye beauty-produkter.",
  },
  {
    id: 3,
    name: "Laura",
    rating: 4,
    text: "God oplevelse og nem hjemmeside at handle på.",
  },
];

export default function Reviews() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-3xl font-semibold">
          Hvad siger vores kunder?
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col gap-4 rounded-xl bg-white p-8 shadow-md"
            >
              <div className="text-xl text-yellow-500">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>

              <p className="flex-1 text-foreground">"{review.text}"</p>

              <h3 className="font-semibold">{review.name}</h3>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Eksempelanmeldelser til skoleprojektet
        </p>
      </div>
    </section>
  );
}

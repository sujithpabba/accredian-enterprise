const stats = [
  {
    number: "1000+",
    title: "Enterprise Clients",
  },
  {
    number: "10M+",
    title: "Learners",
  },
  {
    number: "500+",
    title: "Industry Experts",
  },
  {
    number: "95%",
    title: "Completion Rate",
  },
];

export default function Statistics() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Trusted by Leading Organizations
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-xl border p-8 text-center shadow-sm transition hover:shadow-lg"
            >
              <h3 className="text-4xl font-bold text-blue-600">
                {stat.number}
              </h3>

              <p className="mt-3 text-gray-600">
                {stat.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
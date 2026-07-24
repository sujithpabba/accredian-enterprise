const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Infosys",
  "TCS",
  "Accenture",
];

export default function Companies() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
          Trusted by Top Companies
        </h2>

        <p className="mb-12 text-center text-gray-600">
          Organizations across industries trust Accredian to upskill their workforce.
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company}
              className="flex h-24 items-center justify-center rounded-lg border bg-gray-50 font-semibold text-gray-700 transition hover:bg-blue-50"
            >
              {company}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
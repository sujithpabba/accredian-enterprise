const features = [
  {
    title: "Industry Experts",
    description:
      "Learn from experienced professionals with real-world industry knowledge.",
  },
  {
    title: "Flexible Learning",
    description:
      "Access courses anytime, anywhere, at your own pace.",
  },
  {
    title: "Enterprise Dashboard",
    description:
      "Track employee progress with detailed analytics and reports.",
  },
  {
    title: "Recognized Certifications",
    description:
      "Earn certificates that add value to employee growth.",
  },
];

export default function WhyAccredian() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-slate-900">
          Why Choose Accredian?
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
          Everything your organization needs to build a future-ready workforce.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-200 p-8 transition hover:shadow-lg"
            >
              <h3 className="mb-3 text-xl font-semibold text-blue-600">
                {feature.title}
              </h3>

              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
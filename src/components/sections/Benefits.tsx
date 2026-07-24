const benefits = [
  {
    title: "Industry-Aligned Curriculum",
    description:
      "Courses are designed with industry experts to meet current market demands.",
  },
  {
    title: "Expert Mentorship",
    description:
      "Learn from experienced professionals through live sessions and guidance.",
  },
  {
    title: "Progress Tracking",
    description:
      "Track employee learning progress with detailed analytics and reports.",
  },
  {
    title: "Certification",
    description:
      "Employees receive industry-recognized certificates after successful completion.",
  },
  {
    title: "Dedicated Support",
    description:
      "Get continuous support from our enterprise success team.",
  },
  {
    title: "Flexible Learning",
    description:
      "Access learning resources anytime, anywhere, across multiple devices.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-4xl font-bold">
          Why Choose Accredian?
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-gray-600">
          Empower your workforce with industry-ready learning programs designed
          to improve skills, productivity, and career growth.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-4 text-xl font-semibold text-blue-600">
                {benefit.title}
              </h3>

              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
import SectionContainer from "@/components/ui/SectionContainer";

const stats = [
  {
    number: "500+",
    label: "Enterprise Clients",
  },
  {
    number: "50,000+",
    label: "Professionals Upskilled",
  },
  {
    number: "250+",
    label: "Industry Experts",
  },
  {
    number: "95%",
    label: "Client Satisfaction",
  },
];

export default function Statistics() {
  return (
    <section id="statistics" className="bg-blue-50 py-16 sm:py-20">
      <SectionContainer>
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Measurable Impact
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Learning that moves the business.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-slate-600">
            Empower organizations with industry-focused learning programs that
            deliver measurable results and long-term business growth.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-blue-100 bg-white sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.number}
              className={`
                p-8
                ${
                  index !== stats.length - 1
                    ? "border-b border-blue-100 sm:border-b-0 lg:border-r"
                    : ""
                }
                ${
                  index === 0
                    ? "sm:border-r lg:border-r"
                    : ""
                }
                ${
                  index === 2
                    ? "sm:border-r lg:border-r"
                    : ""
                }
              `}
            >
              <p className="text-4xl font-bold tracking-tight text-blue-700">
                {stat.number}
              </p>

              <p className="mt-3 max-w-[150px] text-sm leading-6 text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
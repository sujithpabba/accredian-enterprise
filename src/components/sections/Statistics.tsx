import SectionContainer from "@/components/ui/SectionContainer";

const stats = [
  { number: "94%", label: "of learners apply a new skill at work" },
  { number: "4.8/5", label: "average program experience score" },
  { number: "32", label: "business domains supported" },
  { number: "2.4×", label: "faster time to role readiness" },
];

export default function Statistics() {
  return (
    <section id="outcomes" className="bg-blue-50 py-16 sm:py-20">
      <SectionContainer>
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Measurable impact</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Learning that moves the business.</h2></div><p className="max-w-sm text-sm leading-6 text-slate-600">Every program is designed around the outcomes your people and organization need.</p></div>
        <div className="grid overflow-hidden rounded-2xl border border-blue-100 bg-white sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => <div key={stat.number} className="border-b border-blue-100 p-7 last:border-b-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"><p className="text-4xl font-semibold tracking-tight text-blue-700">{stat.number}</p><p className="mt-3 max-w-40 text-sm leading-6 text-slate-600">{stat.label}</p></div>)}
        </div>
      </SectionContainer>
    </section>
  );
}

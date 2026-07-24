import Card from "@/components/ui/Card";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  ["01", "Built around your strategy", "Align programs to your workforce plans, market shifts, and the goals that matter now."],
  ["02", "Experts who understand the work", "Bring practitioners into the learning journey, from real projects to relevant feedback."],
  ["03", "One clear view of progress", "Give leaders a simple view of engagement, capability growth, and meaningful outcomes."],
  ["04", "Flexible by design", "Blend live learning, workshops, and on-demand content around how your teams actually work."],
];

export default function Benefits() {
  return (
    <section id="platform" className="bg-white py-20 sm:py-28">
      <SectionContainer>
        <SectionHeading eyebrow="The enterprise learning studio" title="Everything your teams need to keep moving forward." description="A practical learning system that feels personal to employees and clear to the people leading them." />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {features.map(([number, title, description]) => <Card key={number} className="group p-7 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5"><div className="flex items-start gap-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-700 transition group-hover:bg-blue-600 group-hover:text-white">{number}</span><div><h3 className="text-xl font-semibold tracking-tight text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{description}</p><span className="mt-5 inline-block text-sm font-semibold text-blue-700">See how it works →</span></div></div></Card>)}
        </div>
      </SectionContainer>
    </section>
  );
}

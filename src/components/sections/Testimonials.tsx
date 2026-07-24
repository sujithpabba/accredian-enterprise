import Card from "@/components/ui/Card";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

const stories = [
  { quote: "The program gave our managers a shared language for leading through change. The difference was visible in weeks, not quarters.", name: "Maya Chen", role: "People Operations Director, Northstar" },
  { quote: "We finally have a learning partner that starts with the business problem and makes progress simple to show to leadership.", name: "Rohan Mehta", role: "VP, Talent Development, Vertex" },
];

export default function Testimonials() {
  return (
    <section id="stories" className="bg-slate-50 py-20 sm:py-28">
      <SectionContainer>
        <SectionHeading eyebrow="Customer stories" title="Ambitious teams, stronger from within." description="The best learning experience is one that changes how work gets done." />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {stories.map((story) => <Card key={story.name} className="p-8 shadow-sm"><span className="text-5xl leading-none text-blue-600">“</span><blockquote className="mt-5 text-xl font-medium leading-8 text-slate-900">{story.quote}</blockquote><div className="mt-8 border-t border-slate-200 pt-5"><p className="font-semibold text-slate-950">{story.name}</p><p className="mt-1 text-sm text-slate-500">{story.role}</p></div></Card>)}
        </div>
      </SectionContainer>
    </section>
  );
}

import Card from "@/components/ui/Card";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

const partners = ["Cloud & data", "Product management", "Leadership", "Cybersecurity", "Design & innovation", "Operations"];

export default function Partners() {
  return (
    <section id="partners" className="bg-white py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><SectionHeading align="left" eyebrow="Enterprise partners" title="Specialist knowledge, made useful." description="We connect your team with seasoned practitioners across the capabilities shaping modern business." /><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{partners.map((partner) => <Card key={partner} className="p-5 transition hover:border-blue-200 hover:bg-blue-50"><div className="mb-5 h-7 w-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-300" /><p className="text-sm font-semibold text-slate-800">{partner}</p></Card>)}</div></div>
      </SectionContainer>
    </section>
  );
}

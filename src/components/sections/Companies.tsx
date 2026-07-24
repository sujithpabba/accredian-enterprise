import LogoGrid from "@/components/ui/LogoGrid";
import SectionContainer from "@/components/ui/SectionContainer";

export default function Companies() {
  return (
    <section id="clients" className="bg-white py-20">
      <SectionContainer>
        <p className="mb-12 text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          Trusted by Leading Organizations
        </p>

        <LogoGrid />
      </SectionContainer>
    </section>
  );
}
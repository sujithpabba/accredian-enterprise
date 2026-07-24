import LogoGrid from "@/components/ui/LogoGrid";
import SectionContainer from "@/components/ui/SectionContainer";

export default function Companies() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <SectionContainer>
        <p className="mb-7 text-center text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Trusted by teams shaping what&apos;s next</p>
        <LogoGrid />
      </SectionContainer>
    </section>
  );
}

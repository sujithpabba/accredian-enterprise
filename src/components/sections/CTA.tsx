import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";

export default function CTA() {
  return (
    <section className="bg-white pb-20 sm:pb-28">
      <SectionContainer>
        <div className="rounded-3xl border border-blue-100 bg-blue-50 px-7 py-12 sm:px-12 sm:py-14"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Make the next move</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Give your people a clearer path to their best work.</h2><p className="mt-4 max-w-xl leading-7 text-slate-600">Start with a conversation about the capability your business needs to build next.</p><Button text="Talk to an advisor" className="mt-7" /></div></div>
      </SectionContainer>
    </section>
  );
}

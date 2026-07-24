import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";

export default function CTA() {
  return (
    <section className="bg-white pb-20 sm:pb-28">
      <SectionContainer>
        <div className="relative overflow-hidden rounded-3xl bg-blue-700 px-7 py-12 text-white sm:px-12 sm:py-14"><div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[36px] border-blue-400/40" /><div className="relative max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Make the next move</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Give your people a clearer path to their best work.</h2><p className="mt-4 max-w-xl leading-7 text-blue-100">Start with a conversation about the capability your business needs to build next.</p><Button text="Talk to an advisor" className="mt-7 bg-white text-blue-700 hover:bg-blue-50" /></div></div>
      </SectionContainer>
    </section>
  );
}

import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";

const highlights = ["Tailored learning paths", "Industry-led instruction", "Flexible delivery"];

export default function Hero() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <SectionContainer>
        <div className="grid items-center gap-10 rounded-3xl bg-[#f2f8ff] px-6 py-9 sm:px-10 sm:py-12 lg:grid-cols-2 lg:px-14 lg:py-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Enterprise learning solutions</p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Build confident teams for what&apos;s next.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
              Give your workforce practical, industry-relevant learning experiences that support stronger performance and lasting growth.
            </p>
            <ul className="mt-7 grid gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3">
              {highlights.map((highlight) => <li key={highlight} className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-700">✓</span>{highlight}</li>)}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button text="Talk to an expert" /><Button text="Explore programs" variant="outline" /></div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-slate-200 shadow-lg shadow-blue-950/10">
            <Image src="/images/enterprise-training-workshop.png" alt="Professionals collaborating during a corporate training workshop" width={1717} height={912} priority className="h-[300px] w-full object-cover sm:h-[380px]" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/55 to-transparent px-6 pb-5 pt-16"><p className="text-sm font-medium text-white">Learning built around your people and your priorities.</p></div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-slate-950 py-16 text-white sm:py-20 lg:py-24">
      <SectionContainer className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-blue-100">Built for ambitious teams</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Make capability your company&apos;s advantage.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Design learning experiences that turn your business goals into confident, high-performing teams.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button text="Build your learning plan" className="bg-blue-500 hover:bg-blue-400" />
            <Button text="Explore the platform" variant="outline" className="border-white/30 text-white hover:bg-white/10" />
          </div>
          <p className="mt-8 text-sm text-slate-400">No one-size-fits-all programs. Just the skills your team needs next.</p>
        </div>

        <div className="relative mx-auto w-full max-w-xl rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-5 shadow-2xl shadow-blue-950/40">
          <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-blue-500/25 blur-3xl" />
          <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 p-5">
            <div className="flex items-center justify-between"><div><p className="text-xs font-medium uppercase tracking-widest text-slate-400">Team momentum</p><p className="mt-1 text-2xl font-semibold">Q3 learning pulse</p></div><span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-medium text-emerald-300">+18.4%</span></div>
            <div className="mt-7 grid grid-cols-7 items-end gap-2" aria-label="Learning progress chart">
              {[38, 52, 48, 66, 59, 78, 90].map((height, index) => <div key={height} className="rounded-t-md bg-blue-500" style={{ height: `${height}px`, opacity: 0.55 + index * 0.06 }} />)}
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2"><div className="rounded-xl bg-white p-4 text-slate-950"><p className="text-xs font-medium text-slate-500">Skills verified</p><p className="mt-2 text-2xl font-semibold">1,284</p><p className="mt-1 text-xs text-emerald-600">↑ 12% this month</p></div><div className="rounded-xl border border-white/10 p-4"><p className="text-xs font-medium text-slate-400">Next focus</p><p className="mt-2 text-base font-semibold">AI product fluency</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-700"><div className="h-full w-3/4 rounded-full bg-emerald-400" /></div></div></div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

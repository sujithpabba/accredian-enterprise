import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-slate-300"><SectionContainer><div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row"><div><div className="flex items-center gap-2.5"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-slate-950">A</span><span className="text-lg font-semibold text-white">accredian.enterprise</span></div><p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">Learning infrastructure for teams with somewhere important to go.</p></div><div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm"><Link href="#platform" className="hover:text-white">Platform</Link><Link href="#outcomes" className="hover:text-white">Outcomes</Link><Link href="#stories" className="hover:text-white">Stories</Link><Link href="#contact" className="hover:text-white">Contact</Link></div></div><div className="pt-7 text-sm text-slate-500">© 2026 Accredian Enterprise. Built for better work.</div></SectionContainer></footer>
  );
}

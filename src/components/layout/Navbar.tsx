import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { name: "Platform", href: "#platform" },
  { name: "Outcomes", href: "#outcomes" },
  { name: "Stories", href: "#stories" },
  { name: "Partners", href: "#partners" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Accredian Enterprise home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white">A</span>
          <span className="text-lg font-semibold tracking-tight text-slate-950">accredian<span className="text-blue-600">.enterprise</span></span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block"><Button text="Book a demo" className="px-4 py-2 text-sm" /></div>

        <details className="relative md:hidden">
          <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open navigation menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" /></svg>
          </summary>
          <nav className="absolute right-0 top-11 w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-xl" aria-label="Mobile navigation">
            {navLinks.map((link) => <Link key={link.name} href={link.href} className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">{link.name}</Link>)}
            <Button text="Book a demo" className="mt-2 w-full px-3 py-2 text-sm" />
          </nav>
        </details>
      </div>
    </header>
  );
}

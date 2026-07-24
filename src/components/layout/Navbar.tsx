import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Clients", href: "#clients" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Accredian Home"
          className="text-2xl font-bold tracking-tight text-blue-600"
        >
          Accredian
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
              text="Contact Us"
              href="#contact"
              className="px-5 py-2 text-sm"
            />
        </div>

        {/* Mobile Menu */}
        <details className="relative md:hidden">
          <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open navigation menu</span>

            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                strokeLinecap="round"
              />
            </svg>
          </summary>

          <nav
            className="absolute right-0 top-11 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                {link.name}
              </Link>
            ))}

            <Button
              text="Contact Us"
              href="#contact"
              className="px-5 py-2 text-sm"
            />
          </nav>
        </details>
      </div>
    </header>
  );
}
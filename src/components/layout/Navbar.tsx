import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Stats", href: "#stats" },
  { name: "Clients", href: "#clients" },
  { name: "Accredian Edge", href: "#accredian-edge" },
  { name: "CAT", href: "#cat" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "FAQs", href: "#faqs" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  return (
    <header className="relative z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-14">
        <Link href="/" className="shrink-0" aria-label="Accredian home">
          <Image
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
            alt="Accredian"
            width={128}
            height={40}
            className="h-auto w-28"
          />
        </Link>

        <nav className="hidden xl:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[15px] font-semibold text-slate-900 transition-colors hover:text-[#1479e8]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden xl:block">
          <Button text="Contact Us" className="px-5 py-2 text-sm" />
        </div>

        <details className="relative xl:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-slate-200 text-slate-900 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open navigation menu</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </summary>
          <nav className="absolute right-0 top-12 w-64 rounded-lg border border-slate-200 bg-white p-4 shadow-lg" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="block rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-[#1479e8]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button text="Contact Us" className="mt-3 w-full px-4 py-2 text-sm" />
          </nav>
        </details>
      </div>
    </header>
  );
}

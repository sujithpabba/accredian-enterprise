"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Programs", href: "#programs" },
  { name: "Benefits", href: "#benefits" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          Accredian
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button text="Contact Us" />
      </div>
    </header>
  );
}
import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <SectionContainer>
        <div className="grid gap-12 border-b border-slate-800 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Accredian
            </h2>

            <p className="mt-3 max-w-md leading-7 text-slate-400">
              Empowering organizations with enterprise learning programs that
              help teams build practical skills and drive business growth.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Quick Links
              </h3>

              <ul className="space-y-3">
                <li>
                  <Link href="#home" className="hover:text-white">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="#programs" className="hover:text-white">
                    Programs
                  </Link>
                </li>

                <li>
                  <Link href="#features" className="hover:text-white">
                    Features
                  </Link>
                </li>

                <li>
                  <Link href="#contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>

                <li>
                  <Link href="#faq" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Contact
              </h3>

              <ul className="space-y-3">
                <li>enterprise@accredian.com</li>
                <li>+91 XXXXX XXXXX</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-6 text-center text-sm text-slate-500">
          © 2026 Accredian Enterprise. All rights reserved.
        </div>
      </SectionContainer>
    </footer>
  );
}
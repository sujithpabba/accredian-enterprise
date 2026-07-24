import Button from "@/components/ui/Button";
import Image from "next/image";

const highlights = ["Tailored Solutions", "Industry Insights", "Expert Guidance"];

export default function Hero() {
  return (
    <section id="home" className="bg-[#f8f8f8] px-4 py-10 sm:px-6 lg:px-14 lg:py-12">
      <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[28px] bg-[#eaf5ff] md:grid-cols-2">
        <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
          <h1 className="max-w-xl text-4xl font-bold leading-[1.04] tracking-tight text-black sm:text-5xl lg:text-[58px]">
            Next-Gen <span className="text-[#1479e8]">Expertise</span>
            <br />
            For Your <span className="text-[#1479e8]">Enterprise</span>
          </h1>

          <p className="mt-8 max-w-md text-xl font-medium leading-snug text-black sm:text-2xl">
            Cultivate high-performance teams through expert learning.
          </p>

          <ul className="mt-8 flex flex-col gap-4 text-base font-medium text-slate-900 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-[#11a66a]" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="9.5" />
                  <path d="m8 12 2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button text="Enquire Now" className="min-w-40 shadow-md" />
          </div>
        </div>

        <div className="flex items-end justify-center px-4 pt-8 md:pt-0">
          <Image
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
            alt="Two business professionals representing Accredian enterprise learning"
            width={650}
            height={520}
            priority
            className="h-auto w-full max-w-[650px] object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

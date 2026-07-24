import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";

export default function Hero() {
  return (
    <section id="home" className="bg-white py-20">
      <SectionContainer>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
              Enterprise Learning Solutions
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Empower Your Workforce with Industry-Ready Learning
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Help your teams build practical skills through expert-led
              programs designed for modern businesses. Improve productivity,
              accelerate growth, and prepare your workforce for tomorrow.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                text="Contact Us"
                href="#contact"
              />

              <Button
                text="Explore Programs"
                href="#programs" variant="outline"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/enterprise-training-workshop.png"
              alt="Corporate training session"
              width={1717}
              height={912}
              priority
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
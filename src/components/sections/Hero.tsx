import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-20 md:flex-row">

        {/* Left Side */}
        <div className="flex-1">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Enterprise Learning Platform
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
            Upskill Your Workforce
            <span className="text-blue-600">
              {" "}Faster
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empower your employees with industry-focused learning
            programs, expert mentorship, and measurable outcomes.
          </p>

          <div className="mt-10 flex gap-4">
            <Button text="Talk to an Expert" />

            <Button
              text="Explore Programs"
              className="bg-blue text-blue-600 border border-blue-600 hover:bg-blue-50"
            />
          </div>

        </div>

        {/* Right Side */}

        <div className="flex flex-1 justify-center">

          <div className="flex h-[400px] w-[500px] items-center justify-center rounded-2xl bg-blue-100">

            <span className="text-xl font-semibold text-blue-600">
              Hero Image
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}
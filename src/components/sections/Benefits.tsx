import Card from "@/components/ui/Card";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    number: "01",
    title: "Customized Learning Programs",
    description:
      "Design learning journeys that align with your organization's goals, workforce, and business objectives.",
  },
  {
    number: "02",
    title: "Industry Expert Mentors",
    description:
      "Learn from experienced professionals who provide practical guidance and real-world insights.",
  },
  {
    number: "03",
    title: "Progress Tracking",
    description:
      "Track employee engagement, learning progress, and business outcomes through a centralized dashboard.",
  },
  {
    number: "04",
    title: "Flexible Learning Experience",
    description:
      "Support instructor-led, self-paced, and hybrid learning programs for teams of every size.",
  },
];

export default function Benefits() {
  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <SectionContainer>
        <SectionHeading
          eyebrow="Enterprise Features"
          title="Everything Your Organization Needs to Build Future-Ready Teams"
          description="Deliver high-quality learning experiences that help employees develop practical skills and drive measurable business growth."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Card
              key={feature.number}
              className="p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-base font-bold text-white">
                  {feature.number}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
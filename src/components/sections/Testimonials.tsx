import Card from "@/components/ui/Card";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "The learning program helped our employees improve collaboration and deliver projects more efficiently. The customized approach made a noticeable difference across teams.",
    role: "Learning & Development Manager",
    company: "Global Technology Company",
  },
  {
    quote:
      "Our teams gained practical skills that could be applied immediately in day-to-day work. The structured learning paths made training more engaging and effective.",
    role: "HR Business Partner",
    company: "Financial Services Organization",
  },
  {
    quote:
      "The enterprise learning experience was well organized, easy to track, and aligned perfectly with our business goals. We saw improvement in employee engagement.",
    role: "Talent Development Lead",
    company: "Healthcare Enterprise",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20 sm:py-24">
      <SectionContainer>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="See how organizations have transformed employee learning and professional development through our enterprise programs."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.role}
              className="p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="-mb-3 text-7xl font-bold leading-none text-blue-500">
                &ldquo;
              </div>

              <blockquote className="text-slate-700 leading-7">
                "{testimonial.quote}"
              </blockquote>

              <div className="mt-8 border-t border-slate-200 pt-5">
                <h3 className="font-semibold text-slate-900">
                  {testimonial.role}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
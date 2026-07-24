import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faChartLine,
  faUsers,
  faShieldHalved,
  faLightbulb,
  faGears,
} from "@fortawesome/free-solid-svg-icons";

import Card from "@/components/ui/Card";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

const programs = [
  {
    title: "Cloud & Data",
    description:
      "Build expertise in cloud computing, data engineering, analytics, and modern data platforms.",
    icon: faCloud,
  },
  {
    title: "Product Management",
    description:
      "Learn product strategy, roadmap planning, stakeholder management, and product delivery.",
    icon: faChartLine,
  },
  {
    title: "Leadership",
    description:
      "Develop leadership, communication, decision-making, and people management skills.",
    icon: faUsers,
  },
  {
    title: "Cybersecurity",
    description:
      "Strengthen security awareness, risk management, and cybersecurity best practices.",
    icon: faShieldHalved,
  },
  {
    title: "Design & Innovation",
    description:
      "Encourage creative thinking, design thinking, and innovation-driven problem solving.",
    icon: faLightbulb,
  },
  {
    title: "Operations",
    description:
      "Improve operational efficiency, business processes, and project execution capabilities.",
    icon: faGears,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-white py-20 sm:py-24">
      <SectionContainer>
        <SectionHeading
          eyebrow="Enterprise Learning Programs"
          title="Explore Our Learning Programs"
          description="Choose from industry-focused programs designed to help organizations build future-ready teams."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Card
              key={program.title}
              className="p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700">
                <FontAwesomeIcon icon={program.icon} />
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                {program.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {program.description}
              </p>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
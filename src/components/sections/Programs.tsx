"use client";

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
import { useEffect, useState } from "react";
import { getPrograms } from "@/services/programService";
import { Program } from "@/types/program";

const iconMap = {
  cloud: faCloud,
  chart: faChartLine,
  users: faUsers,
  shield: faShieldHalved,
  lightbulb: faLightbulb,
  gears: faGears,
};


export default function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    async function loadPrograms() {
      try {
        const data = await getPrograms();
        setPrograms(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadPrograms();
  }, []);

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
              className="p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-3xl text-blue-700">
                <FontAwesomeIcon icon={iconMap[program.icon as keyof typeof iconMap]} />
              </div>

              <h3 className="mt-2 text-xl font-semibold text-slate-900">
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
"use client";

import { useState } from "react";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "How are the learning programs customized?",
    answer:
      "Every learning program is designed based on your organization's goals, workforce requirements, and business objectives.",
  },
  {
    question: "Who delivers the training sessions?",
    answer:
      "Our programs are delivered by experienced industry professionals and subject matter experts with practical experience.",
  },
  {
    question: "Can we track employee progress?",
    answer:
      "Yes. Managers can monitor participation, learning progress, and overall skill development through detailed reports.",
  },
  {
    question: "Are the programs suitable for remote teams?",
    answer:
      "Absolutely. We support instructor-led, self-paced, and hybrid learning models for distributed teams.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <SectionContainer>
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Got Questions?"
          description="Find answers to the most common questions about our enterprise learning platform."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-slate-200 last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <span className="text-3xl font-light text-blue-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="pb-6">
                  <p className="leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
"use client";

import { useState } from "react";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "How are enterprise learning programs customized?",
    answer:
      "Every program is designed based on your organization's goals, workforce requirements, and business objectives to ensure maximum impact.",
  },
  {
    question: "Who delivers the training programs?",
    answer:
      "Training is delivered by experienced industry professionals and subject matter experts with real-world experience.",
  },
  {
    question: "Can we track employee learning progress?",
    answer:
      "Yes. Organizations can monitor employee participation, skill development, and overall learning outcomes through detailed progress tracking.",
  },
  {
    question: "Are the programs suitable for remote teams?",
    answer:
      "Yes. Programs support instructor-led, self-paced, and hybrid learning models, making them suitable for both on-site and remote teams.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-slate-50 py-20 sm:py-24">
      <SectionContainer>
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Everything You Need to Know"
          description="Find answers to the most common questions about our enterprise learning solutions."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <span className="text-2xl font-bold text-blue-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="leading-7 text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
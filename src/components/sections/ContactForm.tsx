"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import SectionContainer from "@/components/ui/SectionContainer";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-12"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Start a conversation</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Let&apos;s make learning work harder for your team.</h2><p className="mt-5 leading-7 text-slate-600">Tell us a little about your goals. Our enterprise team will get back to you within two business days.</p><div className="mt-8 rounded-xl bg-slate-50 p-5"><p className="font-semibold text-slate-900">Prefer email?</p><a href="mailto:enterprise@accredian.com" className="mt-1 inline-block text-sm font-medium text-blue-700 hover:underline">enterprise@accredian.com</a></div></div><form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2"><Input label="Full name" id="name" name="name" placeholder="Your name" required /><Input label="Work email" id="email" name="email" type="email" placeholder="you@company.com" required /><Input label="Company" id="company" name="company" placeholder="Company name" required /><Input label="Team size" id="team-size" name="team-size" placeholder="e.g. 250" /><div className="sm:col-span-2"><Textarea label="What would you like to build?" id="message" name="message" placeholder="Tell us about your learning goals..." required /></div><div className="sm:col-span-2"><Button text={submitted ? "Thanks — we’ll be in touch" : "Send enquiry"} type="submit" className="w-full sm:w-auto" /></div>{submitted && <p className="sm:col-span-2 text-sm text-emerald-700">Your enquiry has been noted. We&apos;ll reply soon.</p>}</form></div>
      </SectionContainer>
    </section>
  );
}

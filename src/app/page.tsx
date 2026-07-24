import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Companies from "@/components/sections/Companies";
import Statistics from "@/components/sections/Statistics";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import CTA from "@/components/sections/CTA";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return <><Navbar /><main><Hero /><Companies /><Statistics /><Benefits /><Testimonials /><Partners /><CTA /><ContactForm /></main><Footer /></>;
}

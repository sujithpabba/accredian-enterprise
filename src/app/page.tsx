import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Statistics from "@/components/sections/Statistics";
import Benefits from "@/components/sections/Benefits";
import Companies from "@/components/sections/Companies";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Benefits />
      <Companies />
    </>
  );
}
import { Nav } from "@/components/sections/nav/Nav";
import { Hero } from "@/components/sections/hero/Hero";
import { Problem } from "@/components/sections/problem/Problem";
import { Solution } from "@/components/sections/solution/Solution";
import { HowItWorks } from "@/components/sections/how-it-works/HowItWorks";
import { Benefits } from "@/components/sections/benefits/Benefits";
import { About } from "@/components/sections/about/About";
import { Faq } from "@/components/sections/faq/Faq";
import { GetStarted } from "@/components/sections/get-started/GetStarted";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Benefits />
      <About />
      <Faq />
      <GetStarted />
    </div>
  );
}

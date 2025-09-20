"use client";

import Hero from "../components/Hero";
import WhoWeHelp from "../components/WhoWeHelp";
import About from "../components/About";

export default function Page() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero onConsultClick={() => {}} />
      <About />
      <WhoWeHelp />
    </main>
  );
}

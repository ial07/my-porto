"use client";

import About from "./home/partials/about";
import Hero from "./home/partials/hero";
import Navbar from "./home/partials/navbar";
import Portofolio from "./home/partials/portofolio";
import Skillset from "./home/partials/skillset";
import Superiority from "./home/partials/superiority";
import WorkExperience from "./home/partials/work-experience";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skillset />
      <Superiority />
      <Portofolio />
      <WorkExperience />
    </div>
  );
}

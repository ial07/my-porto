"use client";

import About from "./home/partials/about";
import Faq from "./home/partials/faq";
import Footer from "./home/partials/footer";
import Hero from "./home/partials/hero";
import Navbar from "./home/partials/navbar";
import Portofolio from "./home/partials/portofolio";
import Skillset from "./home/partials/skillset";
import Superiority from "./home/partials/superiority";
import Testimony from "./home/partials/testimony";
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
      <Testimony />
      <Faq/>
      <Footer/>
    </div>
  );
}

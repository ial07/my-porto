import Section from "@/components/layout/section";
import { ExperiencedItem } from "@/components/ui/experience";
import { experienceData } from "@/constants/experience-data";
import Image from "next/image";
import React from "react";

const WorkExperience: React.FC = () => {
  return (
    <Section
      title="Work Experience"
      subtitle="A timeline of companies and roles that helped shape my skills."
    >
      {experienceData.map((exp, index) => (
        <ExperiencedItem key={index} {...exp} isRight={index % 2 === 0} />
      ))}
    </Section>
  );
};

export default WorkExperience;

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
      className="relative"
    >
      {experienceData.map((exp, index) => (
        <ExperiencedItem
          key={index}
          index={index}
          totalItems={experienceData.length}
          {...exp}
          isRight={index % 2 === 0}
        />
      ))}
      <Image
        src="/images/Vector-bg.png"
        width={1500}
        height={1500}
        alt="vector"
        className="absolute top-20 -right-20 -z-50"
      />
      <Image
        src="/images/Vector-bg.png"
        width={1000}
        height={1000}
        alt="vector"
        className="absolute -bottom-100 -left-150 -z-10"
      />
    </Section>
  );
};

export default WorkExperience;

import CircularProgressBar from "@/components/circular-progressbar";
import Section from "@/components/layout/section";
import { skillsetData } from "@/constants/skillset-data";
import React from "react";

const Skillset: React.FC = () => {
  return (
    <Section
      title="Skillset"
      subtitle="Skills That Build Great Interfaces"
      className="bg-primary-200"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {skillsetData.map((skill) => (
          <CircularProgressBar
            key={skill.label}
            icon={skill.icon}
            label={skill.label}
            progress={skill.progress}
          />
        ))}
      </div>
    </Section>
  );
};

export default Skillset;

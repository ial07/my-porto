"use client";

import CardSuperiority from "@/components/card-superiority";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { handleScroll } from "@/lib/utils";
import React from "react";

const Superiority: React.FC = () => {
  return (
    <Section
      id="superiority"
      title="Superiority"
      subtitle="Built with design, speed, and UX in mind."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <CardSuperiority
          title="Working with me"
          image={"/images/me.jpg"}
          listData={[
            "React Expert",
            "Precise Website Implementation",
            "TypeScript Proficiency",
            "Clean, Maintainable Code",
            "Responsive Website Development",
            "UI Design Proficiency (Figma)",
          ]}
        />
        <CardSuperiority
          title="Another Developer"
          type="basic"
          listData={[
            "Basic React Knowledge",
            "Inconsistent Design Translation",
            "Little to No TypeScript Knowledge",
            "Unstructured Code",
            "Inconsistent Responsiveness",
            "No Design Skills",
          ]}
        />
      </div>

      <div className="mt-6 md:mt-12 flex-center">
        <Button
          variant={"secondary"}
          className="w-full md:w-fit"
          onClick={() => handleScroll("contact")}
        >
          Hire Me
        </Button>
      </div>
    </Section>
  );
};

export default Superiority;

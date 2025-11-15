"use client";

import { cn } from "@/lib/utils";
import React from "react";

type SectionProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
};

const Section: React.FC<SectionProps> = ({
  children,
  subtitle,
  title,
  className,
}) => {
  const isPrimaryBg = className?.includes("bg-primary");

  return (
    <section
      className={cn(
        "py-10 md:py-20",
        !isPrimaryBg && "custom-container",
        className
      )}
    >
      <div className="text-center">
        <h3
          className={cn(
            "text-sm-bold px-3 py-1 border border-neutral-300 w-fit rounded-full text-neutral-900 inline",
            isPrimaryBg && "text-neutral-25"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "display-sm-extrabold md:display-xl-extrabold mt-2 text-neutral-900",
            isPrimaryBg && "text-neutral-25"
          )}
        >
          {subtitle}
        </p>
        {/* content */}
        <div className={cn("mt-6 md:mt-12", isPrimaryBg && "custom-container")}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;

"use client";

import CardTestimony from "@/components/card-testimony";
import Section from "@/components/layout/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonyData } from "@/constants/testimony-data";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

const Testimony: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Section
      id="testimony"
      title="Testimony"
      subtitle="Built with Trust & Collaboration"
      isLeft={!isMobile ? true : false}
    >
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full gap-4 md:gap-5 mb-10"
        actionPosition={!isMobile ? `top` : `bottom`}
      >
        <CarouselContent>
          {testimonyData.map((test) => (
            <CarouselItem
              key={test.name}
              className="basis-1/1 lg:basis-1/3 h-full w-full py-10"
            >
              <CardTestimony
                description={test.description}
                image={test.image}
                job={test.job}
                name={test.name}
                rating={test.rating}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className={cn(
            !isMobile && `absolute -top-10 right-0 z-10 flex space-x-2 gap-3`
          )}
        >
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Section>
  );
};

export default Testimony;

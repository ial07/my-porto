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
import React from "react";

const Testimony: React.FC = () => {
  return (
    <Section title="Testimony" subtitle="Built with Trust & Collaboration">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full gap-4 md:gap-5 mb-10"
        actionPosition="top"
      >
        <CarouselContent>
          {testimonyData.map((test) => (
            <CarouselItem
              key={test.name}
              className="basis-1/2 lg:basis-1/3 h-full w-full py-10"
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
        <div className="absolute -top-10 right-0 z-10 flex space-x-2 gap-3">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Section>
  );
};

export default Testimony;

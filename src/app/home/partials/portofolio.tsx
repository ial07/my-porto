import CardPorto from "@/components/card-porto";
import Section from "@/components/layout/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { portofolioData } from "@/constants/portofolio-data";
import React from "react";

const Portofolio: React.FC = () => {
  return (
    <Section
      title="Portfolio"
      subtitle="Built with Passion, Shipped with Precision"
    >
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full gap-4 md:gap-5 mb-10"
      >
        <CarouselContent>
          {portofolioData.map((porto) => (
            <CarouselItem
              key={porto.label}
              className="md:basis-1/2 lg:basis-1/3 h-full w-full"
            >
              <CardPorto
                image={porto.image}
                label={porto.label}
                link={porto.link}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
};

export default Portofolio;

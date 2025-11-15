"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="w-full items-center gap-7 overflow-hidden pt-28 md:pt-[147px] h-[798px] md:max-h-full bg-[linear-gradient(to_right,transparent_1px),linear-gradient(to_bottom,transparent_1px),linear-gradient(180deg,#111827_0%,#3730A3_50%,#0F766E_100%)] 
    bg-size-[40px_40px,40px_40px,auto_auto] relative"
    >
      {/* Pattern Top */}
      <Image
        src="/images/pattern.png"
        alt="pattern"
        height={403}
        width={1752}
        className="absolute left-1/2 -translate-x-1/2 rotate-180 z-10 w-[1752px] h-[403px] min-w-[1752px] min-h-[403px] max-w-none"
        style={{ top: 0 }}
      />
      {/* Pattern Bottom */}
      <Image
        src="/images/pattern.png"
        alt="pattern"
        height={403}
        width={1752}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[1752px] h-[403px] min-w-[1752px] min-h-[403px] max-w-none"
        style={{ bottom: 0 }}
      />

      {/* Oval Bottom */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -bottom-30 w-[120vw] h-50 bg-white z-70"
        style={{
          borderRadius: "50% / 30%",
        }}
      />

      <div className="custom-container flex flex-wrap h-full">
        {/* Left */}
        <div className="flex-[3.8] basis-80">
          <h1 className="display-xl-bold md:display-3xl-bold">
            <span>Crafting</span> Interfaces, One Line at a Time
          </h1>
          <p className="mt-3 md:mt-6 text-md-semibold md:text-xl-semibold text-neutral-25">
            Build fast, accessible, and responsive web experiences that users
            love.
          </p>

          <Button className="mt-6 md:mt-17 w-full md:w-fit">Say Hello</Button>
        </div>

        {/* Right */}
        <Image
          src="/images/hero.png"
          alt="image"
          className="flex-[6.2] basis-80 relative bottom-0 object-contain z-50"
          height={1000}
          width={1000}
          style={{ width: "clamp(25.88rem, 62.91vw, 47.50rem)" }}
        />
      </div>
    </section>
  );
};

export default Hero;

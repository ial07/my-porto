"use client";

import { Button } from "@/components/ui/button";
import { handleScroll } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Typewriter = () => {
  const words = ["Crafting", "Building", "Designing", "Shaping"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const currentWord = words[index];

    const type = setInterval(() => {
      setText(currentWord.slice(0, charIndex));
      charIndex++;

      if (charIndex > currentWord.length) {
        clearInterval(type);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
          setText("");
        }, 1500);
      }
    }, 120);

    return () => clearInterval(type);
  }, [index]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-secondary-100 text-neutral-950 block w-fit"
    >
      {text}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        │
      </motion.span>
    </motion.span>
  );
};

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="w-full items-center gap-7 overflow-hidden pt-28 md:pt-[147px] h-[798px] md:max-h-full relative z-50"
      style={{
        backgroundImage:
          "linear-gradient(to right, transparent 1px), linear-gradient(to bottom, transparent 1px), linear-gradient(180deg, #111827 0%, #3730A3 50%, #0F766E 100%)",
        backgroundSize: "40px 40px, 40px 40px, auto auto",
      }}
    >
      {/* Pattern Top */}
      <Image
        src="/images/pattern.png"
        alt="pattern"
        height={1403}
        width={1752}
        className="absolute -top-30 left-1/2 -translate-x-1/2 rotate-180 -z-10 w-[1752px] h-[403px] min-w-[1752px] min-h-[403px] max-w-none"
      />
      {/* Pattern Bottom */}
      <Image
        src="/images/pattern.png"
        alt="pattern"
        height={1403}
        width={1752}
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 -z-10 w-[1752px] h-[403px] min-w-[1752px] min-h-[403px] max-w-none"
      />

      {/* Oval Bottom */}
      <div
        className="absolute left-1/2 -translate-x-1/2  -bottom-30 w-[120vw] h-50 bg-white z-70"
        style={{
          borderRadius: "50% / 30%",
        }}
      />

      <div className="custom-container flex flex-wrap h-full z-70">
        {/* Left */}
        <div className="flex-[3.8] basis-80">
          <h1 className="display-xl-bold md:display-3xl-bold">
            <Typewriter />
            Interfaces, One Line at a Time
          </h1>
          <p className="mt-3 md:mt-6 text-md-semibold md:text-xl-semibold text-neutral-25">
            Build fast, accessible, and responsive web experiences that users
            love.
          </p>

          <Button
            className="mt-6 md:mt-17 w-full md:w-fit"
            onClick={() => handleScroll("contact")}
          >
            Say Hello
            {/* <Link href="#">Say Hello</Link> */}
          </Button>
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
      <Image
        src="/images/gradient-hero.svg"
        alt="gredient-hero"
        fill
        className="-z-50"
      />
    </section>
  );
};

export default Hero;

"use client";

import Image, { StaticImageData } from "next/image";
import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type ExperiencedItemElement = React.ReactElement<ExperiencedItemProps>;

type ExperiencedProps = {
  children: ExperiencedItemElement | ExperiencedItemElement[];
};

const PhaseAccordion: React.FC<ExperiencedProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-[2.5rem_auto] gap-x-4 md:grid-cols-[3rem_auto] md:gap-x-6">
      {React.Children.map(children, (child) => React.cloneElement(child))}
    </div>
  );
};

export default PhaseAccordion;

type ExperiencedItemProps = {
  title: string;
  description: string;
  image: StaticImageData;
  range: string;
};

export const ExperiencedItem: React.FC<
  ExperiencedItemProps & { isRight: boolean; index: number; totalItems: number } // Added totalItems prop
> = ({ title, description, image, range, isRight, index, totalItems }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Set once: false for continuous updates
  // or true if you want it to animate only once per scroll down

  // Layout and margin classes
  const itemWrapperClasses = "w-full max-w-[50%]";
  const imageOrderClass = isRight ? "order-1" : "order-3";
  const contentOrderClass = isRight ? "order-3" : "order-1";
  const contentMarginClass = isRight ? "ml-6" : "mr-6";
  const imageMarginClass = isRight ? "mr-6" : "ml-6";

  // Card slide-in animation variants (unchanged)
  const cardVariants = {
    hidden: { opacity: 0, x: isRight ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  // Bullet appearance animation variants (scale in)
  const bulletVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        delay: 0.2,
      },
    }, // Pop effect
    // Color variants (for when it's not in view, it goes back to gray)
    gray: { backgroundColor: "#D1D5DB", transition: { duration: 0.3 } }, // gray-300
    primary: { backgroundColor: "#3B82F6", transition: { duration: 0.3 } }, // primary color
  };

  // Line animation variants (height from 0 to full, and color)
  const lineVariants = {
    hidden: { height: 0, backgroundColor: "#D1D5DB" }, // gray-300
    visible: {
      height: "400px", // Animate to full height of its container
      backgroundColor: "#3B82F6", // Change color when active
      transition: { duration: 0.5, ease: "easeInOut" as const, delay: 0.1 },
    },
  };

  // Determine if this is the last item to correctly cap the line animation
  const isLastItem = index === totalItems - 1;

  return (
    <div className="flex w-full items-center mb-4 md:mb-8" ref={ref}>
      {/* 1. Image Container (Animated) */}
      <motion.div
        className={`${itemWrapperClasses} ${imageOrderClass} ${imageMarginClass}`}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Image
          src="/images/porto-1.png"
          alt="work-experience"
          width={500}
          height={500}
          className="w-full h-85 object-cover rounded-3xl"
        />
      </motion.div>

      {/* 2. Central Timeline Decoration Spine (Animated Line and Bullet) */}
      <div className="relative w-10 shrink-0 flex items-center justify-center order-2">
        {/* Line (Animates Height and Color) */}
        {/* This div's height will be controlled by Framer Motion. 
            We make its container have a fixed height if it's the last item 
            to ensure the line doesn't extend unnecessarily. */}
        <motion.div
          className="absolute top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"
          variants={lineVariants}
          initial="hidden"
          // If it's the last item, the line should only be half height *if* it's at the end of the list.
          // For now, let's simplify and always animate to full height within its context
          // and control the actual bottom margin of the parent div if needed.
          animate={isInView ? "visible" : "hidden"}
          // Adjust height for the last item dynamically
          style={{
            height: isLastItem ? (isInView ? "50%" : 0) : isInView ? "100%" : 0,
            top: isLastItem ? "0" : "0", // For the last item, line starts from the top of its container
          }}
        ></motion.div>

        {/* Bullet Dot (Animates Scale/Opacity and Color) */}
        <motion.div
          className="size-8 md:size-10 relative flex items-center justify-center rounded-full p-1 md:p-1.5 z-10"
          initial="hidden"
          // Animate the scale/opacity when in view, and the color based on focus
          animate={
            isInView
              ? ["visible", "primary"]
              : ["hidden", "gray"]
          }
          variants={bulletVariants}
        >
          {/* Inner Dot (Stays Primary-200, no text inside for now, just a bullet) */}
          <div className="w-full h-full rounded-full bg-primary-200"></div>
        </motion.div>
      </div>

      {/* 3. Content Container (Animated) */}
      <motion.div
        className={`${itemWrapperClasses} ${contentOrderClass} ${contentMarginClass}`}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="shadow-lg rounded-3xl w-full h-fit p-4 md:p-5 border border-gray-100 bg-white">
          <div className="flex items-center gap-1">
            <Image
              src="/icon/calender.svg"
              alt="calendar"
              width={100}
              height={100}
              className="size-5 md:size-6"
            />
            <span className="text-sm-bold md:text-md-bold text-neutral-900">
              {range}
            </span>
          </div>
          <Image
            src={image} // Use the prop for the logo
            alt="company-logo"
            width={100}
            height={100}
            className="h-9 w-auto mt-2"
          />
          <h4 className="text-start text-lg-bold md:display-xs-bold text-neutral-900 my-2">
            {title}
          </h4>
          <p className="text-start text-sm-semibold md:text-md-semibold text-neutral-900">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

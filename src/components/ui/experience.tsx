"use client";

import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
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
  ExperiencedItemProps & { isRight: boolean; index: number; totalItems: number }
> = ({ title, description, image, range, isRight, index, totalItems }) => {
  const ref = useRef(null);

  // 1. Determines if the card/line has EVER been seen (locks to TRUE)
  const hasAnimated = useInView(ref, { once: true, amount: 0.5 });

  // 2. Determines if the dot is CURRENTLY on screen (flips TRUE/FALSE)
  const isCurrentlyInView = useInView(ref, { once: false, amount: 0.5 });

  // Layout and margin classes (unchanged)
  const itemWrapperClasses = "w-full max-w-[50%]";
  const imageOrderClass = isRight ? "order-1" : "order-3";
  const contentOrderClass = isRight ? "order-3" : "order-1";
  const contentMarginClass = isRight ? "ml-6" : "mr-6";
  const imageMarginClass = isRight ? "mr-6" : "ml-6";

  // Card slide-in animation variants
  const cardVariants = {
    hidden: { opacity: 0, x: isRight ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  // Bullet appearance and color variants
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
    },
    // Color variants (controlled by isCurrentlyInView)
    gray: { backgroundColor: "#D5D7DA", transition: { duration: 0.3 } },
    primary: { backgroundColor: "#C2DBFF", transition: { duration: 0.3 } },
  };

  // Line animation variants

  const isLastItem = index === totalItems - 1;

  const lineVariants = {
    hidden: { height: 0, backgroundColor: "#D5D7DA" },
    visible: {
      // FIX: Use a ternary operator to return either a valid height string OR undefined.
      height: !isLastItem ? "400px" : undefined,
      backgroundColor: "#D5D7DA",
      transition: { duration: 0.5, ease: "easeInOut" as const, delay: 0.1 },
    },
  };

  return (
    <div className="flex w-full items-center mb-4 md:mb-8" ref={ref}>
      {/* 1. Image Container (Uses hasAnimated for persistent visibility) */}
      <motion.div
        className={`${itemWrapperClasses} ${imageOrderClass} ${imageMarginClass}`}
        variants={cardVariants}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
      >
        <Image
          src="/images/porto-1.png"
          alt="work-experience"
          width={500}
          height={500}
          className="w-full h-85 object-cover rounded-3xl"
        />
      </motion.div>

      {/* 2. Central Timeline Decoration Spine (h-full is crucial) */}
      <div className="relative w-10 shrink-0 flex items-stretch justify-center order-2">
        {/* Line (Uses hasAnimated for persistent height) */}
        <motion.div
          className="absolute top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"
          variants={lineVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          style={{
            // Last item line logic
            height: isLastItem ? (hasAnimated ? "50%" : 0) : undefined,
            top: isLastItem ? "0" : "0",
          }}
        ></motion.div>

        {/* Bullet Dot (Uses hasAnimated for scale, isCurrentlyInView for color) */}
        <motion.div
          // NOTE: Removed any explicit bg-* class here to allow Framer Motion to control color
          className="size-6 md:size-8 relative flex items-center justify-center rounded-full p-1 md:p-2 z-10"
          initial="hidden"
          // Animate: [1. Locks scale to visible, 2. Flips color based on current view]
          animate={
            hasAnimated
              ? ["visible", index === 0 ? "primary" : "gray"]
              : "hidden"
          }
          variants={bulletVariants}
        >
          {/* Inner Dot (Shows step number only when actively highlighted) */}
          <div
            className={cn(
              "w-full h-full rounded-full text-black flex items-center justify-center font-bold",
              index === 0 ? "bg-primary-200" : "bg-neutral-400"
            )}
          ></div>
        </motion.div>
      </div>

      {/* 3. Content Container (Animated) */}
      <motion.div
        className={`${itemWrapperClasses} ${contentOrderClass} ${contentMarginClass}`}
        variants={cardVariants}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
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

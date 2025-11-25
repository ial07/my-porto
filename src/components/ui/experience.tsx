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
  cover: string;
};

export const ExperiencedItem: React.FC<
  ExperiencedItemProps & { isRight: boolean; index: number; totalItems: number }
> = ({
  title,
  description,
  image,
  range,
  isRight,
  index,
  totalItems,
  cover,
}) => {
  const ref = useRef(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Layout and margin classes (unchanged)
  const itemWrapperClasses = "w-full md:max-w-[50%]";
  const imageOrderClass = isRight ? "md:order-1" : "md:order-3";
  const contentOrderClass = isRight ? "md:order-3" : "md:order-1";
  const lineOrderClass = "order-1 md:order-2";

  // margin hanya aktif di md ke atas
  const contentMarginClass = isRight ? "md:ml-6" : "md:mr-6";
  const imageMarginClass = isRight ? "md:mr-6" : "md:ml-6";

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
    hidden: { scale: 0.5, opacity: 1, backgroundColor: "#E9EAEB" },
    visible: {
      backgroundColor: "#C2DBFF",
      scale: 1.1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  // Line animation variants

  const isLastItem = index === totalItems - 1;

  const lineVariants = {
    hidden: { height: 0, backgroundColor: "#D5D7DA" },
    visible: {
      height: !isLastItem ? (isMobile ? "580px" : "400px") : undefined,
      backgroundColor: "#C2DBFF",
      transition: { duration: 1, ease: "easeInOut" as const, delay: 0.1 },
    },
  };

  return (
    <div className="flex w-full md:items-center mb-4 md:mb-8" ref={ref}>
      {/* 1. Image Container (Uses hasAnimated for persistent visibility) */}
      <motion.div
        className={`${itemWrapperClasses} ${imageOrderClass} ${imageMarginClass} hidden md:inline`}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src={`/images/${cover}`}
          alt="work-experience"
          width={500}
          height={500}
          className="w-full h-85 object-cover rounded-3xl"
        />
      </motion.div>

      {/* 2. Central Timeline Decoration Spine (h-full is crucial) */}
      <div
        className={`relative w-10 shrink-0 flex items-stretch justify-center ${lineOrderClass}`}
      >
        {/* Line (Uses hasAnimated for persistent height) */}
        <motion.div
          className="absolute top-0 bottom-0 w-0.5 transform -translate-x-1/2 h-full"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          style={{
            height: isLastItem ? "50%" : undefined,
            top: "0",
          }}
        />

        {/* Bullet Dot (Uses hasAnimated for scale, isCurrentlyInView for color) */}
        <motion.div
          className="size-6 md:size-8 relative flex items-center justify-center rounded-full p-1 md:p-2 z-10"
          initial="hidden"
          whileInView="visible"
          variants={bulletVariants}
          viewport={{ amount: 0.5 }}
        >
          <motion.div
            className={cn(
              "w-full h-full rounded-full text-black flex items-center justify-center font-bold z-50"
            )}
            initial={{ background: "#9CA3AF" }} // bg-neutral-400
            whileInView={{
              backgroundColor: "#2d8cff",
              transition: { duration: 0.3 },
            }}
            viewport={{ amount: 0.5 }}
          ></motion.div>
        </motion.div>
      </div>

      {/* 3. Content Container (Animated) */}
      <motion.div
        className={`${itemWrapperClasses} ${contentOrderClass} ${contentMarginClass} order-2`}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src={`/images/${cover}`}
          alt="work-experience"
          width={500}
          height={500}
          className="md:hidden w-full h-43.5 object-cover rounded-3xl rounded-br-none rounded-bl-none"
        />
        <div className="shadow-lg rounded-tl-none rounded-tr-none rounded-3xl md:rounded-tl-3xl md:rounded-tr-3xl w-full h-fit p-4 md:p-5 border border-gray-100 bg-white">
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

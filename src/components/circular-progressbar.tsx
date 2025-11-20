import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type CircularProgressBarProps = {
  progress: number;
  color?: string;
  label: string;
  icon: StaticImageData;
};

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  progress = 90,
  color = "text-secondary-100",
  label = "CSS",
  icon,
}) => {
  // Define the size and circle properties
  const size = 100; // SVG viewBox size
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  // Calculate the offset based on the progress percentage
  const offset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 cursor-pointer"
    >
      <div className="relative">
        {/* SVG Container */}
        <svg
          className="transform -rotate-90" // Start the progress bar at the top (12 o'clock)
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* 1. Background Track Circle (Light Gray) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth - 3}
            className="text-gray-200" // Tailwind class for light gray track
          />

          {/* 2. Animated Progress Circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="square" // Gives the end of the progress bar a rounded cap
            className={color} // Tailwind class for the progress color
            // Key SVG properties for animation
            strokeDasharray={circumference}
            strokeDashoffset={circumference} // Start fully offset (hidden)
            // Framer Motion Animation
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>

        {/* Percentage Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-gray-800">{progress}%</span>
        </div>
      </div>

      {/* Image and Icon */}
      <div className="flex items-center mt-3 gap-1 text-gray-600">
        <Image src={icon} alt={label} className="h-4.5" />
        <span className="text-md-bold">{label}</span>
      </div>
    </motion.div>
  );
};

export default CircularProgressBar;

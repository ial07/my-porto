import { clsx, type ClassValue } from "clsx"
import { animate } from "framer-motion";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

 export const handleScroll = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    const y = target.getBoundingClientRect().top + window.scrollY;
    animate(window.scrollY, y, {
      duration: 1,
      ease: "easeInOut",
      onUpdate: (value) => window.scrollTo(0, value),
    });
  };
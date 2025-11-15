import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex justify-center items-center shrink-0 disabled:pointer-events-none disabled:opacity-50 cursor-pointer outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-white text-sm md:text-md font-bold text-neutral-950 rounded-full hover:shadow-[0_0_17px_rgba(220,220,221,0.6)]",
        secondary:
          "bg-primary-200 text-sm md:text-md font-bold text-neutral-25 rounded-full hover:shadow-[0_0_17px_rgba(220,220,221,0.6)]",
        outline:
          "border border-neutral-800 rounded-full hover:border-neutral-700",
      },
      size: {
        default: "h-11 px-23",
        icon: "size-10 md:size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

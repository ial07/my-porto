import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { MinusIcon, PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border border-neutral-300 rounded-3xl p-3 md:p-5",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "text-md-bold md:display-xs-bold text-neutral-950 hover:text-neutral-800 flex-between w-full group/trigger flex flex-1 cursor-pointer items-start justify-between gap-4 text-left transition-all",
          className
        )}
        {...props}
      >
        <div className="flex-1 text-left">{children}</div>
        <div className="shrink-0 border rounded-full border-neutral-300">
          {/* icon plus */}
          <PlusIcon
            color="#0a0d12"
            className="group-data-[state=open]/trigger:hidden"
          />
          {/* icon minus */}
          <MinusIcon
            color="#0a0d12"
            className="group-data-[state=closed]/trigger:hidden"
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-black text-start border-to-neutral-300"
      {...props}
    >
      <div className={cn("pt-4", className)}>
        <hr className="mb-4" style={{ color: "#D5D7DA" }} />
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

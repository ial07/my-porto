"use client";

import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/constants/faq-data";

const Faq: React.FC = () => {
  return (
    <section id="faq" className="w-full relative py-10 md:py-25">
      <Image
        src="/images/gradient-bg.png"
        fill
        alt="vector"
        className="absolute top-0 -z-10"
      />

      <div className="custom-container p-3 md:p-5 rounded-[48px] bg-white/30">
        <div className="w-full h-full bg-white rounded-[48px] text-center p-4 md:p-10">
          <h3 className="text-sm-bold px-3 py-1 border border-neutral-300 w-fit rounded-full text-neutral-900 inline">
            FAQ
          </h3>
          <p className="display-sm-extrabold md:display-xl-extrabold mt-2 text-neutral-900 mb-6 md:mb-8">
            Need More Info? Start Here
          </p>

          <Accordion type="single" collapsible>
            {faqData.map((faq, i) => (
              <AccordionItem
                value={`item-${i}`}
                key={i}
                className="mb-4 last:mb-0"
              >
                <AccordionTrigger className="text-neutral-950">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      {/* Oval Bottom */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -bottom-50 w-[120vw] h-50 z-100"
        style={{
          backgroundColor: "black",
          borderRadius: "50% / 30%",
        }}
      />
    </section>
  );
};

export default Faq;

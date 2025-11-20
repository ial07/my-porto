"use client";

import Section from "@/components/layout/section";
import { techData } from "@/constants/tech-data";
import { ChevronRight, Mail } from "lucide-react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { SosmedData } from "@/constants/socialmedia-data";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <Section id="about" title="About" subtitle="The Developer Behind the Pixel">
      <div className="flex flex-wrap gap-5">
        {/* left 1 */}
        <div className="md:flex-[6.9]  bg-linear-to-br from-[#134BA6] to-[#2D8CFF] rounded-3xl px-4 py-6 md:p-10">
          <div className="md:flex md:justify-between">
            <div className="flex gap-1.5 items-center">
              <div className="size-12.5 md:size-21 overflow-hidden rounded-full bg-primary-200">
                <Image
                  src="/images/me.jpg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="aspect-square object-cover object-top"
                />
              </div>
              <div className="flex flex-col flex-wrap items-start">
                <h3 className="text-md-bold md:text-lg-bold">Ilham Malik</h3>
                <p className="text-sm-semibold md:text-md-semibold">
                  ialilham77@email.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6 md:mt-0">
              {SosmedData.map((sosmed) => (
                <Link
                  href={sosmed.link}
                  key={sosmed.alt}
                  className="size-10 rounded-full border-neutral-300 bg-primary-200 flex items-center justify-center border cursor-pointer hover:bg-primary-300"
                >
                  <Icon
                    icon={sosmed.icon}
                    color="#fff"
                    className="text-white size-6"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-24 md:mt-25.5 text-start">
            <h3 className="display-md-bold md:display-xl-bold">
              Pushing boundaries through innovation
            </h3>
            <p className="text-sm-regular md:text-md-regular">
              I create frontend solutions that not only look good but also load
              fast, work everywhere, and scale well.
            </p>
          </div>
        </div>

        {/* Right 1 */}
        <div className="w-full md:flex-[3.1] relative rounded-3xl bg-[#F0DAC1] flex-center min-h-[263px]">
          <Image
            src="/images/me-hi.png"
            alt="me-hi"
            width={500}
            height={500}
            className="absolute bottom-0 object-contain"
            style={{ width: "clamp(15.56rem, 33.11vw, 25.00rem)" }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5 mt-5 md:h-125.5">
        <div
          className="w-full md:w-125.5 rounded-3xl p-6 md:p-8 pb-0 min-h-[457px] text-start bg-linear-to-br from-[#07060C] via-[#07060C] to-[#a855f7] relative overflow-hidden"
          style={{ height: "clamp(28.56rem, 41.56vw, 31.38rem)" }}
        >
          <div className="absolute -left-20 -bottom-30 w-80 h-80 bg-[#0013FF] rounded-full blur-3xl pointer-events-none" />
          <div className="flex-between cursor-pointer hover:text-white/80">
            <div>
              <h4 className="text-xl-bold">Check My Portfolio</h4>
              <p className="text-md-regular text-neutral-25">
                Explore selected works and real-world projects
              </p>

              <Image
                src="/images/porto-1.png"
                alt="porto-1"
                width={700}
                height={700}
                className="absolute left-1 top-39 px-13 z-50"
                style={{ height: "clamp(20.25rem, 36.26vw, 27.38rem)" }}
              />
            </div>
            <ChevronRight />
          </div>
        </div>

        <div
          className="bg-linear-to-b from-[#F3B64C] to-[#ED6B00] w-full md:w-125.5 rounded-3xl p-6 md:p-8 pb-0 min-h-[349px] text-start relative"
          style={{ height: "clamp(28.56rem, 41.56vw, 31.38rem)" }}
        >
          <Image
            src="/images/technology-bg.png"
            alt="tech-bg"
            width={500}
            height={500}
            className="w-full absolute bottom-0 left-0"
          />

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-between items-end gap-5 w-full h-48 relative overflow-hidden top-1/5 left-0"
            style={{ position: "absolute" }}
          >
            {techData.map((tech, idx) => {
              // Calculate curve using a sine wave
              const total = techData.length - 1;
              const x = idx / total;
              const amplitude = 80; // curve height in px
              const y = Math.sin(x * Math.PI) * amplitude; // sine curve

              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  key={tech.alt}
                  className="bg-[#FFFFFF99] rounded-full flex-center absolute"
                  style={{
                    left: `calc(${x * 92}% - 1rem)`,
                    bottom: `${y}px`,
                    width: "clamp(4.31rem, 5.05vw, 3.81rem)",
                    height: "clamp(4.31rem, 5.05vw, 3.81rem)",
                  }}
                >
                  <Image src={tech.icon} alt={tech.alt} />
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-5 overflow-hidden w-[clamp(18.31rem,29.64vw,22.38rem)] h-[clamp(18.31rem,29.64vw,22.38rem)]"
          >
            <span className="display-sm-bold text-neutral-950 text-center">
              Built with 10+ Trusted Technologies
            </span>
          </motion.div>
        </div>

        <div className="bg-primary-200 hover:bg-primary-300 cursor-pointer rounded-full md:rounded-3xl w-full py-5 md:w-11xl md:h-full flex-center">
          <Mail />
        </div>
      </div>
    </Section>
  );
};

export default About;

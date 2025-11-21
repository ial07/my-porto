import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SosmedData } from "@/constants/socialmedia-data";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Footer: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <footer
      className="bg-neutral-950 text-neutral-25 z-20 relative mt-30"
      id="contact"
    >
      <div className="custom-container grid grid-cols-1 pb-10 md:pb-30 md:grid-cols-2 gap-12 md:gap-27.5">
        <div className="">
          <div className="flex-start gap-2 mb-4 md:mb-52">
            <div className="size-10.5 overflow-hidden rounded-full bg-primary-200">
              <Image
                src="/images/me.jpg"
                alt="logo"
                width={42}
                height={42}
                className="aspect-square object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-between">
              <h5 className="text-md-bold md:text-lg-bold">Ilham Malik</h5>
              <p className="text-sm-semibold md:text-md-semibold">
                ialilham77@gmail.com
              </p>
            </div>
          </div>

          <h1 className="display-md-bold md:display-3xl-bold mb-6 md:mb-8">
            Great results begin with clear ideas.
          </h1>
          <div className="flex items-center gap-4">
            {SosmedData.map((sosmed) => (
              <Link
                target="_blank"
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

        <div>
          <div className="mb-4 md:mb-8">
            <span className="text-sm-bold mb-2">Contact</span>
            <h2 className="display-sm-bold md:display-xl-extrabold">
              Start Your Next Project
            </h2>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="text-sm-bold md:text-md-bold">
                  Name<span className="text-[#EE1D52]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="What should I call you?..."
                  className="w-full p-4 rounded-lg text-neutral-500 border border-neutral-900 "
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="text-sm-bold md:text-md-bold">
                  Email<span className="text-[#EE1D52]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Where can I reach you? ..."
                  className="w-full p-4 rounded-lg text-neutral-500 border border-neutral-900"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="text-sm-bold md:text-md-bold">
                  Message<span className="text-[#EE1D52]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Tell me about your project or just say hi :) ..."
                  className="w-full p-4 rounded-lg text-neutral-500 border border-neutral-900"
                />
              </div>

              <Button variant={"secondary"} onClick={() => setOpen(true)}>
                Send Message
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white rounded-xl w-full md:w-1/3 text-neutral-950 overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-50 md:h-70 inline relative">
                    <Image
                      src="/images/bg-alert-success.svg"
                      height={400}
                      width={400}
                      alt="succes-bg"
                      className="w-full object-cover"
                    />
                    <Image
                      src="/images/alert-success.svg"
                      height={200}
                      width={200}
                      alt="succes-bg"
                      className="absolute z-100 top-1/2 left-1/2 -translate-1/2 object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 text-center">
                    <span className="text-lg-bold md:text-xl-bold text-neutral-950">
                      Got Your Message!
                    </span>
                    <p className="text-sm-medium md:text-md-medium text-neutral-700 mb-4 md:mb-6">
                      Really appreciate you reaching out. I’ll be in touch soon.
                    </p>
                    <Button
                      onClick={() => setOpen(false)}
                      variant="secondary"
                      className="w-full"
                    >
                      Close
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="w-ful py-6.5 md:py-8 text-center border border-neutral-900">
        © 2026 Ilham Malik. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

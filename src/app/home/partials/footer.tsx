import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-25 z-20 relative mt-30">
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
            <div className="size-10 rounded-full bg-primary-200 flex-center">
              <Facebook />
            </div>
            <div className="size-10 rounded-full bg-primary-200 flex-center">
              <Facebook />
            </div>
            <div className="size-10 rounded-full bg-primary-200 flex-center">
              <Facebook />
            </div>
            <div className="size-10 rounded-full bg-primary-200 flex-center">
              <Facebook />
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 md:mb-8">
            <span className="text-sm-bold mb-2">Contact</span>
            <h2 className="display-sm-bold md:display-xl-extrabold">
              Start Your Next Project
            </h2>
          </div>

          <form action="post">
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

              <Button variant={"secondary"}>Send Message</Button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-ful py-6.5 md:py-8 text-center border border-neutral-900">
        © 2025 Edwin Anderson. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

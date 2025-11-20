"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavigationData } from "@/constants/navigation-data";
import { handleScroll } from "@/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
import { Menu, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(12,13,13,0)", "rgba(12,13,13,0.5)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blue(0px)", "blur(10px)"]
  );
  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur }}
      className="fixed top-0 z-80 w-full"
    >
      <div className="custom-container flex-between h-20 md:h-21">
        {/* Logo */}
        <div className="flex-start gap-4">
          <div className="size-10.5 overflow-hidden rounded-full bg-primary-200">
            <Image
              src="/images/me.jpg"
              alt="logo"
              width={42}
              height={42}
              className="aspect-square object-cover object-top"
            />
          </div>
          <span className="text-xl-bold text-white">Ilham</span>
        </div>

        {/* Nav */}
        <nav className="hidden lg:block">
          <ul className="flex-start gap-3">
            {NavigationData.map((d) => (
              <li key={d.label}>
                <div
                  onClick={() => handleScroll(d.href)}
                  className="hover:text-primary-200 p-4 cursor-pointer"
                >
                  {d.label}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Button */}
        <Button
          className="hidden lg:flex"
          onClick={() => handleScroll("contact")}
        >
          Get Started
        </Button>

        {/* Hamburger menu */}

        <Sheet>
          <SheetTrigger asChild>
            <Menu className="cursor-pointer md:hidden data-[state=open]:hidden" />
          </SheetTrigger>
          <SheetContent className="z-90">
            <nav className="px-4">
              <div className="pt-5 flex-between">
                <div className="flex-start gap-3">
                  <div className="size-10.5 overflow-hidden rounded-full bg-primary-200">
                    <Image
                      src="/images/me.jpg"
                      alt="logo"
                      width={42}
                      height={42}
                      className="aspect-square object-cover object-top"
                    />
                  </div>
                  <span className="text-xl-bold text-neutral-900">Ilham</span>
                </div>
                <SheetClose>
                  <XIcon className="size-7 md:hidden data-[state=closed]:hidden text-black" />
                </SheetClose>
              </div>
              <ul className="text-neutral-950 text-md-medium flex flex-col gap-6 py-20">
                {NavigationData.map((d) => (
                  <li key={d.label}>
                    <SheetClose asChild>
                      <Link
                        href={`/${d.href}`}
                        className="hover:text-primary-200"
                      >
                        {d.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
                <Button variant={"secondary"} asChild>
                  <SheetClose asChild>
                    <Link href="#contact">Hire Me</Link>
                  </SheetClose>
                </Button>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;

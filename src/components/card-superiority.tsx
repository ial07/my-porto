"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type CardSuperiorityProps = {
  title: string;
  image?: string;
  type?: "default" | "basic";
  listData: string[];
};

const CardSuperiority: React.FC<CardSuperiorityProps> = ({
  title,
  image,
  type = "default",
  listData,
}) => {
  return (
    <div
      className={cn(
        "w-full rounded-3xl p-6",
        type == "default" ? "bg-[#F3B64C]" : "border border-neutral-300"
      )}
    >
      <h3 className="text-lg-bold md:display-xs-bold text-neutral-950">
        {title}
      </h3>
      <div className="flex-center">
        <div className="size-17 md:size-21 rounded-full mt-4 md:mt-6 bg-[#E9EAEB] overflow-hidden flex justify-center items-center">
          <Image
            src={`${image ? image : "/images/profile.svg"}`}
            width={500}
            height={500}
            alt="profile"
            className={cn("aspect-square object-cover object-top")}
          />
        </div>
      </div>

      <div className="mt-4 md:mt-6">
        {listData.map((list, i) => (
          <div
            className={cn(
              "flex-start gap-3 border-b py-4 md:py-6 last:border-b-0",
              type === "default" ? "border-[#FDFDFD80]" : "border-neutral-300"
            )}
            key={i}
          >
            <Image
              src="/images/listdata.svg"
              width={100}
              height={100}
              alt="list"
              className={cn("size-8", type === "basic" && "opacity-40")}
            />
            <span
              className={cn(
                "text-neutral-950 text-md md:text-lg",
                type === "default" ? "font-bold" : "font-regular"
              )}
            >
              {list}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSuperiority;

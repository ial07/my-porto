"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

type CardTestimonyProps = {
  description: string;
  name: string;
  image: StaticImageData;
  rating: number;
  job: string;
};

const CardTestimony: React.FC<CardTestimonyProps> = ({
  description,
  image,
  job,
  name,
  rating,
}) => {
  return (
    <div className="pb-4 px-4 md:pb-5 md:px-5 pt-15 inset-0 shadow-all-sides rounded-2xl bg-white w-full text-neutral-900 text-start relative h-100">
      <div className="size-20 rounded-full overflow-hidden absolute -top-10">
        <Image
          src={image}
          fill
          alt="image"
          className="object-cover object-top"
        />
      </div>
      <div className="flex gap-1 items-center">
        {Array.from({ length: rating }).map((_, index) => (
          <Image
            src="/icon/star.svg"
            alt="star"
            width={24}
            height={24}
            key={index}
          />
        ))}
      </div>
      <p className="text-md-semibold md:text-lg-semibold mt-4">
        "{description}"
      </p>

      <p className="text-sm-bold md:text-md-bold mt-6 md:mt-17.5">— {name}</p>
      <p className="text-sm-medium md:text-md-medium">{job}</p>
    </div>
  );
};

export default CardTestimony;

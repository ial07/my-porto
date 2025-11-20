import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type CardPortoProps = {
  image: StaticImageData;
  link: string;
  label: string;
};

const CardPorto: React.FC<CardPortoProps> = ({ image, link, label }) => {
  return (
    <div className="h-90 md:h-93 relative rounded-xl overflow-hidden">
      <Image src={image} alt="porto-1" fill />
      <div className="absolute bottom-5 px-8 md:px-9.5 w-full">
        <Link
          href={link}
          style={{ backdropFilter: "blur(40px)" }}
          className="bg-[#00000066] hover:bg-black/70 w-full p-2 rounded-full text-md-bold md:text-lg-bold"
          target="_blank"
        >
          {label}
        </Link>
      </div>
    </div>
  );
};

export default CardPorto;

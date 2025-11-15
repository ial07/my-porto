import { StaticImageData } from "next/image";
import { Url } from "url";

import portoImg1 from "../../public/images/porto-1.png";

type portofolioDataProps = {
  image: StaticImageData;
  link: string;
  label: string;
};

export const portofolioData: portofolioDataProps[] = [
  {
    image: portoImg1,
    label: "Portofolio 1",
    link: "www.google.com",
  },
  {
    image: portoImg1,
    label: "Portofolio 2",
    link: "www.google.com",
  },
  {
    image: portoImg1,
    label: "Portofolio 3",
    link: "www.google.com",
  },
  {
    image: portoImg1,
    label: "Portofolio 4",
    link: "www.google.com",
  },
];

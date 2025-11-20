import { StaticImageData } from "next/image";

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
    link: "https://www.google.com",
  },
  {
    image: portoImg1,
    label: "Portofolio 2",
    link: "https://www.google.com",
  },
  {
    image: portoImg1,
    label: "Portofolio 3",
    link: "https://www.google.com",
  },
  {
    image: portoImg1,
    label: "Portofolio 4",
    link: "https://www.google.com",
  },
];

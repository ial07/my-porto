import { StaticImageData } from "next/image";

import portoImg1 from "../../public/images/porto/porto-3.png";
import portoImg2 from "../../public/images/porto/porto-4.png";
import portoImg3 from "../../public/images/porto/porto-5.jpg";
import portoImg4 from "../../public/images/porto/porto-6.jpg";

type portofolioDataProps = {
  image: StaticImageData;
  link: string;
  label: string;
};

export const portofolioData: portofolioDataProps[] = [
  {
    image: portoImg1,
    label: "E-commerce",
    link: "https://project-ecommerce-green.vercel.app/",
  },
  {
    image: portoImg2,
    label: "Movie Finder",
    link: "https://movie-apps-peach.vercel.app/",
  },
  {
    image: portoImg3,
    label: "Company profile",
    link: "https://company-profile-six-ochre.vercel.app/",
  },
  {
    image: portoImg4,
    label: "Todo Apps",
    link: "https://todo-app-ts-amber-six.vercel.app/login",
  },
];

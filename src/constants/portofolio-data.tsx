import { StaticImageData } from "next/image";

import portoImg3 from "../../public/images/porto/porto-2.png";
import portoImg4 from "../../public/images/porto/porto-3.png";
import portoImg5 from "../../public/images/porto/porto-4.png";
import portoImg6 from "../../public/images/porto/porto-5.jpg";
import portoImg7 from "../../public/images/porto/porto-6.jpg";

type portofolioDataProps = {
  image: StaticImageData;
  link: string;
  label: string;
};

export const portofolioData: portofolioDataProps[] = [
  {
    image: portoImg3,
    label: "Library App",
    link: "https://library-app-theta-blue.vercel.app/",
  },
  {
    image: portoImg4,
    label: "E-commerce",
    link: "https://project-ecommerce-green.vercel.app/",
  },
  {
    image: portoImg5,
    label: "Movie Finder",
    link: "https://movie-apps-peach.vercel.app/",
  },
  {
    image: portoImg6,
    label: "Company profile",
    link: "https://company-profile-six-ochre.vercel.app/",
  },
  {
    image: portoImg7,
    label: "Todo Apps",
    link: "https://todo-app-ts-amber-six.vercel.app/login",
  },
];

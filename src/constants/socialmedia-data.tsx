import facebook from "../../public/icon/facebook.svg";
import tiktok from "../../public/icon/tiktok.svg";
import instagram from "../../public/icon/instagram.svg";
import linkedin from "../../public/icon/linkedin.svg";

type SosmedDataProps = {
  alt: string;
  link: string;
  icon: string;
};

export const SosmedData: SosmedDataProps[] = [
  {
    alt: "facebook",
    link: "https://facebook.com",
    icon: "ri:facebook-fill",
  },
  {
    alt: "instagram",
    link: "https://facebook.com",
    icon: "mdi:instagram",
  },
  {
    alt: "linkedin",
    link: "https://facebook.com",
    icon: "basil:linkedin-solid",
  },
  {
    alt: "tiktok",
    link: "https://facebook.com",
    icon: "line-md:tiktok",
  },
];

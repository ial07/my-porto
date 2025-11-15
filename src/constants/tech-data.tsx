import { StaticImageData } from "next/image";

import cssTech from "../../public/icon/css.svg";
import jsTech from "../../public/icon/js.svg";
import tsTech from "../../public/icon/ts.svg";
import htmlTech from "../../public/icon/html.svg";
import reactTech from "../../public/icon/react.svg";

type TechBubbleProps = {
  alt: string;
  icon: StaticImageData;
};

export const techData: TechBubbleProps[] = [
  {
    icon: cssTech,
    alt: "css",
  },
  {
    icon: jsTech,
    alt: "js",
  },
  {
    icon: tsTech,
    alt: "ts",
  },
  {
    icon: htmlTech,
    alt: "html",
  },
  {
    icon: reactTech,
    alt: "react",
  },
];

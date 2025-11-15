import { StaticImageData } from "next/image";

import cssTech from "../../public/icon/css.svg";
import jsTech from "../../public/icon/js.svg";
import tsTech from "../../public/icon/ts.svg";
import htmlTech from "../../public/icon/html.svg";
import reactTech from "../../public/icon/react.svg";
import mongoTech from "../../public/icon/mongo.svg";
import dockerTech from "../../public/icon/docker.svg";
import expressTech from "../../public/icon/express.svg";
import postgresqlTech from "../../public/icon/postgresql.svg";

type SkillsetDataProps = {
  label: string;
  progress: number;
  icon: StaticImageData;
};

export const skillsetData: SkillsetDataProps[] = [
  {
    icon: cssTech,
    label: "CSS",
    progress: 90,
  },
  {
    icon: jsTech,
    label: "Javascript",
    progress: 90,
  },
  {
    icon: htmlTech,
    label: "HTML",
    progress: 90,
  },
  {
    icon: reactTech,
    label: "React JS",
    progress: 85,
  },
  {
    icon: tsTech,
    label: "Typescript",
    progress: 80,
  },
  {
    icon: mongoTech,
    label: "Mongo DB",
    progress: 75,
  },
  {
    icon: dockerTech,
    label: "Docker",
    progress: 70,
  },
  {
    icon: postgresqlTech,
    label: "PostgreSQL",
    progress: 80,
  },
];

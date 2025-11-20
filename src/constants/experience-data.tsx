import { StaticImageData } from "next/image";

import UtLogo from "../../public/icon/logo/ut-logo.png";
import BniLogo from "../../public/icon/logo/bni-logo.svg";
import EnvioLogo from "../../public/icon/logo/envio-logo.png";
import AgamLogo from "../../public/icon/logo/agam-logo.png";

type ExperienceDataProps = {
  title: string;
  description: string;
  image: StaticImageData;
  range: string;
  cover: string;
};

export const experienceData: ExperienceDataProps[] = [
  {
    title: "Senior Software Engineer",
    description:
      "Built key internal systems including a .NET-based Lunch App integrated with attendance, a Blazor Manpower Planning app for company-wide workforce tracking, an Executive Profile platform using .NET Core and Azure DevOps, and a Blazor User Management system with attendance maps, leave workflows, and digital HR processes.",
    image: UtLogo,
    range: "Jun 2023 - Dec 2025",
    cover: "exp-1.png",
  },
  {
    title: "Frontend Developer",
    description:
      "Developed Flutter apps with real-time location tracking and built a reusable framework using GetX and Dio. Improved React web applications with new features and better performance. Collaborated with designers and backend teams, and worked in Agile/Scrum with active participation in sprint planning, standups, and code reviews.",
    image: EnvioLogo,
    range: "Jan 2023 - Jun 2023",
    cover: "exp-2.png",
  },
  {
    title: "Fullstack Developer",
    description:
      "Developed a Bank Guarantee Application as a technical and solution analyst, ensuring scalability and seamless system integration. Designed microservices to improve modularity and reusability across the organization. Modernized the Bank Application Plafond using React.js and TypeScript, delivering a faster, cleaner, and more maintainable frontend.",
    image: BniLogo,
    range: "Jan 2022 - Dec 2022",
    cover: "exp-3.png",
  },
  {
    title: "Programmer",
    description:
      "Handled development of local government web applications using CodeIgniter PHP, improving public service accessibility and system reliability.",
    image: AgamLogo,
    range: "Jun 2021 - Dec 2021",
    cover: "exp-4.png",
  },
];

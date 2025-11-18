import { StaticImageData } from "next/image";

import ImageDefault from "../../public/images/hero.png";

type TestimonyDataProps = {
  description: string;
  name: string;
  image: StaticImageData;
  rating: number;
  job: string;
};

export const testimonyData: TestimonyDataProps[] = [
  {
    description:
      "Working with IAL was a game-changer for our project. Their expertise in frontend development and keen eye for design transformed our ideas into a stunning, user-friendly application.",
    name: "Sarah Johnson",
    image: ImageDefault,
    rating: 5,
    job: "Product Manager at TechSolutions",
  },
  {
    description:
      "IAL's contribution to our web application was invaluable. Their proficiency in React ensured a seamless UX made the development process smooth and efficient.",
    name: "Michael Lee",
    image: ImageDefault,
    rating: 5,
    job: "CTO at Innovatech",
  },
  {
    description:
      "Working with IAL was a game-changer for our project. Their expertise in frontend development and keen eye for design transformed our ideas into a stunning, user-friendly application.",
    name: "Edwin Enderson",
    image: ImageDefault,
    rating: 5,
    job: "CEO at Ahademy",
  },
  {
    description: "IAL consistently delivered high-quality code and innovative solutions. Their dedication to excellence and ability to meet tight deadlines made them an indispensable part of our team.",
    name: "Linda Martinez",
    image: ImageDefault,
    rating: 4,
    job: "Manager at Loopware",
  },
];

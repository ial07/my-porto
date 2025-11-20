import { StaticImageData } from "next/image";

import TestiImg1 from "../../public/images/testi-1.png";
import TestiImg2 from "../../public/images/testi-2.png";
import TestiImg3 from "../../public/images/testi-3.png";
import TestiImg4 from "../../public/images/testi-4.png";

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
      "Working with Ilham was a game-changer for our project. Their expertise in frontend development and keen eye for design transformed our ideas into a stunning, user-friendly application.",
    name: "Wayne Johnson",
    image: TestiImg1,
    rating: 5,
    job: "Product Manager at TechSolutions",
  },
  {
    description:
      "Ilham's contribution to our web application was invaluable. Their proficiency in React ensured a seamless UX made the development process smooth and efficient.",
    name: "Michael Lee",
    image: TestiImg2,
    rating: 5,
    job: "CTO at Innovatech",
  },
  {
    description:
      "Ilham consistently delivered high-quality code and innovative solutions. Their dedication to excellence and ability to meet tight deadlines made them an indispensable part of our team.",
    name: "Edwin Enderson",
    image: TestiImg3,
    rating: 5,
    job: "CEO at Ahademy",
  },
  {
    description:
      "Working with Ilham was a game-changer for our project. Their expertise in frontend development and keen eye for design transformed our ideas into a stunning, user-friendly application.",
    name: "Jhon Martinez",
    image: TestiImg4,
    rating: 4,
    job: "Manager at Loopware",
  },
];

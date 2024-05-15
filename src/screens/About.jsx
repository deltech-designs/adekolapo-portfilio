import Navbar from "../components/Navbar";
import { CgCalendarDates } from "react-icons/cg";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";

export default function About({ isDarkMode, toggleColorMode }) {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer Intern at Cephas ICT Hub",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
      date: "Dec 2021 - Present ",
    },
    {
      id: 2,
      title: "Creative Designer at Okay VC",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
      location: "Ogbomoso",
      date: "Dec 2020 - June 2021 ",
    },
    // {
    //   id: 3,
    //   title: "Frontend Developer Student at Ennovate Lab",
    //   description:
    //     "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    //   location: "Ogbomoso",
    //   date: "Aug 2019 - Oct 2019",
    // },
  ];

  return (
    <div>
      <div className="my-7 flex flex-col justify-center items-center">
        {experiences.map((experience) => (
          <Experience experience={experience} key={experience.id} />
        ))}
      </div>
    </div>
  );
}

function Experience({ experience }) {
  return (
    <div className="mb-8 text-white w-full md:w-8/12 text-center">
      <div className="flex justify-between items-center text-left my-2 text-white gap-24">
        <h3 className="text-18 lg:text-[21.74px] font-bold">
          {experience.title}
        </h3>
        <h3 className="text-left text-[14.49px] text-[#8491A0]">
          {experience.date}
        </h3>
      </div>
      <p className="my-2 text-justify text-12">{experience.description}</p>
      {/* <div className="flex justify-between items-center gap-36 text-white">
          <h3 className="text-18 lg:text-[21.74px] font-bold">
            {experience.title}
          </h3>
          <h3>{experience.date}</h3>
        </div>
        <p className="">{experience.description}</p> */}
    </div>
  );
}

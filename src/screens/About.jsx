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
        "As a Frontend Developer Intern at Cephas ICT Hub,  I had the privilege of wearing multiple hats, contributing both as a frontend tutor and a developer. where I facilitate learning sessions for aspiring frontend developers, helping them grasp the core concepts of HTML, CSS, and JavaScript. My approach to teaching was hands-on, ensuring that students not only learned the theory but also applied their knowledge in practical projects.",
      date: "Dec 2021 - Present ",
    },
    {
      id: 2,
      title: "Creative Designer at Okay VC",
      description:
        "At Okay Visual Creations, I took on the role of a graphic designer, where I was responsible for a variety of design and print tasks.  I designed a range of marketing materials, including flyers, brochures, posters, and banners. My designs were aimed at effectively communicating the clients' messages and capturing the attention of their target audiences. I managed several printing processes, ensuring that the final printed products were of high quality and met the specifications of the clients.",
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
    <div className="mb-8 text-white w-full md:w-full lg:w-8/12 text-center p-2">
      <div className="flex flex-col md:flex-row justify-between items-start lg:items-center text-left mb-6 lg:my-2 text-white gap-3 lg:gap-24">
        <h3 className="text-18 lg:text-[21.74px] font-bold ">
          {experience.title}
        </h3>
        <h3 className="text-left text-[14.49px] text-[#8491A0]">
          {experience.date}
        </h3>
      </div>
      <p className="my-2 text-justify text-[13px] leading-5 font-light font-sans">
        {experience.description}
      </p>
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

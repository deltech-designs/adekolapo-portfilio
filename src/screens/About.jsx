import Navbar from "../components/Navbar";
import { CgCalendarDates } from "react-icons/cg";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";

export default function About({ isDarkMode, toggleColorMode }) {
  const workExperience = [
    {
      title: "Frontend Development Intern",
      flexibility: "Internship",
      company: "Cephas ICT Hub",
      location: "Ogbomoso",
      date: "Dec 2021 - Present ",
    },
    {
      title: "Creative Designer",
      flexibility: "full-time",
      company: "Okay Visual Creations",
      location: "Ogbomoso",
      date: "Dec 2020 - June 2021 ",
    },
    {
      title: "Frontend Development Student",
      flexibility: "full-time",
      company: "Ennovate Lab",
      location: "Ogbomoso",
      date: "Aug 2019 - Oct 2019",
    },
  ];

  const education = [
    {
      title: "B.Tech in Information Systems",
      flexibility: "full-time",
      company: "Ladoke Akintola University of Technology",
      location: "Ogbomoso",
      date: "Aug 2022 - Present ",
    },
    {
      title: "West African Examination Council",
      flexibility: "full-time",
      company: "Alafia-Oluwa Baptist College",
      location: "Tewure",
      date: "Sept 2015 - July 2019 ",
    },
  ];

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleColorMode={toggleColorMode} />
      <div className="md:container mx-auto">
        <div className="mt-5 md:mt-20 lg:w-[50%] p-4">
          <div className="text-36 md:text-48 mb-3 text-darkblue">
            <h1 className="font-bold">About Me</h1>
            <p className="text-16 md:text-20">
              I'm Adekola Adekolapo, a skilled frontend web developer, adeptly
              navigates the realms of HTML, CSS, and JavaScript. His expertise
              extends to React, Tailwind CSS, and Sass (SCSS), ensuring seamless
              integration of captivating designs with efficient functionality.
              Proficient in Redux, he crafts robust and scalable web solutions
              with finesse.
            </p>
          </div>
          <div className="my-8">
            <h1 className="font-bold text-36 md:text-48 mb-3 text-darkblue my-8">
              Work Experience
            </h1>
            <div className="my-10">
              {workExperience.map((exp) => (
                <Experience key={exp.title} experience={exp} />
              ))}
            </div>
          </div>
          <div className="my-8">
            <h1 className="font-bold text-36 md:text-48 mb-3 text-darkblue my-8">
              Education
            </h1>
            <div className="my-10">
              {education.map((exp) => (
                <Experience key={exp.title} experience={exp} />
              ))}
            </div>
          </div>
          <div>{/* <Footer /> */}</div>
        </div>
      </div>
    </div>
  );
}

function Experience({ experience }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center my-2">
        <h3 className="text-18 lg:text-24">{experience.title}</h3>
        <h3 className="rounded-full bg-lightsuccess text-success w-20 lg:w-32 text-center p-2 text-[9px]">
          {experience.flexibility}
        </h3>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 text-[9px] md:text-12">
          <div className="flex items-center gap-2 ">
            <HiOutlineBuildingOffice />
            <h3>{experience.company}</h3>
          </div>
          <div className="flex items-center gap-2 text-[9px] md:text-12">
            <CiLocationOn />
            <h3>{experience.location}</h3>
          </div>
        </div>
        <div className="text-right text-[9px] md:text-12 flex items-center gap-2">
          <CgCalendarDates />
          <span>{experience.date}</span>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useTypewriter from "react-typewriter-hook";
import Navbar from "../components/Navbar";
import TechStack from "../components/Technologies";
import Project from "../components/Project";
import About from "./About";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  const [magicName, setMagicName] = useState("make Design");
  const name = useTypewriter(magicName);

  useEffect(() => {
    const magicNames = ["make Design", "Write"];
    let index = 0;
    const intervalId = setInterval(() => {
      index = index >= magicNames.length - 1 ? 0 : index + 1;
      setMagicName(magicNames[index]);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1F9MNc8Q0rKOzfxlU9aZpW6g9SPeGZWAs";

  return (
    <div className="bg-black h-auto">
      <Navbar />

      {/* Hero Section */}
      <div className="lg:container mx-auto p-8 md:p-14 lg:p-24 flex justify-center items-center flex-col text-center text-white">
        <motion.div
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{
            height: "250px",
            width: "250px",
            borderRadius: "50%",
            padding: "4px",
            background: "linear-gradient(270deg, #FF8660, #C548A9, #8000FF)",
            backgroundSize: "200% 600%",
          }}
          className="flex items-center justify-center text-white"
        >
          <img
            className="w-full rounded-full"
            src="./assets/kola.jpg"
            alt="Profile"
          />
        </motion.div>

        <div className="flex flex-col justify-center items-center mt-10">
          <h1 className="text-36 md:text-48 text-center font-bold">
            I do code
          </h1>
          <h1 className="text-36 md:text-48 text-center font-bold">
            and
            <span className="bg-gradient-to-br from-pitch via-pitch to-purple text-transparent bg-clip-text">
              {" "}
              {name}
            </span>
          </h1>
          <p className="text-center text-gray mt-8 w-full md:w-full lg:w-3/5">
            I'm Adekola Adekolapo, a skilled frontend web developer, adeptly
            navigating the realms of HTML, CSS, and JavaScript. My expertise
            extends to React, Tailwind CSS, and Sass (SCSS), ensuring seamless
            integration of captivating designs with efficient functionality.
            Proficient in Redux, I craft robust and scalable web solutions with
            finesse.
          </p>

          <motion.a
            href={resumeLink}
            download
            whileHover={{ scale: 1.1 }}
            className="font-semibold bg-black border border-white px-10 py-4 rounded-full mt-10 hover:bg-white hover:text-black transition-all duration-100"
          >
            Resume
          </motion.a>
        </div>
      </div>

      {/* Technologies */}
      <div className="lg:container mx-auto p-6 lg:p-2">
        <div className="flex flex-col justify-center items-center mt-10">
          <h1 className="text-24 font-semibold text-gray my-2">
            EXPERIENCE WITH
          </h1>
          <TechStack />
        </div>
      </div>

      {/* Projects */}
      <div className="lg:container mx-auto p-2">
        <div className="flex flex-col justify-center items-center mt-10">
          <h1 className="text-36 font-bold bg-gradient-to-br from-[#FF8660] via-[#FF8660] to-[#D5491D] text-transparent bg-clip-text uppercase my">
            Projects
          </h1>
          <Project />
        </div>
      </div>

      {/* Experience */}
      <div className="lg:container mx-auto p-2">
        <div className="flex flex-col justify-center items-center my-24">
          <h1 className="text-36 font-bold bg-gradient-to-br from-[#5BADFF] via-[#1373D1] to-[#1373D1] text-transparent bg-clip-text uppercase my">
            Experience
          </h1>
          <About />
        </div>
      </div>

      {/* Contact */}
      <div className="bg-[#191919] text-white h-1/2">
        <div className="md:container mx-auto p-3">
          <div className="py-14 w-full lg:w-8/12">
            <h1 className="text-[23.53px] font-bold my-4">Contact</h1>
            <p className="w-full lg:w-4/6 leading">
              Seasoned Frontend Developer with over 3 years of hands-on
              experience in designing and implementing robust, scalable, and
              innovative web solutions. Adept at leveraging a comprehensive
              skill set encompassing front-end and back-end technologies.
            </p>

            <div className="my-6">
              <h1 className="text-16 font-medium text-white flex items-center gap-3">
                <MdOutlineEmail size={20} /> adekolaadekolapo@gmail.com
              </h1>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/deltech-designs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://x.com/darkTechBro?t=-8hEfksEZO1faxtYrumOMQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/adekolapo-adekola-a13725214"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

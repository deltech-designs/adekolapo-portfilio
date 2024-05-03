import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="">
      <div className="flex flex-col  md:flex-row justify-between item-start md:items-center gap-6 md:gap-4 lg:gap-9 p-6 mt-12">
        <div>
          <div className="text-24 md:text-18 lg:text-24 font-bold text-solidblue">
            {"{ Adekolapo }"}
          </div>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row items-start md:items-center justify-around gap-4 md:gap-12 ">
          <div className="">
            <p>+234 8089471575</p>
          </div>
          <div>
            <p>adekolaadekolapo@gmail.com</p>
          </div>
          <div className="flex md:fflex-row lex-col lg:flex-row items-center gap-3 md:gap-3 lg:gap-4">
            <Link to="">
              <FaGithub
                size={22}
                className="cursor-pointer text-2xl md:text-lg lg:text-xl"
              />
            </Link>

            <Link to="">
              <AiFillTwitterCircle
                size={22}
                className="cursor-pointer text-2xl md:text-lg lg:text-9xl"
              />
            </Link>

            <Link>
              <FaLinkedin
                size={22}
                className="lg:flex cursor-pointer text-2xl md:text-lg lg:text-xl"
              />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row justify-between gap-4 p-6">
        <div>
          <ul className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-10 lg:gap-20 font-sans font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/tech-stack">Tech Stack</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>{" "}
        </div>
        <div>
          Designed and built by
          <span className="bg-gradient-to-tl from-cyan via-magenta to-magenta text-transparent bg-clip-text mx-1">
            Adekolapo
          </span>
          with
          <span className="bg-gradient-to-tr from-cyan via-cyan to-magenta text-transparent bg-clip-text mx-1">
            Love
          </span>
          &
          <span className="bg-gradient-to-tl from-cyan via-cyan to-magenta text-transparent bg-clip-text mx-1">
            Coffee
          </span>
        </div>
      </div>
    </div>
  );
}

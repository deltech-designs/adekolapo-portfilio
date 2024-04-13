import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navigation bar  */}
      <nav className="bg-white shadow-sm">
        <div className=" lg:container mx-auto px-2 py-4 md:p-2">
          <div className="p-2 md:p-2 lg:p-4 flex justify-between items-center">
            {/* Logo on Large Screen  */}
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 cursor-pointer">
                {/* <img
                  className="w-28 md:w-3/4 lg:w-full"
                  src="assets/logo.png"
                  alt="Furniro Logo"
                /> */}
                <div className="text-24 md:text-36 font-semibold bg-gradient-to-tr from-cyan via-magenta to-magenta text-transparent bg-clip-text">
                  {"{ Adekolapo }"}
                </div>
              </div>
            </div>

            {/* Navbar Links  */}
            <div className="hidden md:flex justify-between  gap-20">
              <ul className="flex justify-between items-center gap-20 md:gap-10 lg:gap-20 font-sans font-medium">
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
              </ul>
            </div>

            <div className="flex items-center gap-3 md:gap-3 lg:gap-8">
              <Link to="/signup">
                <FaGithub
                  size={22}
                  className="hidden md:flex cursor-pointer text-2xl md:text-lg lg:text-xl"
                />
              </Link>

              <AiFillTwitterCircle
                size={22}
                className="hidden md:flex cursor-pointer text-2xl md:text-lg lg:text-9xl"
              />

              <FaLinkedin
                size={22}
                className="hidden md:flex lg:flex cursor-pointer text-2xl md:text-lg lg:text-xl"
              />
            </div>

            <div className="block md:hidden">
              <MdOutlineMenu size={25} onClick={toggleNavbar} />
            </div>
          </div>

          {isOpen && (
            <div>
              <div className="md:hidden w-full fixed top-0 left-0  transition-all bg-white shadow-lg h-full z-50 px-3 py-5 md:p-2">
                {/* Tog */}
                <div className="flex justify-between  items-center gap-3">
                  <div className="text-24 md:text-36 font-semibold bg-gradient-to-tr from-cyan via-magenta to-magenta text-transparent bg-clip-text">
                    {"{ Adekolapo }"}
                  </div>

                  <RxCross2
                    className="text-xl text-black font-extrabold"
                    size={25}
                    onClick={toggleNavbar}
                  />
                </div>

                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col gap-8">
                  <ul className="flex flex-col items-start gap-4 md:gap-8 mt-8">
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
                  </ul>
                  <div className="flex items-center gap-3 md:gap-3 lg:gap-8">
                    <Link to="/signup">
                      <FaGithub
                        size={22}
                        className="cursor-pointer text-2xl md:text-lg lg:text-xl"
                      />
                    </Link>

                    <AiFillTwitterCircle
                      size={22}
                      className="cursor-pointer text-2xl md:text-lg lg:text-9xl"
                    />

                    <FaLinkedin
                      size={22}
                      className="lg:flex cursor-pointer text-2xl md:text-lg lg:text-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-black opacity-25 w-full h-full"></div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

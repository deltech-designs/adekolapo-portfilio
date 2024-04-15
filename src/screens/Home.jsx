import Navbar from "../components/Navbar";
import TechStack from "../components/Technologies";
import Project from "../components/Project";

export default function Home({ isDarkMode, toggleColorMode }) {
  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleColorMode={toggleColorMode} />
      <div className="">
        <div className="md:container mx-auto">
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-10  w-full md:h-[60vh] md:[40vh] h-[40] p-2 md:p-2 lg:p-4 ">
            <div>
              <div className="order-2 md:order-1 lg:order-1 text-36 md:text-36 lg:text-48 font-bold mt-4 md:m-0">
                <h1>Hi 👋,</h1>
                <h1>My name is </h1>
                <h1 className="bg-gradient-to-tr from-magenta via-cyan to-cyan text-transparent bg-clip-text">
                  Adekolapo
                </h1>
                <h1>I build things for web</h1>
              </div>
            </div>
            <div className="w-[300px] h-[300px]  md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-r from-cyan via-[#9333EA] to-magenta p-2">
              <img
                className="w-full rounded-full"
                src="./assets/kola.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-36 md:text-48 mb-3 font-bold text-darkblue">
            My Tech Stack
          </h1>
          <p className="text-18 md:text-24 text-darkgray ">
            Technologies I’ve been working with recently
          </p>
        </div>
        <div>
          <TechStack />
        </div>
      </div>

      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-36 md:text-48 mb-3 font-bold text-darkblue">
            Projects
          </h1>
          <p className="text-18 md:text-24 text-darkgray ">
            Things I’ve built so far
          </p>
        </div>
        <div>
          <Project />
        </div>
      </div>
    </div>
  );
}

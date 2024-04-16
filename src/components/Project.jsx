import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      img: "./assets/gover.jpg",
      title: "Gover Resturant",
      desc: "I spearheaded Gover's website development, creating a mobile-responsive interface with HTML5, Sass, and JavaScript, prioritizing user experience through intuitive design and seamless navigation",
      stack: "HTML5, Sass(SCSS), and JavaScript",
      live: "https://gover-i93t.vercel.app/",
      github: "https://github.com/deltech-designs/adekolapo-portfilio.git",
    },
    {
      img: "./assets/gover.jpg",
      title: "Gover Resturant",
      desc: "I spearheaded Gover's website development, creating a mobile-responsive interface with HTML5, Sass, and JavaScript, prioritizing user experience through intuitive design and seamless navigation",
      stack: "HTML5, Sass(SCSS), and JavaScript",
      live: "https://gover-i93t.vercel.app/",
      github: "https://github.com/deltech-designs/adekolapo-portfilio.git",
    },
    {
      img: "./assets/gover.jpg",
      title: "Gover Resturant",
      desc: "I spearheaded Gover's website development, creating a mobile-responsive interface with HTML5, Sass, and JavaScript, prioritizing user experience through intuitive design and seamless navigation",
      stack: "HTML5, Sass(SCSS), and JavaScript",
      live: "https://gover-i93t.vercel.app/",
      github: "https://github.com/deltech-designs/adekolapo-portfilio.git",
    },
    {
      img: "./assets/gover.jpg",
      title: "Gover Resturant",
      desc: "I spearheaded Gover's website development, creating a mobile-responsive interface with HTML5, Sass, and JavaScript, prioritizing user experience through intuitive design and seamless navigation",
      stack: "HTML5, Sass(SCSS), and JavaScript",
      live: "https://gover-i93t.vercel.app/",
      github: "https://github.com/deltech-designs/adekolapo-portfilio.git",
    },
    {
      img: "./assets/gover.jpg",
      title: "Gover Resturant",
      desc: "I spearheaded Gover's website development, creating a mobile-responsive interface with HTML5, Sass, and JavaScript, prioritizing user experience through intuitive design and seamless navigation",
      stack: "HTML5, Sass(SCSS), and JavaScript",
      live: "https://gover-i93t.vercel.app/",
      github: "https://github.com/deltech-designs/adekolapo-portfilio.git",
    },
    {
      img: "./assets/gover.jpg",
      title: "Gover Resturant",
      desc: "I spearheaded Gover's website development, creating a mobile-responsive interface with HTML5, Sass, and JavaScript, prioritizing user experience through intuitive design and seamless navigation",
      stack: "HTML5, Sass(SCSS), and JavaScript",
      live: "https://gover-i93t.vercel.app/",
      github: "https://github.com/deltech-designs/adekolapo-portfilio.git",
    },
  ];
  return (
    <div className="">
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 lg:gap-4  place-content-center place-items-center">
        {projects.map((project) => (
          <Card project={project} />
        ))}
      </div>
    </div>
  );
}

function Card({ project }) {
  return (
    <div className="w-[373px] h-[560px] bg-white shadow-lg rounded-lg mt-4">
      <img src={project.img} className="w-full" alt="" />
      <div className="p-3">
        <h1 className="text-36 font-semibold mb-3">{project.title}</h1>
        <p className="text-">{project.desc}</p>

        <p className="my-2">
          <span className="font-semibold">Tech Stack:</span> {project.stack}
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <IoIosLink size={20} />
            <a href={project.live} className="underline">
              Live Preview{" "}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaGithub size={20} />
            <a href={project.github} className="underline">
              Veiw Code{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

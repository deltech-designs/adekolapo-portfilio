export default function TechStack() {
  const language = [
    // {
    //   img: "./assets/Group 9.png",
    //   title: "HTML",
    // },
    // {
    //   img: "./assets/Group 10.png",
    //   title: "CSS",
    // },
    {
      img: "./assets/javscript.svg",
      title: "JavaScript",
    },
    {
      img: "./assets/react.svg",
      title: "React",
    },
    {
      img: "./assets/Vector (2).png",
      title: "Redux",
    },
    {
      img: "./assets/icon-nextjs.svg",
      title: "Next js",
    },
    {
      img: "./assets/icon-bootstrap.png",
      title: "Bootstrap",
    },
    {
      img: "./assets/icon-tailwindcss.svg",
      title: "Tailwindcss",
    },
    {
      img: "./assets/icon-sass.svg",
      title: "Sass",
    },
    {
      img: "./assets/icon-git.svg",
      title: "Git",
    },
    // {
    //   img: "./assets/akar-icons_github-fill.svg",
    //   title: "Github",
    // },
    {
      img: "./assets/icon-nodejs.svg",
      title: "Node js",
    },
    {
      img: "./assets/icons8-express-js.svg",
      title: "Express js",
    },
    {
      img: "./assets/icon-mongodb.svg",
      title: "Mongodb",
    },
    {
      img: "./assets/icon-vscode.svg",
      title: "Vs code",
    },
  ];

  return (
    <div className="md:container mx-auto">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-12 gap-8 place-content-center place-items-center">
        {language.map((item) => (
          <Tech key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

function Tech({ item }) {
  return (
    <div className="flex text-center justify-center items-center">
      <div key={item.title} className="">
        <img src={item.img} className="w-16" alt={item.title} />
        <h3 className="mt-6">{item.title}</h3>
      </div>
    </div>
  );
}

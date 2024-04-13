import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import TechStack from "./screens/TechStack";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="tech-stack" element={<TechStack />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

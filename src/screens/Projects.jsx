import Navbar from "../components/Navbar";

export default function Projects({ isDarkMode, toggleColorMode }) {
  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleColorMode={toggleColorMode} />
      Projects Page
    </div>
  );
}

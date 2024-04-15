import Navbar from "../components/Navbar";
import Tech from "../components/Technologies";

export default function TechStack({ isDarkMode, toggleColorMode }) {
  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleColorMode={toggleColorMode} />
      TechStack Page
      <Tech />
    </div>
  );
}

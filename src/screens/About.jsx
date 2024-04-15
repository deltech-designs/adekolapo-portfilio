import Navbar from "../components/Navbar";

export default function About({ isDarkMode, toggleColorMode }) {
  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleColorMode={toggleColorMode} />
      About Page
    </div>
  );
}

import Navbar from "../components/Navbar";

export default function Contact({ isDarkMode, toggleColorMode }) {
  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleColorMode={toggleColorMode} />
      Contact Page
    </div>
  );
}

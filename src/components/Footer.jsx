import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import RevealOnScroll from "./RevealOnScroll";

const Footer = () => {
  return (
    <div className="w-full h-16 bg-[rgba(10,10,10,0.7)] flex items-center justify-around">
      <h1 className="text-lg">
        Developed by <span className="text-blue-500">Dhruv</span>
      </h1>
      <div className="flex justify-center gap-6 text-gray-400 text-2xl">
        <a
          href="https://github.com/voradhruv27"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:scale-110 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/voradhruv27"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:voradhruv09@gmail.com"
          className="hover:text-red-400 hover:scale-110 transition"
        >
          <FaEnvelope />
        </a>
      </div>
      <h1 className="cursor-pointer text-lg">&copy; 2025 Dhruv</h1>
    </div>
  );
};

export default Footer;

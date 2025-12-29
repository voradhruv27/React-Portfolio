import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const SocialLink = () => {
  return (
    <>
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
          className="hover:text-white hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:voradhruv09@gmail.com"
          className="hover:text-white hover:scale-110 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </>
  );
};

export default SocialLink;

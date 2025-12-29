import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <div className="w-full h-16 bg-[rgba(10,10,10,0.7)] flex items-center justify-around">
      <h1 className="text-lg">
        Developed by <motion.span
          className="text-blue-500 font-bold"
          initial={{opacity: 0}}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Dhruv
        </motion.span>
      </h1>
      <SocialLink />
      <h1 className="cursor-pointer text-lg">&copy; 2025Dhruv</h1>
    </div>
  );
};

export default Footer;

import RevealOnScroll from "../RevealOnScroll";
import { FaMapMarkerAlt, FaGraduationCap, FaUser } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-6 "
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Main Card */}
          <div className="rounded-2xl p-8 md:p-12 bg-white/5 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 text-justify">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* Left Side: About Me Text */}
              <div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  My name is{" "}
                  <strong className="text-blue-400 font-semibold text-xl">
                    Dhruv Vora
                  </strong>
                  , and I’m a passionate{" "}
                  <span className="text-cyan-400 font-medium">
                    Front-End Web Developer
                  </span>
                  . I specialize in building modern, scalable, and user-friendly
                  applications using the{" "}
                  <span className="text-green-400">React</span>. combining clean design principles with efficient coding practices to create seamless digital experiences. With a strong academic background in Computer Science and a deep curiosity for learning new technologies, I enjoy solving real-world problems through code and developing impactful, technology-driven solutions that make a difference.
                </p>
              </div>

              {/* Right Side: Quick Info */}
              <div className="space-y-5 text-gray-300 text-base">
                <p className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-400 text-lg" />
                  <span>
                    <strong>Location:</strong> Bangalore
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <FaGraduationCap className="text-green-400 text-lg" />
                  <span>
                    <strong>Higher Education:</strong> Master of Computer Application
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <FaUser className="text-cyan-400 text-lg" />
                  <span>
                    <strong>Role:</strong> Front-End Developer
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;

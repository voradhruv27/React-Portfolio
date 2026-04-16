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
                  . I specialize in building scalable, user-friendly applications using{" "}
                  <span className="text-green-400 font-medium">React.js</span> and{" "}
                  <span className="text-white font-medium bg-black px-1 rounded-sm">Next.js</span>. 
                  My professional journey kicked off at Strica with a focused dive into crafting flawless, responsive UI components. 
                  Currently, at <span className="text-blue-400 font-medium">OneAssure</span>, I am driving end-to-end frontend implementations—building out full, pixel-perfect pages from Figma designs, flawlessly integrating APIs, and establishing crucial SEO functionality. 
                  Driven by a strong academic foundation in Computer Science, I thrive on turning complex problems into beautifully engineered web experiences.
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

import SectionContainer from "../SectionContainer";
import { FaMapMarkerAlt, FaGraduationCap, FaUser } from "react-icons/fa";

const About = () => {
  return (
    <SectionContainer id="about">
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
              , and I'm a passionate{" "}
              <span className="text-cyan-400 font-medium">
                Full Stack Web Developer
              </span>
              . I specialize in building scalable, end-to-end web applications using{" "}
              <span className="text-green-400 font-medium">React.js</span>,{" "}
              <span className="text-white font-medium bg-black px-1 rounded-sm">Next.js</span>,{" "}
              <span className="text-green-500 font-medium">Node.js</span>, and{" "}
              <span className="text-blue-300 font-medium">PostgreSQL</span>. 
              On the frontend, I craft pixel-perfect, responsive interfaces, while on the backend, I build robust APIs and manage databases with{" "}
              <span className="text-white font-medium">Express.js</span> and SQL. 
              My professional journey kicked off at Strica, where I honed my UI development skills, followed by{" "}
              <span className="text-blue-400 font-medium">OneAssure</span>, where I drove end-to-end implementations—from Figma designs to API integrations and SEO optimization. 
              I'm also exploring the AI ecosystem, leveraging tools like{" "}
              <span className="text-orange-500 font-medium">Claud</span> and{" "}
              <span className="text-white font-medium">OpenAI</span> to build intelligent, AI-powered applications. 
              Driven by a strong academic foundation in Computer Science, I thrive on turning complex problems into beautifully engineered full-stack solutions.
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
                <strong>Role:</strong> Full Stack Developer
              </span>
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;


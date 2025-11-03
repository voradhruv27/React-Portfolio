import RevealOnScroll from "../RevealOnScroll";

// Importing icons from react-icons
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiNetlify,
  SiPostman,
  SiVercel,
  SiReactrouter,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    {
      name: "React Router",
      icon: <SiReactrouter className="text-purple-500" />,
    },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> }
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Netlify", icon: <SiNetlify className="text-blue-400" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    {
      name: "VS Code",
      icon: <VscVscode className="text-[oklch(0.55_0.13_243.48)]" />,
    },
    { name: "Vercel", icon: <SiVercel className="text-black" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" /> }
  ];

  const renderSkill = (skill, i) => (
    <div
      key={i}
      className="flex flex-col items-center justify-center gap-2 p-4 bg-white/5 border border-white/10 rounded-lg 
                 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-400/10 
                 transition-all duration-300 shadow-sm hover:shadow-lg"
    >
      <div className="text-3xl">{skill.icon}</div>
      <span className="text-sm font-medium">{skill.name}</span>
    </div>
  );

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Frontend */}
            <div className="rounded-xl p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Frontend
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {frontendSkills.map((tech, i) => renderSkill(tech, i))}
              </div>
            </div>

            {/* Tools */}
            <div className="rounded-xl p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                Tools
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {tools.map((tech, i) => renderSkill(tech, i))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Skills;

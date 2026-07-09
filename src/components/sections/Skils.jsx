import SectionContainer from "../SectionContainer";

// Importing icons from react-icons
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaBrain,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiNetlify,
  SiPostman,
  SiVercel,
  SiReactrouter,
  SiVite,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiVuedotjs,
  SiNuxtdotjs,
  SiN8N,
  SiOpenai,
  SiGooglegemini,
  SiClaude,
  SiDiscord,
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
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white bg-black rounded-full" />,
    },
    { name: "Vue.js", icon: <SiVuedotjs className="text-green-400" /> },
    {
      name: "Nuxt.js",
      icon: <SiNuxtdotjs className="text-green-500" />,
    },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-white" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
    { name: "SQL", icon: <SiPostgresql className="text-sky-300" /> },
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
    { name: "Vercel", icon: <SiVercel className="text-[#FFFFFF]" /> },
    { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
    { name: "n8n", icon: <SiN8N className="text-orange-400" /> },
    { name: "Discord", icon: <SiDiscord className="text-[#5865F2]" /> },
  ];

  const aiTools = [
    { name: "OpenAI", icon: <SiOpenai className="text-white" /> },
    { name: "Google Gemini", icon: <SiGooglegemini className="text-blue-400" /> },
    { name: "Claude", icon: <SiClaude className="text-orange-300" /> },
    { name: "Prompt Engineering", icon: <FaBrain className="text-pink-400" /> },
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
    <SectionContainer id="skills">
      <div className="text-center">
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

          {/* Backend */}
          <div className="rounded-xl p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold mb-6 text-green-400">
              Backend
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {backendSkills.map((tech, i) => renderSkill(tech, i))}
            </div>
          </div>

          {/* AI Tools */}
          <div className="rounded-xl p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold mb-6 text-pink-400">
              AI Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {aiTools.map((tech, i) => renderSkill(tech, i))}
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
    </SectionContainer>
  );
};

export default Skills;

import RevealOnScroll from "../RevealOnScroll";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      title: "BCA(Bachelor of Computer Applications)",
      school: "Maharaja Krishnakumarsinhji Bhavnagar University",
      duration: "2020 - 2023",
      description:
        "I completed my Bachelor of Computer Applications (BCA) from Maharaja Krishnakumarsinhji Bhavnagar University (2020–2023). During my studies, I built a solid foundation in computer programming, database management, and web technologies. My coursework and projects helped me develop strong problem-solving skills and a deep interest in front-end development and modern web technologies.",
    },
    {
      title: "MCA(Master of Computer Application)",
      school: "Acharya Institute of Technology",
      duration: "2023 - 2025",
      description:
        "I have completed my Master of Computer Applications (MCA) from Acharya Institute of Technology (2023–2025). During the course, I gained in-depth knowledge of software development, data structures, and system design, along with hands-on experience in modern web technologies and frontend libraries such as React and Tailwind CSS. This program strengthened my technical foundation and enhanced my ability to build scalable, efficient, and user-friendly web applications.",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <RevealOnScroll>
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Education
          </h2>

          <div className="relative border-l border-blue-500/30 pl-6">
            {educationData.map((edu, index) => (
              <div key={index} className="mb-12 relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <FaGraduationCap size={14} />
                </div>

                {/* Card */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all shadow-md hover:shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {edu.title}
                  </h3>
                  <h4 className="text-blue-400 font-medium">{edu.school}</h4>
                  <p className="text-sm text-gray-400 mb-3">{edu.duration}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Education;

import RevealOnScroll from "../RevealOnScroll";

const Experience = () => {
  const experiences = [
    {
      company: "OneAssure",
      role: "Frontend Developer Intern",
      tech: "Next.js",
      period: "Feb 2026 - Present",
      description:
        "Worked on integrating APIs, implementing SEO functions, and building full pages precisely based on provided Figma designs.",
      isCurrent: true,
    },
    {
      company: "Strica",
      role: "Frontend Developer Intern",
      tech: "React.js",
      period: "Jul 2025 - Dec 2025",
      description:
        "Focused purely on the frontend UI development, creating responsive, user-friendly components.",
      isCurrent: false,
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <RevealOnScroll>
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Professional Experience
          </h2>

          <div className="flex flex-col gap-12 text-left">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 transition-all relative ${
                  exp.isCurrent
                    ? "bg-gradient-to-br from-blue-500/10 to-cyan-400/5 border border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    : "bg-gradient-to-b from-white/5 to-transparent border border-white/10 shadow-lg hover:shadow-xl hover:bg-white/5"
                }`}
              >
                {exp.isCurrent && (
                  <span className="absolute -top-3 -right-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-blue-400 animate-pulse">
                    Current
                  </span>
                )}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-400 mt-1">
                      {exp.company}{" "}
                      <span className="text-gray-400 font-normal text-sm ml-2">
                        ({exp.tech})
                      </span>
                    </h4>
                  </div>
                  <span className="text-sm font-medium text-gray-400 border border-gray-600/50 bg-gray-800/50 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed mt-4">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Experience;

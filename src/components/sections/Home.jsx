import RevealOnScroll from "../RevealOnScroll";
import SocialLink from "../SocialLink";
// import ProfilePichture from "../../assets/ProfilePichture.png";

const Home = () => {
  const handleResumeClick = (e) => {
    e.preventDefault();

    const resumeUrl =
      "https://drive.google.com/file/d/1iN2X56LhsdPB1mfZdgcmHWQGBA9M4ifG/view?usp=sharing";

    window.open(
      resumeUrl,
      "_blank"
    );

    // const link = document.createElement("a");
    // link.href = resumeUrl;
    // link.download = "Dhruv_Vora.pdf";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 md:px-12 bg-gradient-to-b from-gray-900 via-gray-950 to-black"
    >
      <RevealOnScroll>
        <div className="text-center z-10 max-w-3xl">
          {/* Profile Image */}
          <div className="flex items-center justify-center mb-5 mt-15">
            <div className="h-[180px] w-[180px] md:h-[220px] md:w-[220px] rounded-full overflow-hidden border-4 border-blue-500/40 shadow-xl hover:scale-105 hover:border-blue-500/80 transition duration-300">
              <img
                className="h-full w-full object-cover block top-2"
                // src={ProfilePichture}
                src={`${import.meta.env.BASE_URL}/ProfilePichture.png`}
                alt="Dhruv vora"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent leading-tight">
            Hi, I'm <span className="text-blue-500">Dhruv Vora</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            A passionate{" "}
            <span className="text-blue-400">Front-End Developer </span>
            who loves building clean, scalable, and user-friendly web
            applications. I love turning ideas into interactive digital
            experiences using modern technologies like React.js, JavaScript, and
            Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={handleResumeClick}
              className="bg-blue-500 text-white py-3 px-8 rounded-lg font-medium shadow-lg 
                         hover:bg-blue-600 hover:scale-105 transition transform duration-300 cursor-pointer"
            >
              📄 Resume
            </button>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-400 py-3 px-8 rounded-lg font-medium 
                         hover:bg-blue-500/10 hover:scale-105 transition transform duration-300"
            >
              ✉️ Contact Me
            </a>
          </div>
          <SocialLink />
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;

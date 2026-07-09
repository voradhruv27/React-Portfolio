import RevealOnScroll from "./RevealOnScroll";

const SectionContainer = ({ id, children, maxWidth = "max-w-5xl", className = "" }) => {
  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center py-20 px-6 ${className}`}
    >
      <RevealOnScroll>
        <div className={`w-full ${maxWidth} mx-auto`}>
          {children}
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default SectionContainer;

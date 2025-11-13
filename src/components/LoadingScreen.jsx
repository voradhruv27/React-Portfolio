import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Welcome to My Portfolio";

  useEffect(() => {
    // Disable scroll
    document.body.classList.add("no-scroll");
  
    return () => {
      // Enable scroll when loading screen unmounts
      document.body.classList.remove("no-scroll");
    };
  }, []);
  

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1200); // wait a bit before fade-out
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
        className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center"
      >
        {/* Glowing Background Pulse */}
        <div className="absolute w-72 h-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>

        {/* Typing Text */}
        <div className="relative z-10 mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
            {text}
            <span className="animate-blink ml-1 text-blue-400">|</span>
          </h1>
        </div>

        {/* Animated Loading Bar */}
        <div className="relative w-40 sm:w-56 md:w-72 h-2 bg-gray-800 rounded overflow-hidden shadow-inner">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 shadow-[0_0_20px_#3b82f6]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>

        {/* Subtext */}
        <p className="mt-6 text-gray-400 text-sm sm:text-base italic">
          Loading amazing things for you...
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;

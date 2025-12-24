import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  // const [active, setActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    // { href: "#project", label: "Project" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.7)] backdrop-blur-lg border-b border-white/10 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* <a
            href="#home"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className={`font-mono text-2xl font-bold tracking-wide border-2 rounded-md p-1 transition text-white ${
              active ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <span
              className={`border-2 rounded-sm p-0.5 transition ${
                active ? "border-gray-300" : "border-blue-500"
              }`}
            >
              Dhruv<span className="text-blue-500">Vora</span>
            </span>
          </a> */}
          <motion.a
            href="#home"
            className="inline-block rounded-md p-[2px]"
            // initial={{ opacity: 0 }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: "linear-gradient(90deg, #3b82f6, #9ca3af)",
            }}
          >
            <div className="bg-black rounded-md px-3 py-1 font-mono text-2xl font-bold tracking-wide text-white">
              Dhruv<span className="text-blue-500">Vora</span>
            </div>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-gray-300 hover:text-white transition group"
              >
                {link.label}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-2xl text-white cursor-pointer z-[60]"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="inset-0 bg-[rgba(10,10,10,0.95)] backdrop-blur-lg flex flex-col items-center justify-center space-y-8 md:hidden z-[55] mb-2"
          >
            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-gray-300 hover:text-white transition relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.label}
                <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import MrzLogo from "./MrzLogo"; // Apne path ke hisab se adjust karein

interface MenuItem {
  id: string;
  name: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { id: "home", name: "Home", href: "#home" },
  { id: "about", name: "About", href: "#about" },
  { id: "skills", name: "Skills", href: "#skills" },
  { id: "projects", name: "Projects", href: "#projects" },
  { id: "experience", name: "Experience", href: "#experience" },
  { id: "contact", name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll position listener for dynamic backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Top progress bar based on page scroll
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-20 z-[999] transition-all duration-300 flex items-center ${
          isScrolled
            ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        {/* Scroll Progress Line */}
        <motion.div
          style={{ width: progressWidth }}
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(139,92,246,0.9)]"
        />

        <div className="max-w-7xl w-full mx-auto px-4 lg:px-8 flex items-center justify-between">
          
          {/* Logo Section */}
          <a href="#home" className="flex items-center gap-3 shrink-0 group">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3 }}
              className="p-1 flex items-center justify-center transition-all duration-300"
            >
              <MrzLogo className="w-9 h-9 sm:w-10 sm:h-10 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] group-hover:text-purple-400 group-hover:drop-shadow-[0_0_16px_rgba(168,85,247,0.8)] transition-all duration-300" />
            </motion.div>

            <div className="hidden sm:block">
              <h2 className="text-[15px] font-bold text-white tracking-wide leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>
                Raza Zaheer
              </h2>
              <p className="text-[9px] uppercase tracking-[2.5px] text-purple-400 font-semibold">
                Portfolio
              </p>
            </div>
          </a>

          {/* Floating Center Pill Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#050914]/80 backdrop-blur-md border border-white/10 rounded-full p-1.5 px-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.7)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:opacity-90 text-white font-medium text-xs px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105"
            >
              Let's talk
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-[#050914]/80 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[990] bg-[#030712]/98 backdrop-blur-2xl flex flex-col justify-between px-6 pt-28 pb-8 lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {menuItems.map((item, index) => {
                const isActive = activeTab === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-between py-3 border-b border-white/5 group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-purple-400 group-hover:text-pink-400 transition-colors">
                        0{index + 1}
                      </span>
                      <span
                        className={`text-lg font-medium transition-colors ${
                          isActive
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold"
                            : "text-gray-200 group-hover:text-white"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-gray-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </a>
                );
              })}
            </div>

            {/* Mobile Bottom CTA */}
            <div className="pt-6">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-medium py-3.5 rounded-full shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all"
              >
                Let's talk
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

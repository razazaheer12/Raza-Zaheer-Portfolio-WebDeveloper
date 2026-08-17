import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface MenuItem {
  id: string;
  number: string;
  name: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { id: "home", number: "01", name: "Home", href: "#home" },
  { id: "about", number: "02", name: "About", href: "#about" },
  { id: "skills", number: "03", name: "Skills", href: "#skills" },
  { id: "projects", number: "04", name: "Projects", href: "#projects" },
  { id: "experience", number: "05", name: "Experience", href: "#experience" },
  { id: "contact", number: "06", name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  // Scroll Progress Bar logic
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* Full-width Blurred Edge-to-Edge Header (Exactly like reference image) */}
      <header className="fixed top-0 left-0 w-full z-[999] bg-[#070c18]/60 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.3)] transition-all duration-300">
        
        {/* Scroll Progress Bar at very bottom of header */}
        <motion.div
          style={{ width: progressWidth }}
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(139,92,246,0.9)]"
        />

        <div className="max-w-7xl mx-auto h-[72px] px-4 lg:px-8 flex items-center justify-between">
          
          {/* Logo Badge (Left) */}
          <a href="#home" className="flex items-center gap-3 shrink-0 group">
            <motion.div
              whileHover={{ rotate: 6, scale: 1.05 }}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all"
            >
              RZ
            </motion.div>
            <div className="hidden sm:block">
              <h2 className="text-[15px] font-bold text-white tracking-wide leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>
                Raza Zaheer
              </h2>
              <p className="text-[9px] uppercase tracking-[2.5px] text-purple-400 font-medium">
                Portfolio
              </p>
            </div>
          </a>

          {/* Center Floating Pill Menu (Exactly matching screenshot layout) */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#030712]/70 border border-white/10 rounded-full p-1.5 px-2 shadow-inner">
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
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 rounded-full shadow-[0_0_18px_rgba(139,92,246,0.7)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Glowing CTA Button (Right) */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:opacity-90 text-white font-medium text-xs px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105"
            >
              Let's talk
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Menu with Blur */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[990] bg-[#070c18]/95 backdrop-blur-2xl flex flex-col justify-between px-6 pt-28 pb-8 lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => {
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
                        {item.number}
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

      <div className="h-[72px]" />
    </>
  );
};

export default Navbar;

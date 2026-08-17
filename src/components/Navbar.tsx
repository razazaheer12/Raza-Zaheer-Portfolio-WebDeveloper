import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  id: string;
  number: string;
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: "about", number: "01", name: "About", href: "#about" },
  { id: "experience", number: "02", name: "Experience", href: "#experience" },
  { id: "education", number: "03", name: "Education", href: "#education" },
  { id: "skills", number: "04", name: "Skills", href: "#skills" },
  { id: "projects", number: "05", name: "Projects", href: "#projects" },
  { id: "certifications", number: "06", name: "Certifications", href: "#certifications" },
  { id: "contact", number: "07", name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Badge */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/20 flex items-center justify-center text-white font-bold tracking-wider group-hover:border-red-500/60 transition-colors duration-300">
              RZ
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full p-1.5 px-3 shadow-2xl">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-red-500 rounded-full shadow-[0_0_18px_rgba(239,68,68,0.7)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-red-500 hover:bg-red-600 text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-300 hover:scale-105"
            >
              Let's talk
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#080304]/98 backdrop-blur-2xl flex flex-col justify-between px-6 pt-24 pb-8 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-between py-2 border-b border-white/5 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-gray-500 group-hover:text-red-400 transition-colors">
                      {item.number}
                    </span>
                    <span
                      className={`text-lg font-medium transition-colors ${
                        activeTab === item.id ? "text-red-500" : "text-gray-200 group-hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-gray-600 group-hover:text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              ))}
            </div>

            {/* Mobile Bottom CTA */}
            <div className="pt-6">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium py-3.5 rounded-full shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all"
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

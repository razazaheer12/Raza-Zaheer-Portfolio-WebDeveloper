import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useThemeStore } from "../store/themeStore";

interface MenuItem {
  id: string;
  number: string;
  name: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { id: "home",       number: "01", name: "Home",       href: "#home" },
  { id: "about",      number: "02", name: "About",      href: "#about" },
  { id: "skills",     number: "03", name: "Skills",     href: "#skills" },
  { id: "projects",   number: "04", name: "Projects",   href: "#projects" },
  { id: "experience", number: "05", name: "Experience", href: "#experience" },
  { id: "contact",    number: "06", name: "Contact",    href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen]         = useState(false);
  const [activeTab, setActiveTab]   = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const textColor = isDarkMode ? "text-white" : "text-[#1e1b4b]";
  const subTextColor = isDarkMode ? "text-gray-300" : "text-[#1e1b4b]/70";

  const { scrollY, scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    menuItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveTab(id); },
        { rootMargin: "-35% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* ── Header Wrapper ── */}
      <header 
        className={`fixed top-0 left-0 w-full z-[999] pt-4 px-4 lg:px-8 pb-3 transition-all duration-300 ${
          isScrolled 
            ? "backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border-b border-white/[0.08]" 
            : "backdrop-blur-none border-b border-transparent bg-transparent"
        }`}
        style={{
          background: isScrolled
            ? isDarkMode
              ? "rgba(5, 8, 22, 0.85)"
              : "rgba(239, 246, 255, 0.85)"
            : "transparent", // Top par transparent rahega taake Hero ki grid/ambient backdrop dikhe
        }}
      >

        {/* Scroll Progress Bar */}
        <motion.div
          style={{ width: progressWidth }}
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(139,92,246,0.9)] z-50"
        />

        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* ── Left Logo ── */}
          <a 
            href="#home" 
            onClick={() => setActiveTab("home")} 
            className="shrink-0 flex items-center justify-center pl-1" 
            aria-label="Home"
          >
            <motion.img
              src="/MRZ VECTOR LOGO.png"
              alt="MRZ"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ height: 56, width: "auto" }}
              className="object-contain filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            />
          </a>

          {/* ── Center Floating Pill Nav ── */}
          <nav 
            className="hidden lg:flex items-center gap-1.5 border rounded-full p-2 px-3 shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-colors duration-500"
            style={{
              background: isDarkMode ? "rgba(5, 8, 22, 0.6)" : "rgba(255, 255, 255, 0.6)",
              backdropFilter: "blur(12px)",
              borderColor: isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(30, 27, 75, 0.12)",
            }}
          >
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white font-semibold" : `${subTextColor} hover:${textColor}`
                  }`}
                  style={{ fontFamily: "'Sora', sans-serif", textDecoration: "none" }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                        boxShadow: "0 0 20px rgba(139,92,246,0.5)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* ── Right CTA Button ── */}
          <div className="hidden lg:flex items-center">
            <motion.a
              href="#contact"
              onClick={() => setActiveTab("contact")}
              whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(139,92,246,0.6)" }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300"
              style={{
                fontFamily: "'Sora', sans-serif",
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                boxShadow: "0 0 20px rgba(139,92,246,0.35)",
                textDecoration: "none",
              }}
            >
              Let's talk <ArrowUpRight size={16} aria-hidden="true" />
            </motion.a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${textColor}`}
            style={{
              background: isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
              borderColor: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
            }}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </header>

      {/* ── Mobile Fullscreen Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[990] backdrop-blur-2xl flex flex-col justify-between px-6 pt-28 pb-8 lg:hidden"
            style={{
              background: isDarkMode ? "rgba(5, 8, 22, 0.96)" : "rgba(239, 246, 255, 0.96)",
            }}
          >
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => { setActiveTab(item.id); setIsOpen(false); }}
                    className="flex items-center justify-between py-3 border-b border-white/5 group"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="text-xs font-mono text-purple-400 group-hover:text-pink-400 transition-colors"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {item.number}
                      </span>
                      <span
                        className={`text-2xl font-bold transition-colors ${
                          isActive
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                            : `${textColor} group-hover:text-purple-400`
                        }`}
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {item.name}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="text-gray-500 group-hover:text-purple-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="pt-6">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-white font-semibold py-4 rounded-full transition-all text-base"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                  boxShadow: "0 0 28px rgba(139,92,246,0.5)",
                  textDecoration: "none",
                }}
              >
                Let's talk <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

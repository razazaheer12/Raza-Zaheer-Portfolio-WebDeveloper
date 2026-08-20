import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
  const [isOpen,    setIsOpen]    = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Auto-detect active section on scroll
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
      {/* ── Fixed header wrapper ── */}
      <header className="fixed top-0 left-0 w-full z-[999] pt-3 px-4 lg:px-6 bg-transparent pointer-events-none">

        {/* Scroll Progress Bar */}
        <motion.div
          style={{ width: progressWidth }}
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(139,92,246,0.9)]"
        />

        {/* ── Glass container pill ── */}
        <div
          className="relative max-w-7xl mx-auto h-[64px] flex items-center justify-between px-5 lg:px-8 pointer-events-auto overflow-hidden"
          style={{
            borderRadius: 18,
            background: "rgba(5,9,20,0.75)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
          }}
        >

          {/* ── MRZ Logo ── */}
          <a href="#home" onClick={() => setActiveTab("home")} className="shrink-0" aria-label="Home">
            <motion.img
              src="/MRZ_VECTOR_LOGO.png"
              alt="MRZ"
              whileHover={{ scale: 1.08, opacity: 0.85 }}
              whileTap={{ scale: 0.94 }}
              style={{ height: 42, width: "auto" }}
            />
          </a>

          {/* ── Center floating dark pill nav ── */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#030712]/70 backdrop-blur-md border border-white/10 rounded-full p-1.5 px-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
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
                  style={{ fontFamily: "'Sora', sans-serif", textDecoration: "none" }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #db2777 100%)",
                        boxShadow: "0 0 20px rgba(168,85,247,0.65)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* ── Right CTA ── */}
          <div className="hidden lg:flex items-center">
            <motion.a
              href="#contact"
              onClick={() => setActiveTab("contact")}
              whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(168,85,247,0.6)" }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-all duration-300"
              style={{
                fontFamily: "'Sora', sans-serif",
                background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #db2777 100%)",
                boxShadow: "0 0 20px rgba(168,85,247,0.45)",
                textDecoration: "none",
              }}
            >
              Let's talk <ArrowUpRight size={14} aria-hidden="true" />
            </motion.a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
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
            className="fixed inset-0 z-[990] bg-[#030712]/96 backdrop-blur-2xl flex flex-col justify-between px-6 pt-24 pb-8 lg:hidden"
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
                            : "text-gray-200 group-hover:text-white"
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
                className="w-full flex items-center justify-center gap-2 text-white font-semibold py-4 rounded-full transition-all"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #db2777 100%)",
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

      {/* Spacer */}
      <div className="h-[80px]" />
    </>
  );
};

export default Navbar;

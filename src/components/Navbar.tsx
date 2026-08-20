import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { X, Menu, ArrowUpRight } from "lucide-react";

// ─── Nav items ────────────────────────────────────────────────
const menuItems = [
  { name: "Home",       href: "#home" },
  { name: "About",      href: "#about" },
  { name: "Skills",     href: "#skills" },
  { name: "Projects",   href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact",    href: "#contact" },
];

// ─── Navbar ───────────────────────────────────────────────────
const Navbar: React.FC = () => {
  const [isOpen,    setIsOpen]    = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // ── Scroll blur trigger ──────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active section via IntersectionObserver ──────────────────
  useEffect(() => {
    const sectionIds = menuItems.map((m) => m.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Smooth scroll helper ─────────────────────────────────────
  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[999]">

        {/* ── Dark strip behind pill ── */}
        <div
          className="absolute top-0 left-0 w-full h-20 transition-all duration-500"
          style={{ background: "#030712" }}
        />

        <div className="relative px-4 sm:px-6 pt-4">
          {/* ── Main pill ─────────────────────────────────────── */}
          <div
            className="relative max-w-7xl mx-auto h-[64px] flex items-center justify-between px-5 lg:px-8 overflow-hidden transition-all duration-500"
            style={{
              borderRadius: 999,
              background: scrolled
                ? "rgba(3,7,18,0.85)"
                : "rgba(255,255,255,0.04)",
              backdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
              border: scrolled
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid rgba(255,255,255,0.06)",
              boxShadow: scrolled
                ? "0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)"
                : "none",
            }}
          >
            {/* Scroll progress bar */}
            <motion.div
              style={{ width: progressWidth }}
              className="absolute bottom-0 left-0 h-[2px] rounded-full"
              aria-hidden="true"
              css={{
                background: "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)",
                boxShadow: "0 0 8px rgba(99,102,241,0.6)",
              }}
            >
              <div
                className="absolute bottom-0 left-0 h-[2px] rounded-full"
                style={{
                  width: "100%",
                  background: "linear-gradient(90deg, #6366f1, #a78bfa, #ec4899)",
                  boxShadow: "0 0 10px rgba(99,102,241,0.7)",
                }}
              />
            </motion.div>

            {/* ── Logo ─────────────────────────────────────── */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
              className="shrink-0 flex items-center"
              aria-label="Go to home"
            >
              <motion.img
                src="/MRZ_VECTOR_LOGO.png"
                alt="MRZ Logo"
                whileHover={{ scale: 1.08, opacity: 0.85 }}
                whileTap={{ scale: 0.95 }}
                style={{ height: 40, width: "auto", filter: "brightness(1)" }}
              />
            </a>

            {/* ── Desktop nav ──────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] rounded-full px-1 py-1 border border-white/[0.05]">
              {menuItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                    className="relative px-5 py-2 rounded-full text-[13px] font-medium transition-colors duration-200"
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
                      letterSpacing: "0.2px",
                    }}
                  >
                    {/* Active pill */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
                          boxShadow: "0 0 18px rgba(99,102,241,0.45)",
                        }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </a>
                );
              })}
            </div>

            {/* ── Desktop CTA ───────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(99,102,241,0.5)" }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold text-white"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
                  boxShadow: "0 0 20px rgba(99,102,241,0.35)",
                  textDecoration: "none",
                  letterSpacing: "0.2px",
                }}
              >
                Let's Talk <ArrowUpRight size={14} aria-hidden="true" />
              </motion.a>
            </div>

            {/* ── Mobile hamburger ──────────────────────────── */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#fff",
              }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>

          </div>
        </div>

        {/* ── Mobile fullscreen menu ────────────────────────── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed inset-0 z-[998] flex flex-col"
              style={{
                background: "rgba(3,7,18,0.97)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Close + logo row */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4">
                <img src="/MRZ_VECTOR_LOGO.png" alt="MRZ Logo" style={{ height: 36, width: "auto" }} />
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </motion.button>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "0 24px" }} />

              {/* Nav items */}
              <div className="flex flex-col flex-1 justify-center px-6 gap-1">
                {menuItems.map((item, i) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center justify-between py-4 group"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                        textDecoration: "none",
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <span style={{
                          fontFamily: "'Sora', sans-serif",
                          fontSize: 11,
                          color: isActive ? "#818cf8" : "rgba(255,255,255,0.2)",
                          fontWeight: 600,
                          letterSpacing: "1px",
                          minWidth: 24,
                        }}>
                          0{i + 1}
                        </span>
                        <span style={{
                          fontFamily: "'Sora', sans-serif",
                          fontSize: 26,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          color: isActive ? "#ffffff" : "rgba(255,255,255,0.55)",
                          transition: "color 0.2s",
                        }}>
                          {item.name}
                        </span>
                      </div>
                      <ArrowUpRight
                        size={18}
                        aria-hidden="true"
                        style={{ color: isActive ? "#818cf8" : "rgba(255,255,255,0.2)", flexShrink: 0 }}
                      />
                    </motion.a>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="px-6 pb-10">
                <motion.a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-[14px] font-bold text-white"
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
                    boxShadow: "0 0 24px rgba(99,102,241,0.4)",
                    textDecoration: "none",
                    letterSpacing: "0.3px",
                  }}
                >
                  Let's Talk <ArrowUpRight size={16} aria-hidden="true" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>

      {/* Spacer */}
      <div className="h-[88px]" />
    </>
  );
};

export default Navbar;

import { useEffect, useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useThemeStore } from "../store/themeStore";

// Gradient for Role Text
const mernGradient = "linear-gradient(90deg, #a855f7 0%, #3b82f6 100%)";

// ── Particles Background ────────────────────────────────────────────
const ParticlesBackground = ({ count = 55, color }: { count?: number; color: string }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: (e.clientX / window.innerWidth - 0.5) * 2, y: (e.clientY / window.innerHeight - 0.5) * 2 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 0.6,
      delay: Math.random() * 10,
      duration: Math.random() * 15 + 10,
      depth: Math.random() * 0.5 + 0.3,
      opacity: Math.random() * 0.35 + 0.08,
    })), [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{ top: `${p.top}%`, left: `${p.left}%`, width: p.size, height: p.size, background: color, opacity: p.opacity }}
          animate={{ y: [0, -18 * p.depth, 0], opacity: [p.opacity, p.opacity * 2, p.opacity], x: mouse.x * 14 * p.depth }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

// ── Cycling Typing ────────────────────────────────────────────
const roles = ["Full-Stack Developer", "MERN Stack Developer", "Computer Science Graduate"];

const CyclingTyping = ({ cursorColor }: { cursorColor: string }) => {
  const [displayText, setDisplayText] = useState("");
  const roleIndexRef = useRef(0);
  const charIndexRef = useRef(0);

  useEffect(() => {
    let timeoutId: ReturnType<setTimeout>;
    let intervalId: ReturnType<setInterval>;

    const typeNext = () => {
      const current = roles[roleIndexRef.current];
      intervalId = setInterval(() => {
        charIndexRef.current++;
        setDisplayText(current.slice(0, charIndexRef.current));

        if (charIndexRef.current >= current.length) {
          clearInterval(intervalId);
          timeoutId = setTimeout(eraseNext, 1400);
        }
      }, 75);
    };

    const eraseNext = () => {
      const current = roles[roleIndexRef.current];
      intervalId = setInterval(() => {
        charIndexRef.current--;
        setDisplayText(current.slice(0, charIndexRef.current));

        if (charIndexRef.current <= 0) {
          clearInterval(intervalId);
          roleIndexRef.current = (roleIndexRef.current + 1) % roles.length;
          timeoutId = setTimeout(typeNext, 300);
        }
      }, 45);
    };

    typeNext();

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <span
      style={{
        fontFamily: "'Sora', sans-serif",
        fontWeight: 700,
        fontSize: "clamp(18px, 2.4vw, 26px)",
        background: mernGradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.55 }}
        style={{ display: "inline-block", width: 2, height: "0.9em", background: cursorColor, verticalAlign: "middle", marginLeft: 3, borderRadius: 1 }}
      />
    </span>
  );
};

// ── Social Icon ───────────────────────────────────────────────
const SocialIcon = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-purple-900/50 bg-[#0b0a1d]/60 text-gray-400 backdrop-blur-sm transition-all duration-300 hover:border-purple-500 hover:text-purple-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] dark:border-purple-900/60 dark:bg-[#0b0a1d]/80"
    >
      <span className="relative z-10">{icon}</span>
    </motion.a>
  );
};

// ── Hero Component ────────────────────────────────────────────
const Hero = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const theme = isDarkMode
    ? {
        background: "#050816",
        gridLine: "rgba(255,255,255,0.018)",
        glow1: "rgba(59,130,246,0.12)",
        glow2: "rgba(139,92,246,0.1)",
        glow3: "rgba(236,72,153,0.07)",
        ringBorder: "rgba(255,255,255,0.04)",
        particle: "rgba(139,92,246,0.6)",
        nameA: "#ffffff",
        nameB: "#ffffff",
        prefix: "rgba(255,255,255,0.38)",
        tagline: "rgba(255,255,255,0.65)",
        cursor: "#60a5fa",
        scrollColor: "#ffffff",
      }
    : {
        background: "linear-gradient(135deg, #eff6ff 0%, #f5f3ff 50%, #fdf2f8 100%)",
        gridLine: "rgba(30,27,75,0.04)",
        glow1: "rgba(99,102,241,0.13)",
        glow2: "rgba(168,85,247,0.11)",
        glow3: "rgba(219,39,119,0.07)",
        ringBorder: "rgba(30,27,75,0.05)",
        particle: "rgba(139,92,246,0.5)",
        nameA: "#7c3aed",
        nameB: "#1e1b4b",
        prefix: "rgba(30,27,75,0.5)",
        tagline: "rgba(30,27,75,0.75)",
        cursor: "#3b82f6",
        scrollColor: "#1e1b4b",
      };

  const socialLinks = [
    { href: "https://github.com/razazaheer12", icon: <Github size={18} aria-hidden="true" />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/raza-zaheer/", icon: <Linkedin size={18} aria-hidden="true" />, label: "LinkedIn" },
    { href: "mailto:razazaheer2002@gmail.com", icon: <Mail size={18} aria-hidden="true" />, label: "Email" },
  ];

  // Box-less Sleek Metallic Grey Stats
  const stats = [
    {
      value: "05+",
      label: "PROJECTS",
      subLabel: "Production Live",
    },
    {
      value: "02+",
      label: "YEARS EXP",
      subLabel: "Full-Stack Dev",
    },
    {
      value: "10+",
      label: "TECH STACK",
      subLabel: "Modern Tools",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-500 pb-20 lg:pb-28"
      style={{ background: theme.background }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${theme.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridLine} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full" style={{ width: 600, height: 600, top: -140, left: -100, background: `radial-gradient(circle, ${theme.glow1} 0%, transparent 70%)` }} />
        <div className="absolute rounded-full" style={{ width: 640, height: 640, top: -60, right: -160, background: `radial-gradient(circle, ${theme.glow2} 0%, transparent 70%)` }} />
        <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: -120, left: "35%", background: `radial-gradient(circle, ${theme.glow3} 0%, transparent 70%)` }} />
      </div>

      <ParticlesBackground count={55} color={theme.particle} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] lg:min-h-[78vh]">

          {/* Left Side */}
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } } }}>

            {/* Availability Badge */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 mb-6 rounded-full border border-purple-500/30 bg-purple-950/20 px-4 py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]"
            >
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
              />
              <span className="text-xs font-semibold text-purple-200 tracking-wide" style={{ fontFamily: "'Sora', sans-serif" }}>
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-2px", marginBottom: 14, fontSize: "clamp(52px, 8vw, 96px)" }}
            >
              <span style={{ color: theme.nameA, display: "block" }}>Raza</span>
              <span style={{ color: theme.nameB, display: "block" }}>Zaheer</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-3 mb-5"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              <span style={{ color: theme.prefix, fontSize: 18, fontWeight: 300 }}>I'm a</span>
              <CyclingTyping cursorColor={theme.cursor} />
            </motion.div>

            {/* High-Impact Professional Description */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: theme.tagline, lineHeight: 1.8, maxWidth: 460, marginBottom: 32, fontWeight: 400 }}
            >
              Architecting high-performance web applications with MERN, Next.js, and AI. Transforming complex ideas into scalable, sleek, and production-ready digital products.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-purple-500/50 bg-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] backdrop-blur-sm transition-all duration-500 hover:bg-purple-500 hover:shadow-[0_10px_50px_rgba(168,85,247,0.5)]"
                style={{ fontFamily: "'Sora', sans-serif", textDecoration: "none" }}
              >
                <span className="relative z-10 tracking-wide">View My Work</span>
                <ArrowRight size={16} aria-hidden="true" className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-purple-900/70 bg-[#0b0a1d]/80 px-7 py-3 text-sm font-medium text-gray-200 shadow-sm backdrop-blur-sm transition-all duration-500 hover:border-purple-500 hover:text-white hover:shadow-[0_10px_50px_rgba(168,85,247,0.25)] dark:border-purple-900/70 dark:bg-[#0b0a1d]/80 dark:text-gray-200"
                style={{ fontFamily: "'Sora', sans-serif", textDecoration: "none" }}
              >
                <span className="relative z-10 tracking-wide">Contact Me</span>
              </motion.a>
            </motion.div>

            {/* Social Icons & Metallic "Find me" Label */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-3 mb-10">
              <span
                className="mr-2 text-xs font-mono font-bold uppercase tracking-widest bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_1px_4px_rgba(255,255,255,0.2)]"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                FIND ME
              </span>
              {socialLinks.map((item, i) => (
                <SocialIcon key={i} href={item.href} icon={item.icon} label={item.label} />
              ))}
            </motion.div>

            {/* Minimal Metallic Grey Stats */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-8 sm:gap-12"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {stat.value}
                  </span>
                  <span className="mt-1 text-[11px] font-mono font-bold tracking-wider text-gray-300 uppercase">
                    {stat.label}
                  </span>
                  <span className="text-[10px] font-sans text-gray-400/80 font-medium">
                    {stat.subLabel}
                  </span>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right — Glowing Orb */}
          <div className="hidden lg:flex justify-center lg:justify-end items-center relative h-full">
            <motion.div
              animate={{ y: [0, -22, 0], scale: [1, 1.06, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: 360,
                height: 360,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${theme.glow1} 0%, ${theme.glow2} 45%, transparent 75%)`,
                filter: "blur(50px)",
                opacity: 0.9,
              }}
            />
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20 pointer-events-auto"
      >
        <span style={{ fontSize: 9, color: theme.scrollColor, fontFamily: "'Sora', sans-serif", letterSpacing: "2px", textTransform: "uppercase" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-6 w-6 items-center justify-center rounded-full border border-purple-500/40 bg-purple-950/30 text-xs text-purple-300 backdrop-blur-sm shadow-[0_0_12px_rgba(168,85,247,0.25)]"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

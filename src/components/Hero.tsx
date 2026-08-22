import { useEffect, useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Box, GraduationCap, Cpu, ArrowRight } from "lucide-react";
import { useThemeStore } from "../store/themeStore";

// ────────────────────────────────────────────────────────────────
// Clean Purple Accent Gradient for Role Text
// ────────────────────────────────────────────────────────────────
const mernGradient = "linear-gradient(90deg, #c084fc 0%, #a855f7 50%, #818cf8 100%)";

// ── Particles ─────────────────────────────────────────────────
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
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

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
        background: "#0b0a1d",
        gridLine: "rgba(168,85,247,0.03)",
        glow1: "rgba(147,51,234,0.15)",
        glow2: "rgba(168,85,247,0.12)",
        glow3: "rgba(99,102,241,0.08)",
        ringBorder: "rgba(168,85,247,0.08)",
        particle: "rgba(168,85,247,0.6)",
        nameA: "#ffffff",
        nameB: "#ffffff",
        prefix: "rgba(255,255,255,0.45)",
        tagline: "rgba(255,255,255,0.6)",
        cursor: "#c084fc",
        statValue: "#c084fc",
        statLabel: "rgba(255,255,255,0.45)",
        scrollColor: "#ffffff",
        scrollBorder: "rgba(168,85,247,0.4)",
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
        tagline: "rgba(30,27,75,0.6)",
        cursor: "#9333ea",
        statValue: "#7c3aed",
        statLabel: "rgba(30,27,75,0.45)",
        scrollColor: "#1e1b4b",
        scrollBorder: "rgba(30,27,75,0.3)",
      };

  const socialLinks = [
    { href: "https://github.com/razazaheer12", icon: <Github size={18} aria-hidden="true" />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/raza-zaheer/", icon: <Linkedin size={18} aria-hidden="true" />, label: "LinkedIn" },
    { href: "mailto:razazaheer2002@gmail.com", icon: <Mail size={18} aria-hidden="true" />, label: "Email" },
  ];

  const stats = [
    { value: "5+", label: "Projects Built", icon: <Box size={16} />, color: "#c084fc" },
    { value: "2+", label: "Years Learning", icon: <GraduationCap size={16} />, color: "#34d399" },
    { value: "10+", label: "Technologies", icon: <Cpu size={16} />, color: "#818cf8" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-500"
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

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full" style={{ width: 600, height: 600, top: -140, left: -100, background: `radial-gradient(circle, ${theme.glow1} 0%, transparent 70%)` }} />
        <div className="absolute rounded-full" style={{ width: 640, height: 640, top: -60, right: -160, background: `radial-gradient(circle, ${theme.glow2} 0%, transparent 70%)` }} />
        <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: -120, left: "35%", background: `radial-gradient(circle, ${theme.glow3} 0%, transparent 70%)` }} />
        {[600, 400].map((s, i) => (
          <div key={i} className="absolute rounded-full pointer-events-none" style={{ width: s, height: s, top: -s / 3, right: -s / 3, border: `0.5px solid ${theme.ringBorder}` }} />
        ))}
      </div>

      <ParticlesBackground count={55} color={theme.particle} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 lg:pt-32 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] lg:min-h-[80vh]">

          {/* Left Side */}
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } } }}>

            {/* Glowing Availability Badge */}
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

            {/* Tagline */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: theme.tagline, lineHeight: 1.8, maxWidth: 420, marginBottom: 36, fontWeight: 400 }}
            >
              Where creativity meets code — crafting futuristic,<br />
              elegant, and seamlessly responsive digital experiences.
            </motion.p>

            {/* Uniform Buttons */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap gap-4 mb-10">
              
              {/* Primary Glowing Button */}
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

              {/* Secondary Glowing Border Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-purple-900/70 bg-[#0b0a1d]/80 px-7 py-3 text-sm font-medium text-gray-200 shadow-sm backdrop-blur-sm transition-all duration-500 hover:border-purple-500 hover:text-white hover:shadow-[0_10px_50px_rgba(168,85,247,0.25)] dark:border-purple-900/70 dark:bg-[#0b0a1d]/80 dark:text-gray-200"
                style={{ fontFamily: "'Sora', sans-serif", textDecoration: "none" }}
              >
                <span className="absolute inset-0 rounded-full bg-purple-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 tracking-wide">Contact Me</span>
              </motion.a>

            </motion.div>

            {/* Social Icons */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-3">
              <span className="mr-2 text-xs font-mono uppercase tracking-widest text-purple-300/50" style={{ fontFamily: "'Sora', sans-serif" }}>
                Find me
              </span>
              {socialLinks.map((item, i) => (
                <SocialIcon key={i} href={item.href} icon={item.icon} label={item.label} />
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-8 mt-10 mb-16 lg:mb-0">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2" style={{ color: stat.color }}>
                    {stat.icon}
                    <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 22, color: theme.statValue }}>{stat.value}</span>
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: theme.statLabel, letterSpacing: "0.5px" }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right — Glowing Mesh Orb */}
          <div className="hidden lg:flex justify-center lg:justify-end items-center relative h-full">
            <motion.div
              animate={{
                y: [0, -22, 0],
                scale: [1, 1.06, 1],
              }}
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
            <motion.div
              animate={{
                y: [0, 16, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              style={{
                position: "absolute",
                width: 180,
                height: 180,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${theme.glow2} 0%, transparent 70%)`,
                filter: "blur(40px)",
                top: "30%",
                right: "18%",
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span style={{ fontSize: 10, color: theme.scrollColor, fontFamily: "'Sora', sans-serif", letterSpacing: "2px", textTransform: "uppercase" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-purple-500/40 bg-purple-950/20 text-xs text-purple-300 backdrop-blur-sm shadow-[0_0_10px_rgba(168,85,247,0.2)]"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

import { useEffect, useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Box, GraduationCap, Cpu } from "lucide-react";
import { useThemeStore } from "../store/themeStore";

// ────────────────────────────────────────────────────────────────
// Gradient used for the cycling role text (borrowed from Option A)
// ────────────────────────────────────────────────────────────────
const mernGradient = "linear-gradient(90deg, #a855f7 0%, #3b82f6 100%)";

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

// ── Cycling Typing (Option B timing/sizing + Option A gradient fill) ──
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
          timeoutId = setTimeout(eraseNext, 1400); // pause after typing
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
          timeoutId = setTimeout(typeNext, 300); // pause before next word starts typing
        }
      }, 45);
    };

    // Kick off the loop
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
const SocialIcon = ({ href, icon, hoverColor, hoverShadow, hoverBorder, defaultColor, defaultBorder, defaultBg, label }: {
  href: string; icon: React.ReactNode;
  hoverColor: string; hoverShadow: string; hoverBorder: string;
  defaultColor: string; defaultBorder: string; defaultBg: string; label: string;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -2, scale: 1.12 }} whileTap={{ scale: 0.95 }}
      style={{
        width: 38, height: 38, borderRadius: 10, background: defaultBg,
        border: `0.5px solid ${hovered ? hoverBorder : defaultBorder}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: hovered ? hoverColor : defaultColor,
        filter: hovered ? `drop-shadow(${hoverShadow})` : "none",
        transition: "all 0.3s ease",
      }}
    >
      {icon}
    </motion.a>
  );
};

// ── Hero ──────────────────────────────────────────────────────
const Hero = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  // ── Centralized theme token system (borrowed from Option A) ──
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
        tagline: "rgba(255,255,255,0.5)",
        cursor: "#60a5fa",
        contactBorder: "0.5px solid rgba(255,255,255,0.15)",
        contactBg: "rgba(255,255,255,0.05)",
        contactText: "rgba(255,255,255,0.75)",
        socialColor: "rgba(255,255,255,0.45)",
        socialBorder: "rgba(255,255,255,0.1)",
        socialBg: "rgba(255,255,255,0.05)",
        findMe: "rgba(255,255,255,0.25)",
        statValue: "#a78bfa",
        statLabel: "rgba(255,255,255,0.4)",
        scrollColor: "#ffffff",
        scrollBorder: "rgba(255,255,255,0.4)",
        badgeBg: "rgba(16,185,129,0.08)",
        badgeBorder: "0.5px solid rgba(16,185,129,0.28)",
        badgeText: "#10b981",
        badgeDot: "#10b981",
        btnGradient: "linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)",
        btnShadow: "0 8px 32px rgba(139,92,246,0.35)",
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
        cursor: "#3b82f6",
        contactBorder: "0.5px solid rgba(30,27,75,0.2)",
        contactBg: "rgba(255,255,255,0.7)",
        contactText: "rgba(30,27,75,0.75)",
        socialColor: "rgba(30,27,75,0.45)",
        socialBorder: "rgba(30,27,75,0.15)",
        socialBg: "rgba(255,255,255,0.6)",
        findMe: "rgba(30,27,75,0.35)",
        statValue: "#7c3aed",
        statLabel: "rgba(30,27,75,0.45)",
        scrollColor: "#1e1b4b",
        scrollBorder: "rgba(30,27,75,0.3)",
        badgeBg: "rgba(16,185,129,0.08)",
        badgeBorder: "0.5px solid rgba(16,185,129,0.28)",
        badgeText: "#0d9488",
        badgeDot: "#10b981",
        btnGradient: "linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)",
        btnShadow: "0 8px 32px rgba(139,92,246,0.25)",
      };

  const socialLinks = [
    { href: "https://github.com/razazaheer12", icon: <Github size={17} />, hoverColor: "#22c55e", hoverShadow: "0 0 14px rgba(34,197,94,0.7)", hoverBorder: "rgba(34,197,94,0.45)", label: "GitHub" },
    { href: "https://www.linkedin.com/in/raza-zaheer-416745340/", icon: <Linkedin size={17} />, hoverColor: "#0a66c2", hoverShadow: "0 0 14px rgba(10,102,194,0.7)", hoverBorder: "rgba(10,102,194,0.55)", label: "LinkedIn" },
    { href: "mailto:razazaheer2002@gmail.com", icon: <Mail size={17} />, hoverColor: "#e040fb", hoverShadow: "0 0 14px rgba(224,64,251,0.7)", hoverBorder: "rgba(224,64,251,0.45)", label: "Email" },
  ];

  const stats = [
    { value: "5+", label: "Projects Built", icon: <Box size={16} />, color: theme.statValue },
    { value: "2+", label: "Years Learning", icon: <GraduationCap size={16} />, color: "#34d399" },
    { value: "10+", label: "Technologies", icon: <Cpu size={16} />, color: theme.cursor },
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh]">

          {/* Left */}
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } } }}>

            {/* Badge */}
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 mb-7"
              style={{ background: theme.badgeBg, border: theme.badgeBorder, borderRadius: 50, padding: "6px 16px" }}>
              <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }}
                style={{ width: 7, height: 7, borderRadius: "50%", background: theme.badgeDot }} />
              <span style={{ fontSize: 11, color: theme.badgeText, fontFamily: "'Sora', sans-serif", fontWeight: 600, letterSpacing: "0.5px" }}>Available for work</span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-2px", marginBottom: 14, fontSize: "clamp(52px, 8vw, 96px)" }}>
              <span style={{ color: theme.nameA, display: "block" }}>Raza</span>
              <span style={{ color: theme.nameB, display: "block" }}>Zaheer</span>
            </motion.h1>

            {/* Role */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-3 mb-5" style={{ fontFamily: "'Sora', sans-serif" }}>
              <span style={{ color: "#ffffff", fontSize: 18, fontWeight: 300 }}>I'm a</span>
              <CyclingTyping cursorColor={theme.cursor} />
            </motion.div>

            {/* Tagline */}
           <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#ffffff", lineHeight: 1.8, maxWidth: 420, marginBottom: 36, fontWeight: 400 }}>
  Where creativity meets code — crafting futuristic,<br />
  elegant, and seamlessly responsive digital experiences.
</motion.p>

            {/* Buttons */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap gap-3 mb-10">
              <motion.a href="#projects" whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 16, background: theme.btnGradient, boxShadow: theme.btnShadow, color: "#ffffff", fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 14, letterSpacing: "0.3px", textDecoration: "none" }}>
                View My Work <span style={{ fontSize: 16 }}>→</span>
              </motion.a>
              <motion.a href="#contact" whileHover={{ scale: 1.03, y: -1, boxShadow: theme.btnShadow }} whileTap={{ scale: 0.97 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 16, border: theme.contactBorder, background: theme.contactBg, backdropFilter: "blur(8px)", color: theme.contactText, fontFamily: "'Sora', sans-serif", fontWeight: 500, fontSize: 14, letterSpacing: "0.3px", textDecoration: "none", transition: "all 0.3s ease" }}>
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-3">
              <span style={{ fontSize: 10, color: theme.findMe, fontFamily: "'Sora', sans-serif", letterSpacing: "1.5px", textTransform: "uppercase", marginRight: 4 }}>Find me</span>
              {socialLinks.map((item, i) => (
                <SocialIcon key={i} href={item.href} icon={item.icon}
                  hoverColor={item.hoverColor} hoverShadow={item.hoverShadow} hoverBorder={item.hoverBorder}
                  defaultColor={theme.socialColor} defaultBorder={theme.socialBorder} defaultBg={theme.socialBg} label={item.label} />
              ))}
            </motion.div>

            {/* Stats — left-aligned, icon + value (borrowed layout from Option A) */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-8 mt-10">
              {stats.map((stat, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: stat.color }}>
                    {stat.icon}
                    <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 22, color: theme.statValue }}>{stat.value}</span>
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#ffffff", letterSpacing: "0.5px" }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            {/* 3D Card Visual Removed */}
          </div>

        </div>
      </div>

      {/* Scroll — opacity raised from 0.35 → 0.6, border thickened for visibility */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span style={{ fontSize: 10, color: theme.scrollColor, fontFamily: "'Sora', sans-serif", letterSpacing: "2px", textTransform: "uppercase" }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 28, height: 28, borderRadius: "50%", border: `1px solid ${theme.scrollBorder}`, display: "flex", alignItems: "center", justifyContent: "center", color: theme.scrollColor, fontSize: 14 }}>
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

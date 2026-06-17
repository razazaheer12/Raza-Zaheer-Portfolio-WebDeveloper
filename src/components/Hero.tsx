import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useThemeStore } from "../store/themeStore";

// ── Particles ─────────────────────────────────────────────────
const ParticlesBackground = ({ count = 55 }: { count?: number }) => {
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
          style={{ top: `${p.top}%`, left: `${p.left}%`, width: p.size, height: p.size, background: "rgba(139,92,246,0.6)", opacity: p.opacity }}
          animate={{ y: [0, -18 * p.depth, 0], opacity: [p.opacity, p.opacity * 2, p.opacity], x: mouse.x * 14 * p.depth }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

// ── Cycling Typing ────────────────────────────────────────────
const roles = ["Frontend Developer", "Computer Science Graduate"];

const CyclingTyping = ({ isDark }: { isDark: boolean }) => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "erasing">("typing");

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      let i = displayText.length;
      const interval = setInterval(() => {
        i++;
        setDisplayText(current.slice(0, i));
        if (i >= current.length) { clearInterval(interval); timeout = setTimeout(() => setPhase("pause"), 1400); }
      }, 75);
      return () => { clearInterval(interval); clearTimeout(timeout); };
    }

    if (phase === "pause") {
      timeout = setTimeout(() => setPhase("erasing"), 200);
      return () => clearTimeout(timeout);
    }

    if (phase === "erasing") {
      let i = displayText.length;
      const interval = setInterval(() => {
        i--;
        setDisplayText(current.slice(0, i));
        if (i <= 0) { clearInterval(interval); timeout = setTimeout(() => { setRoleIndex((prev) => (prev + 1) % roles.length); setPhase("typing"); }, 300); }
      }, 45);
      return () => { clearInterval(interval); clearTimeout(timeout); };
    }
  }, [phase, roleIndex, displayText.length]);

  const textColor = isDark ? "#a78bfa" : "#7c3aed";
  const cursorColor = isDark ? "#60a5fa" : "#3b82f6";

  return (
    <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "clamp(18px, 2.4vw, 26px)", color: textColor }}>
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

  const socialLinks = [
    { href: "https://github.com/razazaheer12", icon: <Github size={17} />, hoverColor: "#22c55e", hoverShadow: "0 0 14px rgba(34,197,94,0.7)", hoverBorder: "rgba(34,197,94,0.45)", label: "GitHub" },
    { href: "https://www.linkedin.com/in/raza-zaheer-416745340/", icon: <Linkedin size={17} />, hoverColor: "#0a66c2", hoverShadow: "0 0 14px rgba(10,102,194,0.7)", hoverBorder: "rgba(10,102,194,0.55)", label: "LinkedIn" },
    { href: "mailto:razazaheer2002@gmail.com", icon: <Mail size={17} />, hoverColor: "#e040fb", hoverShadow: "0 0 14px rgba(224,64,251,0.7)", hoverBorder: "rgba(224,64,251,0.45)", label: "Email" },
  ];

  const razaColor  = isDarkMode ? "#ffffff" : "#7c3aed";
  const zaheerColor = isDarkMode ? "#ffffff" : "#1e1b4b";

  const prefixColor = isDarkMode ? "rgba(255,255,255,0.38)" : "rgba(30,27,75,0.5)";
  const taglineColor = isDarkMode ? "rgba(255,255,255,0.38)" : "rgba(30,27,75,0.55)";
  const socialDefaultColor = isDarkMode ? "rgba(255,255,255,0.45)" : "rgba(30,27,75,0.45)";
  const socialDefaultBorder = isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(30,27,75,0.15)";
  const socialDefaultBg = isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.6)";
  const findMeColor = isDarkMode ? "rgba(255,255,255,0.25)" : "rgba(30,27,75,0.35)";
  const scrollColor = isDarkMode ? "#ffffff" : "#1e1b4b";
  const scrollBorder = isDarkMode ? "rgba(255,255,255,0.4)" : "rgba(30,27,75,0.3)";
  const contactBorder = isDarkMode ? "0.5px solid rgba(255,255,255,0.15)" : "0.5px solid rgba(30,27,75,0.2)";
  const contactBg = isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.7)";
  const contactTextColor = isDarkMode ? "rgba(255,255,255,0.75)" : "rgba(30,27,75,0.75)";

  const statValueColor = isDarkMode ? "#a78bfa" : "#7c3aed";
  const statLabelColor = isDarkMode ? "rgba(255,255,255,0.35)" : "rgba(30,27,75,0.45)";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-500"
      style={{ background: isDarkMode ? "#050816" : "linear-gradient(135deg, #eff6ff 0%, #f5f3ff 50%, #fdf2f8 100%)" }}
    >
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: isDarkMode
          ? "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)"
          : "linear-gradient(rgba(30,27,75,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,27,75,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full" style={{ width: 600, height: 600, top: -140, left: -100, background: isDarkMode ? "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" : "radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)" }} />
        <div className="absolute rounded-full" style={{ width: 640, height: 640, top: -60, right: -160, background: isDarkMode ? "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)" : "radial-gradient(circle, rgba(168,85,247,0.11) 0%, transparent 70%)" }} />
        <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: -120, left: "35%", background: isDarkMode ? "radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)" : "radial-gradient(circle, rgba(219,39,119,0.07) 0%, transparent 70%)" }} />
        {[600, 400].map((s, i) => <div key={i} className="absolute rounded-full pointer-events-none" style={{ width: s, height: s, top: -s / 3, right: -s / 3, border: `0.5px solid ${isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(30,27,75,0.05)"}` }} />)}
      </div>

      <ParticlesBackground count={55} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col items-center justify-center text-center min-h-[85vh] max-w-3xl mx-auto">

          {/* Main Content Container */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } } }}
            className="flex flex-col items-center"
          >

            {/* Badge */}
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 mb-7"
              style={{ background: "rgba(16,185,129,0.08)", border: "0.5px solid rgba(16,185,129,0.28)", borderRadius: 50, padding: "6px 16px" }}>
              <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }}
                style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981" }} />
              <span style={{ fontSize: 11, color: "#10b981", fontFamily: "'Sora', sans-serif", fontWeight: 600, letterSpacing: "0.5px" }}>Available for work</span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-2px", marginBottom: 14, fontSize: "clamp(52px, 8vw, 96px)" }}>
              <span style={{ color: razaColor, display: "block" }}>Raza</span>
              <span style={{ color: zaheerColor, display: "block" }}>Zaheer</span>
            </motion.h1>

            {/* Role */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-3 mb-5" style={{ fontFamily: "'Sora', sans-serif" }}>
              <span style={{ color: prefixColor, fontSize: 18, fontWeight: 300 }}>I'm a</span>
              <CyclingTyping isDark={isDarkMode} />
            </motion.div>

            {/* Tagline */}
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: taglineColor, lineHeight: 1.8, maxWidth: 500, marginBottom: 36, fontWeight: 300 }}>
              Where creativity meets code — crafting futuristic,<br />
              elegant, and seamlessly responsive digital experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap justify-center gap-3 mb-10">
              <motion.a href="#projects" whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 16, background: "linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)", boxShadow: "0 8px 32px rgba(139,92,246,0.35)", color: "#ffffff", fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 14, letterSpacing: "0.3px", textDecoration: "none" }}>
                View My Work <span style={{ fontSize: 16 }}>→</span>
              </motion.a>
              <motion.a href="#contact" whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 16, border: contactBorder, background: contactBg, backdropFilter: "blur(8px)", color: contactTextColor, fontFamily: "'Sora', sans-serif", fontWeight: 500, fontSize: 14, letterSpacing: "0.3px", textDecoration: "none", transition: "all 0.3s ease" }}>
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center justify-center gap-3">
              <span style={{ fontSize: 10, color: findMeColor, fontFamily: "'Sora', sans-serif", letterSpacing: "1.5px", textTransform: "uppercase", marginRight: 4 }}>Find me</span>
              {socialLinks.map((item, i) => (
                <SocialIcon key={i} href={item.href} icon={item.icon}
                  hoverColor={item.hoverColor} hoverShadow={item.hoverShadow} hoverBorder={item.hoverBorder}
                  defaultColor={socialDefaultColor} defaultBorder={socialDefaultBorder} defaultBg={socialDefaultBg} label={item.label} />
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center justify-center gap-8 mt-12 w-full">
              {[
                { value: "5+", label: "Projects Built" },
                { value: "2+", label: "Years Learning" },
                { value: "10+", label: "Technologies" },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 24, color: statValueColor }}>{stat.value}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: statLabelColor, letterSpacing: "0.5px", marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Scroll */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.35 }} transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span style={{ fontSize: 10, color: scrollColor, fontFamily: "'Sora', sans-serif", letterSpacing: "2px", textTransform: "uppercase" }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 28, height: 28, borderRadius: "50%", border: `0.5px solid ${scrollBorder}`, display: "flex", alignItems: "center", justifyContent: "center", color: scrollColor, fontSize: 14 }}>
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

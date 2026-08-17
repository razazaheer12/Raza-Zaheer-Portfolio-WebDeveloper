import { useEffect, useState, useMemo, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, Box, GraduationCap, Cpu, Zap, Globe, Server, Brain } from "lucide-react";

// ─────────────────────────────────────────────────────────────────
// DESIGN TOKENS — Pure Dark Theme (Light mode removed)
// ─────────────────────────────────────────────────────────────────
const T = {
  bg:           "#030712",
  grid:         "rgba(255,255,255,0.022)",
  glow1:        "rgba(99,102,241,0.18)",
  glow2:        "rgba(139,92,246,0.14)",
  glow3:        "rgba(236,72,153,0.08)",
  glow4:        "rgba(6,182,212,0.10)",
  particle:     "rgba(139,92,246,0.7)",
  name:         "#ffffff",
  prefix:       "rgba(255,255,255,0.35)",
  tagline:      "#ffffff",
  cursor:       "#818cf8",
  statValue:    "#a5b4fc",
  statLabel:    "rgba(255,255,255,0.4)",
  scrollColor:  "rgba(255,255,255,0.5)",
  scrollBorder: "rgba(255,255,255,0.2)",
  findMe:       "rgba(255,255,255,0.22)",
  socialColor:  "rgba(255,255,255,0.45)",
  socialBorder: "rgba(255,255,255,0.08)",
  socialBg:     "rgba(255,255,255,0.04)",
  badgeBg:      "rgba(16,185,129,0.08)",
  badgeBorder:  "rgba(16,185,129,0.35)",
  badgeText:    "#10b981",
  badgeDot:     "#10b981",
  btnGradient:  "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
  btnShadow:    "0 0 32px rgba(99,102,241,0.45)",
  contactBorder:"1px solid rgba(255,255,255,0.12)",
  contactBg:    "rgba(255,255,255,0.04)",
  contactText:  "rgba(255,255,255,0.8)",
} as const;

const mernGradient = "linear-gradient(90deg, #818cf8 0%, #c084fc 50%, #f472b6 100%)";

// ─────────────────────────────────────────────────────────────────
// PARTICLES
// ─────────────────────────────────────────────────────────────────
const ParticlesBackground = ({ count = 55 }: { count?: number }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e: MouseEvent) =>
      setMouse({ x: (e.clientX / window.innerWidth - 0.5) * 2, y: (e.clientY / window.innerHeight - 0.5) * 2 });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2.2 + 0.5,
      delay: Math.random() * 10,
      duration: Math.random() * 15 + 10,
      depth: Math.random() * 0.5 + 0.3,
      opacity: Math.random() * 0.3 + 0.06,
    })), [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{ top: `${p.top}%`, left: `${p.left}%`, width: p.size, height: p.size, background: T.particle, opacity: p.opacity }}
          animate={{ y: [0, -18 * p.depth, 0], opacity: [p.opacity, p.opacity * 2.2, p.opacity], x: mouse.x * 14 * p.depth }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────
// CYCLING TYPING
// ─────────────────────────────────────────────────────────────────
const roles = ["Full-Stack Developer", "MERN Stack Developer", "Computer Science Graduate"];

const CyclingTyping = () => {
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
      }, 72);
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
      }, 42);
    };

    typeNext();
    return () => { clearInterval(intervalId); clearTimeout(timeoutId); };
  }, []);

  return (
    <span style={{
      fontFamily: "'Sora', sans-serif",
      fontWeight: 700,
      fontSize: "clamp(18px, 2.4vw, 28px)",
      background: mernGradient,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.52, ease: "linear" }}
        style={{ display: "inline-block", width: 2.5, height: "0.88em", background: T.cursor, verticalAlign: "middle", marginLeft: 3, borderRadius: 2 }}
      />
    </span>
  );
};

// ─────────────────────────────────────────────────────────────────
// SOCIAL ICON
// ─────────────────────────────────────────────────────────────────
const SocialIcon = ({ href, icon, hoverColor, hoverShadow, hoverBorder, label }: {
  href: string; icon: React.ReactNode; hoverColor: string; hoverShadow: string; hoverBorder: string; label: string;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -3, scale: 1.12 }} whileTap={{ scale: 0.93 }}
      style={{
        width: 40, height: 40, borderRadius: 11,
        background: hovered ? "rgba(255,255,255,0.07)" : T.socialBg,
        border: `1px solid ${hovered ? hoverBorder : T.socialBorder}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: hovered ? hoverColor : T.socialColor,
        filter: hovered ? `drop-shadow(${hoverShadow})` : "none",
        transition: "all 0.28s ease",
      }}
    >
      {icon}
    </motion.a>
  );
};

// ─────────────────────────────────────────────────────────────────
// TECH MARQUEE
// ─────────────────────────────────────────────────────────────────
const techStack = [
  { label: "React.js", color: "#61dafb" },
  { label: "Next.js", color: "#ffffff" },
  { label: "TypeScript", color: "#3b82f6" },
  { label: "Node.js", color: "#22c55e" },
  { label: "NestJS", color: "#f43f5e" },
  { label: "MongoDB", color: "#4ade80" },
  { label: "Socket.io", color: "#a3a3a3" },
  { label: "LangChain", color: "#34d399" },
  { label: "Pinecone", color: "#2dd4bf" },
  { label: "Tailwind", color: "#38bdf8" },
  { label: "Docker", color: "#60a5fa" },
  { label: "Prisma", color: "#a78bfa" },
];

const TechMarquee = () => {
  const doubled = [...techStack, ...techStack];
  return (
    <div className="relative w-full overflow-hidden mt-10"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <motion.div
        className="flex gap-3 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        style={{ willChange: "transform" }}
      >
        {doubled.map((tech, i) => (
          <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold shrink-0"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid rgba(255,255,255,0.08)`,
              color: tech.color,
              fontFamily: "'Sora', sans-serif",
              letterSpacing: "0.3px",
            }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: tech.color, display: "inline-block", opacity: 0.9 }} />
            {tech.label}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────
// DEVELOPER CARD (Right Column) — Glassmorphism + 3D Tilt
// ─────────────────────────────────────────────────────────────────
const DeveloperCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [12, -12]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-12, 12]), { stiffness: 200, damping: 25 });
  const glowX = useTransform(mouseX, [-150, 150], ["20%", "80%"]);
  const glowY = useTransform(mouseY, [-150, 150], ["20%", "80%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  const badges = [
    { icon: <Globe size={13} aria-hidden="true" />, label: "Frontend", color: "#818cf8" },
    { icon: <Server size={13} aria-hidden="true" />, label: "Backend", color: "#34d399" },
    { icon: <Brain size={13} aria-hidden="true" />, label: "AI/LLM", color: "#c084fc" },
    { icon: <Zap size={13} aria-hidden="true" />, label: "Real-Time", color: "#fbbf24" },
  ];

  const skills = [
    { name: "React / Next.js", level: 92, color: "#818cf8" },
    { name: "Node / NestJS", level: 82, color: "#34d399" },
    { name: "TypeScript", level: 85, color: "#60a5fa" },
    { name: "AI Integration", level: 75, color: "#c084fc" },
  ];

  return (
    <div className="hidden lg:flex justify-center lg:justify-end items-center relative h-full"
      style={{ perspective: "900px" }}>

      {/* Outer ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute"
        style={{
          width: 420, height: 420, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(139,92,246,0.12) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* 3D Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-[340px] rounded-[28px] overflow-hidden cursor-default"
      >
        {/* Dynamic mouse glow inside card */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle 180px at ${glowX} ${glowY}, rgba(129,140,248,0.14), transparent 70%)`,
          }}
        />

        {/* Card glass surface */}
        <div style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 28,
          backdropFilter: "blur(20px)",
          padding: "28px",
        }}>

          {/* Header row */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 18, color: "#fff",
                boxShadow: "0 0 20px rgba(99,102,241,0.5)",
              }}>RZ</div>
              <div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff" }}>
                  Raza Zaheer
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
                  Frontend Developer
                </div>
              </div>
            </div>
            {/* Status */}
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
              style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)" }}>
              <motion.div
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981" }}
              />
              <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 10, color: "#10b981", fontWeight: 600, letterSpacing: "0.3px" }}>
                Available
              </span>
            </div>
          </div>

          {/* Skill bars */}
          <div className="flex flex-col gap-3 mb-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1.5">
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
                    {skill.name}
                  </span>
                  <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, color: skill.color, fontWeight: 600 }}>
                    {skill.level}%
                  </span>
                </div>
                <div style={{ height: 4, borderRadius: 8, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                    style={{ height: "100%", borderRadius: 8, background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Specialty badges */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {badges.map((b) => (
              <motion.div key={b.label}
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: b.color,
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "default",
                  transition: "all 0.25s ease",
                }}>
                {b.icon} {b.label}
              </motion.div>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2 pt-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {[
              { value: "5+", label: "Projects" },
              { value: "2+", label: "Yrs Exp" },
              { value: "10+", label: "Tech" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 18, color: "#a5b4fc" }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "0.3px" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────
const Hero = () => {

  const socialLinks = [
    { href: "https://github.com/razazaheer12", icon: <Github size={17} aria-hidden="true" />, label: "GitHub", hoverColor: "#22c55e", hoverShadow: "0 0 14px rgba(34,197,94,0.7)", hoverBorder: "rgba(34,197,94,0.4)" },
    { href: "https://www.linkedin.com/in/raza-zaheer/", icon: <Linkedin size={17} aria-hidden="true" />, label: "LinkedIn", hoverColor: "#60a5fa", hoverShadow: "0 0 14px rgba(96,165,250,0.7)", hoverBorder: "rgba(96,165,250,0.45)" },
    { href: "mailto:razazaheer2002@gmail.com", icon: <Mail size={17} aria-hidden="true" />, label: "Email", hoverColor: "#e040fb", hoverShadow: "0 0 14px rgba(224,64,251,0.7)", hoverBorder: "rgba(224,64,251,0.45)" },
  ];

  const stats = [
    { value: "5+", label: "Projects Built", icon: <Box size={15} aria-hidden="true" />, color: T.statValue },
    { value: "2+", label: "Years Exp",      icon: <GraduationCap size={15} aria-hidden="true" />, color: "#34d399" },
    { value: "10+", label: "Technologies",  icon: <Cpu size={15} aria-hidden="true" />, color: T.cursor },
  ];

  return (
    <section id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: T.bg }}>

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${T.grid} 1px, transparent 1px), linear-gradient(90deg, ${T.grid} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full"
          style={{ width: 700, height: 700, top: -200, left: -180, background: `radial-gradient(circle, ${T.glow1} 0%, transparent 65%)` }} />
        <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute rounded-full"
          style={{ width: 650, height: 650, top: -80, right: -200, background: `radial-gradient(circle, ${T.glow2} 0%, transparent 65%)` }} />
        <div className="absolute rounded-full"
          style={{ width: 500, height: 500, bottom: -150, left: "35%", background: `radial-gradient(circle, ${T.glow3} 0%, transparent 65%)` }} />
        <div className="absolute rounded-full"
          style={{ width: 400, height: 400, top: "40%", right: "10%", background: `radial-gradient(circle, ${T.glow4} 0%, transparent 65%)` }} />
      </div>

      <ParticlesBackground count={55} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 pb-24 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] lg:min-h-[88vh]">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.16, delayChildren: 0.15 } } }}
          >

            {/* Available badge — neon glow ring */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 mb-7"
              style={{
                background: T.badgeBg,
                borderRadius: 50,
                padding: "7px 18px",
                border: `1px solid ${T.badgeBorder}`,
                boxShadow: `0 0 18px rgba(16,185,129,0.2), 0 0 40px rgba(16,185,129,0.08)`,
              }}>
              <span className="relative flex h-2 w-2">
                <motion.span
                  animate={{ scale: [1, 2.2], opacity: [0.8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inline-flex h-full w-full rounded-full"
                  style={{ background: T.badgeDot }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: T.badgeDot }} />
              </span>
              <span style={{ fontSize: 11, color: T.badgeText, fontFamily: "'Sora', sans-serif", fontWeight: 700, letterSpacing: "0.6px" }}>
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-3px",
                marginBottom: 16,
                fontSize: "clamp(52px, 8vw, 96px)",
              }}>
              <span style={{ color: T.name, display: "block" }}>Raza</span>
              <span style={{
                display: "block",
                background: "linear-gradient(135deg, #c7d2fe 0%, #818cf8 50%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Zaheer</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-3 mb-5"
              style={{ fontFamily: "'Sora', sans-serif" }}>
              <span style={{ color: T.prefix, fontSize: 18, fontWeight: 300 }}>I'm a</span>
              <CyclingTyping />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: T.tagline, lineHeight: 1.85, maxWidth: 430, marginBottom: 36, fontWeight: 400 }}>
              Where creativity meets code — crafting futuristic,<br />
              elegant, and seamlessly responsive digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap gap-3 mb-10">

              {/* Primary */}
              <motion.a href="#projects"
                whileHover={{ scale: 1.04, y: -2, boxShadow: "0 0 48px rgba(99,102,241,0.65)" }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 30px", borderRadius: 14,
                  background: T.btnGradient,
                  boxShadow: T.btnShadow,
                  color: "#ffffff",
                  fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 14,
                  letterSpacing: "0.3px", textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.15)",
                  transition: "box-shadow 0.3s ease",
                }}>
                View My Work <span style={{ fontSize: 16 }}>→</span>
              </motion.a>

              {/* Secondary — glassmorphism border */}
              <motion.a href="#contact"
                whileHover={{ scale: 1.04, y: -2, borderColor: "rgba(129,140,248,0.5)", boxShadow: "0 0 24px rgba(99,102,241,0.2)" }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 30px", borderRadius: 14,
                  border: T.contactBorder,
                  background: T.contactBg,
                  backdropFilter: "blur(12px)",
                  color: T.contactText,
                  fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 14,
                  letterSpacing: "0.3px", textDecoration: "none",
                  transition: "all 0.3s ease",
                }}>
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-3 mb-0">
              <span style={{ fontSize: 10, color: T.findMe, fontFamily: "'Sora', sans-serif", letterSpacing: "2px", textTransform: "uppercase", marginRight: 4 }}>
                Find me
              </span>
              {socialLinks.map((item, i) => (
                <SocialIcon key={i}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  hoverColor={item.hoverColor}
                  hoverShadow={item.hoverShadow}
                  hoverBorder={item.hoverBorder}
                />
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-8 mt-8 mb-0">
              {stats.map((stat, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: stat.color }}>
                    {stat.icon}
                    <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 22, color: T.statValue }}>
                      {stat.value}
                    </span>
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#ffffff", letterSpacing: "0.4px" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Tech Marquee */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ delay: 0.3 }}
              className="mb-16 lg:mb-0">
              <TechMarquee />
            </motion.div>

          </motion.div>

          {/* ── RIGHT COLUMN — Developer Card ── */}
          <DeveloperCard />

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span style={{ fontSize: 10, color: T.scrollColor, fontFamily: "'Sora', sans-serif", letterSpacing: "2.5px", textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 28, height: 28, borderRadius: "50%",
            border: `1px solid ${T.scrollBorder}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: T.scrollColor, fontSize: 14,
          }}>
          ↓
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;

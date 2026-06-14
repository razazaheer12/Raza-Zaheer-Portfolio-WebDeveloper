import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

// ── Particles Background ──────────────────────────────────────
const ParticlesBackground = ({ count = 50 }: { count?: number }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 1.5 + 0.8,
    delay: Math.random() * 10,
    duration: Math.random() * 15 + 10,
    depth: Math.random() * 0.5 + 0.3,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -18 * p.depth, 0],
            opacity: [p.opacity, p.opacity * 2.5, p.opacity],
            x: mouse.x * 14 * p.depth,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// ── Typing Animation ──────────────────────────────────────────
const TypingAnimation = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i));
        i++;
        if (i > text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 75);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.6 }}
        className="inline-block w-[2px] h-[1em] bg-blue-500 align-middle ml-[2px] rounded-sm"
      />
    </span>
  );
};

// ── 3D Card Visual ────────────────────────────────────────────
const CardVisual = () => {
  const bubbles = [
    { label: "React", color: "#61dafb", bg: "#0d2137", top: "-28px", right: "10px" },
    { label: "TS",    color: "#3b82f6", bg: "#0d1f3c", top: "80px",  right: "-18px" },
    { label: "Next",  color: "#ffffff", bg: "#111120", top: "180px", right: "-14px" },
    { label: "Node",  color: "#68a063", bg: "#0d200d", bottom: "80px", left: "-14px" },
    { label: "JS",    color: "#f7df1e", bg: "#201c00", top: "160px", left: "-18px" },
  ];

  const floatDelays = [0, 0.4, 0.8, 1.2, 1.6];

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center"
      style={{ width: 320, height: 400 }}
    >
      {/* Ambient glow behind card */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 280,
          height: 280,
          background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          filter: "blur(20px)",
        }}
      />

      {/* Main 3D card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: 260,
          height: 320,
          borderRadius: 24,
          background: "linear-gradient(145deg, rgba(30,20,80,0.97), rgba(12,8,44,0.99))",
          border: "0.5px solid rgba(139,92,246,0.35)",
          transform: "perspective(900px) rotateY(-9deg) rotateX(5deg)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Inner glow */}
        <div
          style={{
            position: "absolute",
            top: -40,
            left: -40,
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Colored lines */}
        <div style={{ padding: "36px 28px 0" }}>
          {[
            { gradient: "linear-gradient(90deg,#ec4899,#8b5cf6)", width: "78%" },
            { gradient: "linear-gradient(90deg,#f59e0b,#ec4899)", width: "58%" },
            { gradient: "linear-gradient(90deg,#3b82f6,#10b981)", width: "68%" },
          ].map((line, i) => (
            <motion.div
              key={i}
              initial={{ width: 0 }}
              animate={{ width: line.width }}
              transition={{ duration: 1.2, delay: 1.2 + i * 0.3, ease: "easeOut" }}
              style={{
                height: 5,
                borderRadius: 3,
                background: line.gradient,
                marginBottom: 12,
              }}
            />
          ))}

          {/* Blank area */}
          <div
            style={{
              marginTop: 20,
              height: 100,
              background: "rgba(139,92,246,0.06)",
              borderRadius: 12,
              border: "0.5px solid rgba(139,92,246,0.14)",
            }}
          />
        </div>

        {/* Code lines */}
        <div style={{ padding: "16px 28px 0" }}>
          {[90, 65, 40, 85, 55].map((w, i) => (
            <div
              key={i}
              style={{
                height: 3,
                borderRadius: 2,
                background: "rgba(255,255,255,0.07)",
                width: `${w}%`,
                marginBottom: 9,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating tech bubbles */}
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3 + i * 0.5,
            delay: floatDelays[i],
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            ...(b.top ? { top: b.top } : {}),
            ...(b.bottom ? { bottom: b.bottom } : {}),
            ...(b.right ? { right: b.right } : {}),
            ...(b.left ? { left: b.left } : {}),
            width: 46,
            height: 46,
            borderRadius: "50%",
            background: b.bg,
            border: "1.5px solid rgba(255,255,255,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: b.color,
            fontSize: 10,
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            zIndex: 10,
          }}
        >
          {b.label}
        </motion.div>
      ))}
    </motion.div>
  );
};

// ── Hero Section ──────────────────────────────────────────────
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050816]"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 560,
            height: 560,
            top: -120,
            left: -100,
            background: "radial-gradient(circle, rgba(59,130,246,0.11) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 640,
            height: 640,
            top: -60,
            right: -160,
            background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 440,
            height: 440,
            bottom: -120,
            left: "40%",
            background: "radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Corner rings */}
        {[600, 400].map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: s,
              height: s,
              top: -s / 3,
              right: -s / 3,
              border: "0.5px solid rgba(255,255,255,0.04)",
            }}
          />
        ))}
      </div>

      <ParticlesBackground count={50} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh]">

          {/* ── Left: Text ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
            }}
          >

            {/* Available badge */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 mb-7"
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "0.5px solid rgba(16,185,129,0.28)",
                borderRadius: 50,
                padding: "6px 16px",
              }}
            >
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981" }}
              />
              <span
                style={{
                  fontSize: 11,
                  color: "#10b981",
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                }}
              >
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: "-2px",
                marginBottom: 14,
              }}
              className="text-6xl sm:text-7xl lg:text-8xl"
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #ffffff 30%, rgba(139,92,246,0.95) 70%, rgba(236,72,153,0.85) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "block",
                }}
              >
                Raza
              </span>
              <span style={{ color: "white", display: "block" }}>Zaheer</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-3 mb-5"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              <span style={{ color: "rgba(255,255,255,0.38)", fontSize: 18, fontWeight: 300 }}>
                I'm a
              </span>
              <TypingAnimation
                text="Frontend Developer"
                className=""
                delay={900}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.75,
                maxWidth: 420,
                marginBottom: 36,
                fontWeight: 300,
              }}
            >
              Where creativity meets code — crafting futuristic,<br />
              elegant, and seamlessly responsive digital experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden"
              >
                <span
                  className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-semibold text-sm"
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    background: "linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)",
                    boxShadow: "0 8px 32px rgba(139,92,246,0.3)",
                    letterSpacing: "0.3px",
                  }}
                >
                  View My Work
                  <span style={{ fontSize: 16 }}>→</span>
                </span>
              </a>

              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl"
                style={{
                  border: "0.5px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(8px)",
                  padding: "14px 28px",
                }}
              >
                <span
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <span
                  className="relative z-10 text-sm font-medium group-hover:text-white transition-colors duration-300"
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    color: "rgba(255,255,255,0.75)",
                    letterSpacing: "0.3px",
                  }}
                >
                  Contact Me
                </span>
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-3"
            >
              <span
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.25)",
                  fontFamily: "'Sora', sans-serif",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginRight: 4,
                }}
              >
                Find me
              </span>
              {[
                { href: "https://github.com/razazaheer12", icon: <Github size={16} /> },
                { href: "https://www.linkedin.com/in/raza-zaheer-416745340/", icon: <Linkedin size={16} /> },
                { href: "mailto:razazaheer2002@gmail.com", icon: <Mail size={16} /> },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.05)",
                    border: "0.5px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    transition: "all 0.3s",
                  }}
                  className="hover:border-blue-500/40 hover:text-white"
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>

          </motion.div>

          {/* ── Right: 3D Card ── */}
          <div className="flex justify-center lg:justify-end">
            <CardVisual />
          </div>

        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-16 left-6 lg:left-16 flex items-center gap-8"
      >
        {[
          { num: "8+", label: "Projects" },
          { num: "12+", label: "Technologies" },
          { num: "1+", label: "Years exp" },
        ].map((stat, i) => (
          <React.Fragment key={i}>
            {i > 0 && (
              <div style={{ width: "0.5px", height: 32, background: "rgba(255,255,255,0.08)" }} />
            )}
            <div className="flex flex-col gap-1">
              <span
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: 22,
                  background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.num}
              </span>
              <span
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.25)",
                  fontFamily: "'Sora', sans-serif",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </span>
            </div>
          </React.Fragment>
        ))}
      </motion.div>

      {/* Scroll down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0.32 }}
      >
        <span
          style={{
            fontSize: 10,
            color: "white",
            fontFamily: "'Sora', sans-serif",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            border: "0.5px solid rgba(255,255,255,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 14,
          }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

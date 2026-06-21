import { useEffect, useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Box, GraduationCap, Cpu } from "lucide-react";
import * as THREE from "three";

// ────────────────────────────────────────────────────────────────
// Design tokens — "Cosmic Developer Interface" (see DESIGN.md)
// Add these once to your global font stylesheet / index.html:
// <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Geist+Mono:wght@400&display=swap" rel="stylesheet" />
// ────────────────────────────────────────────────────────────────
const c = {
  void: "#030014",
  glassBg: "rgba(11,11,30,0.6)",
  glassBorder: "rgba(255,255,255,0.1)",
  primary: "#ddb7ff",
  primaryContainer: "#b76dff",
  secondary: "#adc6ff",
  tertiary: "#4edea3",
  onSurface: "#eadfed",
  onSurfaceVariant: "#cfc2d6",
  outlineVariant: "#4d4354",
  mernGradient: "linear-gradient(90deg, #a855f7 0%, #3b82f6 100%)",
  btnGradient: "linear-gradient(135deg, #3b82f6 0%, #d946ef 100%)",
};

const fontDisplay = "'Plus Jakarta Sans', system-ui, sans-serif";
const fontCode = "'Geist Mono', 'JetBrains Mono', monospace";

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
          style={{ top: `${p.top}%`, left: `${p.left}%`, width: p.size, height: p.size, background: "rgba(221,183,255,0.8)", opacity: p.opacity }}
          animate={{ y: [0, -18 * p.depth, 0], opacity: [p.opacity, p.opacity * 2, p.opacity], x: mouse.x * 14 * p.depth }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

// ── Cycling Typing ────────────────────────────────────────────
// Infinite loop: type → pause → erase → next role → repeat forever
const roles = ["MERN Stack Developer", "Full-Stack Developer", "Computer Science Graduate"];

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
        fontFamily: fontDisplay,
        fontWeight: 700,
        fontSize: "clamp(24px, 3vw, 32px)",
        letterSpacing: "-0.02em",
        background: c.mernGradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.55 }}
        style={{ display: "inline-block", width: 2, height: "0.85em", background: c.secondary, verticalAlign: "middle", marginLeft: 3, borderRadius: 1, WebkitTextFillColor: c.secondary }}
      />
    </span>
  );
};

// ── Social Icon ───────────────────────────────────────────────
const SocialIcon = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -2, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: c.glassBg,
        backdropFilter: "blur(12px)",
        border: `1px solid ${hovered ? "rgba(221,183,255,0.4)" : c.glassBorder}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: c.primary,
        transition: "border-color 0.3s ease, background 0.3s ease",
      }}
    >
      {icon}
    </motion.a>
  );
};

// ── 3D Asset (converted from the Stitch three.js snippet) ─────
const HeroThreeScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 1;
    const height = container.clientHeight || 1;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for the entire asset
    const group = new THREE.Group();
    scene.add(group);

    // Central MERN node
    const centralGeo = new THREE.IcosahedronGeometry(1, 1);
    const centralMat = new THREE.MeshPhongMaterial({
      color: 0xa855f7,
      emissive: 0x6b21a8,
      transparent: true,
      opacity: 0.8,
      wireframe: true,
    });
    const centralNode = new THREE.Mesh(centralGeo, centralMat);
    group.add(centralNode);

    // Floating nodes (MongoDB, Express, React, Node)
    const nodeColors = [0x10b981, 0x3b82f6, 0x60a5fa, 0x84cc16];
    const nodes: THREE.Mesh[] = [];
    for (let i = 0; i < 4; i++) {
      const geo = new THREE.SphereGeometry(0.2, 16, 16);
      const mat = new THREE.MeshStandardMaterial({
        color: nodeColors[i],
        emissive: nodeColors[i],
        emissiveIntensity: 2,
      });
      const node = new THREE.Mesh(geo, mat);
      const angle = (i / 4) * Math.PI * 2;
      node.position.set(Math.cos(angle) * 2.5, Math.sin(angle) * 2.5, 0);
      group.add(node);
      nodes.push(node);
    }

    // Digital grid rings
    const ringGeo = new THREE.TorusGeometry(3, 0.01, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.3 });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.x = Math.PI / 2;
    group.add(ring1, ring2);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xa855f7, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 6;

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      group.rotation.y += 0.005;
      group.rotation.z += 0.002;
      nodes.forEach((node, i) => {
        node.position.y += Math.sin(Date.now() * 0.002 + i) * 0.01;
      });
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
      centralGeo.dispose();
      centralMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      nodes.forEach((n) => {
        n.geometry.dispose();
        (n.material as THREE.Material).dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />;
};

// ── Hero ──────────────────────────────────────────────────────
const Hero = () => {
  const socialLinks = [
    { href: "https://github.com/razazaheer12", icon: <Github size={18} />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/raza-zaheer-416745340/", icon: <Linkedin size={18} />, label: "LinkedIn" },
    { href: "mailto:razazaheer2002@gmail.com", icon: <Mail size={18} />, label: "Email" },
  ];

  const stats = [
    { value: "5+", label: "Projects Built", icon: <Box size={16} />, color: c.primary },
    { value: "2+", label: "Years Learning", icon: <GraduationCap size={16} />, color: c.tertiary },
    { value: "10+", label: "Technologies", icon: <Cpu size={16} />, color: c.secondary },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: c.void }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full" style={{ width: 600, height: 600, top: -140, left: -100, background: "radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)" }} />
        <div className="absolute rounded-full" style={{ width: 640, height: 640, top: -60, right: -160, background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }} />
        <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: -160, left: "30%", background: "radial-gradient(circle, rgba(78,222,163,0.06) 0%, transparent 70%)" }} />
      </div>

      <ParticlesBackground count={55} />

      <div className="relative z-10 w-full mx-auto px-6 lg:px-12 py-12" style={{ maxWidth: 1200 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">

          {/* Left */}
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } } }}>

            {/* Badge */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 mb-7"
              style={{ background: c.glassBg, backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "8px 16px" }}
            >
              <span className="relative flex h-2 w-2">
                <motion.span
                  animate={{ scale: [1, 1.8], opacity: [0.7, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inline-flex h-full w-full rounded-full"
                  style={{ background: c.tertiary }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: c.tertiary }} />
              </span>
              <span style={{ fontSize: 14, color: c.tertiary, fontFamily: fontDisplay, fontWeight: 600, letterSpacing: "0.05em" }}>Available for work</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              style={{
                fontFamily: fontDisplay,
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
                marginBottom: 16,
                fontSize: "clamp(40px, 6vw, 64px)",
                color: c.onSurface,
              }}
            >
              Raza Zaheer
            </motion.h1>

            {/* Role */}
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap items-center gap-2 mb-5"
              style={{ fontFamily: fontDisplay }}
            >
              <span style={{ color: c.onSurface, fontSize: "clamp(20px, 2.6vw, 28px)", fontWeight: 600 }}>I'm a</span>
              <CyclingTyping />
            </motion.h2>

            {/* Tagline */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              style={{ fontFamily: fontDisplay, fontSize: 17, color: c.onSurfaceVariant, lineHeight: 1.6, maxWidth: 460, marginBottom: 36, fontWeight: 400 }}
            >
              Where creativity meets code — crafting futuristic, elegant, and seamlessly responsive digital experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap gap-3 mb-10">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -2, boxShadow: "0px 0px 28px rgba(168,85,247,0.55)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 32px",
                  borderRadius: 12,
                  background: c.btnGradient,
                  boxShadow: "0px 0px 20px rgba(168,85,247,0.4)",
                  color: "#ffffff",
                  fontFamily: fontDisplay,
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2, borderColor: "rgba(183,109,255,0.6)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 32px",
                  borderRadius: 12,
                  border: "1px solid rgba(183,109,255,0.3)",
                  background: c.glassBg,
                  backdropFilter: "blur(12px)",
                  color: c.onSurface,
                  fontFamily: fontDisplay,
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  transition: "border-color 0.3s ease",
                }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col gap-3 mb-10">
              <span style={{ fontSize: 12, color: c.onSurfaceVariant, opacity: 0.7, fontFamily: fontDisplay, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Find me</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((item, i) => (
                  <SocialIcon key={i} href={item.href} icon={item.icon} label={item.label} />
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-8">
              {stats.map((stat, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: stat.color }}>
                    {stat.icon}
                    <span style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 24, color: c.onSurface }}>{stat.value}</span>
                  </div>
                  <div style={{ fontFamily: fontDisplay, fontSize: 13, color: c.onSurfaceVariant, letterSpacing: "0.02em" }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right — 3D asset card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full" style={{ maxWidth: 560, aspectRatio: "1 / 1" }}>
              {/* Ambient glow behind the card */}
              <div className="absolute inset-0 rounded-full pointer-events-none" style={{ background: "rgba(221,183,255,0.1)", filter: "blur(100px)" }} />

              {/* Glass card */}
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  borderRadius: 28,
                  background: c.glassBg,
                  backdropFilter: "blur(12px)",
                  border: `1px solid ${c.glassBorder}`,
                  boxShadow: "inset 0px 1px 0px rgba(255,255,255,0.08)",
                }}
              >
                <HeroThreeScene />

                {/* Floating tech labels */}
                <div
                  className="absolute top-4 right-4 px-4 py-1.5 rounded-full"
                  style={{ background: c.glassBg, backdropFilter: "blur(12px)", border: "1px solid rgba(221,183,255,0.2)" }}
                >
                  <span style={{ fontFamily: fontCode, fontSize: 13, color: c.primary }}>MongoDB</span>
                </div>
                <div
                  className="absolute bottom-16 left-4 px-4 py-1.5 rounded-full"
                  style={{ background: c.glassBg, backdropFilter: "blur(12px)", border: "1px solid rgba(173,198,255,0.2)" }}
                >
                  <span style={{ fontFamily: fontCode, fontSize: 13, color: c.secondary }}>React.js</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span style={{ fontSize: 12, color: c.onSurfaceVariant, fontFamily: fontDisplay, letterSpacing: "0.05em" }}>Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 24, height: 40, borderRadius: 50, border: `2px solid ${c.outlineVariant}`, display: "flex", justifyContent: "center", paddingTop: 8 }}
        >
          <div style={{ width: 4, height: 8, borderRadius: 50, background: c.primary }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

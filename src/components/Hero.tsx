import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useThemeStore } from "../store/themeStore";

// ==================== Floating Gradient Shapes ====================
const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[
      { className: "top-20 left-10 w-32 h-32 from-blue-400/30 to-purple-500/30", dur: 8 },
      { className: "top-40 right-20 w-24 h-24 from-pink-400/30 to-red-500/30", dur: 6, delay: 1 },
      { className: "bottom-32 left-1/4 w-20 h-20 from-green-400/30 to-blue-500/30", dur: 10, delay: 2 },
      { className: "top-1/2 right-1/3 w-20 h-20 from-yellow-400/30 to-orange-500/30", dur: 7, delay: 0.5 },
    ].map((s, i) => (
      <motion.div
        key={i}
        className={`absolute bg-gradient-to-br ${s.className} rounded-full blur-3xl`}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: s.dur,
          delay: s.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

// ==================== Futuristic Particle Background ====================
const ParticlesBackground = ({ count = 40 }: { count?: number }) => {
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
    size: Math.random() * 2 + 1.5,
    delay: Math.random() * 10,
    duration: Math.random() * 15 + 10,
    depth: Math.random() * 0.5 + 0.5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white dark:bg-blue-300 shadow-[0_0_6px_rgba(255,255,255,0.8)]"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -20 * p.depth, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.3, 1],
            x: mouse.x * 20 * p.depth,
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

// ==================== Typing Animation ====================
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 80);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-blue-500">|</span>
    </span>
  );
};

// ==================== Developer Illustration + Floating Logos ====================
const DeveloperIllustration = () => {
  const logos = [
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      alt: "React",
      pos: "-top-10 left-1/2 -translate-x-1/2",
      glow: "from-cyan-400 to-blue-500",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
      pos: "top-1/4 -left-5 sm:-left-10",
      glow: "from-yellow-400 to-yellow-600",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      alt: "CSS",
      pos: "top-1/3 -right-5 sm:-right-10",
      glow: "from-blue-400 to-blue-600",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
      pos: "bottom-6 -left-5 sm:-left-10",
      glow: "from-green-400 to-green-600",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      alt: "Next.js",
      pos: "bottom-8 right-0",
      glow: "from-gray-300 to-gray-600",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      alt: "SQL",
      pos: "bottom-1/4 -right-5 sm:-right-10",
      glow: "from-blue-500 to-indigo-600",
    },
    {
      src: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4",
      alt: "Supabase",
      pos: "top-0 right-1/8 sm:right-1/4",
      glow: "from-green-400 to-emerald-600",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        {/* Laptop Illustration */}
        <div className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform rotate-3">
            <div className="absolute inset-4 bg-gradient-to-br from-blue-900/90 to-purple-900/90 rounded-lg overflow-hidden backdrop-blur-md">
              <div className="p-3 space-y-2">
                {[
                  "from-green-400 to-blue-500",
                  "from-yellow-400 to-red-500",
                  "from-purple-400 to-pink-500",
                ].map((g, i) => (
                  <motion.div
                    key={i}
                    className={`h-2 bg-gradient-to-r ${g} rounded`}
                    initial={{ width: 0 }}
                    animate={{ width: ["0%", "90%"] }}
                    transition={{ duration: 2, delay: 2 + i * 0.5 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating Tech Logos */}
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              className={`absolute ${logo.pos} flex items-center justify-center`}
              animate={{ y: [0, -10, 0], rotate: [0, 360] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="p-1 rounded-full bg-white shadow-lg relative">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full relative z-10"
                />
                <div
                  className={`absolute inset-0 rounded-full blur-md bg-gradient-to-r ${logo.glow} opacity-70 animate-pulse`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10" />
    </motion.div>
  );
};

// ==================== Hero Section ====================
const Hero = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-blue-900/40 dark:to-indigo-900/60"
    >
      <FloatingShapes />
<ParticlesBackground count={40} />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.1),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center min-h-[70vh] sm:min-h-[80vh]">
          {/* Text Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
            }}
          >
            <motion.h1
  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight font-montserrat"
>
  <span
    className={
      isDarkMode
        ? "text-[#FFF1F1]"
        : "bg-gradient-to-r from-[#a941d2] to-[#2d0075] bg-clip-text text-transparent"
    }
  >
    Raza Zaheer
  </span>
</motion.h1>

{/* “Frontend Web Developer” now uses same gradient as main heading */}
<motion.div
  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
  className="mt-3 font-semibold font-poppins"
>
  <TypingAnimation
    text="Frontend Web Developer"
    className={
      isDarkMode
        ? "text-[#FFF1F1] text-xl sm:text-2xl lg:text-3xl"
        : "bg-gradient-to-r from-[#a941d2] to-[#2d0075] bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl"
    }
    delay={800}
  />
</motion.div>

{/* tagline simplified and smaller */}
<motion.p
  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
  className="mt-4 text-xs sm:text-sm lg:text-base text-gray-500 dark:text-gray-400 max-w-md leading-relaxed font-inter bg-transparent tracking-wide"
>
  Where creativity meets code, futuristic, elegant, and seamlessly responsive.
</motion.p>


            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-6 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-[#b805ff] to-[#2d0075] shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                View My Work <ArrowRight className="inline ml-2 w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-[#2d0075] to-[#b805ff] shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-6 flex space-x-6"
            >
              {[
                {
                  href: "https://github.com/razazaheer12",
                  icon: <Github size={28} />,
                  color:
                    "hover:text-green-400 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]",
                },
                {
                  href: "https://www.linkedin.com/in/raza-zaheer-416745340/",
                  icon: <Linkedin size={28} />,
                  color:
                    "hover:text-blue-500 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]",
                },
                {
                  href: "mailto:razazaheer2002@gmail.com",
                  icon: <Mail size={28} />,
                  color:
                    "hover:text-pink-600 hover:drop-shadow-[0_0_10px_rgba(219,39,119,0.8)]",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  whileHover={{ scale: 1.2, rotate: i % 2 === 0 ? 5 : -5 }}
                  className={`relative text-gray-600 dark:text-gray-400 ${item.color} transition`}
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 blur-md" />
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration Column */}
          <div className="flex justify-center lg:justify-end">
            <DeveloperIllustration />
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-gray-500 dark:text-gray-400 text-sm">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-blue-600 dark:text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-6-6m6 6l6-6" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Database } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiGithub,
  SiFigma,
  SiNodedotjs,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiSocketdotio,
  SiNestjs,
  SiVercel,
  SiNetlify,
  SiGit,
  SiOpenai,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// ─── Skills Data (resume-complete) ────────────────────────────
const allSkills = {
  Frontend: [
    { name: "HTML5",        icon: <SiHtml5 />,       color: "text-orange-500", glow: "group-hover:shadow-orange-500/25", ring: "group-hover:ring-orange-500/20" },
    { name: "CSS3",         icon: <SiCss3 />,        color: "text-blue-500",   glow: "group-hover:shadow-blue-500/25",   ring: "group-hover:ring-blue-500/20" },
    { name: "JavaScript",   icon: <SiJavascript />,  color: "text-yellow-400", glow: "group-hover:shadow-yellow-400/25", ring: "group-hover:ring-yellow-400/20" },
    { name: "TypeScript",   icon: <SiTypescript />,  color: "text-blue-600",   glow: "group-hover:shadow-blue-600/25",   ring: "group-hover:ring-blue-600/20" },
    { name: "React.js",     icon: <SiReact />,       color: "text-sky-400",    glow: "group-hover:shadow-sky-400/25",    ring: "group-hover:ring-sky-400/20" },
    { name: "Next.js",      icon: <SiNextdotjs />,   color: "text-gray-800 dark:text-white", glow: "group-hover:shadow-gray-400/25", ring: "group-hover:ring-gray-400/20" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400",   glow: "group-hover:shadow-cyan-400/25",   ring: "group-hover:ring-cyan-400/20" },
    { name: "Figma",        icon: <SiFigma />,       color: "text-pink-500",   glow: "group-hover:shadow-pink-500/25",   ring: "group-hover:ring-pink-500/20" },
  ],
  "Backend & DB": [
    { name: "Node.js",    icon: <SiNodedotjs />,  color: "text-green-500",  glow: "group-hover:shadow-green-500/25",  ring: "group-hover:ring-green-500/20" },
    { name: "Express.js", icon: <SiExpress />,    color: "text-gray-700 dark:text-gray-300", glow: "group-hover:shadow-gray-400/25", ring: "group-hover:ring-gray-400/20" },
    { name: "NestJS",     icon: <SiNestjs />,     color: "text-red-500",    glow: "group-hover:shadow-red-500/25",    ring: "group-hover:ring-red-500/20" },
    { name: "MongoDB",    icon: <SiMongodb />,    color: "text-green-600",  glow: "group-hover:shadow-green-600/25",  ring: "group-hover:ring-green-600/20" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-sky-600",    glow: "group-hover:shadow-sky-600/25",    ring: "group-hover:ring-sky-600/20" },
    { name: "Docker",     icon: <SiDocker />,     color: "text-blue-400",   glow: "group-hover:shadow-blue-400/25",   ring: "group-hover:ring-blue-400/20" },
  ],
  "Real-Time & AI": [
    { name: "Socket.io", icon: <SiSocketdotio />, color: "text-gray-700 dark:text-white", glow: "group-hover:shadow-gray-400/25", ring: "group-hover:ring-gray-400/20" },
    { name: "LangChain", icon: <SiOpenai />,      color: "text-green-400",                glow: "group-hover:shadow-green-400/25", ring: "group-hover:ring-green-400/20" },
    { name: "Pinecone",  icon: <SiOpenai />,      color: "text-teal-400",                 glow: "group-hover:shadow-teal-400/25",  ring: "group-hover:ring-teal-400/20" },
    { name: "JWT Auth",  icon: <ShieldCheck className="w-full h-full" />, color: "text-yellow-500", glow: "group-hover:shadow-yellow-500/25", ring: "group-hover:ring-yellow-500/20" },
    { name: "RAG Pipelines",  icon: <Database className="w-full h-full" />,    color: "text-purple-400", glow: "group-hover:shadow-purple-400/25", ring: "group-hover:ring-purple-400/20" },
  ],
  Tools: [
    { name: "Git",     icon: <SiGit />,    color: "text-orange-600",               glow: "group-hover:shadow-orange-600/25", ring: "group-hover:ring-orange-600/20" },
    { name: "GitHub",  icon: <SiGithub />, color: "text-gray-800 dark:text-white", glow: "group-hover:shadow-gray-400/25",   ring: "group-hover:ring-gray-400/20" },
    { name: "VS Code", icon: <VscCode />,  color: "text-blue-500",                 glow: "group-hover:shadow-blue-500/25",   ring: "group-hover:ring-blue-500/20" },
    { name: "Vercel",  icon: <SiVercel />, color: "text-gray-800 dark:text-white", glow: "group-hover:shadow-gray-400/25",   ring: "group-hover:ring-gray-400/20" },
    { name: "Netlify", icon: <SiNetlify />,color: "text-teal-500",                 glow: "group-hover:shadow-teal-500/25",   ring: "group-hover:ring-teal-500/20" },
  ],
};

const categories = Object.keys(allSkills) as (keyof typeof allSkills)[];
const allFlat = Object.values(allSkills).flat();
const row1 = allFlat.slice(0, Math.ceil(allFlat.length / 2));
const row2 = allFlat.slice(Math.ceil(allFlat.length / 2));

// ─── Typing animation variants ────────────────────────────────
const typingContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const typingLetter = {
  hidden: { opacity: 0, y: "0.3em" },
  visible: { opacity: 1, y: "0em", transition: { duration: 0.35 } },
};

const categoryColors: Record<string, string> = {
  Frontend:         "from-blue-500 to-cyan-400",
  "Backend & DB":   "from-green-500 to-emerald-400",
  "Real-Time & AI": "from-purple-500 to-pink-500",
  Tools:            "from-orange-500 to-yellow-400",
};

// ─── Skill Card (for grid) ────────────────────────────────────
const SkillCard = ({ skill, index }: { skill: (typeof allFlat)[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: 0.05 * index }}
    viewport={{ once: true }}
    whileHover={{ y: -5, scale: 1.04 }}
    className={`
      group relative flex flex-col items-center justify-center gap-3
      px-5 py-6
      rounded-2xl cursor-default select-none
      border border-gray-200/70 dark:border-white/[0.07]
      bg-white/60 dark:bg-white/[0.03]
      backdrop-blur-xl shadow-sm
      ring-1 ring-transparent ${skill.ring}
      hover:border-gray-300/80 dark:hover:border-white/[0.15]
      hover:bg-white/90 dark:hover:bg-white/[0.07]
      hover:shadow-xl ${skill.glow}
      transition-all duration-300 ease-out
    `}
  >
    {/* Hover gradient wash */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className={`relative text-[2.4rem] md:text-[2.8rem] ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
      {skill.icon}
    </div>

    <p
      className="relative text-[11px] md:text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300 uppercase text-center"
      style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
    >
      {skill.name}
    </p>
  </motion.div>
);

// ─── Marquee Row ──────────────────────────────────────────────
const MarqueeRow = ({ items, reverse = false, duration = 28 }: {
  items: (typeof allFlat)[0][];
  reverse?: boolean;
  duration?: number;
}) => {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="flex gap-4 md:gap-5 whitespace-nowrap">
      <motion.div
        className="flex gap-4 md:gap-5"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
        style={{ willChange: "transform" }}
      >
        {doubled.map((skill, i) => (
          <div
            key={`${reverse ? "r" : "f"}-${i}`}
            className={`
              group relative flex flex-col items-center justify-center gap-3
              min-w-[130px] md:min-w-[150px] px-5 py-5
              rounded-2xl cursor-default select-none
              border border-gray-200/70 dark:border-white/[0.07]
              bg-white/60 dark:bg-white/[0.03]
              backdrop-blur-xl shadow-sm
              ring-1 ring-transparent ${skill.ring}
              hover:border-gray-300/80 dark:hover:border-white/[0.12]
              hover:bg-white/90 dark:hover:bg-white/[0.06]
              hover:shadow-xl ${skill.glow}
              hover:-translate-y-1.5
              transition-all duration-300 ease-out
            `}
          >
            <div className={`text-[2.2rem] md:text-[2.6rem] ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
              {skill.icon}
            </div>
            <p
              className="text-[11px] md:text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300 uppercase"
              style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────
const Skills = () => {
  const heading = "Skills & Tech";
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#050816] dark:via-[#0B1126] dark:to-[#050816] transition-colors duration-500"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-0 h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[150px]"
        />
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute right-[-120px] top-10 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[160px]"
        />
        <div className="absolute bottom-[-180px] left-1/2 -translate-x-1/2 h-[360px] w-[360px] rounded-full bg-fuchsia-500/8 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={typingContainer}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-[#D8B4FE] to-[#A855F7] bg-clip-text text-transparent mb-4 flex justify-center"
            style={{ fontFamily: "'Sora', Montserrat, sans-serif" }}
          >
            {heading.split("").map((char, i) => (
              <motion.span key={i} variants={typingLetter} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>

          {/* Accent line — animated draw-in */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-blue-500/40" />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="h-[3px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-pink-500/40" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto mt-6 leading-[1.8]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            From pixel-perfect frontends to AI-integrated backends — here's
            the full stack I build with.
          </motion.p>
        </motion.div>
        
      {/* Dark Glassmorphic Category Buttons (Matched with Contact Theme) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3.5 mb-10"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md overflow-hidden ${
                  isActive
                    ? "bg-purple-900/40 text-white border border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    : "bg-white/[0.04] text-purple-200/80 border border-purple-500/30 hover:border-purple-500 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                }`}
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {/* Internal subtle gradient highlight on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 tracking-wide">{cat}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Category Grid — AnimatePresence for smooth tab switching */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16"
          >
            {allSkills[activeCategory as keyof typeof allSkills].map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300/50 dark:via-white/10 to-transparent" />
          <span
            className="text-xs uppercase tracking-[3px] text-gray-400 dark:text-gray-500 font-semibold whitespace-nowrap"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            All Technologies
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300/50 dark:via-white/10 to-transparent" />
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden space-y-4"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <MarqueeRow items={row1} reverse={false} duration={34} />
          <MarqueeRow items={[...row2].reverse()} reverse={true} duration={28} />
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;

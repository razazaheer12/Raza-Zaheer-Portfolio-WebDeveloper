import React from "react";
import { motion } from "framer-motion";
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
} from "react-icons/si";

// ─── Skills Data ───────────────────────────────────────────────
const skills = [
  {
    name: "HTML5",
    icon: <SiHtml5 />,
    color: "text-orange-500",
    glow: "group-hover:shadow-orange-500/20",
    ring: "group-hover:ring-orange-500/20",
  },
  {
    name: "CSS3",
    icon: <SiCss3 />,
    color: "text-blue-500",
    glow: "group-hover:shadow-blue-500/20",
    ring: "group-hover:ring-blue-500/20",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
    glow: "group-hover:shadow-yellow-400/20",
    ring: "group-hover:ring-yellow-400/20",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-blue-600",
    glow: "group-hover:shadow-blue-600/20",
    ring: "group-hover:ring-blue-600/20",
  },
  {
    name: "React",
    icon: <SiReact />,
    color: "text-sky-400",
    glow: "group-hover:shadow-sky-400/20",
    ring: "group-hover:ring-sky-400/20",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-gray-800 dark:text-white",
    glow: "group-hover:shadow-gray-400/20",
    ring: "group-hover:ring-gray-400/20",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    color: "text-green-500",
    glow: "group-hover:shadow-green-500/20",
    ring: "group-hover:ring-green-500/20",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-gray-700 dark:text-gray-300",
    glow: "group-hover:shadow-gray-400/20",
    ring: "group-hover:ring-gray-400/20",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "text-sky-600",
    glow: "group-hover:shadow-sky-600/20",
    ring: "group-hover:ring-sky-600/20",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
    glow: "group-hover:shadow-cyan-400/20",
    ring: "group-hover:ring-cyan-400/20",
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    color: "text-gray-800 dark:text-white",
    glow: "group-hover:shadow-gray-400/20",
    ring: "group-hover:ring-gray-400/20",
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    color: "text-pink-500",
    glow: "group-hover:shadow-pink-500/20",
    ring: "group-hover:ring-pink-500/20",
  },
];

// Split into two rows
const row1 = skills.slice(0, 6);
const row2 = skills.slice(6);

// ─── Typing animation variants ────────────────────────────────
const typingContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const typingLetter = {
  hidden: { opacity: 0, y: "0.3em" },
  visible: { opacity: 1, y: "0em", transition: { duration: 0.35 } },
};

// ─── Skill Card ───────────────────────────────────────────────
const SkillCard = ({ skill }: { skill: (typeof skills)[0] }) => (
  <div
    className={`
      group relative flex flex-col items-center justify-center gap-3
      min-w-[130px] md:min-w-[155px] px-5 py-5
      rounded-2xl cursor-default select-none
      border border-gray-200/70 dark:border-white/[0.07]
      bg-white/60 dark:bg-white/[0.03]
      backdrop-blur-xl
      shadow-sm
      ring-1 ring-transparent ${skill.ring}
      hover:border-gray-300/80 dark:hover:border-white/[0.12]
      hover:bg-white/90 dark:hover:bg-white/[0.06]
      hover:shadow-xl ${skill.glow}
      transition-all duration-400 ease-out
      hover:-translate-y-1.5
    `}
  >
    {/* Icon */}
    <div className={`text-[2.4rem] md:text-[2.8rem] ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
      {skill.icon}
    </div>

    {/* Name */}
    <p
      className="text-[11px] md:text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300 uppercase"
      style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
    >
      {skill.name}
    </p>
  </div>
);

// ─── Marquee Row ──────────────────────────────────────────────
const MarqueeRow = ({
  items,
  reverse = false,
  duration = 28,
}: {
  items: (typeof skills)[0][];
  reverse?: boolean;
  duration?: number;
}) => {
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className="flex gap-4 md:gap-5 whitespace-nowrap">
      <motion.div
        className="flex gap-4 md:gap-5"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration,
          ease: "linear",
        }}
        style={{ willChange: "transform" }}
      >
        {doubled.map((skill, i) => (
          <SkillCard key={`${reverse ? "r" : "f"}-${i}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────
const Skills = () => {
  const heading = "My Skills";

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#050816] dark:via-[#0B1126] dark:to-[#050816] transition-colors duration-500"
    >
      {/* ── Ambient Glow ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[380px] w-[380px] rounded-full bg-blue-600/8 dark:bg-blue-600/10 blur-[150px]" />
        <div className="absolute right-[-120px] top-10 h-[420px] w-[420px] rounded-full bg-purple-600/8 dark:bg-purple-600/10 blur-[160px]" />
        <div className="absolute bottom-[-180px] left-1/2 -translate-x-1/2 h-[360px] w-[360px] rounded-full bg-fuchsia-500/6 dark:bg-fuchsia-500/8 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Badge ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-5 flex justify-center"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/8 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            My Expertise
          </div>
        </motion.div>

        {/* ── Heading ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={typingContainer}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex justify-center"
            style={{ fontFamily: "'Sora', Montserrat, sans-serif", letterSpacing: "-0.02em" }}
          >
            {heading.split("").map((char, i) => (
              <motion.span key={i} variants={typingLetter} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>

          {/* Accent line */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-blue-500/40" />
            <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-pink-500/40" />
          </div>

          <p
            className="text-center text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto mt-6 leading-[1.8]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            I've worked with a variety of modern technologies in the web
            development world. Here are the main areas of my expertise.
          </p>
        </motion.div>

        {/* ── Marquee Container ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden space-y-4"
        >
          {/* Edge fades — matched to section bg */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-28 md:w-40 z-10"
            style={{
              background: "linear-gradient(to right, var(--fade-color, white), transparent)",
            }}
          />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-28 md:w-40 z-10"
            style={{
              background: "linear-gradient(to left, var(--fade-color, white), transparent)",
            }}
          />

          {/* Tailwind-based fades for light/dark — layered on top */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-28 md:w-40 z-20 bg-gradient-to-r from-blue-50 via-blue-50/80 to-transparent dark:from-[#050816] dark:via-[#050816]/80 dark:to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-28 md:w-40 z-20 bg-gradient-to-l from-purple-50 via-purple-50/80 to-transparent dark:from-[#050816] dark:via-[#050816]/80 dark:to-transparent" />

          {/* Row 1 — left to right */}
          <MarqueeRow items={[...skills]} reverse={false} duration={32} />

          {/* Row 2 — right to left */}
          <MarqueeRow items={[...skills].reverse()} reverse={true} duration={26} />
        </motion.div>

        {/* ── Bottom stat strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {[
            { value: "12+", label: "Technologies" },
            { value: "1+", label: "Years Learning" },
            { value: "10+", label: "Projects Built" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs text-gray-400 dark:text-gray-500 font-medium tracking-wide uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;

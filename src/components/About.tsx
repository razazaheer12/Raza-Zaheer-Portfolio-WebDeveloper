import React from "react";
import { motion } from "framer-motion";
import { Download, MapPin, Mail, User, Briefcase, ArrowDownToLine } from "lucide-react";

const About: React.FC = () => {
  const heading = "About Me";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const infoCards = [
    {
      icon: <User className="w-4 h-4" />,
      label: "Full Name",
      value: "Raza Zaheer",
      color: "text-blue-500 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-500/10",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
      value: "razazaheer2002@gmail.com",
      color: "text-violet-500 dark:text-violet-400",
      bg: "bg-violet-50 dark:bg-violet-500/10",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      label: "Location",
      value: "Karachi, Pakistan",
      color: "text-rose-500 dark:text-rose-400",
      bg: "bg-rose-50 dark:bg-rose-500/10",
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      label: "Availability",
      value: "Available for Work",
      color: "text-emerald-500 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-500/10",
      highlight: true,
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 bg-white dark:bg-[#050816]"
    >
      {/* Subtle background noise texture */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Ambient glows — muted, not harsh */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-[-80px] h-[380px] w-[380px] rounded-full bg-blue-400/8 dark:bg-blue-500/8 blur-[140px]" />
        <div className="absolute right-[-60px] top-[80px] h-[340px] w-[340px] rounded-full bg-violet-400/8 dark:bg-violet-500/8 blur-[140px]" />
        <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 h-[300px] w-[300px] rounded-full bg-rose-400/6 dark:bg-rose-500/6 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Section Heading ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-blue-600 dark:text-blue-400 mb-5"
          >
            <span className="w-5 h-px bg-blue-500/60" />
            Get to know me
            <span className="w-5 h-px bg-blue-500/60" />
          </motion.span>

          <h2
            className="text-4xl md:text-[3.25rem] font-bold tracking-tight text-gray-900 dark:text-white flex justify-center flex-wrap"
            style={{ fontFamily: "'Sora', 'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
          >
            {heading.split("").map((char, i) => (
              <motion.span key={i} variants={letterVariants} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>

          {/* Thin accent line */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-blue-500/50" />
            <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-rose-500" />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-rose-500/50" />
          </div>

          <p className="max-w-xl mx-auto mt-7 text-sm md:text-[0.95rem] leading-[1.85] text-gray-500 dark:text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Passionate about crafting modern, visually engaging, and highly responsive digital experiences with clean code and elegant UI design.
          </p>
        </motion.div>

        {/* ── Main Content ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-14 lg:gap-20 items-center">

          {/* ── Left: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Soft ambient shadow behind image */}
              <div className="absolute inset-0 translate-y-6 scale-90 rounded-3xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-2xl" />

              {/* Image card — clean, no neon */}
              <div className="relative group overflow-hidden rounded-3xl border border-gray-200/80 dark:border-white/8 bg-gray-50 dark:bg-white/4 shadow-xl shadow-gray-200/60 dark:shadow-black/40 transition-shadow duration-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/15">
                <img
                  src="/raza.png"
                  alt="Raza Zaheer"
                  className="w-full max-w-[260px] sm:max-w-[290px] lg:max-w-[300px] object-cover rounded-3xl transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Subtle bottom fade overlay */}
                <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/10 dark:from-black/30 to-transparent rounded-b-3xl" />
              </div>

              {/* Floating badge — "Frontend Dev" */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 sm:-right-5 flex items-center gap-2 rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white dark:bg-[#0d1225] px-3.5 py-2.5 shadow-lg shadow-black/8 dark:shadow-black/40 backdrop-blur-xl"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600">
                  <Briefcase className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-900 dark:text-white leading-none" style={{ fontFamily: "'Sora', sans-serif" }}>Frontend</p>
                  <p className="text-[9px] text-gray-400 leading-none mt-0.5">Developer</p>
                </div>
              </motion.div>

              {/* Floating dot — top left */}
              <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full border-2 border-blue-500/40 bg-white dark:bg-[#050816]" />
            </div>
          </motion.div>

          {/* ── Right: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            {/* Role label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/8 px-3.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Frontend Web Developer
            </div>

            {/* Heading */}
            <h3
              className="text-2xl md:text-[1.9rem] font-bold text-gray-900 dark:text-white mb-5 leading-snug"
              style={{ fontFamily: "'Sora', sans-serif", letterSpacing: "-0.02em" }}
            >
              Who I Am
            </h3>

            {/* Bio paragraphs */}
            <p className="text-sm md:text-[0.9rem] text-gray-500 dark:text-gray-400 leading-[1.85] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              I'm a passionate Frontend Developer focused on building sleek, responsive, and user-friendly websites that combine clean code with elegant design principles.
            </p>
            <p className="text-sm md:text-[0.9rem] text-gray-500 dark:text-gray-400 leading-[1.85] mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              I enjoy transforming ideas into visually engaging digital products while staying updated with the latest technologies, frameworks, animations, and UI/UX trends.
            </p>

            {/* ── Info Cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9">
              {infoCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-3.5 rounded-2xl border border-gray-200/80 dark:border-white/7 bg-gray-50/80 dark:bg-white/[0.03] p-3.5 hover:border-gray-300 dark:hover:border-white/12 hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-300"
                >
                  {/* Icon bubble */}
                  <div className={`flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl ${card.bg} ${card.color}`}>
                    {card.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Sora', sans-serif" }}>
                      {card.label}
                    </p>
                    <p className={`text-xs font-semibold truncate ${card.highlight ? "text-emerald-500 dark:text-emerald-400" : "text-gray-800 dark:text-gray-200"}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {card.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── Resume Button ── */}
            <a
              href="/razazaheer_resume.pdf"
              download="razazaheer_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden"
            >
              {/* Outer glow layer */}
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-rose-500 opacity-0 group-hover:opacity-100 blur-md scale-110 transition-opacity duration-500" />

              {/* Button body */}
              <span className="relative inline-flex items-center gap-3 rounded-2xl bg-gray-900 dark:bg-white/6 border border-gray-800 dark:border-white/10 px-6 py-3.5 text-white text-sm font-semibold tracking-wide shadow-lg group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-violet-600 group-hover:to-rose-500 group-hover:border-transparent transition-all duration-400" style={{ fontFamily: "'Sora', sans-serif" }}>
                {/* Animated icon container */}
                <span className="flex items-center justify-center w-7 h-7 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                  <ArrowDownToLine className="w-3.5 h-3.5 text-white transition-transform duration-400 group-hover:translate-y-0.5" />
                </span>
                Download Résumé
                {/* Shimmer sweep */}
                <span className="absolute inset-0 rounded-2xl overflow-hidden">
                  <span className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] translate-x-[-200%] group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out" />
                </span>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

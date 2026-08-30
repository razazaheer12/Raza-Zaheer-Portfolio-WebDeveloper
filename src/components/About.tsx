import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  MapPin,
  Mail,
  User,
  Briefcase,
  Rocket,
  TrendingUp,
  CheckCircle2,
  Compass,
} from "lucide-react";

const navbarPurpleGradient = "linear-gradient(90deg, #c084fc 0%, #a855f7 50%, #9333ea 100%)";

const About: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.08 * i, ease: "easeOut" },
    }),
  };

  const infoCards = [
    {
      icon: <User className="w-4 h-4 text-purple-400" />,
      label: "Full Name",
      value: "Raza Zaheer",
      valueClass: "text-gray-300",
    },
    {
      icon: <Mail className="w-4 h-4 text-purple-400" />,
      label: "Email",
      value: "razazaheer2002@gmail.com",
      valueClass: "text-gray-300 break-all",
    },
    {
      icon: <MapPin className="w-4 h-4 text-purple-400" />,
      label: "Location",
      value: "Karachi, Pakistan",
      valueClass: "text-gray-300",
    },
    {
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
      label: "Availability",
      value: "Available for Work",
      valueClass: "text-emerald-400 font-semibold",
      pulse: true,
    },
  ];

  const stats = [
    { icon: Rocket, value: "2", label: "Production Systems Shipped" },
    { icon: TrendingUp, value: "35%", label: "Engagement Boost" },
    { icon: CheckCircle2, value: "100%", label: "On-time Delivery" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 md:py-24 transition-colors duration-500"
      style={{ background: "#050816" }}
    >
      {/* Ambient Glow Effects matching Hero */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 550,
            height: 550,
            top: -100,
            left: -100,
            background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            top: "20%",
            right: -150,
            background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* SECTION HEADING */}
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center justify-center">
          {/* Hero-matched Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-7"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-purple-200 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              <Compass size={13} className="text-purple-400" />
              DISCOVERY
            </div>
          </motion.div>

          {/* Heading with Purple Accent */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            About{" "}
            <span
              style={{
                background: navbarPurpleGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Me
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 88 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[3px] rounded-full bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 mt-4 mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-2xl mt-6 text-sm md:text-base leading-7 text-gray-400 mx-auto text-center"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Passionate about crafting modern, visually engaging, and highly
            responsive digital experiences with clean code and elegant UI design.
          </motion.p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 rounded-3xl bg-purple-600/20 blur-[90px] pointer-events-none" />

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative group w-full max-w-[420px] lg:max-w-[460px]"
            >
              <div className="relative overflow-hidden rounded-[26px] border border-purple-900/50 bg-[#0b0a1d]/80 backdrop-blur-xl shadow-2xl transition-colors hover:border-purple-500/50">
                <img
                  src="/raza.png"
                  alt="Raza Zaheer"
                  className="w-full h-[520px] sm:h-[580px] lg:h-[620px] object-cover object-top rounded-[26px] transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            {/* Developer Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.15)] backdrop-blur-md mb-6"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              <Briefcase size={14} className="text-purple-400" />
              Software Engineer · Full-Stack Developer amp; 
            </motion.div>

            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-5 leading-snug"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Who I Am
            </h3>

            <p className="text-sm md:text-base italic text-gray-300 leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              I'm{" "}
              <span className="font-semibold not-italic text-white">
                Raza Zaheer
              </span>
              , a Computer Science graduate and{" "}
              <span className="font-semibold not-italic text-white">
                Front-End Developer
              </span>{" "}
              with 2+ years of freelance experience delivering production React.js and
              Next.js applications, now expanding into full-stack and AI-integrated
              development. I've independently architected and deployed two end-to-end
              systems: a real-time analytics platform with role-based access control and
              live Socket.io data streaming, and a RAG-powered chatbot built on Pinecone
              and LangChain for context-aware document retrieval.
            </p>

            <p className="text-sm md:text-base italic text-gray-300 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Beyond writing clean components, I enjoy the harder engineering problems —
              WebSocket reconnection handling, cross-origin auth across split production
              deployments, and REST API integration end-to-end. Across 10+ client
              projects, I've maintained{" "}
              <span className="font-semibold not-italic text-white">
                100% on-time delivery
              </span>{" "}
              while improving user engagement by up to 35% through better UX and
              performance.
            </p>

            {/* Stat Cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-2.5 mb-6"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  className="group/stat rounded-xl border border-purple-900/50 bg-[#0b0a1d]/80 backdrop-blur-xl px-2.5 py-3 text-center shadow-sm hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 cursor-default"
                >
                  <stat.icon className="w-4 h-4 mx-auto mb-1 text-purple-400 group-hover/stat:text-purple-300 transition-colors duration-300" />
                  <div
                    className="text-xl md:text-2xl font-bold text-white group-hover/stat:text-purple-300 transition-colors duration-300"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[9px] md:text-[10px] font-mono font-bold tracking-wide uppercase leading-tight text-gray-400 group-hover/stat:text-purple-200 transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative overflow-hidden rounded-xl border border-purple-900/50 bg-[#0b0a1d]/80 backdrop-blur-xl p-4 shadow-md hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    {card.pulse ? (
                      <span className="relative flex h-4 w-4 items-center justify-center">
                        <motion.span
                          animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                          transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                          className="absolute inline-flex h-2 w-2 rounded-full bg-emerald-400"
                        />
                        {card.icon}
                      </span>
                    ) : (
                      card.icon
                    )}
                    <h4 className="text-sm font-semibold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
                      {card.label}
                    </h4>
                  </div>
                  <p className={`text-xs ${card.valueClass}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {card.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Download Button */}
            <motion.a
              href="/Raza_Zaheer_Resume.pdf"
              download="Raza_Zaheer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.975 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-purple-500/50 bg-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] backdrop-blur-sm transition-all duration-500 hover:bg-purple-500 hover:shadow-[0_10px_50px_rgba(168,85,247,0.5)]"
              style={{ fontFamily: "'Sora', sans-serif", textDecoration: "none" }}
            >
              <Download className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              <span className="relative z-10 tracking-wide">Download Resume</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

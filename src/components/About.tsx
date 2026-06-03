import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Briefcase,
  Download,
  Sparkles,
} from "lucide-react";

const About: React.FC = () => {
  const heading = "About Me";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#050816] dark:via-[#0B1126] dark:to-[#111827] transition-colors duration-500"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 -left-20 h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute top-20 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-5 flex justify-center"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full border border-[#6B4EFF]/20 bg-white/70 dark:bg-[#131C39]/70 backdrop-blur-xl px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#6B4EFF] dark:text-[#8FA8FF] shadow-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Sparkles size={16} />
              ABOUT ME
            </div>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white flex justify-center flex-wrap"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {heading.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>

          <div className="w-28 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 mx-auto mt-5 rounded-full"></div>

          <p
            className="max-w-2xl mx-auto mt-7 text-base md:text-lg leading-8 text-gray-600 dark:text-gray-300"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Passionate about crafting modern, visually engaging, and highly
            responsive digital experiences with clean code and elegant UI design.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="h-[420px] w-[420px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
            </div>

            {/* Image Card */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 opacity-70 blur-lg group-hover:opacity-100 transition duration-500"></div>

              <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 dark:bg-[#0B1126]/80 backdrop-blur-xl shadow-2xl">
                <img
                  src="/raza.png"
                  alt="Raza Zaheer"
                  className="w-full max-w-sm lg:max-w-md object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 mb-6">
              <Briefcase size={16} />
              Frontend Web Developer
            </div>

            <h3
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Creating Modern Web Experiences That Feel Fast, Clean & Premium.
            </h3>

            <p
              className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-8 mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              I’m a passionate Frontend Developer focused on building sleek,
              responsive, and user-friendly websites that combine clean code with
              elegant design principles.
            </p>

            <p
              className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-8 mb-10"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              I enjoy transforming ideas into visually engaging digital products
              while staying updated with the latest technologies, frameworks,
              animations, and UI/UX trends to create impactful experiences.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">

              <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-[#111827]/70 backdrop-blur-xl p-5 shadow-lg">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  Full Name
                </h4>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Raza Zaheer
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-[#111827]/70 backdrop-blur-xl p-5 shadow-lg">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-2">
                  <Mail size={15} />
                  Email
                </h4>
                <p className="text-base font-medium text-gray-900 dark:text-white break-all">
                  razazaheer2002@gmail.com
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-[#111827]/70 backdrop-blur-xl p-5 shadow-lg">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-2">
                  <MapPin size={15} />
                  Location
                </h4>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Karachi, Pakistan
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-[#111827]/70 backdrop-blur-xl p-5 shadow-lg">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  Availability
                </h4>
                <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                  Available for Work
                </p>
              </div>
            </div>

            {/* Resume Button */}
            <a
              href="/razazaheer_resume.pdf"
              download="razazaheer_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 px-8 py-4 text-white font-semibold shadow-2xl hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Download
                size={20}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const About = () => {
  const heading = "About Me";

  // Animation variants for typing effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // controls typing speed
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white flex justify-center"
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
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-3 rounded-full"></div>
        </motion.div>

        {/* About Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
              <img
                src="/raza.png"
                alt="Raza Zaheer"
                className="max-w-full max-h-[20rem] sm:max-h-[25rem] lg:max-h-[30rem] object-cover rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
              />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Who I Am
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              I’m a Frontend Developer passionate about creating modern, responsive,
              and user-friendly web experiences. I specialize in blending clean code
              with intuitive design to build fast, accessible, and visually engaging
              applications.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I love solving complex problems with clean, intuitive solutions while
              staying ahead with new tools, frameworks, and design trends in the
              fast-evolving web world.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mb-8">
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Name:</p>
                <p className="text-gray-600 dark:text-gray-300">Raza Zaheer</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Email:</p>
                <p className="text-gray-600 dark:text-gray-300">razazaheer2002@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Location:</p>
                <p className="text-gray-600 dark:text-gray-300">Karachi, Pakistan</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Availability:</p>
                <p className="text-gray-600 dark:text-gray-300">Full-time</p>
              </div>
            </div>

            {/* Resume Button */}
            <a
              href="/RAZA ZAHEER CV.pdf"
              download="RAZA ZAHEER CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5" /> Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

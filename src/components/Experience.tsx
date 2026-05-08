import React from 'react';
import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  GraduationCap,
  Building2,
  Code2,
} from 'lucide-react';

const timelineData = [
  {
    id: 1,
    type: 'experience',
    title: 'Front-End Web Developer (Freelance)',
    company: 'Self Employed',
    duration: '2023 – Present',
    description:
      'Built responsive websites with HTML, CSS, JS, React.js. Focused on UI/UX, accessibility, and performance. Delivered multiple freelance projects.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    side: 'left',
    icon: <BriefcaseBusiness size={24} />,
  },
  {
    id: 2,
    type: 'education',
    title: 'Intermediate (Pre-Engineering)',
    company: 'PECHS Science College',
    duration: '2019 – 2021',
    description:
      'Studied core subjects including Mathematics, Physics, and Chemistry. Built strong analytical and problem-solving skills, preparing for higher education in Computer Science.',
    side: 'right',
    icon: <Building2 size={24} />,
  },
  {
    id: 3,
    type: 'experience',
    title: 'Web Developer',
    company: 'RZ Web Studio',
    duration: '2024 – Present',
    description:
      'Leading the frontend development team to build scalable, modern web applications. Implemented solutions using the MERN Stack with state management through Redux. Collaborated with designers using Figma to translate wireframes into fully functional applications.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Next.js'],
    side: 'left',
    icon: <Code2 size={24} />,
  },
  {
    id: 4,
    type: 'education',
    title: 'Bachelor of Science – BS, Computer Science',
    company: 'IQRA University',
    duration: '2021 – 2025',
    description:
      'Focused on computer science fundamentals including Data Structures, Algorithms, Operating Systems, Web & Mobile Development, Database Systems, and Information Security.',
    side: 'right',
    icon: <GraduationCap size={24} />,
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        relative overflow-hidden
        bg-[#050816]
        py-28
      "
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -left-40 top-0
            h-[450px] w-[450px]
            rounded-full
            bg-blue-600/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute right-[-120px] top-0
            h-[500px] w-[500px]
            rounded-full
            bg-purple-600/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute bottom-[-200px] left-1/2
            h-[400px] w-[400px]
            -translate-x-1/2
            rounded-full
            bg-fuchsia-500/10
            blur-[140px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-7 flex justify-center"
        >
          <div
            className="
              rounded-xl
              border border-[#6B4EFF]/40
              bg-[#131C39]
              px-7 py-2.5
              text-[14px]
              font-semibold
              uppercase
              tracking-[3px]
              text-[#8FA8FF]
              shadow-[0_0_35px_rgba(104,87,255,0.25)]
            "
            style={{
              fontFamily: 'Inter, sans-serif',
            }}
          >
            MY JOURNEY
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-4xl text-center"
        >
          <h2
            className="
              text-[56px]
              font-black
              leading-[1.1]
              tracking-[-2px]
              text-white
              md:text-[82px]
            "
            style={{
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Experience{' '}
            <span
              className="
                bg-gradient-to-r
                from-[#8EA8FF]
                via-[#B06CFF]
                to-[#F472FF]
                bg-clip-text
                text-transparent
              "
            >
              & Education
            </span>
          </h2>

          {/* Gradient Underline */}
          <div
            className="
              mx-auto mt-5
              h-[5px] w-[170px]
              rounded-full
              bg-gradient-to-r
              from-[#5EA8FF]
              via-[#8B5CFF]
              to-[#D946EF]
              shadow-[0_0_25px_rgba(168,85,247,0.85)]
            "
          />

          <p
            className="
              mx-auto mt-8
              max-w-2xl
              text-[18px]
              leading-8
              text-[#A0A7C0]
            "
            style={{
              fontFamily: 'Inter, sans-serif',
            }}
          >
            A timeline of my professional experience and academic
            background that shaped my skills and knowledge.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-6xl">
          {/* Center Timeline */}
          <div
            className="
              absolute left-1/2 top-0
              hidden h-full w-[3px]
              -translate-x-1/2
              bg-gradient-to-b
              from-[#5EA8FF]
              via-[#8B5CFF]
              to-[#D946EF]
              shadow-[0_0_30px_rgba(139,92,246,0.8)]
              lg:block
            "
          />

          <div className="space-y-28">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`
                  relative flex items-center
                  ${
                    item.side === 'left'
                      ? 'lg:justify-start'
                      : 'lg:justify-end'
                  }
                `}
              >
                {/* Connector Line */}
                <div
                  className={`
                    absolute top-1/2 hidden
                    h-[2px] w-[100px]
                    -translate-y-1/2
                    bg-gradient-to-r
                    from-[#5EA8FF]
                    to-[#B06CFF]
                    lg:block
                    ${
                      item.side === 'left'
                        ? 'left-[calc(50%-100px)]'
                        : 'right-[calc(50%-100px)]'
                    }
                  `}
                />

                {/* Center Icon Circle */}
                <div
                  className="
                    absolute left-1/2 top-1/2
                    hidden h-[88px] w-[88px]
                    -translate-x-1/2 -translate-y-1/2
                    items-center justify-center
                    rounded-full
                    border border-white/10
                    bg-[#0B1126]
                    shadow-[0_0_45px_rgba(94,168,255,0.25)]
                    lg:flex
                    z-30
                  "
                >
                  <div
                    className={`
                      flex h-[62px] w-[62px]
                      items-center justify-center
                      rounded-full
                      text-white
                      ${
                        item.type === 'experience'
                          ? 'bg-gradient-to-br from-[#3B82F6] to-[#2563EB] shadow-[0_0_35px_rgba(59,130,246,0.8)]'
                          : 'bg-gradient-to-br from-[#A855F7] to-[#7E22CE] shadow-[0_0_35px_rgba(168,85,247,0.8)]'
                      }
                    `}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Side Floating Hexagon */}
                <div
                  className={`
                    absolute top-1/2 hidden
                    -translate-y-1/2
                    lg:flex
                    ${
                      item.side === 'left'
                        ? '-left-8'
                        : '-right-8'
                    }
                  `}
                >
                  <div
                    className={`
                      flex h-[82px] w-[82px]
                      items-center justify-center
                      clip-hexagon
                      text-white
                      ${
                        item.type === 'experience'
                          ? 'bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] shadow-[0_0_35px_rgba(59,130,246,0.7)]'
                          : 'bg-gradient-to-br from-[#A855F7] to-[#7E22CE] shadow-[0_0_35px_rgba(168,85,247,0.7)]'
                      }
                    `}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.015,
                  }}
                  transition={{ duration: 0.3 }}
                  className="
                    group relative overflow-hidden
                    rounded-[30px]
                    border border-white/10
                    bg-[#0B1126]/95
                    p-8
                    shadow-[0_15px_60px_rgba(0,0,0,0.45)]
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:border-[#8B5CFF]/40
                    hover:shadow-[0_15px_70px_rgba(139,92,246,0.25)]
                    w-full lg:w-[42%]
                  "
                >
                  {/* Card Hover Glow */}
                  <div
                    className="
                      absolute inset-0
                      opacity-0
                      transition-opacity duration-500
                      group-hover:opacity-100
                      bg-gradient-to-br
                      from-[#3B82F6]/5
                      via-[#8B5CFF]/5
                      to-[#EC4899]/5
                    "
                  />

                  {/* Side Vertical Glow */}
                  <div
                    className={`
                      absolute left-0 top-10
                      h-32 w-[4px]
                      rounded-full
                      ${
                        item.type === 'experience'
                          ? 'bg-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,1)]'
                          : 'bg-[#A855F7] shadow-[0_0_20px_rgba(168,85,247,1)]'
                      }
                    `}
                  />

                  <div className="relative z-10">
                    {/* Duration Badge */}
                    <div
                      className={`
                        inline-flex rounded-xl
                        px-5 py-2
                        text-[14px]
                        font-bold
                        ${
                          item.type === 'experience'
                            ? 'bg-[#3B82F6]/15 text-[#8DB7FF]'
                            : 'bg-[#A855F7]/15 text-[#D8B4FE]'
                        }
                      `}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {item.duration}
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        mt-6
                        text-[34px]
                        font-bold
                        leading-[1.2]
                        text-white
                      "
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Company */}
                    <p
                      className={`
                        mt-3 text-[22px]
                        font-semibold
                        ${
                          item.type === 'experience'
                            ? 'text-[#60A5FA]'
                            : 'text-[#C084FC]'
                        }
                      `}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {item.company}
                    </p>

                    {/* Description */}
                    <p
                      className="
                        mt-6
                        text-[16px]
                        leading-8
                        text-[#A3AEC2]
                      "
                      style={{
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Tech Stack */}
                    {item.tech && (
                      <div className="mt-8 flex flex-wrap gap-3">
                        {item.tech.map((tech) => (
                          <span
                            key={tech}
                            className="
                              rounded-xl
                              border border-[#3B82F6]/20
                              bg-[#3B82F6]/10
                              px-4 py-2
                              text-[14px]
                              font-medium
                              text-[#93C5FD]
                              transition-all duration-300
                              hover:scale-105
                              hover:bg-[#3B82F6]/20
                            "
                            style={{
                              fontFamily: 'Inter, sans-serif',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hexagon Shape CSS */}
      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(
            25% 6.7%,
            75% 6.7%,
            100% 50%,
            75% 93.3%,
            25% 93.3%,
            0% 50%
          );
        }
      `}</style>
    </section>
  );
};

export default Experience;

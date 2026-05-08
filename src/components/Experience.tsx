import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Code2,
  Building2,
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
    icon: <Briefcase size={22} />,
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
    icon: <GraduationCap size={22} />,
  },
  {
    id: 3,
    type: 'experience',
    title: 'Web Developer',
    company: 'RZ Web Studio',
    duration: '2024 – Present',
    description:
      'Leading the frontend development team to build scalable, modern web applications. Implemented solutions using the MERN Stack with Redux. Collaborated with designers using Figma to translate wireframes into fully functional applications.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Next.js'],
    side: 'left',
    icon: <Code2 size={22} />,
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
    icon: <Building2 size={22} />,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050816] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute right-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 flex justify-center"
        >
          <div
            className="
              rounded-xl border border-purple-500/30
              bg-gradient-to-r from-[#18203f] to-[#21153f]
              px-6 py-2
              text-sm font-semibold uppercase tracking-[3px]
              text-blue-300
              shadow-[0_0_30px_rgba(139,92,246,0.25)]
            "
          >
            My Journey
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-4xl text-center"
        >
          <h2
            className="
              text-5xl font-black leading-tight
              text-white md:text-7xl
            "
            style={{
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Experience{' '}
            <span
              className="
                bg-gradient-to-r
                from-blue-400
                via-purple-400
                to-pink-400
                bg-clip-text
                text-transparent
              "
            >
              & Education
            </span>
          </h2>

          {/* Underline */}
          <div
            className="
              mx-auto mt-5 h-[5px] w-40 rounded-full
              bg-gradient-to-r
              from-blue-500
              via-purple-500
              to-pink-500
              shadow-[0_0_25px_rgba(168,85,247,0.8)]
            "
          />

          <p
            className="
              mx-auto mt-8 max-w-2xl
              text-lg leading-8 text-gray-400
            "
          >
            A timeline of my professional experience and academic
            background that shaped my skills and knowledge.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-6xl">
          {/* Center Vertical Line */}
          <div
            className="
              absolute left-1/2 top-0 hidden h-full
              w-[3px] -translate-x-1/2
              bg-gradient-to-b
              from-blue-500
              via-purple-500
              to-pink-500
              shadow-[0_0_20px_rgba(139,92,246,0.7)]
              lg:block
            "
          />

          <div className="space-y-28">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
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
                {/* Timeline Node */}
                <div
                  className="
                    absolute left-1/2 top-1/2 hidden
                    h-20 w-20 -translate-x-1/2
                    -translate-y-1/2
                    items-center justify-center
                    rounded-full border
                    border-blue-400/40
                    bg-[#0B1023]
                    shadow-[0_0_40px_rgba(59,130,246,0.45)]
                    lg:flex
                    z-20
                  "
                >
                  <div
                    className={`
                      flex h-14 w-14 items-center justify-center
                      rounded-full text-white
                      ${
                        item.type === 'experience'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-700 shadow-[0_0_30px_rgba(59,130,246,0.8)]'
                          : 'bg-gradient-to-br from-purple-500 to-fuchsia-700 shadow-[0_0_30px_rgba(168,85,247,0.8)]'
                      }
                    `}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Horizontal Connector */}
                <div
                  className={`
                    absolute top-1/2 hidden h-[3px]
                    w-[90px] -translate-y-1/2
                    bg-gradient-to-r
                    from-blue-500 to-purple-500
                    lg:block
                    ${
                      item.side === 'left'
                        ? 'left-[calc(50%-90px)]'
                        : 'right-[calc(50%-90px)]'
                    }
                  `}
                />

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`
                    group relative overflow-hidden
                    rounded-[32px]
                    border border-white/10
                    bg-[#0B1023]/90
                    p-8 backdrop-blur-xl
                    shadow-[0_15px_60px_rgba(0,0,0,0.35)]
                    transition-all duration-500
                    hover:border-purple-500/40
                    hover:shadow-[0_15px_70px_rgba(139,92,246,0.25)]

                    w-full lg:w-[42%]
                  `}
                >
                  {/* Hover Glow */}
                  <div
                    className="
                      absolute inset-0 opacity-0
                      transition-opacity duration-500
                      group-hover:opacity-100
                      bg-gradient-to-br
                      from-blue-500/5
                      via-purple-500/5
                      to-pink-500/5
                    "
                  />

                  {/* Side Glow Line */}
                  <div
                    className={`
                      absolute left-0 top-10
                      h-32 w-[4px]
                      rounded-full
                      ${
                        item.type === 'experience'
                          ? 'bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1)]'
                          : 'bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,1)]'
                      }
                    `}
                  />

                  <div className="relative z-10">
                    {/* Duration */}
                    <div
                      className={`
                        mb-6 inline-flex rounded-xl
                        px-5 py-2 text-sm font-bold
                        ${
                          item.type === 'experience'
                            ? 'bg-blue-500/15 text-blue-300'
                            : 'bg-purple-500/15 text-purple-300'
                        }
                      `}
                    >
                      {item.duration}
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        text-3xl font-bold leading-snug
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
                        mt-3 text-xl font-semibold
                        ${
                          item.type === 'experience'
                            ? 'text-blue-400'
                            : 'text-purple-400'
                        }
                      `}
                    >
                      {item.company}
                    </p>

                    {/* Description */}
                    <p
                      className="
                        mt-6 text-base leading-8
                        text-gray-400
                      "
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
                              rounded-xl border
                              border-blue-500/20
                              bg-blue-500/10
                              px-4 py-2 text-sm
                              font-medium text-blue-300
                              transition-all duration-300
                              hover:scale-105
                              hover:bg-blue-500/20
                            "
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
    </section>
  );
};

export default Experience;

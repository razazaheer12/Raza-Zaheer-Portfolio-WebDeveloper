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
    icon: <BriefcaseBusiness size={20} />,
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
    icon: <Building2 size={20} />,
  },
  {
    id: 3,
    type: 'experience',
    title: 'Web Developer',
    company: 'RZ Web Studio',
    duration: '2024 – Present',
    description:
      'Leading the frontend team to build scalable, modern web applications using the MERN Stack with Redux state management. Collaborated with designers via Figma.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Next.js'],
    side: 'left',
    icon: <Code2 size={20} />,
  },
  {
    id: 4,
    type: 'education',
    title: 'Bachelor of Science – BS, Computer Science',
    company: 'IQRA University',
    duration: '2021 – 2025',
    description:
      'Focused on Data Structures, Algorithms, Operating Systems, Web & Mobile Development, Database Systems, and Information Security.',
    side: 'right',
    icon: <GraduationCap size={20} />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050816] py-20"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute right-[-120px] top-0 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute bottom-[-200px] left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-5 flex justify-center"
        >
          <div
            className="rounded-lg border border-[#6B4EFF]/40 bg-[#131C39] px-5 py-2 text-[12px] font-semibold uppercase tracking-[3px] text-[#8FA8FF] shadow-[0_0_25px_rgba(104,87,255,0.25)]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            MY JOURNEY
          </div>
        </motion.div>

        {/* Subheading paragraph (centered, optional intro) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-xl text-center text-[15px] leading-7 text-[#A0A7C0]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          A timeline of my professional experience and academic background that shaped my skills.
        </motion.p>

        {/* Side-by-side Headings (Experience | Education) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 hidden grid-cols-2 gap-8 lg:grid"
        >
          <div className="flex flex-col items-center">
            <h2
              className="text-[28px] font-bold tracking-tight text-white md:text-[32px]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Experience
            </h2>
            <div className="mt-3 h-[3px] w-[80px] rounded-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] shadow-[0_0_15px_rgba(59,130,246,0.7)]" />
          </div>

          <div className="flex flex-col items-center">
            <h2
              className="bg-gradient-to-r from-[#A855F7] to-[#F472FF] bg-clip-text text-[28px] font-bold tracking-tight text-transparent md:text-[32px]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Education
            </h2>
            <div className="mt-3 h-[3px] w-[80px] rounded-full bg-gradient-to-r from-[#A855F7] to-[#D946EF] shadow-[0_0_15px_rgba(168,85,247,0.7)]" />
          </div>
        </motion.div>

        {/* Mobile combined heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center lg:hidden"
        >
          <h2
            className="text-[30px] font-bold tracking-tight text-white"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Experience{' '}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#F472FF] bg-clip-text text-transparent">
              & Education
            </span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-5xl">
          {/* Center Timeline */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#5EA8FF] via-[#8B5CFF] to-[#D946EF] shadow-[0_0_20px_rgba(139,92,246,0.6)] lg:block" />

          <div className="space-y-16">
            {timelineData.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  item.side === 'left' ? 'lg:justify-start' : 'lg:justify-end'
                }`}
              >
                {/* Connector Line */}
                <div
                  className={`absolute top-1/2 hidden h-[2px] w-[70px] -translate-y-1/2 bg-gradient-to-r from-[#5EA8FF] to-[#B06CFF] lg:block ${
                    item.side === 'left'
                      ? 'left-[calc(50%-70px)]'
                      : 'right-[calc(50%-70px)]'
                  }`}
                />

                {/* Center Icon Circle */}
                <div className="absolute left-1/2 top-1/2 z-30 hidden h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0B1126] shadow-[0_0_30px_rgba(94,168,255,0.25)] lg:flex">
                  <div
                    className={`flex h-[46px] w-[46px] items-center justify-center rounded-full text-white ${
                      item.type === 'experience'
                        ? 'bg-gradient-to-br from-[#3B82F6] to-[#2563EB] shadow-[0_0_25px_rgba(59,130,246,0.7)]'
                        : 'bg-gradient-to-br from-[#A855F7] to-[#7E22CE] shadow-[0_0_25px_rgba(168,85,247,0.7)]'
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0B1126]/95 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-500 hover:border-[#8B5CFF]/40 hover:shadow-[0_10px_50px_rgba(139,92,246,0.2)] lg:w-[44%] lg:p-6"
                >
                  {/* Card Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 via-[#8B5CFF]/5 to-[#EC4899]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Side Vertical Glow */}
                  <div
                    className={`absolute left-0 top-6 h-20 w-[3px] rounded-full ${
                      item.type === 'experience'
                        ? 'bg-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,1)]'
                        : 'bg-[#A855F7] shadow-[0_0_15px_rgba(168,85,247,1)]'
                    }`}
                  />

                  <div className="relative z-10">
                    {/* Duration Badge */}
                    <div
                      className={`inline-flex rounded-lg px-3 py-1 text-[11px] font-bold tracking-wide ${
                        item.type === 'experience'
                          ? 'bg-[#3B82F6]/15 text-[#8DB7FF]'
                          : 'bg-[#A855F7]/15 text-[#D8B4FE]'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.duration}
                    </div>

                    {/* Title (Job/Degree) */}
                    <h3
                      className="mt-3 text-[18px] font-semibold leading-snug text-white"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {item.title}
                    </h3>

                    {/* Company */}
                    <p
                      className={`mt-1 text-[14px] font-medium ${
                        item.type === 'experience'
                          ? 'text-[#60A5FA]'
                          : 'text-[#C084FC]'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.company}
                    </p>

                    {/* Description */}
                    <p
                      className="mt-3 text-[13px] leading-6 text-[#A3AEC2]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.description}
                    </p>

                    {/* Tech Stack */}
                    {item.tech && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-2.5 py-1 text-[11px] font-medium text-[#93C5FD] transition-all duration-300 hover:scale-105 hover:bg-[#3B82F6]/20"
                            style={{ fontFamily: 'Inter, sans-serif' }}
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

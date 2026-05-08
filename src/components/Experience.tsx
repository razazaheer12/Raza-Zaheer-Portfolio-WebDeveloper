import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experienceData = [
  {
    position: 'Front-End Web Developer (Freelance)',
    company: 'Self Employed',
    duration: '2023 – Present',
    description:
      'Built responsive websites with HTML, CSS, JavaScript, and React.js. Focused on performance optimization, accessibility, reusable UI components, and modern responsive layouts for multiple freelance clients.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    position: 'Web Developer',
    company: 'RZ Web Studio',
    duration: '2024 – Present',
    description:
      'Leading frontend development for scalable MERN stack applications. Collaborating with UI/UX designers to convert Figma designs into highly interactive and optimized production-ready interfaces.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Next.js'],
  },
];

const educationData = [
  {
    degree: 'Intermediate (Pre-Engineering)',
    institution: 'PECHS Science College',
    years: '2019 – 2021',
    description:
      'Built a strong foundation in Mathematics, Physics, and analytical problem solving while preparing for advanced studies in Computer Science.',
  },
  {
    degree: 'Bachelor of Science – BS, Computer Science',
    institution: 'IQRA University',
    years: '2021 – 2025',
    description:
      'Focused on Data Structures, Algorithms, Web Development, Databases, Operating Systems, and Software Engineering while completing multiple academic and real-world projects.',
  },
];

// Animation Variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

type TimelineItemProps = {
  item: any;
  index: number;
  isEducation?: boolean;
  isLast: boolean;
};

const TimelineItem = ({
  item,
  index,
  isEducation = false,
  isLast,
}: TimelineItemProps) => {
  return (
    <motion.div
      variants={fadeUp}
      className="relative pl-16"
    >
      {/* Timeline Vertical Line */}
      {!isLast && (
        <div
          className="
            absolute 
            left-[23px] 
            top-14 
            h-[calc(100%+3rem)] 
            w-[2px]
            bg-gradient-to-b 
            from-blue-500 
            via-purple-500 
            to-pink-500
            opacity-70
          "
        />
      )}

      {/* Glow */}
      <div
        className="
          absolute 
          left-[7px] 
          top-2
          h-8 
          w-8 
          rounded-full
          bg-gradient-to-r
          from-blue-500
          to-purple-500
          blur-xl
          opacity-50
        "
      />

      {/* Dot */}
      <div
        className="
          absolute
          left-0
          top-2
          flex
          items-center
          justify-center
          w-12
          h-12
          rounded-full
          border
          border-white/10
          bg-[#111827]
          shadow-[0_0_30px_rgba(99,102,241,0.45)]
          z-10
        "
      >
        <div
          className="
            w-4
            h-4
            rounded-full
            bg-gradient-to-r
            from-blue-500
            to-purple-500
          "
        />
      </div>

      {/* Card */}
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.015,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          p-6
          shadow-[0_10px_50px_rgba(0,0,0,0.25)]
          transition-all
          duration-500
          hover:border-purple-500/30
          hover:shadow-[0_15px_60px_rgba(124,58,237,0.25)]
        "
      >
        {/* Card Gradient */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            hover:opacity-100
            transition-opacity
            duration-500
            bg-gradient-to-br
            from-blue-500/5
            via-purple-500/5
            to-pink-500/5
          "
        />

        <div className="relative z-10">
          {/* Title */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-4">
            <div>
              <h3
                className="
                  text-xl
                  font-bold
                  text-white
                  leading-snug
                "
                style={{
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {isEducation ? item.degree : item.position}
              </h3>

              <p
                className={`
                  mt-2
                  text-sm
                  font-semibold
                  ${
                    isEducation
                      ? 'text-purple-400'
                      : 'text-blue-400'
                  }
                `}
              >
                {isEducation
                  ? item.institution
                  : item.company}
              </p>
            </div>

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-sm
                text-gray-300
                backdrop-blur-md
              "
            >
              <Calendar size={14} />
              {isEducation
                ? item.years
                : item.duration}
            </div>
          </div>

          {/* Description */}
          <p
            className="
              text-sm
              leading-7
              text-gray-300
            "
            style={{
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {item.description}
          </p>

          {/* Tech Stack */}
          {!isEducation && (
            <div className="flex flex-wrap gap-3 mt-6">
              {item.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-purple-500/20
                    bg-purple-500/10
                    px-4
                    py-1.5
                    text-xs
                    font-medium
                    text-purple-300
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:border-purple-400/40
                    hover:bg-purple-500/20
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
  );
};

const SectionHeader = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex items-center gap-4 mb-14">
      <div
        className="
          flex
          items-center
          justify-center
          w-14
          h-14
          rounded-2xl
          bg-gradient-to-br
          from-blue-500/20
          to-purple-500/20
          border
          border-white/10
          backdrop-blur-xl
          shadow-[0_0_25px_rgba(99,102,241,0.25)]
        "
      >
        {icon}
      </div>

      <div>
        <h3
          className="
            text-3xl
            font-bold
            text-white
          "
          style={{
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          {title}
        </h3>

        <div
          className="
            mt-2
            h-1
            w-24
            rounded-full
            bg-gradient-to-r
            from-blue-500
            via-purple-500
            to-pink-500
          "
        />
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        py-24
        bg-[#070B1A]
      "
    >
      {/* Background Effects */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15),transparent_30%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.08),transparent_40%)]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          lg:px-8
        "
      >
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-24"
        >
          <span
            className="
              inline-block
              mb-5
              rounded-full
              border
              border-purple-500/20
              bg-purple-500/10
              px-5
              py-2
              text-sm
              font-medium
              text-purple-300
            "
          >
            Professional Journey
          </span>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-black
              text-white
              leading-tight
            "
            style={{
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Experience & Education
          </h2>

          <p
            className="
              max-w-3xl
              mx-auto
              mt-6
              text-gray-400
              leading-8
            "
          >
            A timeline of professional growth, technical expertise,
            academic achievements, and real-world development
            experience.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
          {/* Experience */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              title="Experience"
              icon={
                <Briefcase
                  className="text-blue-400"
                  size={28}
                />
              }
            />

            <div className="space-y-16">
              {experienceData.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  index={index}
                  isLast={
                    index === experienceData.length - 1
                  }
                />
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              title="Education"
              icon={
                <GraduationCap
                  className="text-purple-400"
                  size={28}
                />
              }
            />

            <div className="space-y-16">
              {educationData.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  index={index}
                  isEducation
                  isLast={
                    index === educationData.length - 1
                  }
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

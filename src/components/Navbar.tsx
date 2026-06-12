import React from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <>
      <nav className="fixed top-5 left-0 w-full z-50 px-4">

        <div
          className="
          max-w-6xl
          mx-auto
          h-[62px]

          rounded-[24px]

          bg-white/75
          dark:bg-[#080D18]/70

          backdrop-blur-2xl

          border
          border-white/60
          dark:border-white/10

          shadow-[0_12px_60px_rgba(59,130,246,0.08)]

          flex
          items-center
          justify-between

          px-6
          lg:px-8
        "
        >

          {/* Logo */}
          <a
            href="#home"
            className="
            flex
            items-center
            gap-3
            shrink-0
          "
          >

            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.08,
              }}
              className="
              w-10
              h-10

              rounded-[16px]

              bg-gradient-to-br
              from-blue-600
              via-purple-600
              to-pink-500

              text-white
              font-bold

              flex
              items-center
              justify-center

              shadow-lg
            "
            >
              R
            </motion.div>

            <div>

              <div
                className="
                text-[18px]
                font-bold

                text-gray-900
                dark:text-white
              "
                style={{
                  fontFamily:
                    "Montserrat,sans-serif",
                }}
              >
                Raza
              </div>

              <div
                className="
                text-[10px]
                tracking-[3px]
                uppercase

                text-gray-500
                dark:text-gray-400
              "
              >
                Portfolio
              </div>

            </div>

          </a>

          {/* Desktop */}
          <div className="hidden lg:flex">

            <div
              className="
              flex
              items-center

              rounded-full

              bg-black/[0.02]
              dark:bg-white/[0.03]

              px-2
              py-1
            "
            >

              {menuItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{
                    y: -1,
                  }}
                  className="
                  relative

                  px-5
                  py-2.5

                  rounded-full

                  text-[14px]
                  font-medium

                  text-gray-700
                  dark:text-gray-300

                  transition
                  duration-300

                  hover:text-white

                  group
                "
              >

                  <span
                    className="
                    absolute
                    inset-0

                    rounded-full

                    bg-gradient-to-r
                    from-blue-600
                    via-purple-600
                    to-pink-500

                    opacity-0

                    group-hover:opacity-100

                    transition
                  "
                  />

                  <span className="relative">
                    {item}
                  </span>

                </motion.a>
              ))}

            </div>

          </div>

          {/* Right */}
          <div className="flex items-center gap-2">

            <ThemeToggle />

            <button
              onClick={() =>
                setIsOpen(!isOpen)
              }
              className="
              lg:hidden

              w-10
              h-10

              rounded-xl

              bg-black/[0.04]
              dark:bg-white/[0.05]

              flex
              items-center
              justify-center
            "
            >
              {isOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>

          </div>

        </div>

        {/* Mobile */}
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
            mt-3

            max-w-6xl
            mx-auto

            rounded-[24px]

            bg-white/90
            dark:bg-[#080D18]/95

            backdrop-blur-2xl

            border
            border-white/20

            p-3
          "
          >

            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() =>
                  setIsOpen(false)
                }
                className="
                block

                px-5
                py-4

                rounded-2xl

                hover:bg-blue-50
                dark:hover:bg-white/5
              "
              >
                {item}
              </a>
            ))}

          </motion.div>
        )}

      </nav>
    </>
  );
};

export default Navbar;

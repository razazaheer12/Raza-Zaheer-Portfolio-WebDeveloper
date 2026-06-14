import React from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className="
          fixed
          top-0
          left-0
          w-full
          z-[9999]
        "
      >
        <div className="px-4 pt-3">

          {/* MAIN NAV */}
          <div
            className="
              max-w-7xl
              mx-auto

              h-[72px]

              rounded-[24px]

              bg-white/80
              dark:bg-[#060B16]/88

              backdrop-blur-[28px]

              border
              border-gray-200/70
              dark:border-white/[0.08]

              shadow-[0_10px_50px_rgba(0,0,0,0.06)]
              dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]

              flex
              items-center
              justify-between

              px-5
              lg:px-8

              transition-all
              duration-500
            "
          >

            {/* LOGO */}
            <a
              href="#home"
              className="flex items-center gap-3"
            >

              <motion.div
                whileHover={{
                  rotate: 6,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  w-11
                  h-11

                  rounded-[15px]

                  flex
                  items-center
                  justify-center

                  bg-gradient-to-br
                  from-blue-600
                  via-purple-600
                  to-pink-500

                  text-white
                  font-bold

                  shadow-lg
                "
              >
                R
              </motion.div>

              <div>

                <h2
                  className="
                    text-[18px]
                    font-bold
                    text-gray-900
                    dark:text-white
                    leading-none
                  "
                  style={{
                    fontFamily:
                      "Montserrat, sans-serif",
                  }}
                >
                  Raza Zaheer
                </h2>

                <p
                  className="
                    mt-1
                    text-[10px]
                    tracking-[4px]
                    uppercase

                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  Portfolio
                </p>

              </div>

            </a>

            {/* DESKTOP */}
            <div className="hidden lg:flex">

              <div
                className="
                  flex
                  items-center

                  gap-1

                  rounded-full

                  bg-black/[0.03]
                  dark:bg-white/[0.03]

                  p-1.5
                "
              >

                {menuItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
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

                      overflow-hidden

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

                    <span
                      className="
                        relative
                        z-10

                        group-hover:text-white
                      "
                    >
                      {item.name}
                    </span>

                  </motion.a>
                ))}

              </div>

            </div>

            {/* RIGHT */}
            <div className="flex items-center">

              {/* DESKTOP THEME ICON ONLY */}
              <div
                className="
                  hidden
                  lg:flex

                  ml-5

                  text-gray-700
                  dark:text-white
                "
              >
                <ThemeToggle />
              </div>

              {/* MOBILE */}
              <button
                onClick={() =>
                  setIsOpen(!isOpen)
                }
                className="
                  lg:hidden

                  w-11
                  h-11

                  rounded-xl

                  bg-black/[0.04]
                  dark:bg-white/[0.04]

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

          {/* MOBILE MENU */}
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                lg:hidden

                mt-3

                rounded-[24px]

                overflow-hidden

                bg-white/92
                dark:bg-[#070C18]/96

                backdrop-blur-2xl

                border
                border-gray-200
                dark:border-white/10
              "
            >

              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className="
                    block

                    px-6
                    py-4

                    text-[15px]

                    text-gray-800
                    dark:text-gray-200

                    hover:bg-blue-50
                    dark:hover:bg-white/5
                  "
                >
                  {item.name}
                </a>
              ))}

              {/* THEME TOGGLE BOTTOM */}
              <div
                className="
                  border-t
                  border-gray-200
                  dark:border-white/10

                  py-5

                  flex
                  justify-center
                "
              >
                <ThemeToggle />
              </div>

            </motion.div>
          )}

        </div>
      </nav>

      {/* OFFSET */}
      <div className="h-[92px]" />
    </>
  );
};

export default Navbar;

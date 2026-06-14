import React from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
      <nav className="fixed top-0 left-0 w-full z-[999]">

        <div className="px-4 pt-3">

          <div
            className="
              max-w-7xl
              mx-auto
              h-[68px]

              rounded-[22px]

              bg-white/78
              dark:bg-[#070C18]/82

              backdrop-blur-[24px]

              border
              border-gray-200/60
              dark:border-white/10

              shadow-[0_10px_40px_rgba(0,0,0,.06)]
              dark:shadow-[0_10px_40px_rgba(0,0,0,.35)]

              flex
              items-center
              justify-between

              px-5
              lg:px-8
            "
          >

            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 shrink-0"
            >
              <motion.div
                whileHover={{
                  scale: 1.04,
                  rotate: 5,
                }}
                className="
                  w-10
                  h-10
                  rounded-[14px]

                  bg-gradient-to-br
                  from-blue-600
                  via-purple-600
                  to-pink-500

                  flex
                  items-center
                  justify-center

                  text-white
                  font-bold
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
                    uppercase
                    tracking-[3px]
                    text-[10px]

                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  Portfolio
                </p>

              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-5">

              <div
                className="
                  flex
                  items-center
                  gap-1

                  rounded-full

                  bg-black/[0.025]
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
                      px-5
                      py-2.5

                      rounded-full

                      text-[14px]
                      font-medium

                      text-gray-700
                      dark:text-gray-300

                      hover:text-blue-600
                      dark:hover:text-white

                      transition
                    "
                  >
                    {item.name}
                  </motion.a>

                ))}
              </div>

              {/* CLEAN ICON ONLY */}
              <div
                className="
                  [&>button]:bg-transparent
                  [&>button]:shadow-none
                  [&>button]:border-0

                  [&>button]:w-auto
                  [&>button]:h-auto

                  [&>button:hover]:scale-110

                  [&_svg]:w-6
                  [&_svg]:h-6

                  text-gray-600
                  dark:text-gray-300
                "
              >
                <ThemeToggle />
              </div>

            </div>

            {/* MOBILE */}
            <div className="lg:hidden">

              <button
                onClick={() =>
                  setIsOpen(!isOpen)
                }
                className="
                  w-10
                  h-10

                  rounded-xl

                  flex
                  items-center
                  justify-center

                  text-gray-700
                  dark:text-white

                  bg-black/[0.04]
                  dark:bg-white/[0.05]
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
          <AnimatePresence>

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
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                className="
                  lg:hidden

                  mt-3

                  overflow-hidden

                  rounded-[22px]

                  bg-white/90
                  dark:bg-[#070C18]/95

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

                      text-gray-800
                      dark:text-gray-200

                      hover:bg-blue-50
                      dark:hover:bg-white/5
                    "
                  >
                    {item.name}
                  </a>

                ))}

                {/* THEME TOGGLE LAST */}
                <div
                  className="
                    border-t
                    border-gray-200
                    dark:border-white/10

                    px-6
                    py-5

                    flex
                    justify-center

                    [&>button]:bg-transparent
                    [&>button]:shadow-none
                    [&>button]:border-0

                    [&_svg]:w-7
                    [&_svg]:h-7
                  "
                >
                  <ThemeToggle />
                </div>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </nav>

      <div className="h-[88px]" />
    </>
  );
};

export default Navbar;

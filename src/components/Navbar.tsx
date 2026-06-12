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
        fixed top-4 left-1/2
        -translate-x-1/2
        w-[95%]
        max-w-7xl
        z-50
      "
      >
        <div
          className="
          rounded-3xl
          border
          border-white/30
          dark:border-white/10
          bg-white/65
          dark:bg-[#070B18]/75
          backdrop-blur-2xl
          shadow-[0_10px_50px_rgba(0,0,0,0.08)]
          dark:shadow-[0_10px_50px_rgba(0,0,0,0.35)]
        "
        >
          <div className="px-6 lg:px-10">
            <div className="flex items-center justify-between h-[72px]">

              {/* Logo */}
              <motion.a
                href="#home"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                className="
                flex items-center
                gap-2
                group
                "
              >
                <div
                  className="
                  w-10 h-10
                  rounded-2xl
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
                  group-hover:rotate-6
                  transition
                "
                >
                  R
                </div>

                <div>
                  <h2
                    className="
                    text-lg
                    font-bold
                    text-gray-900
                    dark:text-white
                  "
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Raza
                  </h2>

                  <p
                    className="
                    text-[10px]
                    tracking-[2px]
                    uppercase
                    text-gray-500
                    dark:text-gray-400
                  "
                  >
                    Portfolio
                  </p>
                </div>
              </motion.a>

              {/* Desktop */}
              <div className="hidden lg:flex items-center gap-2">

                {menuItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{
                      y: -2,
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
                    transition-all
                    duration-300
                    hover:text-blue-600
                    dark:hover:text-white
                    hover:bg-white/80
                    dark:hover:bg-white/5
                  "
                    style={{
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {item.name}

                    <span
                      className="
                      absolute
                      bottom-0
                      left-1/2
                      -translate-x-1/2
                      w-0
                      h-[2px]
                      rounded-full
                      bg-gradient-to-r
                      from-blue-500
                      to-purple-500
                      transition-all
                      duration-300
                      hover:w-[60%]
                    "
                    />
                  </motion.a>
                ))}

                <div className="ml-2">
                  <ThemeToggle />
                </div>
              </div>

              {/* Mobile */}
              <div className="lg:hidden flex items-center gap-3">
                <ThemeToggle />

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="
                  w-11
                  h-11
                  rounded-2xl
                  bg-white/80
                  dark:bg-white/5
                  flex
                  items-center
                  justify-center
                  text-gray-700
                  dark:text-white
                  hover:scale-105
                  transition
                "
                >
                  {isOpen ? (
                    <X size={22} />
                  ) : (
                    <Menu size={22} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
            mt-3
            rounded-3xl
            border
            border-white/20
            bg-white/90
            dark:bg-[#0A1022]/95
            backdrop-blur-2xl
            overflow-hidden
            lg:hidden
          "
          >
            <div className="p-4">

              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                  flex
                  items-center
                  px-5
                  py-4
                  rounded-2xl
                  text-gray-800
                  dark:text-gray-200
                  hover:bg-blue-50
                  dark:hover:bg-white/5
                  transition
                "
                >
                  {item.name}
                </a>
              ))}

            </div>
          </motion.div>
        )}
      </nav>

      <div className="h-[90px]" />
    </>
  );
};

export default Navbar;

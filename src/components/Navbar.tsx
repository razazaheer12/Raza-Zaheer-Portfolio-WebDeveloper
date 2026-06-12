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
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-white/80
      dark:bg-[#060A16]/80
      border-b
      border-gray-200/60
      dark:border-white/10
      transition-all
      duration-300
    "
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        <div className="h-[64px] flex items-center justify-between">

          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <div
              className="
              w-9
              h-9
              rounded-xl
              flex
              items-center
              justify-center
              bg-gradient-to-r
              from-blue-600
              via-purple-600
              to-pink-500
              text-white
              font-bold
              text-sm
              shadow-md
            "
            >
              R
            </div>

            <div>
              <h2
                className="
                text-[17px]
                font-bold
                text-gray-900
                dark:text-white
              "
                style={{
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Raza Zaheer
              </h2>
            </div>
          </motion.a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-2">

            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                px-4
                py-2
                rounded-full
                text-[14px]
                font-medium
                text-gray-700
                dark:text-gray-300
                transition
                duration-300
                hover:bg-blue-50
                hover:text-blue-600
                dark:hover:bg-white/5
                dark:hover:text-white
              "
                style={{
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {item.name}
              </a>
            ))}

            <div className="ml-2">
              <ThemeToggle />
            </div>

          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">

            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
              w-10
              h-10
              rounded-xl
              bg-gray-100
              dark:bg-white/5
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

      </div>

      {/* Mobile Menu */}
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
          lg:hidden
          px-5
          pb-4
          bg-white
          dark:bg-[#060A16]
          border-t
          border-gray-200
          dark:border-white/10
        "
        >
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="
              block
              px-4
              py-3
              rounded-xl
              text-gray-800
              dark:text-gray-200
              hover:bg-blue-50
              dark:hover:bg-white/5
            "
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

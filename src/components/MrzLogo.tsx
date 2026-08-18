import React from "react";

interface LogoProps {
  className?: string;
}

const MrzLogo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Sharp Hexagon Border */}
      <polygon
        points="50,4 92,26 92,74 50,96 8,74 8,26"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="miter"
      />

      {/* Solid Bold Isometric 'M' */}
      <path
        d="M 18,70 L 18,30 L 28,30 L 35,50 L 42,30 L 50,30 L 50,70 L 42,70 L 42,44 L 35,62 L 28,44 L 28,70 Z"
        fill="currentColor"
      />

      {/* Solid Bold Isometric 'R' */}
      <path
        d="M 50,30 L 63,30 C 69,30 73,34 73,42 C 73,48 69,51 63,51 L 57,51 L 65,70 L 57,70 L 50,52 L 50,70 L 43,70 L 43,30 Z M 50,44 L 62,44 C 65,44 67,43 67,42 C 67,40 65,37 62,37 L 50,37 Z"
        fill="currentColor"
      />

      {/* Solid Bold Isometric 'Z' */}
      <path
        d="M 72,30 L 86,30 L 86,37 L 78,63 L 86,63 L 86,70 L 71,70 L 71,63 L 80,37 L 72,37 Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MrzLogo;

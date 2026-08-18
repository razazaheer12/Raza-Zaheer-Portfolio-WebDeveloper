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
      {/* Outer Hexagon Outline */}
      <polygon
        points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
        stroke="white"
        strokeWidth="4"
        fill="none"
      />

      {/* Letter 'M' (Left Side Geometric Path) */}
      <path
        d="M22 68 V32 L34 50 L42 32 V68"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letter 'R' (Center Vertical Path) */}
      <path
        d="M50 32 V68 M50 32 H62 C67 32 67 48 62 48 H50 M58 48 L66 68"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letter 'Z' (Right Side Geometric Path) */}
      <path
        d="M72 32 H85 L72 68 H85"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MrzLogo;

"use client";

import React from "react";

const FuturisticBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Futuristic background SVG content */}
        <rect width="1200" height="800" fill="url(#gradient)" />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1dcbf2" stopOpacity="0.2" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default FuturisticBackground;

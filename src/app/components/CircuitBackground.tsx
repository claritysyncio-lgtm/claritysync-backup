"use client";

import React from 'react';

const CircuitBackground: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 right-0 h-80 overflow-hidden pointer-events-none z-0">
      <svg
        viewBox="0 0 1200 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="fadeTop" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00CFFF" stopOpacity="0.1"/>
            <stop offset="50%" stopColor="#00CFFF" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#00CFFF" stopOpacity="0.8"/>
          </linearGradient>
        </defs>

        {/* Circuit Lines */}
        <g stroke="#00CFFF" strokeWidth="1" fill="none" filter="url(#glow)">
          {/* Top horizontal line */}
          <path
            d="M200 50 L1000 50"
            className="circuit-line"
            strokeDasharray="800"
            strokeDashoffset="800"
          />
          {/* Middle horizontal lines */}
          <path
            d="M150 120 L1050 120"
            className="circuit-line-delay1"
            strokeDasharray="900"
            strokeDashoffset="900"
          />
          <path
            d="M100 190 L1100 190"
            className="circuit-line-delay2"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <path
            d="M50 260 L1150 260"
            className="circuit-line-delay3"
            strokeDasharray="1100"
            strokeDashoffset="1100"
          />
          {/* Vertical connections */}
          <path
            d="M400 50 L400 120"
            className="circuit-line-delay4"
            strokeDasharray="70"
            strokeDashoffset="70"
          />
          <path
            d="M600 120 L600 190"
            className="circuit-line-delay5"
            strokeDasharray="70"
            strokeDashoffset="70"
          />
          <path
            d="M800 190 L800 260"
            className="circuit-line-delay6"
            strokeDasharray="70"
            strokeDashoffset="70"
          />
          <path
            d="M500 50 L500 190"
            className="circuit-line-delay7"
            strokeDasharray="140"
            strokeDashoffset="140"
          />
          <path
            d="M700 120 L700 260"
            className="circuit-line-delay8"
            strokeDasharray="140"
            strokeDashoffset="140"
          />
        </g>

        {/* Circuit Nodes */}
        <g fill="#00CFFF" filter="url(#glow)">
          <circle cx="200" cy="50" r="3" className="circuit-node" opacity="0"/>
          <circle cx="1000" cy="50" r="3" className="circuit-node-delay1" opacity="0"/>
          <circle cx="400" cy="50" r="3" className="circuit-node-delay2" opacity="0"/>
          <circle cx="500" cy="50" r="3" className="circuit-node-delay3" opacity="0"/>
          <circle cx="150" cy="120" r="3" className="circuit-node-delay4" opacity="0"/>
          <circle cx="600" cy="120" r="3" className="circuit-node-delay5" opacity="0"/>
          <circle cx="700" cy="120" r="3" className="circuit-node-delay6" opacity="0"/>
          <circle cx="1050" cy="120" r="3" className="circuit-node-delay7" opacity="0"/>
          <circle cx="100" cy="190" r="3" className="circuit-node-delay8" opacity="0"/>
          <circle cx="500" cy="190" r="3" className="circuit-node-delay9" opacity="0"/>
          <circle cx="600" cy="190" r="3" className="circuit-node-delay10" opacity="0"/>
          <circle cx="1100" cy="190" r="3" className="circuit-node-delay11" opacity="0"/>
          <circle cx="50" cy="260" r="3" className="circuit-node-delay12" opacity="0"/>
          <circle cx="700" cy="260" r="3" className="circuit-node-delay13" opacity="0"/>
          <circle cx="800" cy="260" r="3" className="circuit-node-delay14" opacity="0"/>
          <circle cx="1150" cy="260" r="3" className="circuit-node-delay15" opacity="0"/>
        </g>
      </svg>

      <style jsx>{`
        .circuit-line {
          animation: drawLine 3s ease-in-out infinite;
        }
        .circuit-line-delay1 {
          animation: drawLine 3s ease-in-out 0.5s infinite;
        }
        .circuit-line-delay2 {
          animation: drawLine 3s ease-in-out 1s infinite;
        }
        .circuit-line-delay3 {
          animation: drawLine 3s ease-in-out 1.5s infinite;
        }
        .circuit-line-delay4 {
          animation: drawLine 1s ease-in-out 2s infinite;
        }
        .circuit-line-delay5 {
          animation: drawLine 1s ease-in-out 2.2s infinite;
        }
        .circuit-line-delay6 {
          animation: drawLine 1s ease-in-out 2.4s infinite;
        }
        .circuit-line-delay7 {
          animation: drawLine 2s ease-in-out 2.6s infinite;
        }
        .circuit-line-delay8 {
          animation: drawLine 2s ease-in-out 2.8s infinite;
        }

        @keyframes drawLine {
          0% {
            stroke-dashoffset: 100%;
          }
          50% {
            stroke-dashoffset: 0%;
          }
          100% {
            stroke-dashoffset: 0%;
          }
        }

        .circuit-node {
          animation: fadeInNode 3s ease-in-out infinite;
        }
        .circuit-node-delay1 {
          animation: fadeInNode 3s ease-in-out 0.5s infinite;
        }
        .circuit-node-delay2 {
          animation: fadeInNode 3s ease-in-out 1s infinite;
        }
        .circuit-node-delay3 {
          animation: fadeInNode 3s ease-in-out 1.5s infinite;
        }
        .circuit-node-delay4 {
          animation: fadeInNode 3s ease-in-out 2s infinite;
        }
        .circuit-node-delay5 {
          animation: fadeInNode 3s ease-in-out 2.2s infinite;
        }
        .circuit-node-delay6 {
          animation: fadeInNode 3s ease-in-out 2.4s infinite;
        }
        .circuit-node-delay7 {
          animation: fadeInNode 3s ease-in-out 2.6s infinite;
        }
        .circuit-node-delay8 {
          animation: fadeInNode 3s ease-in-out 2.8s infinite;
        }
        .circuit-node-delay9 {
          animation: fadeInNode 3s ease-in-out 3s infinite;
        }
        .circuit-node-delay10 {
          animation: fadeInNode 3s ease-in-out 3.2s infinite;
        }
        .circuit-node-delay11 {
          animation: fadeInNode 3s ease-in-out 3.4s infinite;
        }
        .circuit-node-delay12 {
          animation: fadeInNode 3s ease-in-out 3.6s infinite;
        }
        .circuit-node-delay13 {
          animation: fadeInNode 3s ease-in-out 3.8s infinite;
        }
        .circuit-node-delay14 {
          animation: fadeInNode 3s ease-in-out 4s infinite;
        }
        .circuit-node-delay15 {
          animation: fadeInNode 3s ease-in-out 4.2s infinite;
        }

        @keyframes fadeInNode {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default CircuitBackground;

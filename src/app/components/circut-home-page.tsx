import React from "react";
import styles from "./circut-home-page.module.css";

// CircutHomePage: animated hexagon + circuit lines background
// - Adds blur(4px)->0 and opacity 0->1 "resolve into focus" effect
// - Keeps glowing nodes, line draw animations, and a gradient edge mask
// - Respects prefers-reduced-motion (disables animations)

function hexPoints(cx: number, cy: number, r: number) {
  // Generate a regular hexagon (6 sides, 60deg increments)
  const pts: Array<[number, number]> = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2; // start at top
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    pts.push([x, y]);
  }
  return pts.map((p) => p.join(",")).join(" ");
}

export default function CircutHomePage({ className }: { className?: string }) {
  const vb = { w: 800, h: 600 };
  const cx = vb.w / 2;
  const cy = vb.h / 2;

  return (
    <div className={className} aria-hidden>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${vb.w} ${vb.h}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient mask for soft edges */}
          <radialGradient id="maskGradient" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
          <mask id="fadeMask">
            <rect width="100%" height="100%" fill="url(#maskGradient)" />
          </mask>

          {/* Subtle stroke gradient (optional accent) */}
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1dcbf2" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1dcbf2" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Animated group that resolves into focus (blur->sharp, opacity 0->1) */}
        <g className={styles.holoGroup} mask="url(#fadeMask)">
          {/* Hexagon rings */}
          <polygon
            points={hexPoints(cx, cy, 140)}
            className={`${styles.hex} ${styles.line}`}
            style={{ animationDelay: "100ms" }}
          />
          <polygon
            points={hexPoints(cx, cy, 200)}
            className={`${styles.hex} ${styles.line}`}
            style={{ animationDelay: "250ms" }}
          />
          <polygon
            points={hexPoints(cx, cy, 260)}
            className={`${styles.hex} ${styles.line}`}
            style={{ animationDelay: "400ms" }}
          />

          {/* Circuit lines (sample paths) */}
          <path d={`M ${cx - 260} ${cy} L ${cx - 180} ${cy}`} className={styles.line} style={{ animationDelay: "80ms" }} />
          <path d={`M ${cx - 180} ${cy} L ${cx - 140} ${cy - 40}`} className={styles.line} style={{ animationDelay: "180ms" }} />
          <path d={`M ${cx + 260} ${cy} L ${cx + 180} ${cy}`} className={styles.line} style={{ animationDelay: "220ms" }} />
          <path d={`M ${cx + 180} ${cy} L ${cx + 140} ${cy + 40}`} className={styles.line} style={{ animationDelay: "300ms" }} />
          <path d={`M ${cx} ${cy - 260} L ${cx} ${cy - 180}`} className={styles.line} style={{ animationDelay: "260ms" }} />
          <path d={`M ${cx} ${cy + 260} L ${cx} ${cy + 180}`} className={styles.line} style={{ animationDelay: "340ms" }} />

          {/* Glowing nodes */}
          <circle cx={cx - 180} cy={cy} r="4" className={`${styles.node} ${styles.nodePulse}`} />
          <circle cx={cx - 140} cy={cy - 40} r="3" className={`${styles.node} ${styles.nodePulse}`} />
          <circle cx={cx + 180} cy={cy} r="4" className={`${styles.node} ${styles.nodePulse}`} />
          <circle cx={cx + 140} cy={cy + 40} r="3" className={`${styles.node} ${styles.nodePulse}`} />
          <circle cx={cx} cy={cy - 180} r="3.5" className={`${styles.node} ${styles.nodePulse}`} />
          <circle cx={cx} cy={cy + 180} r="3.5" className={`${styles.node} ${styles.nodePulse}`} />
        </g>
      </svg>
    </div>
  );
}
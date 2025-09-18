import type { FC } from 'react';

/**
 * A futuristic animated background component featuring glowing hexagons and circuit lines.
 * This component uses SVG with CSS animations for a lightweight, performant, and scalable effect.
 *
 * Design & Animation Details:
 * - Hexagons and circuit lines are "drawn" on screen using the stroke-dasharray/stroke-dashoffset technique.
 * - Glowing nodes at vertices and line ends gently pulse in size and brightness.
 * - A two-tone glow effect on nodes (white core, cyan outer) is achieved with SVG filters.
 * - The entire animation is masked with a vertical gradient to fade out at the top edge.
 * - Animations are staggered with `animation-delay` to create a digital rendering effect.
 */
const HexagonCircuitBackground: FC = () => {
  return (
    <div
      className="absolute inset-0 -z-20 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/*
        Using <style jsx> for component-scoped CSS. This is a Next.js feature that
        keeps styles colocated and prevents conflicts with global styles.
      */}
      <style jsx>{`
        /* Animation for drawing lines and hexagon strokes */
        @keyframes draw-line {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Animation for the pulsing nodes */
        @keyframes pulse-node {
          0%,
          100% {
            r: 1.5;
            opacity: 0.7;
          }
          50% {
            r: 2.2;
            opacity: 1;
          }
        }

        /* Simple fade-in for all elements */
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .circuit-line {
          stroke: #00cfff;
          stroke-width: 0.5;
          /* The --length custom property is set inline on each path */
          stroke-dasharray: var(--length, 200);
          stroke-dashoffset: var(--length, 200);
          animation: draw-line 3s ease-out forwards,
            fade-in 1s ease-out forwards;
          filter: url(#line-glow);
          fill: none;
        }

        .circuit-node {
          fill: white;
          stroke: #00cfff;
          stroke-width: 0.5;
          /* The fade-in animation is staggered with the line drawing */
          animation: pulse-node 4s infinite ease-in-out,
            fade-in 1s ease-out forwards;
          filter: url(#node-glow);
        }
      `}</style>

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 400" // A wide viewBox to span across larger screens
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-30 dark:opacity-50 [mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_100%)]"
      >
        <defs>
          {/* Filter for the subtle line glow */}
          <filter id="line-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.7" result="blur" />
          </filter>

          {/* Filter for the bright node glow */}
          <filter id="node-glow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feFlood floodColor="#00CFFF" result="flood" />
            <feComposite in="flood" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* A group of circuits. You can add more groups or paths for more density. */}
        <g>
          {/* Hexagon 1 (center-left) */}
          <path
            className="circuit-line"
            style={{ '--length': 180, animationDelay: '0.2s' } as React.CSSProperties}
            d="M300 200 l30 -17.32 v34.64 l-30 17.32 l-30 -17.32 v-34.64 z"
          />
          <circle className="circuit-node" cx="330" cy="182.68" r="2" style={{ animationDelay: '0.4s' }} />
          <circle className="circuit-node" cx="330" cy="217.32" r="2" style={{ animationDelay: '0.5s' }} />
          <circle className="circuit-node" cx="300" cy="234.64" r="2" style={{ animationDelay: '0.6s' }} />
          <circle className="circuit-node" cx="270" cy="217.32" r="2" style={{ animationDelay: '0.7s' }} />
          <circle className="circuit-node" cx="270" cy="182.68" r="2" style={{ animationDelay: '0.8s' }} />
          <circle className="circuit-node" cx="300" cy="165.36" r="2" style={{ animationDelay: '0.3s' }} />

          {/* Hexagon 2 (top-right) */}
          <path
            className="circuit-line"
            style={{ '--length': 120, animationDelay: '1.0s' } as React.CSSProperties}
            d="M800 100 l20 -11.55 v23.1 l-20 11.55 l-20 -11.55 v-23.1 z"
          />
          <circle className="circuit-node" cx="820" cy="88.45" r="2" style={{ animationDelay: '1.2s' }} />
          <circle className="circuit-node" cx="800" cy="123.1" r="2" style={{ animationDelay: '1.4s' }} />
          <circle className="circuit-node" cx="780" cy="88.45" r="2" style={{ animationDelay: '1.6s' }} />

          {/* Connecting Lines */}
          <path
            className="circuit-line"
            style={{ '--length': 450, animationDelay: '0.5s' } as React.CSSProperties}
            d="M330 182.68 C 450 150, 650 130, 780 88.45"
          />
          <path
            className="circuit-line"
            style={{ '--length': 150, animationDelay: '1.8s' } as React.CSSProperties}
            d="M800 123.1 L 950 150"
          />
          <circle className="circuit-node" cx="950" cy="150" r="2" style={{ animationDelay: '2.0s' }} />
          <path
            className="circuit-line"
            style={{ '--length': 200, animationDelay: '2.2s' } as React.CSSProperties}
            d="M950 150 L 1050 250 L 1150 230"
          />
          <circle className="circuit-node" cx="1150" cy="230" r="2" style={{ animationDelay: '2.6s' }} />
          <path
            className="circuit-line"
            style={{ '--length': 250, animationDelay: '0.9s' } as React.CSSProperties}
            d="M270 182.68 L 150 100 L 50 120"
          />
          <circle className="circuit-node" cx="50" cy="120" r="2" style={{ animationDelay: '1.3s' }} />

          {/* Additional decorative lines */}
          <path
            className="circuit-line"
            style={{ '--length': 300, animationDelay: '2.5s' } as React.CSSProperties}
            d="M100 350 C 200 300, 350 320, 450 380"
          />
          <circle className="circuit-node" cx="450" cy="380" r="2" style={{ animationDelay: '2.8s' }} />
          <path
            className="circuit-line"
            style={{ '--length': 280, animationDelay: '1.5s' } as React.CSSProperties}
            d="M600 300 L 700 200 L 850 250"
          />
          <circle className="circuit-node" cx="600" cy="300" r="2" style={{ animationDelay: '1.6s' }} />
          <circle className="circuit-node" cx="850" cy="250" r="2" style={{ animationDelay: '1.9s' }} />
        </g>
      </svg>
    </div>
  );
};

export default HexagonCircuitBackground;
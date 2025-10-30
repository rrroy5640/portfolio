import { useSVGStrokeAnimation } from "../../hooks/useGSAPAnimation";
import { homeContent } from "../../constants/homeContent";

export function SVGNameAnimation() {
  const svgRef = useSVGStrokeAnimation({ delay: 0.5 });

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <svg
        ref={svgRef}
        viewBox="0 0 1000 360"
        className="w-full h-[200px] md:h-[300px]"
      >
        <defs>
          <filter id="glowFilter">
            <feGaussianBlur
              id="glow"
              in="SourceGraphic"
              stdDeviation="0"
              result="blur"
            />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="nameGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <mask
            id="nameMask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1000"
            height="360"
          >
            <rect x="0" y="0" width="1000" height="360" fill="black" />
            <rect
              id="revealRect"
              x="0"
              y="0"
              width="1"
              height="360"
              fill="white"
            />
          </mask>
        </defs>

        <g filter="url(#glowFilter)" mask="url(#nameMask)">
          <text
            id="nameStroke"
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="180"
            fontWeight="700"
            letterSpacing="4"
            fill="none"
            stroke="url(#nameGrad)"
            strokeWidth="6"
            strokeLinejoin="round"
            strokeLinecap="round"
            paintOrder="stroke"
          >
            {homeContent.name}
          </text>
        </g>
      </svg>
    </div>
  );
}

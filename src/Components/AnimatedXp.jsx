import { motion } from "framer-motion";

export default function AnimatedXP({ width = 130, height = 130 }) {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 130 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginLeft: "2rem" }}
    >
      <defs>
        <linearGradient id="gradientXP" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#83a0b2" />
          <stop offset="100%" stopColor="#000101" />
        </linearGradient>
      </defs>

      {/* X */}
      <motion.path
        d="M10 70 L50 10 M10 10 L50 70"
        stroke="url(#gradientXP)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.2,
        }}
      />

      {/* P */}
      <motion.path
        d="M70 70 V10 H95 Q108 10 108 25 Q108 40 95 40 H70"
        stroke="url(#gradientXP)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.2,
        }}
      />
    </motion.svg>
  );
}

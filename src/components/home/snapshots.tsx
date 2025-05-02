import { FC, useState } from "react";
import { motion, Variants } from "framer-motion";
import React from "react";
import { CardTypeScript, CardReactNext, CardNodeAPI } from "./cards";

interface Positions {
  y: number | number[];
  x?: number | number[];
  rotate?: number;
  opacity?: number;
}
type PositionsMap = [Positions, Positions, Positions];

const cards = [CardTypeScript, CardReactNext, CardNodeAPI];

const positionsMaps: Record<"in" | "out" | number, PositionsMap> = {
  in: [
    { x: -100, y: -140, rotate: -12, opacity: 1 },
    { x: 0, y: 0, rotate: 0, opacity: 1 },
    { x: 100, y: 140, rotate: 12, opacity: 1 },
  ],
  0: [
    { x: -90, y: -120, rotate: -8, opacity: 1 },
    { x: 40, y: 60, rotate: 8, opacity: 0.6 },
    { x: 110, y: 160, rotate: 14, opacity: 0.6 },
  ],
  1: [
    { x: -110, y: -150, rotate: -14, opacity: 0.6 },
    { x: 0, y: 0, rotate: 0, opacity: 1 },
    { x: 140, y: 180, rotate: 16, opacity: 0.6 },
  ],
  2: [
    { x: -100, y: -140, rotate: -12, opacity: 0.6 },
    { x: 0, y: 0, rotate: 0, opacity: 0.6 },
    { x: 90, y: 130, rotate: 10, opacity: 1 },
  ],
  out: [
    { x: -100, y: -1000, rotate: -12, opacity: 1 },
    { x: 0, y: -1000, rotate: 0, opacity: 1 },
    { x: 100, y: -1000, rotate: 12, opacity: 1 },
  ],
};

const wrapperVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(20px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      when: "beforeChildren",
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const cardEntrance: Variants = {
  hidden: { y: 400, opacity: 0 },
  visible: {
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export const Snapshots: FC = () => {
  const [animatedIn, setAnimatedIn] = useState(false);
  const [positions, setPositions] = useState<PositionsMap>(positionsMaps.in);

  React.useEffect(() => {
    setTimeout(() => {
      setAnimatedIn(true);
    }, 1000);
  }, []);

  return (
    <motion.div
      className="hidden md:block
                 w-[calc(50vw-30px)] h-[calc(100vh-60px)]
                 relative overflow-hidden
                 rounded-3xl
                 bg-gradient-to-br from-cyan-100/70 via-blue-200/70 to-indigo-200/70"
      variants={wrapperVariants}
      initial="hidden"
      animate="visible"
    >
      {cards.map((Card, idx) => {
        const { x, y, rotate, opacity } = positions[idx];

        return (
          <motion.a
            key={idx}
            href="#"
            onHoverStart={() => setPositions(positionsMaps[idx])}
            onHoverEnd={() => setPositions(positionsMaps.in)}
            className="absolute top-1/2 left-1/2
                       w-56 h-64 rounded-xl
                       -translate-x-1/2 -translate-y-1/2"
            variants={cardEntrance}
            initial="hidden"
            animate={{
              x,
              y,
              rotate,
              opacity,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              delay: animatedIn ? 0 : 1 + idx * 0.2,
            }}
          >
            <motion.div
              className="w-full h-full rounded-xl bg-gray-200"
              style={{
                boxShadow:
                  "0 20px 40px rgba(0, 0, 0, 0.08), 0 10px 20px rgba(0, 0, 0, 0.04)",
              }}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: 1 + idx * 0.2,
              }}
            >
              {Card}
            </motion.div>
          </motion.a>
        );
      })}
    </motion.div>
  );
};

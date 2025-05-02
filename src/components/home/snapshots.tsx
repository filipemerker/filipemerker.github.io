import { FC, useState } from "react";
import { motion, Variants } from "framer-motion";
import React from "react";

type Card = { x: number; y: number; rotate: number };

// original positions
const cards: Card[] = [
  { x: -100, y: -140, rotate: -12 },
  { x: 0, y: 0, rotate: 0 },
  { x: 100, y: 140, rotate: 12 },
];

// your hover maps
const hoverMaps: Card[][] = [
  [
    { x: -90, y: -120, rotate: -8 },
    { x: 40, y: 60, rotate: 8 },
    { x: 110, y: 160, rotate: 14 },
  ],
  [
    { x: -110, y: -150, rotate: -14 },
    { x: 0, y: 0, rotate: 0 },
    { x: 140, y: 180, rotate: 16 },
  ],
  [
    { x: -100, y: -140, rotate: -12 },
    { x: 0, y: 0, rotate: 0 },
    { x: 90, y: 130, rotate: 10 },
  ],
];

// wrapper fade+blur + delay before children + stagger
const wrapperVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(20px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      when: "beforeChildren",
      delayChildren: 1.2, // ← wait 1.2s after wrapper animation
      staggerChildren: 0.2, // then stagger cards by 0.2s
    },
  },
};

// entrance + normal state
const cardEntrance: Variants = {
  hidden: { y: 400, opacity: 0 },
  visible: {
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export const Snapshots: FC = () => {
  const [animatedIn, setAnimatedIn] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const activePositions = hovered === null ? cards : hoverMaps[hovered];

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
      {cards.map((_, i) => {
        const pos = activePositions[i];
        const isHovered = hovered === i;

        return (
          <motion.a
            key={i}
            href="#"
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            className="absolute top-1/2 left-1/2
                       w-56 h-64 rounded-xl
                       -translate-x-1/2 -translate-y-1/2"
            variants={cardEntrance}
            initial="hidden"
            animate={{
              x: pos.x,
              y: pos.y,
              rotate: pos.rotate,
              opacity: isHovered || hovered === null ? 1 : 0.6,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              delay: animatedIn ? 0 : 1 + i * 0.2,
            }}
          >
            <motion.div
              className="w-full h-full rounded-xl bg-gray-200"
              style={{
                boxShadow:
                  "0 20px 40px rgba(0, 0, 0, 0.08), 0 10px 20px rgba(0, 0, 0, 0.04)",
              }}
              animate={
                isHovered
                  ? { y: 0 } // stop float on hover
                  : { y: [0, -15, 0] } // otherwise float
              }
              transition={
                isHovered
                  ? {}
                  : {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: 1 + i * 0.2,
                    }
              }
            />
          </motion.a>
        );
      })}
    </motion.div>
  );
};

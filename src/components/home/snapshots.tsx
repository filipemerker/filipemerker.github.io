import { FC, useState } from "react";
import { motion, Variants, useScroll } from "framer-motion";
import React from "react";
import { CardTypeScript, CardReactNext, CardNodeAPI } from "./cards";
import { SpinningText } from "../ui/spinning-text";

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
    { x: -1000, y: -140, rotate: -12, opacity: 1 },
    { x: -1000, y: 0, rotate: 0, opacity: 1 },
    { x: -1000, y: 140, rotate: 12, opacity: 1 },
  ],
};

const wrapperVariants: Variants = {
  initial: {
    scale: 0.7,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.96, 0.64, 1],
      when: "beforeChildren",
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const spinningTextVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.8,
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
  const [animatedOut, setAnimatedOut] = useState(false);
  const [positions, setPositions] = useState<PositionsMap>(positionsMaps.in);
  const { scrollY } = useScroll();

  React.useEffect(() => {
    setTimeout(() => {
      setAnimatedIn(true);
    }, 600);
  }, []);

  React.useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 10) {
        setAnimatedOut(true);
        setPositions(positionsMaps.out);
      } else {
        setPositions(positionsMaps.in);
      }
    });

    return () => unsubscribe();
  }, [scrollY]);

  const getDelay = React.useCallback(
    (idx: number) => {
      const INITIAL_DELAY = 0.5;
      const STAGGER_DELAY_IN = 0.2;
      const STAGGER_DELAY_OUT = 0.07;

      switch (true) {
        case !animatedIn:
          return INITIAL_DELAY + idx * STAGGER_DELAY_IN;
        case animatedOut:
          return idx * STAGGER_DELAY_OUT;
        default:
          return 0;
      }
    },
    [animatedIn, animatedOut]
  );

  return (
    <div className="w-1/2 h-screen hidden lg:flex items-center justify-start">
      <div className="w-[calc(50vw-80px)] h-[calc(100vh-120px)] bg-white border border-l-0 relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full bg-gradient-to-br from-[rgb(207,250,254,0.4)] via-[rgb(191,219,254,0.4)] to-[rgb(199,210,254,0.4)]"
          variants={wrapperVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute top-1/2 left-1/2 translate-x-[180px] -translate-y-[140px]"
          initial="hidden"
          animate="animate"
          variants={spinningTextVariants}
        >
          <SpinningText className="text-muted-foreground">
            my projects • my projects •
          </SpinningText>
        </motion.div>
        {cards.map((Card, idx) => {
          const { x, y, rotate, opacity } = positions[idx];

          return (
            <motion.a
              key={idx}
              href="#general-info"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("general-info")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              onHoverStart={() => {
                if (!animatedOut) setPositions(positionsMaps[idx]);
              }}
              onHoverEnd={() => {
                if (!animatedOut) setPositions(positionsMaps.in);
              }}
              className="absolute top-1/2 left-1/2
                       w-56 h-64 rounded-xl
                       -translate-x-1/2 -translate-y-1/2"
              variants={cardEntrance}
              initial="hidden"
              onAnimationComplete={() => {
                if (animatedOut) {
                  setAnimatedOut(false);
                }
              }}
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
                delay: getDelay(idx),
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
      </div>
    </div>
  );
};

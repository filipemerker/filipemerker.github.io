"use client";

import { AuroraText } from "../ui/aurora-text";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardHeader } from "../ui/card";

export function Thanks() {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, {
    margin: "10px",
  });

  const titleVariants = {
    hidden: {
      rotateX: 90,
      y: 50,
      opacity: 0,
    },
    visible: (i: number) => ({
      rotateX: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.2,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <Card
      ref={ref}
      className="lg:w-110 w-full shadow-none rounded-none border-none hidden lg:block"
    >
      <CardHeader className="p-0">
        <h1 className="text-xl text-right text-black font-bold py-10 flex justify-end gap-2 whitespace-nowrap">
          <motion.span
            variants={titleVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
          >
            thanks for
          </motion.span>
          <motion.span
            variants={titleVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
          >
            <AuroraText>visiting</AuroraText>
          </motion.span>
        </h1>
      </CardHeader>
    </Card>
  );
}

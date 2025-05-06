"use client";

import { AuroraText } from "../ui/aurora-text";
import { WorkExperience } from "./work-experience";
import { RemoteWork } from "./remote-work";
import { Achievements } from "./achievements";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function GeneralInfo() {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, {
    margin: "-200px",
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
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <div
      id="general-info"
      className="flex min-h-screen w-full flex-col items-center"
      ref={ref}
    >
      <div className="w-full h-[70px] lg:h-[20px] flex flex-row justify-center">
        <div className="w-[1px] h-full bg-border hidden lg:block" />
      </div>

      <h1 className="w-full text-4xl text-center text-black font-light py-20 px-10 bg-white border-y-1 flex justify-center gap-3">
        <span className="hidden lg:block">
          <motion.span
            variants={titleVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
          >
            some career
          </motion.span>
          <motion.span
            variants={titleVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
          >
            <AuroraText>highlights</AuroraText>
          </motion.span>
        </span>

        <span className="lg:hidden">
          some career <AuroraText>highlights</AuroraText>
        </span>
      </h1>

      <div className="flex lg:flex-row flex-col xl:gap-20 gap-10 w-full justify-between px-6 md:px-20 border-none py-20">
        <div className="flex flex-col gap-4">
          <Achievements />
        </div>
        <div className="flex flex-col gap-10">
          <WorkExperience />
          <RemoteWork />
        </div>
      </div>
    </div>
  );
}

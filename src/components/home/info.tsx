"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Info() {
  return (
    <div className="flex flex-col justify-center gap-10 md:px-20 px-10 md:w-1/2 w-full md:items-start items-center md:text-left text-center">
      <motion.section
        initial={{ opacity: 0, x: -10, filter: "blur(5px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        <Avatar className="h-24 w-24">
          <AvatarImage src="/profile.jpg" alt="Filipe Merker" />
          <AvatarFallback>FM</AvatarFallback>
        </Avatar>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -10, filter: "blur(5px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold tracking-tight text-foreground">
            Senior Front-end Engineer.
          </h1>

          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            Hi, I&#39;m Philip. Over the years I&#39;ve build many projects on
            the full-stack with tool like ReactJS, JavaScript, TypeScript, SQL,
            PostgreSQL, MongoDB, AWS, NodeJS, Redux, NextJS, Jest, Express,
            Vite, NestJS.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -10, filter: "blur(5px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        <div className="flex gap-6">
          <Link href="https://github.com/filipemerker" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/philip-merker-162055a2/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}

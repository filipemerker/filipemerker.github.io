import { Article } from "./types";
import { SharedLink } from "@/components/ui/shared-link";

export const articles: Article[] = [
  {
    date: "2025 - Voiceflow",
    title: "Novel template management system at Voiceflow",
    summary: (
      <>
        Led development of a self-service template system using React, S3, Redis
        and Logux for real-time sync. The system offloaded 30,000+ lines of JSON
        from the codebase and reduced template deployment time from 2 days to 20
        minutes.
      </>
    ),
  },
  {
    date: "2024 - Voiceflow",
    image: {
      src: "/functions.png",
      className: "w-100 -mt-6 mb-6",
    },
    title: "In-browser code editor with real-time collaboration",
    summary: (
      <>
        Architected and implemented a new full-stack CMS entity with a reusable
        code editor in Slate.js, React and TypeScript. The system includes
        real-time collaboration powered by Logux and is now used in thousands of
        live AI-agent workflows for data transformations and API calls.
      </>
    ),
  },
  {
    date: "2023 - Voiceflow",
    image: {
      src: "/color.png",
      className: "w-80 -mt-8 mb-4",
    },
    title: "Color palette generator with HSLUV algorithm",
    summary: (
      <>
        Built a reusable color palette generator for our component library with
        a custom HSLUV algorithm implementation for smooth color matching. It is
        now used across the app in 15+ places.
      </>
    ),
  },
  {
    date: "2021 - 2022 - Toom",
    title:
      "High traffic e-commerce rebuilt in React as a micro-frontend application",
    summary: (
      <span>
        I led many initiatives on the migration of{" "}
        <SharedLink
          href="https://toom.de/c/werkstatt-maschinen/messwerkzeuge"
          external
        >
          toom.de
        </SharedLink>{" "}
        (7M+ monthly visits) to a micro-frontend architecture, built with React
        and bundled with Webpack.
        <br />
        <br />
        Implemented advanced code splitting and asset optimization, reducing
        bundle size by 20% and improving load times by 2+ seconds while
        maintaining 80+ Lighthouse scores.
        <br />
        <br />
        I&apos;ve also fostered a culture of end-to-end testing with Cypress.
      </span>
    ),
  },
  {
    date: "2017-2019 - Praticantes",
    title: "React-Native fullstack app with 100k+ users",
    summary: (
      <>
        I was responsible for the fullstack development of a React-Native app
        from scratch, with a backend in Node + Express + MongoDB all deployed to
        Firebase. Wasabi was used as the storage solution for low egress costs.
        <br />
        <br />
        During my time there, I also did research on how to improve performance
        of flat lists with React-Native. My study became a{" "}
        <SharedLink
          href="https://github.com/filipemerker/flatlist-performance-tips"
          external
        >
          very popular article
        </SharedLink>{" "}
        that was later added to the React-Native documentation.
      </>
    ),
  },
  {
    date: "2016-2025 - Personal",
    title: "Many side projects and experiments",
    image: {
      src: "/seamless.png",
      className: "w-80 -mt-6 mb-6",
    },
    summary: (
      <>
        Built over the years and I plan on building many more. Some of them were
        useful, some were not. But they were all fun to build:
        <br />
        <br />
        <ul>
          <li className="mb-4">
            <SharedLink
              href="https://github.com/filipemerker/micro-frontend-talk-example"
              external
            >
              Hybrid micro-frontend with React and Svelte
            </SharedLink>{" "}
            - This was build to showcase the power of Module Federation on a
            company-wide talk I gave at SoftServe.
          </li>
          <li className="mb-4">
            <SharedLink
              href="https://github.com/filipemerker/seamless-timetracker"
              external
            >
              Seamless Time Tracker
            </SharedLink>{" "}
            - A pomodoro timer app built with React and Styled Components. (old
            stack, but still looks decent)
          </li>
          <li className="mb-4">
            <SharedLink
              href="https://github.com/filipemerker/brazilian-bouncing-balls"
              external
            >
              Bouncing balls experiment with canvas API
            </SharedLink>{" "}
            - Build originally for L&apos;Occitane, via an agency but migrated
            to Vue.js as an experiment.
          </li>
          <li className="mb-4">
            <SharedLink href="https://github.com/filipemerker/quiz" external>
              Bible quiz app built on Vue 3
            </SharedLink>{" "}
            - This was a fun way to learn new Vue 3 features like the
            composition API and others.
          </li>
        </ul>
      </>
    ),
  },
];

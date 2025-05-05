import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { BorderBeam } from "../ui/border-beam";

const articles = [
  {
    date: "2025",
    title:
      "Proposed and built a template management system reducing rollout time by 90%",
    summary:
      "Led development of a self-service template system using GitHub, S3, Redis and Logux for real-time sync. The system offloaded 30,000+ lines of JSON and reduced template deployment time from 2 days to 20 minutes.",
  },
  {
    date: "2024",
    title:
      "Built an in-browser JavaScript code editor with real-time collaboration",
    summary:
      "Architected and implemented a full-stack CMS for reusable JavaScript functions using Slate.js, React and TypeScript. The system includes real-time collaboration powered by Logux and is now used in thousands of live AI-agent workflows for data transformations and API calls.",
  },
  {
    date: "2021",
    title:
      "Migrated high-traffic e-commerce platform to micro-frontend architecture",
    summary:
      "Led migration to micro-frontend architecture for toom.de (7M+ monthly visits). Implemented advanced code splitting and asset optimization, reducing bundle size by 20% and improving load times by 2+ seconds while maintaining 80+ Lighthouse scores.",
  },
  {
    date: "2021",
    title:
      "Built React-Native app and cloud infrastructure to handle 100k+ users",
    summary:
      "Built a React-Native app and cloud infrastructure to handle 100k+ users",
  },
  {
    date: "2021",
    title:
      "Migrated high-traffic e-commerce platform to micro-frontend architectures",
    summary:
      "Led migration to micro-frontend architecture for toom.de (7M+ monthly visits). Implemented advanced code splitting and asset optimization, reducing bundle size by 20% and improving load times by 2+ seconds while maintaining 80+ Lighthouse scores.",
  },
  {
    date: "2021",
    title:
      "Built React-Native app and cloud infrastructure to handle 100k+ userss",
    summary:
      "Built a React-Native app and cloud infrastructure to handle 100k+ users",
  },
];

export function Achievements() {
  return (
    <div className="relative grid md:grid-cols-2 gap-[1px] bg-border border ">
      {articles.map((article) => (
        <Card
          key={article.title}
          className="shadow-none border-none rounded-none"
        >
          <CardHeader>
            <span className="text-gray-400 text-sm border-l pl-3 border-gray-200">
              {article.date}
            </span>
          </CardHeader>

          <CardContent>
            <div className="mb-2">
              <h3 className="font-semibold text-lg text-black dark:text-white">
                {article.title}
              </h3>
              <p className="text-gray-500 text-base mt-1">{article.summary}</p>
            </div>
          </CardContent>
        </Card>
      ))}

      <BorderBeam duration={5} size={600} />
    </div>
  );
}

import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const articles = [
  {
    date: "2023",
    title: "Launched template management system reducing rollout time by 90%",
    summary:
      "Led development of a self-service template system using GitHub, S3, Redis and Logux for real-time sync. The system offloaded 30,000+ lines of JSON and reduced template deployment time from 2 days to 20 minutes.",
  },
  {
    date: "2022",
    title:
      "Built a production-grade JavaScript editor with real-time collaboration",
    summary:
      "Architected and implemented a full-stack CMS for reusable JavaScript functions using Slate.js, React and TypeScript. The system includes real-time collaboration powered by Logux and is now used in thousands of live AI-agent workflows for data transformations and API calls.",
  },

  {
    date: "2021",
    title: "Optimized performance for high-traffic e-commerce platform",
    summary:
      "Led migration to micro-frontend architecture for toom.de (7M+ monthly visits). Implemented advanced code splitting and asset optimization, reducing bundle size by 20% and improving load times by 2+ seconds while maintaining 80+ Lighthouse scores.",
  },
  {
    date: "2021",
    title: "Established robust testing culture and infrastructure",
    summary:
      "Implemented comprehensive test automation with 70%+ component coverage via Jest and end-to-end testing with Cypress. Created health-check pipeline integrated with PagerDuty that prevented 3+ production issues before user impact.",
  },
];

export function Achievements() {
  return (
    <div className="flex flex-col gap-8">
      {articles.map((article) => (
        <Card
          key={article.title}
          className="shadow-none border-none border rounded-2xl"
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
    </div>
  );
}

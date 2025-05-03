import { LayoutList } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

const jobs = [
  {
    logo: "/logos/voiceflowhq_logo.jpeg",
    company: "Voiceflow",
    role: "Senior Software Engineer",
    dates: "Feb 2022 — Present",
  },
  {
    logo: "/logos/softserve_logo.jpeg",
    company: "SoftServe",
    role: "Senior JavaScript Engineer",
    dates: "Jan 2020 — Feb 2022",
  },
  {
    logo: "/logos/prat.jpeg",
    company: "Praticantes",
    role: "Principal Engineer",
    dates: "Nov 2017 — Dec 2019",
  },
  {
    logo: "/logos/metaoficial_logo.jpeg",
    company: "Gaucha ZH",
    role: "Front-end Engineer",
    dates: "Mar 2017 — Nov 2017",
  },
  {
    logo: "/logos/somostrinca_logo.jpeg",
    company: "Trinca",
    role: "Front-end Developer",
    dates: "Mar 2016 — Mar 2017",
  },
  {
    logo: "/logos/mmda_digital_logo.jpeg",
    company: "MMDA Digital",
    role: "Front-end Developer",
    dates: "Apr 2015 — Mar 2016",
  },
  {
    logo: "/logos/plano.jpeg",
    company: "Plano Transmedia",
    role: "Front-end Developer & Lead",
    dates: "Jul 2012 — Apr 2015",
  },
  {
    logo: "/logos/big_house_web_logo.jpeg",
    company: "BigHouse Web",
    role: "Web Developer",
    dates: "Feb 2012 — Jul 2012",
  },
];

export function WorkExperience() {
  return (
    <Card className="md:w-110 w-full mx-auto mt-10 shadow-none">
      <CardHeader className="flex flex-row items-center gap-2 mb-2 pb-0">
        <LayoutList className="w-4 h-4 text-gray-400" />
        <span className="font-semibold text-lg text-gray-700">Work</span>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-5">
          {jobs.map((job) => (
            <li key={job.company} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={40}
                  height={40}
                  className="rounded-full shadow"
                />
                <div>
                  <div className="font-semibold text-black dark:text-white">
                    {job.company}
                  </div>
                  <div className="text-gray-400 text-sm">{job.role}</div>
                </div>
              </div>
              <div className="text-gray-400 text-sm">{job.dates}</div>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <a
          href="/Philip Merker - Javascript Engineer Resume.pdf"
          download
          className="block w-full rounded-xl bg-gray-100 py-3 text-center font-medium text-gray-700 hover:bg-gray-200 transition dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          Download CV <span aria-hidden>↓</span>
        </a>
      </CardFooter>
    </Card>
  );
}

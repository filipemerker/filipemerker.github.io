import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { AuroraText } from "../ui/aurora-text";

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
    company: "Multiple agencies",
    role: "Front-end Developer",
    dates: "Feb 2012 — Mar 2016",
  },
];

export function WorkExperience() {
  return (
    <Card className="md:w-110 w-full mx-auto shadow-none border-b-1 rounded-none">
      <CardHeader className="flex flex-row items-center gap-2 mb-2 pb-0">
        <span className="font-semibold text-lg text-gray-700">
          <AuroraText>12+ years</AuroraText> building for the web
        </span>
      </CardHeader>

      <CardContent className="pt-0">
        <ul className="space-y-5">
          {jobs.map((job) => (
            <li key={job.company} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
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
          className="
            block
            w-full
            rounded-sm

            bg-gradient-to-br
              from-[#CFFAFE]
              via-[#BFDBFE]
              to-[#C7D2FE]

            py-3
            text-center
            font-medium
            text-black

            transition
            mt-2

            shadow-[0_4px_8px_-4px_rgba(207,250,254,0.7),0_8px_16px_-8px_rgba(191,219,254,0.7),0_12px_24px_-12px_rgba(199,210,254,0.7)]
            hover:shadow-[0_6px_12px_-6px_rgba(207,250,254,0.9),0_12px_24px_-12px_rgba(191,219,254,0.9),0_18px_36px_-18px_rgba(199,210,254,0.9)]

            hover:opacity-90

            duration-300
            ease-out
          "
        >
          Get my resume with full history <span aria-hidden>↓</span>
        </a>
      </CardFooter>
    </Card>
  );
}

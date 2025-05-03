"use client";

import { AuroraText } from "../ui/aurora-text";
import { WorkExperience } from "./work-experience";
import { RemoteWork } from "./remote-work";
import { Achievements } from "./achievements";
export function GeneralInfo() {
  return (
    <div className="flex min-h-screen w-full md:p-20 p-10 flex-col items-center">
      <h1 className="w-full text-3xl text-center text-black font-bold mb-20 mt-10">
        <AuroraText>12 years</AuroraText> building for the web
      </h1>

      <div className="flex lg:flex-row flex-col xl:gap-40 gap-10 w-full justify-between">
        <div className="flex flex-col gap-4">
          <Achievements />
        </div>
        <div className="flex flex-col gap-4">
          <WorkExperience />
          <RemoteWork />
        </div>
      </div>
    </div>
  );
}

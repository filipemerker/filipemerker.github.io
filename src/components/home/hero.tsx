"use client";

import { Info } from "./info";
import { Snapshots } from "./snapshots";

export function Hero() {
  return (
    <div className="flex min-h-screen w-full items-center">
      <Info />

      <div className="w-[1px] hidden md:block bg-border h-screen" />

      <Snapshots />
    </div>
  );
}

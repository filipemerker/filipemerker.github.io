"use client";

import { Info } from "./info";
import { Snapshots } from "./snapshots";

export function Hero() {
  return (
    <div className="flex min-h-screen w-full items-center">
      <Info />

      <Snapshots />
    </div>
  );
}

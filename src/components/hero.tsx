"use client";

import { Info } from "./home/info";
import { Snapshots } from "./home/snapshots";

export function Hero() {
  return (
    <div className="flex min-h-screen w-full items-center">
      <Info />

      <Snapshots />
    </div>
  );
}

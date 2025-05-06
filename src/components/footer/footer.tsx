"use client";

import { Portfolio } from "../footer/portfolio";

import { Thanks } from "../footer/thanks";

export function Footer() {
  return (
    <div
      id="general-info"
      className="w-full items-center bg-white border-y-1 flex flex-row justify-between px-6 lg:px-20"
    >
      <Portfolio />
      <Thanks />
    </div>
  );
}

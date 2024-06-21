"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmoothDemo";
import { ThreeDCardDemo } from "./ThreeDCardDemo";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased ">
     <div className="md:max-w-[1460px] z-20 w-full mx-auto grid lg:grid-cols-3 grid-cols-1 lg:justify-center items-center justify-end  relative h-[600px]">
      {/* <div className="lg:col-span-2 col-span-1 flex justify-center items-center">
        <TypewriterEffectSmoothDemo />
      </div> */}
      <div className="flex lg:justify-start lg:items-start justify-center items-center">
        <ThreeDCardDemo />
      </div>

    </div>
      <BackgroundBeams />
    </div>
  );
}

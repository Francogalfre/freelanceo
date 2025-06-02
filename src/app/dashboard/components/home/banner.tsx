import React from "react";

import Link from "next/link";
import Image from "next/image";

import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

import Topographic from "@/public/resources/topographic-background.webp";

const Banner = () => {
  return (
    <header className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 sm:p-6 md:p-8 lg:p-10 min-h-[140px] sm:min-h-[160px] md:min-h-[180px] rounded-xl text-white relative overflow-hidden">
      <Image
        src={Topographic.src}
        alt="Topographic effect for background"
        width={Topographic.width}
        height={Topographic.height}
        priority
        className="absolute h-full w-full top-0 right-0 object-cover rotate-180 z-0 opacity-70 brightness-150"
      />

      <div className="relative flex flex-col items-start justify-center gap-1 sm:gap-2 md:gap-3 z-10">
        <p className="text-base text-blue-200">Freelance Dashboard</p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight">
          Manage Your Projects with <br className="hidden sm:block" /> Professional Freelance Tools
        </h2>
        <Link href={"/dashboard/projects"} className="hidden md:block">
          <InteractiveHoverButton className="font-medium text-black hover:text-white md:mb-3 lg:mb-0 md:text-base">
            Create a Project
          </InteractiveHoverButton>
        </Link>
      </div>
    </header>
  );
};

export default Banner;

import React from "react";

import Link from "next/link";
import Image from "next/image";

import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

import Topographic from "@/public/resources/topographic-background.png";

const Banner = () => {
  return (
    <header className="bg-gradient-to-br from-blue-400 to-blue-600 p-10 rounded-xl text-white relative overflow-hidden">
      <Image
        src={Topographic.src}
        alt="Topographic effect for background"
        width={100}
        height={100}
        className="absolute h-full w-full top-0 right-0 object-cover rotate-180 z-0 opacity-7s0 brightness-150"
      />

      <div className="relative flex flex-col items-start justify-center gap-2 z-10">
        <p className="text-blue-200">Freelance Dashboard</p>
        <h2 className="text-4xl font-semibold">
          Manage Your Projects with <br /> Professional Freelance Tools
        </h2>
        <Link href={"/dashboard/projects"}>
          <InteractiveHoverButton className="font-medium text-black hover:text-white mt-2">
            Create a Project
          </InteractiveHoverButton>
        </Link>
      </div>
    </header>
  );
};

export default Banner;

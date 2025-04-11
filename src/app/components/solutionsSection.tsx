"use client";

import React from "react";

import { motion } from "framer-motion";

import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

import { challenges, solutions } from "@/utils/solutions";

const SolutionsSection = () => {
  return (
    <section className="w-full py-24 my-20 px-6 bg-gradient-to-t to-blue-500/80 from-blue-600">
      <div className="max-w-7xl justify-center items-center mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 text-center"
        >
          Better Solutions for Freelancers
        </motion.h2>

        <main className="w-full flex items-center gap-12">
          <div className="w-full">
            <h3 className="text-3xl font-semibold mb-10 text-white">Common Challenges</h3>
            <div className="flex flex-col gap-12">
              {challenges.map((challenge) => (
                <>
                  <div className="space-y-6" key={challenge.id}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center flex-shrink-0">
                        {challenge.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2 text-white">{challenge.title}</h4>
                        <p className="text-white/80">{challenge.text}</p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-3xl font-semibold mb-10 text-white">Our Solutions</h3>
            <div className="flex flex-col gap-12">
              {solutions.map((solution) => (
                <>
                  <div className="space-y-6" key={solution.id}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center flex-shrink-0">
                        {solution.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2 text-white">{solution.title}</h4>
                        <p className="text-white/80">{solution.text}</p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </main>
        <GridPattern
          width={40}
          height={30}
          x={0}
          y={0}
          className={cn(
            "absolute inset-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(circle_at_center,black_30%,transparent_90%)]"
          )}
        />
      </div>
    </section>
  );
};

export default SolutionsSection;

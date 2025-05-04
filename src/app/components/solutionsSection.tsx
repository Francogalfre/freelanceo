"use client";

import React from "react";

import { motion } from "framer-motion";

import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

import { challenges, solutions } from "@/utils/solutions";

const SolutionsSection = () => {
  return (
    <section id="solutions" className="w-full py-26 my-26 px-6 bg-gradient-to-t to-blue-600/70 from-blue-600">
      <div className="max-w-7xl justify-center items-center mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 text-center"
        >
          Better Solutions for Freelancers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl font-medium mb-24 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 text-center"
        >
          We understand the challenges freelancers face and have built solutions to address them
        </motion.p>

        <main className="w-full flex items-center gap-12 mb-12">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-semibold mb-10 text-white">Common Challenges</h3>
            <div className="flex flex-col gap-12">
              {challenges.map((challenge, index) => (
                <motion.div
                  className="space-y-6"
                  key={challenge.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 5 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div key={index} className="flex items-center rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="mr-4 flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-white"
                    >
                      {challenge.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-xl text-white">{challenge.title}</h4>
                      <p className="text-blue-100">{challenge.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-semibold mb-10 text-white">Our Solutions</h3>
            <div className="flex flex-col gap-12">
              {solutions.map((solution, index) => (
                <motion.div
                  className="space-y-6"
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div key={index} className="flex items-center rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="mr-4 flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-white"
                    >
                      {solution.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-xl text-white">{solution.title}</h4>
                      <p className="text-blue-100">{solution.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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

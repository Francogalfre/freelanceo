"use client";

import React from "react";

import type { Feature } from "@/utils/types";
import { features } from "@/utils/landing-page/features";

import { motion } from "framer-motion";

import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

const FeaturesSection = () => {
  return (
    <section className="relative pb-32 px-6 w-full overflow-hidden" id="features">
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
        >
          Features
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid gap-6 place-items-center"
        >
          {features.map((feature: Feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: 0.05 * index }}
              className={`flex flex-col items-center gap-4 p-6 border-2 rounded-lg hover:-translate-y-1 hover:shadow-sm transition-transform group  ${
                feature.premiun
                  ? "bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-300"
                  : "bg-white/50 border-gray-200"
              }`}
            >
              <div className="p-3 size-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:text-white group-hover:bg-blue-600 transition-colors ease-in-out duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <DotPattern
        className={cn("[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]", "opacity40", "-z-10")}
      />
    </section>
  );
};

export default FeaturesSection;

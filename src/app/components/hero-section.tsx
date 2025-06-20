"use client";

import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { SparklesText } from "@/components/magicui/sparkles-text";

import { ArrowRight } from "lucide-react";

import { motion } from "framer-motion";

import Link from "next/link";

import dashboardscreenshoot from "@/public/resources/dashboard-screenshot.webp";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="pb-30 sm:pb-0">
      <div className="bg-gradient-to-b from-blue-50 to-transparent pb-10" id="hero">
        <section className="flex min-h-[calc(100vh-73px)] w-full px-4 sm:px-6 flex-col text-center items-center justify-start pt-45 -z-10 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
              duration: 0.4,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="rounded-full hover:scale-101 border border-black/5 bg-blue-200 text-sm sm:text-md transition-all ease-in mb-6 sm:mb-8 p-1 hover:translate-y-[-1px] max-w-[90%] sm:max-w-full flex flex-wrap sm:flex-nowrap items-center justify-center"
          >
            <span className="bg-white text-blue-800 rounded-full z-10 py-1 pl-2 pr-3 text-sm lg:text-base">
              📣 Announcement
            </span>
            <AnimatedShinyText className="inline-flex items-center justify-center px-2 sm:px-4 py-1 transition ease-out hover:text-blue-800 hover:duration-300 text-sm lg:text-base">
              <span>Just Launched</span>
              <ArrowRight className="size-3 sm:size-4 ml-1" />
            </AnimatedShinyText>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
            }}
            className="text-6xl lg:text-8xl font-bold tracking-tight px-2 w-full"
          >
            Manage Your Freelance <br className="hidden sm:block" />
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 text-center w-full justify-center">
              Career <SparklesText text="Effortlessly" />
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
            }}
            className="mt-4 sm:mt-6 max-w-xl lg:max-w-2xl text-base lg:text-lg text-gray-600 px-4"
          >
            A smart dashboard designed to help freelancers track projects, clients, and earnings – all in one place.
            Take control of your freelance business today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 160 }}
            animate={{ opacity: 1, y: 40 }}
            transition={{
              duration: 0.4,
              delay: 0.4,
            }}
          >
            <Link
              href="/login"
              className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-all font-medium text-sm sm:text-base"
            >
              Get Started Now
            </Link>
          </motion.div>
        </section>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.5,
        }}
        className="w-full px-4 sm:px-6 lg:px-8 hidden md:block relative"
      >
        <div className="absolute inset-x-0 bottom-40 w-full h-full flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-blue-400/30 rounded-full blur-[100px]" />
          <div className="w-[600px] h-[600px] bg-blue-400/30 rounded-full blur-[100px]" />
        </div>
        <Image
          src={dashboardscreenshoot.src}
          width={dashboardscreenshoot.width}
          height={dashboardscreenshoot.height}
          priority
          className="relative md:w-[700px] lg:w-[900px] 2xl:w-[1200px] bottom-70 lg:bottom-40 xl:bottom-40 2xl:bottom-60 md:max-w-3xl lg:max-w-screen-xl mx-auto shadow-sm shadow-blue-400/30 rounded-xl overflow-hidden bg-cover"
          alt="Preview of Freelanceo Dashboard in Desktop Version"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

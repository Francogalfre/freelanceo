"use client";

import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { SparklesText } from "@/components/magicui/sparkles-text";

import { ArrowRight } from "lucide-react";

import { motion } from "framer-motion";

import Link from "next/link";

import dashboardscreenshoot from "@/public/resources/dashboard-screenshot.jpg";
import { Safari } from "@/components/magicui/safari";

const HeroSection = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-transparent" id="hero">
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
            <span className="bg-white text-blue-800 rounded-full z-10 py-1 pl-2 pr-3 text-sm sm:text-base">
              📣 Announcement
            </span>
            <AnimatedShinyText className="inline-flex items-center justify-center px-2 sm:px-4 py-1 transition ease-out hover:text-blue-800 hover:duration-300 text-sm sm:text-base">
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
            className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight px-2"
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
            className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-gray-600 px-4"
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

      {/* Safari Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.5,
        }}
      >
        <Safari
          mode="default"
          className="relative bottom-60 max-w-screen-sm mx-auto shadow-xm rounded-xl overflow-hidden bg-cover"
          url="www.freelanceo/dashboard.com"
          imageSrc={dashboardscreenshoot.src}
        />
      </motion.div>
    </>
  );
};

export default HeroSection;

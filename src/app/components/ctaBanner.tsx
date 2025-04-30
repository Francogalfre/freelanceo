import { ArrowRight } from "lucide-react";

import Link from "next/link";

import React from "react";

const CallToAction = () => {
  return (
    <section className="max-w-7xl mx-auto w-full py-20 px-4 md:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-10 text-center shadow-2xl md:p-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-700 opacity-20 blur-3xl" />
        </div>
        <div className="relative z-10">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Ready to streamline your freelance business?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100 md:text-xl">
            Join thousands of freelancers saving time, getting paid faster, and growing their business with Freelanceo.
          </p>
          <Link
            href="/signup"
            className="bg-white mx-auto max-w-sm flex items-center gap-2 justify-center text-center text-blue-600 hover:bg-blue-50 transition-colors duration-300 ease-in-out mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base"
          >
            Get Started Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

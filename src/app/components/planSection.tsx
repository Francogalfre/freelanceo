"use client";

import Link from "next/link";

import { motion } from "framer-motion";

const PlanSection = () => {
  return (
    <section className="relative py-32 px-6 w-full overflow-hidden" id="pricing">
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Start with our free plan and upgrade as you grow. All plans include our core features to help you manage your
          freelance business effectively.
        </motion.p>
      </div>
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-gray-100">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-gray-600">Perfect for getting started</p>
            </div>
            <div className="text-gray-600 space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p>Basic project tracking</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p>Up to 5 clients</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p>Simple analytics</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p>Basic support</p>
              </div>
            </div>
            <Link
              href="/register"
              className="w-full px-8 py-4 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200 transition-all font-medium inline-block text-center"
            >
              Start Free
            </Link>
          </div>
          <div className="p-8 rounded-2xl bg-blue-600 text-white shadow-sm hover:shadow-md transition-all relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-blue-900 text-sm font-bold px-4 py-1 rounded-full">Most Popular</span>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-blue-100">For growing freelancers</p>
            </div>
            <div className="text-blue-50 space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p>Everything in Free, plus:</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p>Unlimited projects & clients</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p>Advanced analytics & reporting</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p>Priority support</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p>Custom workflows</p>
              </div>
            </div>
            <Link
              href="/register"
              className="w-full px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all font-medium inline-block text-center"
            >
              Go Pro
            </Link>
          </div>
        </div>
        <p className="mt-8 text-gray-600">
          Need a custom plan?{" "}
          <Link href="/contact" className="text-blue-600 hover:text-blue-700">
            Contact us
          </Link>{" "}
          for enterprise solutions.
        </p>
      </div>
    </section>
  );
};

export default PlanSection;

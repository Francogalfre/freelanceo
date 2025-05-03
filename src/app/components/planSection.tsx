"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { pricingPlans } from "@/utils/plans";

const PlanSection = () => {
  return (
    <div className="max-w-7xl mx-auto text-center relative px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
      >
        Simple, Transparent Pricing
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-lg md:text-xl text-gray-600 mb-16 max-w-2xl mx-auto"
      >
        Start with our free plan and upgrade as you grow. All plans include our core features to help you manage your
        freelance business effectively.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`p-6 rounded-xl border ${
              plan.popular ? "border-blue-400 shadow-lg" : "border-gray-200"
            } relative bg-white ${!plan.active ? "opacity-60" : ""}`}
          >
            {!plan.active && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                Coming Soon
              </div>
            )}

            <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
            <div className="flex justify-center items-baseline gap-1 mb-4">
              <span className="text-3xl font-bold">${plan.price}</span>
              <span className="text-gray-500 text-sm">/month</span>
            </div>
            <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-md font-semibold text-white transition ${
                plan.active
                  ? "bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!plan.active}
            >
              {plan.active ? "Get Started" : "Coming Soon"}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PlanSection;

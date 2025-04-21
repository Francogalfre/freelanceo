// Components
import Navbar from "./components/navbar";
import Link from "next/link";

import HeroSection from "./components/heroSection";
import FeaturesSection from "./components/featuresSection";
import SolutionsSection from "./components/solutionsSection";

// Auth
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>
      <Navbar session={session} />
      <HeroSection />
      <main className="min-h-screen flex flex-col items-center">
        <FeaturesSection />
        <SolutionsSection />

        {/* Enhanced Pricing Section */}
        <section className="relative py-24 px-6 w-full bg-gradient-to-b from-blue-50/50 to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
              Start with our free plan and upgrade as you grow. All plans include our core features to help you manage
              your freelance business effectively.
            </p>
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
                  <span className="bg-yellow-400 text-blue-900 text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
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

        <section className="relative py-24 px-6 w-full">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"></div>
          <div className="max-w-3xl mx-auto text-center relative">
            <h2 className="text-4xl font-bold mb-16">FAQ</h2>
            <div className="space-y-12">
              <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-blue-100">
                <h3 className="text-xl font-semibold mb-2">Is my data secure?</h3>
                <p className="text-gray-600">
                  We use enterprise-grade encryption to keep your information safe and private.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-blue-100">
                <h3 className="text-xl font-semibold mb-2">Can I upgrade anytime?</h3>
                <p className="text-gray-600">Yes, upgrade or downgrade your plan whenever you need.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full py-12 px-6 bg-gradient-to-b from-transparent to-blue-50/30">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

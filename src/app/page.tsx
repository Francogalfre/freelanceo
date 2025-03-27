// Components
import Navbar from "@/components/Navbar";

import HeroSection from "./components/heroSection";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <main className="min-h-screen flex flex-col items-center">
        <section className="py-24 px-6 bg-gray-50 w-full">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">All-in-One Dashboard for Freelancers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Client Tracker</h3>
                <p className="text-gray-600">Keep all your clients organized in one central location.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Project Management</h3>
                <p className="text-gray-600">Track ongoing projects with deadlines and to-do lists.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Income Insights</h3>
                <p className="text-gray-600">Get detailed analytics on your monthly earnings.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 w-full  max-w-7xl ">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Designed for Freelancers, by Freelancers</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">No More Scattered Notes</h3>
                <p className="text-gray-600">Keep everything organized in one unified dashboard.</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Boost Productivity</h3>
                <p className="text-gray-600">Focus on what matters with our streamlined workflow.</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">More Time Creating</h3>
                <p className="text-gray-600">Spend less time organizing and more time on your craft.</p>
              </div>
            </div>
            <Link
              href="/register"
              className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-all font-medium"
            >
              Join the Freelancers Revolution
            </Link>
          </div>
        </section>

        <section className="py-24 px-6 bg-gray-50 w-full ">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Get Started for Free – Upgrade for More Power</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
                <ul className="space-y-4 mb-8">
                  <li>Access to client and project tracking</li>
                  <li>Store up to 10 files</li>
                  <li>Basic dashboard analytics</li>
                </ul>
                <Link
                  href="/register"
                  className="px-8 py-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all font-medium inline-block"
                >
                  Start Free
                </Link>
              </div>
              <div className="p-8 bg-blue-50 rounded-lg shadow-sm border-2 border-blue-200">
                <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
                <ul className="space-y-4 mb-8">
                  <li>Everything in Free Plan +</li>
                  <li>Unlimited projects and contacts</li>
                  <li>Invoice generator</li>
                  <li>Advanced insights</li>
                  <li>Priority support</li>
                </ul>
                <Link
                  href="/register"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium inline-block"
                >
                  Go Premium
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 w-full  max-w-7xl ">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">How is Freelanceo different from other freelance apps?</h3>
                <p className="text-gray-600">
                  Freelanceo combines all essential freelance tools in one intuitive dashboard, designed specifically
                  for the modern freelancer's workflow.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What's included in the free plan?</h3>
                <p className="text-gray-600">
                  Our free plan includes basic client tracking, project management, and file storage for up to 10 files.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How secure is my data?</h3>
                <p className="text-gray-600">
                  We use industry-standard encryption and security measures to protect your data. Your information is
                  safe with us.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-12 px-6 w-full">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-gray-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="hover:text-gray-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-gray-300">
                    Terms of Service
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

// Components
import Navbar from "@/components/Navbar";

import HeroSection from "./components/heroSection";

import Link from "next/link";

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
        <section className="relative py-24 px-6 w-full overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"></div>
          <div className="max-w-7xl mx-auto text-center relative">
            <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Core Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-blue-100 hover:border-blue-200 transition-all">
                <h3 className="text-xl font-semibold mb-4">Smart Dashboard</h3>
                <p className="text-gray-600">All your freelance work organized in one beautiful interface</p>
              </div>
              <div className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-blue-100 hover:border-blue-200 transition-all">
                <h3 className="text-xl font-semibold mb-4">Project Tracking</h3>
                <p className="text-gray-600">Monitor deadlines, milestones and progress effortlessly</p>
              </div>
              <div className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-blue-100 hover:border-blue-200 transition-all">
                <h3 className="text-xl font-semibold mb-4">Income Analytics</h3>
                <p className="text-gray-600">Visual insights into your earnings and financial growth</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 px-6 w-full bg-gradient-to-b from-blue-50/50 to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16">Choose Your Plan</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold mb-4">Free</h3>
                <div className="text-gray-600 space-y-3 mb-8">
                  <p>Basic project tracking</p>
                  <p>Up to 5 clients</p>
                  <p>Simple analytics</p>
                </div>
                <Link
                  href="/register"
                  className="px-8 py-4 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200 transition-all font-medium inline-block"
                >
                  Start Free
                </Link>
              </div>
              <div className="p-8 rounded-2xl bg-blue-600 text-white shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-blue-50 space-y-3 mb-8">
                  <p>Unlimited projects</p>
                  <p>Advanced analytics</p>
                  <p>Priority support</p>
                </div>
                <Link
                  href="/register"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all font-medium inline-block"
                >
                  Go Pro
                </Link>
              </div>
            </div>
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

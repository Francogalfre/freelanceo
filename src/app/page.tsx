// Components
import Navbar from "./components/navbar";
import Link from "next/link";

import HeroSection from "./components/heroSection";
import FeaturesSection from "./components/featuresSection";
import SolutionsSection from "./components/solutionsSection";
import PlanSection from "./components/planSection";

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
        <PlanSection />

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

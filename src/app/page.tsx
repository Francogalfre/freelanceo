// Components
import Navbar from "./components/navbar/navbar";

import HeroSection from "./components/hero-section";
import FeaturesSection from "./components/features-section";
import SolutionsSection from "./components/solutions-section";
import PlanSection from "./components/pricing-section";
import CallToAction from "./components/call-to-action";
import Footer from "./components/footer";

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

      <main className="min-h-screen w-full overflow-x-hidden flex flex-col items-center">
        <FeaturesSection />
        <SolutionsSection />
        <PlanSection />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}

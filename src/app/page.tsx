// Components
import Navbar from "./components/navbar";

import HeroSection from "./components/heroSection";
import FeaturesSection from "./components/featuresSection";
import SolutionsSection from "./components/solutionsSection";
import PlanSection from "./components/planSection";
import CallToAction from "./components/ctaBanner";
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

      <main className="min-h-screen flex flex-col items-center">
        <FeaturesSection />
        <SolutionsSection />
        <PlanSection />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}

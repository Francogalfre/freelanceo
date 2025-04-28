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
      <img
        src="https://images.unsplash.com/photo-1742836875995-738584294250?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="relative bottom-60 max-w-7xl mx-auto w-full object-cover object-center rounded-xl shadow-lg "
      />
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

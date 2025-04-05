import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import React from "react";

import WelcomeBar from "./components/welcomeBar";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div>
      <WelcomeBar session={session} />
      <section className="w-1/2 grid grid-cols-3 gap-6 pt-6  h-36">
        <div className="flex flex-col p-6 border-1 border-gray-600 gap-2 rounded-xl">
          <span>Total Earnings</span>
          <h1>$45,214.89</h1>
        </div>
        <div className="flex flex-col p-6 border-1 border-gray-600 gap-2 rounded-xl">
          <span>Total Earnings</span>
          <h1>$45,214.89</h1>
        </div>
        <div className="flex flex-col p-6 border-1 border-gray-600 gap-2 rounded-xl">
          <span>Total Earnings</span>
          <h1>$45,214.89</h1>
        </div>
      </section>
      Dashboard {session?.user.name}
    </div>
  );
};

export default DashboardPage;

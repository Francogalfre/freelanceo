import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import React from "react";

import WelcomeBar from "./components/welcomeBar";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="grid grid-cols-5 gap-6">
      <section className="col-span-3">
        <WelcomeBar session={session} />
        <section className="w-full grid grid-cols-3 gap-6 pt-6 h-24">
          <div className="flex flex-col px-6 py-2 border-1 border-gray-600 gap-2 rounded-xl">
            <span>Total Earnings</span>
            <h1>$45,214.89</h1>
          </div>
          <div className="flex flex-col px-6 py-2 border-1 border-gray-600 gap-2 rounded-xl">
            <span>Total Earnings</span>
            <h1>$45,214.89</h1>
          </div>
          <div className="flex flex-col px-6 py-2 border-1 border-gray-600 gap-2 rounded-xl">
            <span>Total Earnings</span>
            <h1>$45,214.89</h1>
          </div>
        </section>
        Dashboard {session?.user.name}
      </section>
      <section className="col-span-2">SideBar right</section>
    </main>
  );
};

export default DashboardPage;

import React from "react";

import { getProjects } from "./projects/actions";
import { getClients } from "./clients/action";

import Banner from "./components/home/banner";
import DataCards from "./components/home/data-cards";
import RightSidebar from "./components/home/right-sidebar/sidebar";

import { EarningsChart } from "./components/home/earnings-chart";

const DashboardPage = async () => {
  const projects = await getProjects();
  const clients = await getClients();

  return (
    <main className="grid grid-cols-1 lg:grid-cols-6 gap-4 md:gap-6 max-h-screen overflow-y-auto md:pb-20 lg:pb-0">
      <section className="md:col-span-3 lg:col-span-4 flex flex-col gap-4 md:gap-6">
        <Banner />
        <DataCards projects={projects} clients={clients} />

        <section className="bg-white rounded-xl p-4 md:p-6 border-1 border-blue-100/60 flex-1 max-h-[530px]">
          <div className="mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Your Analytics</h2>
            <p className="text-sm md:text-base text-gray-600">
              Track your earnings, projects, and client growth over time
            </p>
          </div>
          <EarningsChart projects={projects} clients={clients} />
        </section>
      </section>

      <RightSidebar />
    </main>
  );
};

export default DashboardPage;

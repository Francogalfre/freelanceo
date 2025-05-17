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
    <main className="grid grid-cols-6 gap-6 h-full">
      <section className="col-span-4 flex flex-col gap-6">
        <Banner />
        <DataCards projects={projects} clients={clients} />

        <section className="bg-white h-full max-h-[550px] rounded-xl p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Your Analytics</h2>
            <p className="text-gray-600">Track your earnings, projects, and client growth over time</p>
          </div>
          <EarningsChart projects={projects} clients={clients} />
        </section>
      </section>

      <RightSidebar />
    </main>
  );
};

export default DashboardPage;

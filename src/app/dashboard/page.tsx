import React from "react";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import { getProjects } from "./projects/actions";
import { getClients } from "./clients/action";

import Banner from "./components/home/banner";
import DataCards from "./components/home/data-cards";
import RightSidebar from "./components/home/right-sidebar/sidebar";

const DashboardPage = async () => {
  const projects = await getProjects();
  const clients = await getClients();

  return (
    <main className="grid grid-cols-6 gap-6 h-full">
      <section className="col-span-4 flex flex-col gap-6">
        <Banner />
        <DataCards projects={projects} clients={clients} />
      </section>

      <RightSidebar />
    </main>
  );
};

export default DashboardPage;

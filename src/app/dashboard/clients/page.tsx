import React from "react";

import { Toaster } from "@/components/ui/sonner";

import { getClients } from "./action";

import ClientsGrid from "./components/clientsGrid";
import ClientDrawer from "./components/clientDrawer";

const ClientsDashboardPage = async () => {
  const clients = await getClients();

  return (
    <div className="w-full">
      <section className="w-full flex justify-between items-center mb-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-gray-900">Your Clients</h1>
          <p className="text-gray-500 text-lg">Manage all the contact information of your clients</p>
        </div>
        <ClientDrawer />
      </section>

      <ClientsGrid clients={clients} />

      <Toaster />
    </div>
  );
};

export default ClientsDashboardPage;

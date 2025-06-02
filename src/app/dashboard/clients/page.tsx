import React from "react";

import { getClients } from "./action";

import ClientsGrid from "./components/clientsGrid";
import ClientDrawer from "./components/clientsDrawer";

import { getSessionOrThrow } from "@/utils/authSession";
import { reachedMaxClients } from "@/utils/isSubscribed";

const ClientsDashboardPage = async () => {
  const clients = await getClients();

  const user = await getSessionOrThrow();
  const hasReachedMaxClients = (await reachedMaxClients(user.user.id)) ?? false;

  return (
    <div className="w-full">
      <section className="w-full flex items-start flex-col md:flex-row justify-between md:items-center mb-12 gap-6 md:gap-0">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Your Clients</h1>
          <p className="text-gray-500 text-md md:text-lg">Manage all the contact information of your clients</p>
        </div>
        <ClientDrawer hasReachedMaxClients={hasReachedMaxClients} />
      </section>

      <ClientsGrid clients={clients} />
    </div>
  );
};

export default ClientsDashboardPage;

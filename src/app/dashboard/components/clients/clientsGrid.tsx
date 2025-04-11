import React from "react";

import Image from "next/image";

import type { Client } from "@/utils/types";
import ClientCard from "./clientCard";

import Illustration from "@/public/IllustrationNoClients.svg";

type Props = Client[];

const ClientsGrid = ({ clients }: { clients: Props }) => {
  return (
    <section className="mx-auto">
      {clients.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <>
              <ClientCard key={client.id} client={client} />
            </>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl p-8 border border-gray-200 text-center justify-center items-center flex flex-col gap-4">
          <img src={Illustration.src} width={340} height={340} alt="Illustration" />
          <p className="text-gray-900 text-lg">
            No Clients found. Click <span className="text-blue-600">"Add a New Client"</span> to get started.
          </p>
        </div>
      )}
    </section>
  );
};

export default ClientsGrid;

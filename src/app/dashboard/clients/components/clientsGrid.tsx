"use client";

import React, { useState } from "react";

import Image from "next/image";

import type { Client } from "@/utils/types";
import ClientCard from "../../clients/components/clientCard";

import Illustration from "@/public/resources/IllustrationNoClients.svg";

type Props = Client[];

const ClientsGrid = ({ clients }: { clients: Props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <section className="mx-auto">
      {clients.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} handleOpen={handleOpen} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl p-8 border border-gray-200 text-center justify-center items-center flex flex-col gap-4">
          <Image src={Illustration.src} width={300} height={300} alt="Illustration" />
          <p className="text-gray-900 text-lg">
            No Clients found. Click <span className="text-blue-500">"Add a New Client"</span> to get started.
          </p>
        </div>
      )}
    </section>
  );
};

export default ClientsGrid;

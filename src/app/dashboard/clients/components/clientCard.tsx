"use client";

import React, { useState } from "react";

import type { Client } from "@/utils/types";

import { Mail, Phone, MapPin, Send } from "lucide-react";

import ClientAlert from "./clientAlert";

type ClientCardProps = {
  client: Client;
};

const ClientCard = ({ client }: ClientCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      key={client.id}
      className="bg-white border-1 border-blue-100/50 p-4 rounded-lg gap-4 flex flex-col justify-between"
    >
      <div className="flex gap-3 items-center">
        <p className="bg-blue-500/20 text-blue-500 w-12 h-12 flex items-center justify-center text-xl font-semibold rounded-full">
          {client.name.split("")[0].toUpperCase()}
        </p>
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold">{client.name}</h2>
          <span className="text-gray-400 font-light">{client.company}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-gray-600 flex items-center gap-2">
          <Mail className="size-4" /> {client.email}
        </p>
        <p className="text-gray-600 flex items-center gap-2">
          <Phone className="size-4" /> {client.phone ? client.phone : "No phone number provided"}
        </p>
        <p className="text-gray-600 flex items-center gap-2">
          <MapPin className="size-4" /> {client.location ? client.location : "No location provided"}
        </p>
      </div>
      <hr />
      <div>
        <span className="font-medium">Notes:</span>
        <p className="text-gray-600 mt-2 line-clamp-2 break-words whitespace-pre-wrap prose">
          {client.notes ? `${client.notes.slice(0, 85)}...` : "This client doesn't have notes"}
        </p>
      </div>
      <div className="flex items-end gap-4">
        <a
          href={`mailto:${client.email}`}
          className="bg-blue-500 hover:bg-blue-600 text-md transition-colors text-white px-4 py-2 rounded-xl cursor-pointer flex items-center gap-2"
        >
          <Send width={18} />
          Contact Client
        </a>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-transparent text-blue-500  px-4 py-2 rounded-xl cursor-pointer border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
        >
          View Details
        </button>
      </div>

      <ClientAlert isOpen={isOpen} setIsOpen={setIsOpen} client={client} />
    </div>
  );
};

export default ClientCard;

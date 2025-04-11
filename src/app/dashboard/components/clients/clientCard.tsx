import React from "react";

import type { Client } from "@/utils/types";

import { Mail, Phone, MapPin } from "lucide-react";

const ClientCard = ({ client }: { client: Client }) => {
  return (
    <div key={client.id} className="bg-gray-50 border-1 border-gray-100 p-4 rounded-lg gap-4 flex flex-col">
      <div className="flex gap-3 items-center">
        <p className="bg-blue-500/20 text-blue-500 px-4 py-2 text-xl font-semibold rounded-full">
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
      <div>
        <span>Notes:</span>
        <p>{client.notes ? `${client.notes.slice(0, 100)}...` : "This client doesn't have notes"}</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-xl cursor-pointer">View Details</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-xl cursor-pointer">Contact</button>
      </div>
    </div>
  );
};

export default ClientCard;

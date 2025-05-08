import { Client } from "@/utils/types";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

type Props = {
  client: Client[];
};

const ClientDetailsCard = ({ client }: Props) => {
  return (
    <div className="flex-1/3 bg-white p-6 rounded-xl border-1 border-blue-100/50 h-full max-h-[640px]">
      <div className="pb-6">
        <h3 className="text-md text-gray-500 pb-4">Client Information:</h3>
        <div className="flex items-center gap-4 pb-6">
          <p className="bg-blue-500/20 text-blue-500 size-14 flex items-center justify-center text-2xl font-semibold rounded-full">
            {client[0].name.split("")[0].toUpperCase()}
          </p>
          <div>
            <p className="text-2xl font-semibold">{client[0].name}</p>
            <p className="font-medium text-gray-500">{client[0].company ? client[0].company : "No Company provided"}</p>
          </div>
        </div>
        <hr />
        <div className="flex items-center gap-4 py-6">
          <div className="w-full">
            <span className="text-md text-gray-500">Contact Information:</span>
            <div className="flex flex-col gap-4 pt-4 w-full">
              <div className="flex justify-between items-center gap-4 w-full">
                <p className=" flex items-center gap-2 text-md text-gray-500">
                  <Mail className="size-4" /> Email:
                </p>
                <span className="text-lg">{client[0].email}</span>
              </div>
              <div className="flex justify-between items-center gap-4 w-full">
                <p className=" flex items-center gap-2 text-md text-gray-500">
                  <Phone className="size-4" />
                  Phone Number:
                </p>
                <span className="text-lg">{client[0].phone ? client[0].phone : "No phone number provided"}</span>
              </div>
              <div className="flex justify-between items-center gap-4 w-full">
                <p className=" flex items-center gap-2 text-md text-gray-500">
                  <MapPin className="size-4" />
                  Location:
                </p>
                <span className="text-lg">{client[0].location ? client[0].location : "No location provided"}</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center gap-4 pt-6">
          <div className="w-full">
            <span className="text-md text-gray-500">About Client:</span>
            <p className="w-full prose pt-4 text-lg">{client[0].notes}</p>
          </div>
        </div>
        <a
          href="mailto:${client[0].email}"
          className="bg-blue-500 hover:bg-blue-600 text-md transition-colors text-white py-4 rounded-xl cursor-pointer flex justify-center mt-8 w-full"
        >
          Contact Client
        </a>
      </div>
    </div>
  );
};

export default ClientDetailsCard;

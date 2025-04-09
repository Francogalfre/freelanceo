import React from "react";

import { Plus, MoveLeft } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";

import { Toaster } from "@/components/ui/sonner";

import ClientsForm from "../components/forms/clientsForm";
import { getClients } from "./action";

import { Mail, Phone, MapPin } from "lucide-react";

const ClientsDashboardPage = async () => {
  const clients = await getClients();

  return (
    <div className="w-full">
      <section className="w-full flex justify-between items-center mb-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-gray-900">Your Clients</h1>
          <p className="text-gray-500 text-lg">Manage all the contact information of your clients</p>
        </div>
        <Drawer direction="left">
          <DrawerTrigger className="text-md py-4 px-6 bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer text-white flex gap-2 items-center rounded-lg">
            Add a New Client
            <Plus className="size-5" />
          </DrawerTrigger>
          <DrawerContent className="justify-start items-start text-start h-screen max-w-full">
            <div className="w-full py-6 px-8">
              <DrawerHeader className="pb-2">
                <DrawerClose>
                  <MoveLeft className="cursor-pointer" />
                </DrawerClose>
                <DrawerTitle className="text-3xl font-semibold pt-4">Let's Add a new Client</DrawerTitle>
                <DrawerDescription className="text-lg">
                  Enter the details of your new client. Click save when you're done.
                </DrawerDescription>
              </DrawerHeader>
              <ClientsForm />
            </div>
          </DrawerContent>
        </Drawer>
      </section>
      <section className="mx-auto">
        {clients.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client) => (
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
                    <Phone className="size-4" /> {client.phone}
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <MapPin className="size-4" /> {client.location}
                  </p>
                </div>
                <div>
                  <span>Notes:</span>
                  <p>{client.notes ? `${client.notes.slice(0, 100)}...` : ""}</p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-xl cursor-pointer">View Details</button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-xl cursor-pointer">Contact</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
            <p className="text-gray-500 text-lg">No projects found. Click "Create New Project" to get started.</p>
          </div>
        )}
      </section>
      <Toaster />
    </div>
  );
};

export default ClientsDashboardPage;

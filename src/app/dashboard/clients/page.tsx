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

const ClientsDashboardPage = () => {
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
      <section className="mx-auto bg-white rounded-xl p-8 border border-gray-200 text-center">
        <p className="text-gray-500 text-lg">No projects found. Click "Create New Project" to get started.</p>
      </section>
      <Toaster />
    </div>
  );
};

export default ClientsDashboardPage;

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import ClientsForm from "./clientsForm";
import { MoveLeft, Plus } from "lucide-react";

const ClientDrawer = () => {
  return (
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
  );
};

export default ClientDrawer;

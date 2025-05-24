import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import ClientsForm from "./clientsForm";

import { MoveLeft, Plus } from "lucide-react";

const ClientDrawer = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="text-sm md:text-md py-4 px-6 bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer text-white flex gap-2 items-center rounded-lg">
        Add a New Client
        <Plus className="size-5" />
      </DrawerTrigger>
      <DrawerContent className="w-full h-full sm:max-w-lg sm:h-full sm:rounded-none flex flex-col justify-start items-start text-start overflow-y-auto">
        <div className="w-full py-6 px-6">
          <DrawerHeader className="pb-2">
            <DrawerClose>
              <MoveLeft className="cursor-pointer" />
            </DrawerClose>
            <DrawerTitle className="text-xl md:text-3xl font-semibold pt-4 w-full">Let's Add a new Client</DrawerTitle>
            <DrawerDescription className="text-md md:text-lg w-full">
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

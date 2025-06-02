"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

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

const ClientDrawer = ({ hasReachedMaxClients }: { hasReachedMaxClients: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleDrawerClose = () => {
    setIsOpen(false);
    router.refresh();
  };

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex flex-col items-center">
        <DrawerTrigger
          disabled={hasReachedMaxClients}
          className={`text-sm md:text-md py-4 px-6 bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer text-white flex gap-2 items-center rounded-lg w-fit self-start md:self-end
            ${hasReachedMaxClients ? "cursor-not-allowed opacity-50 hover:cursor-not-allowed" : ""}`}
        >
          Add a new Client
          <Plus className="size-5" />
        </DrawerTrigger>
        {hasReachedMaxClients && (
          <div className="text-red-500 text-sm md:text-md pt-4 transition-colors cursor-not-allowed flex gap-2 items-center rounded-lg self-end">
            You have reached the maximum number of clients allowed.
          </div>
        )}
      </div>
      <DrawerContent className="w-full h-full sm:max-w-lg sm:h-full sm:rounded-none flex flex-col justify-start items-start text-start overflow-y-auto">
        <div className="w-full py-6 px-6">
          <DrawerHeader className="pb-2">
            <DrawerClose>
              <MoveLeft className="cursor-pointer" />
            </DrawerClose>
            <DrawerTitle className="text-xl md:text-3xl font-semibold pt-4 w-full">
              Let&apos;s Add a new Client
            </DrawerTitle>
            <DrawerDescription className="text-md md:text-lg w-full">
              Enter the details of your new client. Click save when you&apos;re done.
            </DrawerDescription>
          </DrawerHeader>
          <ClientsForm handleDrawerClose={handleDrawerClose} />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ClientDrawer;

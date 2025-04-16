import React from "react";

import { Mail, Phone, MapPin, Trash, X, Send } from "lucide-react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import type { Client } from "@/utils/types";

import { deleteClient } from "../action";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  client: Client;
};

const ClientAlert = ({ isOpen, setIsOpen, client }: Props) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="justify-center px-10 flex flex-col gap-12">
        <AlertDialogCancel className="border-none shadow-none hover:bg-transparent w-full flex justify-end items-center">
          <X className="cursor-pointer size-5" />
        </AlertDialogCancel>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex flex-col gap-6 justify-center items-center text-center w-full">
            <p className="bg-blue-500/20 text-blue-500 w-24 h-24 flex items-center justify-center text-3xl font-semibold rounded-full">
              {client.name.split("")[0].toUpperCase()}
            </p>
            <div>
              <p className="text-3xl font-semibold">{client.name}</p>
              <p className="font-medium text-gray-600">{client.company}</p>
            </div>
          </AlertDialogTitle>
        </AlertDialogHeader>

        <div>
          <span className="text-lg text-gray-600">Notes About the Client:</span>
          <p className="text-xl pt-2">{client.notes ? client.notes : "This client doesn't have notes"}</p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-gray-600 flex items-center gap-2 text-lg">
            <Mail className="size-5" /> {client.email}
          </p>
          <p className="text-gray-600 flex items-center gap-2 text-lg">
            <Phone className="size-5" /> {client.phone ? client.phone : "No phone number provided"}
          </p>
          <p className="text-gray-600 flex items-center gap-2 text-lg">
            <MapPin className="size-5" /> {client.location ? client.location : "No location provided"}
          </p>
        </div>

        <footer className="flex gap-6 items-center justify-end">
          <Button
            onClick={() => deleteClient(client.id)}
            className="bg-red-500 hover:bg-red-600 text-md transition-colors text-white px-4 py-6 rounded-xl cursor-pointer flex items-center gap-2"
          >
            <Trash width={18} />
            Delete Client
          </Button>
          <a
            href={`mailto:${client.email}`}
            className="bg-blue-500 hover:bg-blue-600 text-md transition-colors text-white px-4 py-3 rounded-xl cursor-pointer flex items-center gap-2"
          >
            <Send width={18} />
            Contact Client
          </a>
        </footer>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ClientAlert;

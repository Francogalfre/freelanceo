import React, { useState } from "react";

import { Mail, Phone, MapPin, Trash, X, Send, CheckCircle2 } from "lucide-react";

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
import { toast } from "sonner";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  client: Client;
};

const ClientAlert = ({ isOpen, setIsOpen, client }: Props) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const handleDelete = async (id: number) => {
    try {
      setIsDeleting(true);
      await deleteClient(id);
      setIsOpen(false);
    } catch (error) {
      console.error("Error deleting client:", error);
    } finally {
      setIsDeleting(false);
      toast.success("Client deleted successfully", {
        description: "The client has been deleted successfully.",
        icon: <CheckCircle2 className="h-5 w-5" />,
        duration: 4000,
        style: { backgroundColor: "#22c55e", border: "1px solid #22c55e", color: "white" },
      });
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen} defaultOpen={isOpen}>
      <AlertDialogContent className="flex flex-col gap-6 justify-between items-end sm:max-w-4xl p-8 bg-white border-none">
        <header className="w-full flex justify-between items-start border-b-1 border-gray-200 pb-8 mb-4">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex gap-6 justify-center items-center text-start w-full">
              <p className="bg-blue-500/20 text-blue-500 w-18 h-18 flex items-center justify-center text-2xl font-semibold rounded-full">
                {client.name.split("")[0].toUpperCase()}
              </p>
              <div>
                <p className="text-3xl font-semibold">{client.name}</p>
                <p className="font-medium text-gray-500">{client.company ? client.company : "No Company provided"}</p>
              </div>
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogCancel className="border-none shadow-none hover:bg-transparent flex justify-end items-center">
            <p className="cursor-pointer">
              <X className="size-5" />
            </p>
          </AlertDialogCancel>
        </header>

        <div className="grid grid-cols-3 gap-8 border-b-1 border-gray-200 pb-8 w-full">
          <div>
            <span className="text-lg text-gray-600">Contact Information</span>
            <div className="flex flex-col gap-4 pt-4">
              <p className=" flex items-center gap-2 text-lg">
                <Mail className="size-5" /> {client.email}
              </p>
              <p className=" flex items-center gap-2 text-lg">
                <Phone className="size-5" /> {client.phone ? client.phone : "No phone number provided"}
              </p>
              <p className=" flex items-center gap-2 text-lg">
                <MapPin className="size-5" /> {client.location ? client.location : "No location provided"}
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <span className="text-lg text-gray-600 b-2">Notes About the Client:</span>
            <p className="text-xl pt-4 break-words whitespace-pre-wrap prose">
              {client.notes ? client.notes : "This client doesn't have notes"}
            </p>
          </div>
        </div>

        <footer className="flex gap-4 items-center">
          <Button
            disabled={isDeleting}
            onClick={() => handleDelete(client.id)}
            className="bg-red-500 hover:bg-red-600 text-md transition-colors text-white px-4 py-6 rounded-xl cursor-pointer flex items-center gap-2"
          >
            <Trash width={18} />
            {isDeleting ? "Deleting..." : "Delete Client"}
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

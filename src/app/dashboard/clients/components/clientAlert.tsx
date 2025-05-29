import React, { useState } from "react";

import { Mail, Phone, MapPin, Trash, X, Send } from "lucide-react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import type { Client } from "@/utils/types";

import { deleteClient } from "../action";

import toast from "react-hot-toast";

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
      const result = await deleteClient(id);

      if (result.success) {
        setIsOpen(false);
        toast.success("Client deleted successfully", {
          duration: 4000,
          style: { backgroundColor: "#22c55e", border: "1px solid #22c55e", color: "white", borderRadius: "12px" },
        });
      } else {
        toast.error(result.message, {
          duration: 4000,
          style: { backgroundColor: "#ff0301", border: "1px solid red", color: "white", borderRadius: "12px" },
        });
      }
    } catch (error) {
      console.error("Error deleting client:", error);
      toast.error("Error deleting client", {
        duration: 4000,
        style: { backgroundColor: "#ff0301", border: "1px solid red", color: "white", borderRadius: "12px" },
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen} defaultOpen={isOpen}>
      <AlertDialogContent className="flex flex-col gap-6 justify-between items-end p-6 sm:p-8 bg-white border-none max-w-full sm:max-w-4xl sm:mx-auto rounded-lg">
        <header className="w-full flex justify-between items-start border-b border-gray-200 pb-6 mb-4">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex gap-4 sm:gap-6 justify-start items-center w-full">
              <p className="bg-blue-500/20 text-blue-500 w-14 h-14 sm:w-18 sm:h-18 flex items-center justify-center text-xl sm:text-2xl font-semibold rounded-full">
                {client.name[0].toUpperCase()}
              </p>
              <div className="flex flex-col items-start">
                <p className="text-xl sm:text-3xl font-semibold truncate max-w-xs sm:max-w-full">{client.name}</p>
                <p className="font-medium text-gray-500 text-sm sm:text-base truncate max-w-xs sm:max-w-full">
                  {client.company ?? "No Company provided"}
                </p>
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-500 self-start mt-2 text-base">
              Here you can view all the information about your client, including contact details and notes.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogCancel className="border-none shadow-none hover:bg-transparent flex justify-end items-center">
            <p className="cursor-pointer">
              <X className="size-5" />
            </p>
          </AlertDialogCancel>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-200 pb-6 w-full">
          <div>
            <span className="text-lg text-gray-600 block mb-2">Contact Information</span>
            <div className="flex flex-col gap-4 pt-2">
              <p className="flex items-center gap-2 text-base sm:text-lg break-words">
                <Mail className="size-5" /> {client.email}
              </p>
              <p className="flex items-center gap-2 text-base sm:text-lg break-words">
                <Phone className="size-5" /> {client.phone ? client.phone : "No phone number provided"}
              </p>
              <p className="flex items-center gap-2 text-base sm:text-lg break-words">
                <MapPin className="size-5" /> {client.location ? client.location : "No location provided"}
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <span className="text-lg text-gray-600 block mb-2">Notes About the Client:</span>
            <p className="text-base sm:text-xl pt-2 break-words whitespace-pre-wrap prose max-w-full">
              {client.notes ?? "This client doesn't have notes"}
            </p>
          </div>
        </div>

        <AlertDialogFooter className="flex flex-col sm:flex-row gap-4 items-center w-full pt-4">
          <Button
            disabled={isDeleting}
            onClick={() => handleDelete(client.id)}
            className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-md transition-colors text-white px-4 py-6 rounded-xl cursor-pointer flex items-center justify-center gap-2"
          >
            <Trash width={18} />
            {isDeleting ? "Deleting..." : "Delete Client"}
          </Button>
          <a
            href={`mailto:${client.email}`}
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-md transition-colors text-white px-4 py-3 rounded-xl cursor-pointer flex items-center justify-center gap-2"
          >
            <Send width={18} />
            Contact Client
          </a>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ClientAlert;

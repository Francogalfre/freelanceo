import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Link from "next/link";

import type { Client } from "@/utils/types";

const SelectClient = ({ clients }: { clients: Client[] }) => {
  return (
    <Select required name="client">
      <SelectTrigger className="w-full h-12 py-6">
        <SelectValue placeholder="Select a client" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Your Clients</SelectLabel>
          {clients.length > 0 ? (
            clients.map((client: Client) => (
              <SelectItem
                className="hover:bg-gray-100 transition-colors"
                key={client.id}
                id="client"
                value={client.id.toString()}
              >
                {client.name}{" "}
                <span className="text-gray-500">
                  {client.company ? `(${client.company})` : "(No company provided)"}
                </span>
              </SelectItem>
            ))
          ) : (
            <>
              <SelectItem value="null" disabled>
                No Clients Found
              </SelectItem>
              <Link
                href="/dashboard/clients"
                className="w-full text-sm text-blue-600 rounded-lg pl-2 font-medium hover:underline hover:text-blue-700 transition-all"
              >
                Add a new Client
              </Link>
            </>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectClient;

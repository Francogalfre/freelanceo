import React from "react";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClientsDashboardPage = () => {
  return (
    <div className="w-full">
      <section className="w-full flex justify-between items-center mb-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-gray-900">Clients Dashboard</h1>
          <p className="text-gray-500 text-lg">Manage and track all your clients contacts</p>
        </div>
        <Button className="text-md py-6 bg-blue-600 hover:bg-blue-700 cursor-pointer">
          Create New Project
          <Plus className="size-5" />
        </Button>
      </section>
      <section className="mx-auto bg-white rounded-xl p-8 border border-gray-200 text-center">
        <p className="text-gray-500 text-lg">No contacts found. Click "Create New Project" to get started.</p>
      </section>
    </div>
  );
};

export default ClientsDashboardPage;

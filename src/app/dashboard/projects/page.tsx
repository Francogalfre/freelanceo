import React from "react";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const ProjectsDashboardPage = () => {
  return (
    <div className="w-full">
      <section className="w-full flex justify-between items-center mb-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-gray-900">Projects Dashboard</h1>
          <p className="text-gray-500 text-lg">Manage and track all your ongoing and completed projects</p>
        </div>
        <Drawer>
          <DrawerTrigger>
            <Button className="text-[17px] py-7 bg-blue-600 hover:bg-blue-700 cursor-pointer">
              Create New Project
              <Plus className="size-5" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="justify-start text-start py-6 px-24 h-screen">
            <DrawerHeader>
              <DrawerTitle className="text-3xl font-semibold">Let's Add a new Project</DrawerTitle>
              <DrawerDescription className="text-lg">Put your Project Information</DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </section>
      <section className="mx-auto bg-white rounded-xl p-8 border border-gray-200 text-center">
        <p className="text-gray-500 text-lg">No projects found. Click "Create New Project" to get started.</p>
      </section>
    </div>
  );
};

export default ProjectsDashboardPage;

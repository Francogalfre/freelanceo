import React from "react";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
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
        <Drawer direction="left">
          <DrawerTrigger className="text-md py-4 px-6 bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer text-white flex gap-2 items-center rounded-lg">
            Create New Project
            <Plus className="size-5" />
          </DrawerTrigger>
          <DrawerContent className="justify-start items-start text-start h-screen">
            <DrawerHeader>
              <DrawerTitle className="text-3xl font-semibold pt-4">Let's Add a new Project</DrawerTitle>
              <DrawerDescription className="text-lg">Put your Project Information</DrawerDescription>
            </DrawerHeader>
            <form className="w-[750px] flex flex-col gap-6 px-4">
              <div className="grid gap-3 text-start">
                <Label>Project Title</Label>
                <Input id="email" type="email" placeholder="m@example.com" required className="h-12" />
              </div>
              <div className="grid gap-3 text-start">
                <Label>Project Description</Label>
                <Input id="email" type="email" placeholder="m@example.com" required className="h-12" />
              </div>
            </form>
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

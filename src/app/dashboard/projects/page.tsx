"use client";
import { Plus } from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import ProjectsForm from "../components/projectsForm";

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
            <ProjectsForm />
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

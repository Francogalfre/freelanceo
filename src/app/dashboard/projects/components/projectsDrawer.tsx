import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Plus } from "lucide-react";

import ProjectsForm from "./projectsForm";

const ProjectsDrawer = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="text-md py-4 px-6 bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer text-white flex gap-2 items-center rounded-lg">
        Create New Project
        <Plus className="size-5" />
      </DrawerTrigger>
      <DrawerContent className="px-2 justify-start items-start text-start h-screen">
        <DrawerHeader>
          <DrawerTitle className="text-3xl font-semibold pt-4">Let's Add a new Project</DrawerTitle>
          <DrawerDescription className="text-lg">Put your Project Information</DrawerDescription>
        </DrawerHeader>
        <ProjectsForm />
      </DrawerContent>
    </Drawer>
  );
};

export default ProjectsDrawer;

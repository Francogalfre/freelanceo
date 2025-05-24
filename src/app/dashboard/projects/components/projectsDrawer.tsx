import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { MoveLeft, Plus } from "lucide-react";

import ProjectsForm from "./projectsForm";

import { getClients } from "../../clients/action";

const ProjectsDrawer = async () => {
  const clients = await getClients();

  return (
    <Drawer direction="left">
      <DrawerTrigger className="text-sm md:text-md py-4 px-6 bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer text-white flex gap-2 items-center rounded-lg">
        Create a New Project
        <Plus className="size-5" />
      </DrawerTrigger>

      <DrawerContent className="w-full h-full sm:max-w-lg sm:h-full sm:rounded-none p-6 flex flex-col justify-start items-start text-start overflow-y-auto">
        <DrawerHeader className="pb-2 w-full">
          <DrawerClose>
            <MoveLeft className="cursor-pointer" />
          </DrawerClose>
          <DrawerTitle className="text-xl md:text-3xl font-semibold pt-4 w-full">
            Let's Create a new Project
          </DrawerTitle>
          <DrawerDescription className="text-sm md:text-lg w-full">
            Enter the details of your new Project. Click create project when you're done.
          </DrawerDescription>
        </DrawerHeader>

        <div className="w-full flex-1">
          <ProjectsForm clients={clients} />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProjectsDrawer;

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

import { reachedMaxProjects } from "@/utils/isSubscribed";
import { getSessionOrThrow } from "@/utils/authSession";

const ProjectsDrawer = async () => {
  const clients = await getClients();
  const user = await getSessionOrThrow();

  const hasReachedMaxProjects = await reachedMaxProjects(user.user.id);

  return (
    <Drawer direction="left">
      <div className="flex flex-col items-start justify-end">
        <DrawerTrigger
          disabled={hasReachedMaxProjects}
          className={`text-sm md:text-md py-4 px-6 bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer text-white flex gap-2 items-center rounded-lg w-fit self-start md:self-end
            ${hasReachedMaxProjects ? "cursor-not-allowed opacity-50 hover:cursor-not-allowed" : ""}`}
        >
          Create a New Project
          <Plus className="size-5" />
        </DrawerTrigger>
        {hasReachedMaxProjects && (
          <div className="text-red-500 text-sm md:text-md pt-4 transition-colors cursor-not-allowed flex gap-2 items-center rounded-lg self-end">
            You have reached the maximum number of projects allowed.
          </div>
        )}
      </div>

      <DrawerContent className="w-full h-full sm:max-w-lg sm:h-full sm:rounded-none p-6 flex flex-col justify-start items-start text-start overflow-y-auto">
        <DrawerHeader className="pb-2 w-full">
          <DrawerClose>
            <MoveLeft className="cursor-pointer" />
          </DrawerClose>
          <DrawerTitle className="text-xl md:text-3xl font-semibold pt-4 w-full">
            Let&apos;s Create a new Project
          </DrawerTitle>
          <DrawerDescription className="text-sm md:text-lg w-full">
            Enter the details of your new Project. Click create project when you&apos;re done.
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

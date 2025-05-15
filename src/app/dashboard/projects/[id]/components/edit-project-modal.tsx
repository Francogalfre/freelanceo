import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Edit2, X } from "lucide-react";

import EditProjectForm from "./edit-project-form";

import { Project } from "@/utils/types";

const EditProjectModal = ({ isLoading, project }: { isLoading: boolean; project: Project }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        disabled={isLoading}
        className={`${
          isLoading ? "cursor-none bg-blue-300 hover:bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
        }   text-md transition-colors text-white px-4 py-3 rounded-xl cursor-pointer flex items-center gap-2`}
      >
        <Edit2 width={18} />
        Edit Project
      </AlertDialogTrigger>

      <AlertDialogContent>
        <div className="relative">
          <AlertDialogHeader>
            <AlertDialogTitle>Edit Project Details</AlertDialogTitle>
          </AlertDialogHeader>

          <AlertDialogCancel className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-lg font-bold p-2 leading-none cursor-pointer">
            <X />
          </AlertDialogCancel>
          <AlertDialogDescription className="text-sm text-gray-500">
            Modify the project details. Make sure to save your changes.
          </AlertDialogDescription>
          <div className="mt-4">
            <EditProjectForm project={project} />
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditProjectModal;

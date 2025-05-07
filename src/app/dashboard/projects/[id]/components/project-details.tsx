import React from "react";

import { BoxIcon, CircleUser, ClockAlert, Edit2, FileClock, Trash, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Client, Project } from "@/utils/types";

type Props = {
  project: Project;
  client: Client[];
  formattedDate: (date: Date) => string;
};

const ProjectDetails = async ({ project, client, formattedDate }: Props) => {
  return (
    <div className=" bg-white p-6 rounded-xl border-1 border-blue-100/50">
      <div className="pb-8">
        <h3 className="text-md text-gray-500 pb-4">Project Details:</h3>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="flex items-center gap-4">
              <CircleUser className="text-gray-500" />
              <p className="flex flex-col">
                <span className="text-gray-500">Client:</span>
                <span className="text-lg font-medium">{client[0].name}</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <ClockAlert className="text-gray-500" />
              <p className="flex flex-col">
                <span className="text-gray-500">Deadline:</span>
                <span className="text-lg font-medium">{formattedDate(project.deadline)}</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <BoxIcon className="text-gray-500" />
              <p className="flex flex-col">
                <span className="text-gray-500">Status:</span>
                <span className="text-lg font-medium">
                  {project.status === "progress" ? "In Progress" : project.status}
                </span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex items-center gap-4">
              <Wallet className="text-gray-500" />
              <p className="flex flex-col">
                <span className="text-gray-500">Earnings</span>
                <span className="text-lg font-medium">${project.earnings ? project.earnings : "0"}</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FileClock className="text-gray-500" />
              <p className="flex flex-col">
                <span className="text-gray-500">Created At:</span>
                <span className="text-lg font-medium">{formattedDate(project.createdAt)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-8">
        <h3 className="text-md text-gray-500 pb-4">Project Description:</h3>
        <p className="text-lg w-full break-words whitespace-pre-wrap pr-2">{project.description}</p>
      </div>
      <hr />
      <div className="flex items-center justify-end gap-4 pt-6">
        <Button className="bg-blue-500 hover:bg-blue-600 text-md transition-colors text-white px-4 py-6 rounded-xl cursor-pointer flex items-center gap-2">
          <Edit2 width={18} />
          Edit Project
        </Button>
        <Button className="bg-red-500 hover:bg-red-600 text-md transition-colors text-white px-4 py-6 rounded-xl cursor-pointer flex items-center gap-2">
          <Trash width={18} />
          Delete Project
        </Button>
      </div>
    </div>
  );
};

export default ProjectDetails;

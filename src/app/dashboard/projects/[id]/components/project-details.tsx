import React from "react";

import { BoxIcon, CircleUser, ClockAlert, FileClock, Wallet } from "lucide-react";

import { Client, Project } from "@/utils/types";

import ProjectDetailsButtons from "./project-details-buttons";

type Props = {
  project: Project;
  client: Client[];
  formattedDate: (date: Date) => string;
};

const ProjectDetails = async ({ project, client, formattedDate }: Props) => {
  return (
    <div className="bg-white p-6 rounded-xl border-1 border-blue-100/50 w-full max-w-fuill overflow-x-hidden">
      <div className="pb-8">
        <h3 className="text-md text-gray-500 pb-4">Project Details:</h3>
        <div className="flex flex-row sm:flex-col gap-6">
          <div className="grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 gap-4 sm:gap-2">
            <div className="flex items-center gap-4">
              <CircleUser className="text-gray-500" />
              <p className="flex flex-col">
                <span className="text-gray-500">Client:</span>
                <span className="text-md sm:text-lg font-medium">{client[0].name}</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <ClockAlert className="text-gray-500" />
              <p className="flex flex-col">
                <span className="text-gray-500">Deadline:</span>
                <span className="text-md sm:text-lg font-medium">{formattedDate(project.deadline)}</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <BoxIcon className="text-gray-500" />
              <p className="flex flex-col">
                <span className="text-gray-500">Status:</span>
                <span className="text-md sm:text-lg font-medium">
                  {{ progress: "In Progress", finished: "Finished", delayed: "You are delayed" }[project.status]}
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 gap-4 sm:gap-2">
            <div className="flex items-center gap-4">
              <Wallet className="text-gray-500" />
              <p className="flex flex-col">
                <span className="text-gray-500">Earnings</span>
                <span className="text-md sm:text-lg font-medium">
                  {project.earnings ? `$ ${project.earnings}` : "Free"}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FileClock className="text-gray-500" />
              <p className="flex flex-col">
                <span className="text-gray-500">Created At:</span>
                <span className="text-md sm:text-lg font-medium">{formattedDate(project.createdAt)}</span>
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
      <ProjectDetailsButtons project={project} />
    </div>
  );
};

export default ProjectDetails;

import React from "react";

import { getClientById } from "../../clients/action";
import type { Project } from "@/utils/types";

import { ClockAlert, Clock, Wallet } from "lucide-react";

import Link from "next/link";

const ProjectCard = async ({ project }: { project: Project }) => {
  const clientArray = await getClientById(project.clientId);
  const client = clientArray[0];

  const isDelayed = project.deadline < new Date();

  if (isDelayed) {
    project.status = "delayed";
  }

  return (
    <div
      key={project.id}
      className="bg-white border-1 border-blue-100/50 p-4 rounded-lg gap-4 sm:gap-6 flex flex-col justify-between"
    >
      <div className="flex flex-col 2xl:flex-row 2xl:items-center gap-4 justify-between">
        <div className="flex flex-col gap-1 2xl:gap-2 max-w-[calc(100%-100px)]">
          <h2 className="text-xl font-semibold truncate">{project.title}</h2>
          <Link
            href={"/dashboard/clients"}
            className="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors truncate"
          >
            {client?.name}
          </Link>
        </div>
        <span
          className={`capitalize self-start 2xl:self-center whitespace-nowrap ${
            project.status == "progress" ? "bg-yellow-400" : project.status === "delayed" ? "bg-red-400" : "bg-blue-400"
          } text-white text-sm font-medium px-3 py-1 rounded-full`}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-medium">Project Description:</h2>
        <p className="text-gray-600 line-clamp-2 break-words whitespace-pre-wrap prose">
          {project.description ? `${project.description.slice(0, 250)}...` : "This project doesn't have description"}
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 2xl:gap-10">
        <div
          className={`flex flex-col 2xl:flex-row items-center gap-1 xl:gap-2 p-3 xl:p-0 rounded-md ${project.status === "delayed" ? "text-red-500 xl:bg-transparent bg-red-100/30" : "xl:bg-transparent bg-gray-100/50"}`}
        >
          {isDelayed ? <ClockAlert className="w-7 h-7 xl:w-6 xl:h-6" /> : <Clock className="w-7 h-7 xl:w-6 xl:h-6" />}
          <div className="flex flex-col 2xl:flex-row text-center xl:text-left">
            <span className="text-sm font-medium 2xl:text-base 2xl:pr-1">Deadline:</span>
            <span className="text-xs xl:text-base">{project.deadline.toLocaleDateString()}</span>
          </div>
        </div>

        <div className="flex flex-col 2xl:flex-row items-center gap-1 xl:gap-2 p-3 xl:p-0 rounded-md xl:bg-transparent bg-gray-100/50">
          <Wallet className="w-7 h-7 xl:w-5 xl:h-5" />
          <div className="flex flex-col 2xl:flex-row text-center xl:text-left">
            <span className="text-sm font-medium 2xl:text-base 2xl:pr-1">Earnings:</span>
            <span className="text-xs xl:text-base">${project.earnings ? project.earnings : "0"}</span>
          </div>
        </div>
      </div>

      <a
        href={`/dashboard/projects/${project.id}`}
        className="bg-blue-500 hover:bg-blue-600 text-md transition-colors text-white px-4 py-3 text-center rounded-xl cursor-pointer w-full sm:w-auto"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;

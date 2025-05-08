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
      className="bg-white border-1 border-blue-100/50 p-4 rounded-lg gap-6 flex flex-col justify-between"
    >
      <div className="flex items-center gap-4 justify-between">
        <div>
          <h2 className="text-xl font-semibold pb-1">{project.title}</h2>
          <Link
            href={"/dashboard/clients"}
            className="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
          >
            {client?.name}
          </Link>
        </div>
        <span
          className={`capitalize ${
            project.status == "progress" ? "bg-yellow-400" : project.status === "delayed" ? "bg-red-400" : "bg-blue-400"
          }  text-white text-sm font-medium px-3 py-1 rounded-full`}
        >
          {project.status}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h2>Project Description:</h2>
        <p className="text-gray-600 line-clamp-2 break-words whitespace-pre-wrap prose">
          {project.description ? `${project.description.slice(0, 250)}...` : "This project doesn't have description"}
        </p>
      </div>
      <div className="flex items-center gap-10">
        <span className={`flex items-center gap-2 ${project.status === "delayed" ? "text-red-500" : ""}`}>
          {isDelayed ? <ClockAlert size={20} /> : <Clock size={20} />} Deadline: {project.deadline.toLocaleDateString()}
        </span>
        <span className="flex items-center gap-2">
          <Wallet size={20} />
          Earnings: ${project.earnings ? project.earnings : "0"}
        </span>
      </div>
      <a
        href={`/dashboard/projects/${project.id}`}
        className="bg-blue-500 hover:bg-blue-600 text-md transition-colors text-white px-4 py-3 text-center align-center rounded-xl cursor-pointer"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;

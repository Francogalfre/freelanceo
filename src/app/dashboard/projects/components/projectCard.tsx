import React from "react";

import type { Project } from "@/utils/types";
import { getClients } from "../../clients/action";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const ProjectCard = async ({ project }: { project: Project }) => {
  const clients = await getClients();
  const client = clients.find((client) => client.id === project.clientId);

  return (
    <div
      key={project.id}
      className="bg-gray-50 border-1 border-blue-100 p-4 rounded-lg gap-4 flex flex-col justify-between"
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
            project.status == "progress"
              ? "bg-yellow-300"
              : project.status === "delivered"
              ? "bg-green-300"
              : "bg-red-300"
          } text-gray-900 text-sm font-medium px-3 py-1 rounded-full`}
        >
          {project.status}
        </span>
      </div>
      <p className="text-gray-600 mt-2 line-clamp-2 break-words whitespace-pre-wrap prose">
        {project.description ? `${project.description.slice(0, 250)}...` : "This project doesn't have description"}
      </p>
      <div className="flex items-center gap-10">
        <span>Deadline: {project.deadline.toLocaleDateString()}</span>
        <span>Earnings: ${project.earnings}</span>
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

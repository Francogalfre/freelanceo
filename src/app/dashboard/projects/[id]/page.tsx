import React from "react";

import { getProjectById } from "../actions";
import { getClientById } from "../../clients/action";

import { ChartNoAxesGantt, CircleUser, ClockAlert, BoxIcon, Wallet, FileLock } from "lucide-react";

const ProjectDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const projectArray = await getProjectById(id);
  const project = projectArray[0];

  const client = await getClientById(project.clientId);

  const formattedDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="">
      <header className="relative w-full mb-5 from-blue-400 to-blue-600 bg-gradient-to-br h-48 rounded-xl flex justify-between items-end p-6">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-white/30">
            <ChartNoAxesGantt className="size-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-white/80">Project Details</span>
            <h2 className="text-white text-2xl font-semibold">{project.title}</h2>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <span className="text-white/80">Created At</span>
            <h2 className="text-white text-2xl font-semibold">{formattedDate(project.createdAt)}</h2>
          </div>
          <div className="flex flex-col">
            <span className="text-white/80">Deadline</span>
            <h2 className="text-white text-2xl font-semibold">{formattedDate(project.deadline)}</h2>
          </div>
        </div>
      </header>
      <section className="flex w-full gap-4">
        <div className="flex-1/2 bg-white p-6 rounded-xl border-1 border-blue-100">
          <div className="pb-4">
            <h3 className="text-md text-gray-500 pb-4">Project Details:</h3>
            <div>
              <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <CircleUser className="text-gray-500" />
                  <p className="flex flex-col">
                    <span className="text-gray-500">Client:</span>
                    <span className="text-lg font-medium">{client[0].name}</span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <CircleUser className="text-gray-500" />
                  <p className="flex flex-col">
                    <span className="text-gray-500">Client:</span>
                    <span className="text-lg font-medium">{client[0].name}</span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <CircleUser className="text-gray-500" />
                  <p className="flex flex-col">
                    <span className="text-gray-500">Client:</span>
                    <span className="text-lg font-medium">{client[0].name}</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <CircleUser className="text-gray-500" />
                  <p className="flex flex-col">
                    <span className="text-gray-500">Client:</span>
                    <span className="text-lg font-medium">{client[0].name}</span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <CircleUser className="text-gray-500" />
                  <p className="flex flex-col">
                    <span className="text-gray-500">Client:</span>
                    <span className="text-lg font-medium">{client[0].name}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="" />
          <div>
            <h3 className="text-md text-gray-500 py-4">Project Description:</h3>
            <p className="text-lg prose">{project.description}</p>
          </div>
        </div>
        <div className="flex-1/2">
          <h3 className="text-md text-gray-500 pb-4">Project Description:</h3>
          <p className="text-lg prose">{project.description}</p>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;

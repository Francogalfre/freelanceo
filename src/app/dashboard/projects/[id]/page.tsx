import React from "react";

import { getProjectById } from "../actions";
import { getClientById } from "../../clients/action";

import { ChartNoAxesGantt, ArrowLeft } from "lucide-react";

import ProjectDetailsCard from "./components/project-details";
import ClientDetailsCard from "./components/client-details";
import ProjectTasksCard from "./components/tasks/project-tasks";
import ProjectProgress from "./components/progress/project-progress";

import { Toaster } from "sonner";
import Link from "next/link";

const ProjectDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

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
    <main>
      <header className="relative w-full mb-5 from-blue-400 to-blue-600 bg-gradient-to-br h-48 rounded-xl flex justify-between items-end p-6">
        <div className="h-full flex flex-col justify-between align-baseline">
          <Link
            href={"/dashboard/projects"}
            className="flex size-10 items-center justify-center rounded-full bg-white/30"
          >
            <ArrowLeft className="size-4 text-white" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-white/30">
              <ChartNoAxesGantt className="size-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white/80">Project Details</span>
              <h2 className="text-white text-2xl font-semibold">{project.title}</h2>
            </div>
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

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2">
          <ProjectDetailsCard project={project} client={client} formattedDate={formattedDate} />
          <ProjectTasksCard projectId={project.id} />
        </div>

        <div className="col-span-1 space-y-6">
          <ClientDetailsCard client={client} />
          <ProjectProgress project={project} />
        </div>
      </section>

      <Toaster />
    </main>
  );
};

export default ProjectDetails;

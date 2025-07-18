import React from "react";

import { getProjectById } from "../actions";
import { getClientById } from "../../clients/action";

import { ChartNoAxesGantt, ArrowLeft } from "lucide-react";

import ProjectDetailsCard from "./components/project-details";
import ClientDetailsCard from "./components/client-details";
import ProjectTasksCard from "./components/tasks/project-tasks";
import ProjectProgress from "./components/progress/project-progress";

import Image from "next/image";
import Link from "next/link";

import Topographic from "@/public/resources/topographic-background.webp";

const ProjectDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const projectArray = await getProjectById(id);

  const project = projectArray[0];
  const client = await getClientById(project?.clientId);

  const formattedDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const now = new Date();
  const updatedProject = {
    ...project,
    status: project.status === "finished" ? "finished" : new Date(project.deadline) < now ? "delayed" : project.status,
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="w-full pb-6">
      <header className="relative w-full mb-5 from-blue-400 to-blue-600 bg-gradient-to-br h-64 lg:h-48 rounded-xl flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-end p-6 ">
        <Image
          src={Topographic.src}
          alt="Topographic effect for background"
          width={Topographic.width}
          height={Topographic.height}
          priority
          className="absolute h-full w-full top-0 right-0 object-cover rotate-180 z-0 brightness-150 opacity-70"
        />

        <div className="h-full flex flex-col justify-between align-baseline">
          <Link
            href={"/dashboard/projects"}
            className="flex size-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/20 hover:scale-105 transition-all z-20"
          >
            <ArrowLeft className="size-4 text-white" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex size-10 sm:size-12 items-center justify-center rounded-full bg-white/30">
              <ChartNoAxesGantt className="size-5 sm:size-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-sm sm:text-base">Project Details</span>
              <h2 className="text-white text-xl sm:text-2xl font-semibold">{project.title}</h2>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <span className="text-white/80 text-sm sm:text-base">Created At</span>
            <h2 className="text-white text-gl sm:text-2xl font-semibold">{formattedDate(project.createdAt)}</h2>
          </div>
          <div className="flex flex-col">
            <span className="text-white/80 text-sm sm:text-base">Deadline</span>
            <h2 className="text-white text-lg sm:text-2xl font-semibold">{formattedDate(project.deadline)}</h2>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 2xl:grid-cols-3 gap-6 h-full w-full overflow-x-hidden">
        <div className="col-span-1 md:col-span-2 grid md:grid-rows-1 h-full">
          <ProjectDetailsCard project={updatedProject} client={client} formattedDate={formattedDate} />
          <ProjectTasksCard projectId={project.id} />
        </div>

        <div className="col-span-1 flex flex-col lg:flex-row 2xl:flex-col gap-6 h-full">
          <div className="w-full lg:w-1/2 2xl:w-full bg-white p-6 rounded-xl border border-blue-100/50 h-full max-h-[900px]">
            <ClientDetailsCard client={client} />
          </div>

          <div className="w-full lg:w-1/2 2xl:w-full bg-white p-6 rounded-xl border border-blue-100/50 h-full max-h-[600px]">
            <ProjectProgress project={project} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;

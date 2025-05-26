import ProjectsDrawer from "./components/projectsDrawer";
import ProjectsGrid from "./components/projectsGrid";

import { Toaster } from "@/components/ui/sonner";
import { getProjects } from "./actions";

import Filters from "./components/filters";

// TODO: Fix searchParams type
/* eslint-disable */

const ProjectsDashboardPage = async ({ searchParams }: any) => {
  const projects = await getProjects(searchParams?.status);

  return (
    <div className="w-full">
      <section className="w-full flex items-start flex-col md:flex-row justify-between md:items-center mb-12 gap-6 md:gap-0">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Projects Dashboard</h1>
          <p className="text-gray-500 text-md md:text-lg">Manage and track all your ongoing and completed projects</p>
          <Filters />
        </div>
        <ProjectsDrawer />
      </section>

      <ProjectsGrid projects={projects} />

      <Toaster />
    </div>
  );
};

export default ProjectsDashboardPage;

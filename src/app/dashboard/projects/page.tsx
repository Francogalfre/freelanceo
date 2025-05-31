import ProjectsDrawer from "./components/projectsDrawer";
import ProjectsGrid from "./components/projectsGrid";

import { getProjects } from "./actions";

import Filters from "./components/filters";
import { getClients } from "../clients/action";
import { getSessionOrThrow } from "@/utils/authSession";
import { reachedMaxProjects } from "@/utils/isSubscribed";

// TODO: Fix searchParams type
/* eslint-disable */

const ProjectsDashboardPage = async ({ searchParams }: any) => {
  const projects = await getProjects(searchParams?.status);
  const clients = await getClients();

  const user = await getSessionOrThrow();
  const hasReachedMaxProjects = (await reachedMaxProjects(user.user.id)) ?? false;

  return (
    <div className="w-full">
      <section className="w-full flex items-start flex-col md:flex-row justify-between md:items-center mb-12 gap-6 md:gap-0">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Projects Dashboard</h1>
          <p className="text-gray-500 text-md md:text-lg">Manage and track all your ongoing and completed projects</p>
          <Filters />
        </div>
        <ProjectsDrawer clients={clients} hasReachedMaxProjects={hasReachedMaxProjects} />
      </section>

      <ProjectsGrid projects={projects} />
    </div>
  );
};

export default ProjectsDashboardPage;

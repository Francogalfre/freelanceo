import ProjectsDrawer from "./components/projectsDrawer";
import ProjectsGrid from "./components/projectsGrid";

import { Toaster } from "@/components/ui/sonner";
import { getProjects } from "./actions";

const ProjectsDashboardPage = async () => {
  const projects = await getProjects();

  const updatedProjects = projects.map((project) => {
    const deadline = new Date(project.deadline);
    const now = new Date();

    return {
      ...project,
      status: project.status === "finished" ? "finished" : deadline < now ? "delayed" : project.status,
    };
  });

  return (
    <div className="w-full">
      <section className="w-full flex items-start flex-col md:flex-row justify-between md:items-center mb-12 gap-6 md:gap-0">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-gray-900">Projects Dashboard</h1>
          <p className="text-gray-500 text-lg">Manage and track all your ongoing and completed projects</p>
        </div>
        <ProjectsDrawer />
      </section>

      <ProjectsGrid projects={updatedProjects} />

      <Toaster />
    </div>
  );
};

export default ProjectsDashboardPage;

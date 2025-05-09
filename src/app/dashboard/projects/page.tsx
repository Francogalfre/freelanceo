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
      <section className="w-full flex justify-between items-center mb-12">
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

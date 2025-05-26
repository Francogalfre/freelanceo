import Image from "next/image";

import Illustration from "@/public/resources/IllustrationNoProjects.jpg";

import type { Project } from "@/utils/types";

import ProjectCard from "./projectCard";

const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="mx-auto">
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl p-8 border border-gray-200 text-center justify-center items-center flex flex-col gap-4">
          <Image
            src={Illustration.src}
            priority
            width={300}
            height={300}
            alt="Illustration of a sad person with an umbrella because it is raining"
          />
          <p className="text-gray-900 text-lg">
            No Projects found. Click <span className="text-blue-500">&quot;Create a New Project&quot;</span> to get
            started.
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectsGrid;

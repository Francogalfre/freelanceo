import Image from "next/image";

import Illustration from "@/public/resources/IllustrationNoProjects.svg";

const ProjectsGrid = () => {
  return (
    <section className="mx-auto">
      <div className="bg-white rounded-xl p-8 border border-gray-200 text-center justify-center items-center flex flex-col gap-4">
        <Image src={Illustration.src} width={300} height={300} alt="Illustration of a boy sad because it's raining" />
        <p className="text-gray-900 text-lg">
          No Projects found. Click <span className="text-blue-500">"Create New Project"</span> to get started.
        </p>
      </div>
    </section>
  );
};

export default ProjectsGrid;

import React from "react";
import Link from "next/link";

import { BoxIcon } from "lucide-react";
import { getProjects } from "@/app/dashboard/projects/actions";

const NextDeadline = async () => {
  const date = new Date();
  const projects = await getProjects();

  const nextProject = projects
    .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
    .find((project) => project.deadline >= date);

  return (
    <footer>
      <div className="bg-blue-600 rounded-xl p-6 shadow flex flex-col gap-4 text-white">
        <h2 className="text-2xl font-semibold mb-2">Your Next Deadline</h2>
        <div className="flex gap-3 w-full items-center">
          <BoxIcon className="bg-white/80 text-blue-600 p-2 size-10 rounded-full" />
          <div>
            <h2 className="text-lg font-semibold">{nextProject?.title ? nextProject.title : "You have no projects"}</h2>
            <p className="text-md">
              {nextProject?.deadline
                ? `Deadline: ${nextProject.deadline.toLocaleDateString()}`
                : "Add your first project"}
            </p>
          </div>
        </div>
        <Link
          href={nextProject ? `dashboard/projects/${nextProject?.id}` : "dashboard/projects"}
          className="mt-2 bg-white text-blue-600 rounded-xl px-4 py-3 font-medium text-center text-md hover:bg-blue-50 transition"
        >
          {nextProject ? "View Details" : "Create your first Project"}
        </Link>
      </div>
    </footer>
  );
};

export default NextDeadline;

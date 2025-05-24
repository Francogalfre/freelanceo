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
      <div className="bg-blue-600 rounded-xl p-4 sm:p-6 shadow flex flex-col gap-3 sm:gap-4 text-white">
        <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">Your Next Deadline</h2>
        <div className="flex gap-2 sm:gap-3 w-full items-center">
          <BoxIcon className="bg-white/80 text-blue-600 p-1.5 sm:p-2 size-8 sm:size-10 rounded-full" />
          <div>
            <h2 className="text-md md:text-lg font-medium md:font-semibold">
              {nextProject?.title || "You have no Next Project"}
            </h2>
            <p className="text-sm sm:text-md xl:text-lg hidden sm:block">
              {nextProject ? `Deadline: ${nextProject.deadline.toLocaleDateString()}` : "Add an upcoming project"}
            </p>
          </div>
        </div>
        <Link
          href={nextProject ? `dashboard/projects/${nextProject?.id}` : "dashboard/projects"}
          className="mt-1 sm:mt-2 bg-white text-blue-600 rounded-xl px-3 sm:px-4 py-2 sm:py-3 font-medium text-center text-sm sm:text-md hover:bg-blue-50 transition"
        >
          {nextProject ? "View Details" : "Create a new Project"}
        </Link>
      </div>
    </footer>
  );
};

export default NextDeadline;

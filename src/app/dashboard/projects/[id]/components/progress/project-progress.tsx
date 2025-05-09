import React from "react";

import ProgressChart from "./progress-chart";

import type { Project } from "@/utils/types";
import { getTasks } from "../../action";

type Props = {
  project: Project;
};

const ProjectProgress = async ({ project }: Props) => {
  const { tasks } = await getTasks(project.id.toString());

  return (
    <div className="bg-white rounded-xl h-full">
      <h3 className="text-md text-gray-500 pb-2">Project Progress:</h3>
      <ProgressChart tasks={tasks} />
      <div className="flex justify-center gap-6 items-center mt-4">
        <div className="flex items-center gap-2">
          <div className="size-3 bg-blue-600 rounded-full" />
          <p>Completed</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-3 bg-[#dddddd] rounded-full" />
          <p>Pending</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;

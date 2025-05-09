import React from "react";

import ProgressChart from "./progress-chart";

import type { Project } from "@/utils/types";
import { getTasks } from "../../action";

import { productivityTips } from "@/utils/tips";

type Props = {
  project: Project;
};

const getRandomTip = () => {
  const randomIndex = Math.floor(Math.random() * productivityTips.length);
  return productivityTips[randomIndex];
};

const ProjectProgress = async ({ project }: Props) => {
  const { tasks } = await getTasks(project.id.toString());

  const tip = getRandomTip();
  const Icon = tip.icon;

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
      <hr className="my-6" />
      {
        <div className="flex gap-4 items-center border-1 border-gray-300 rounded-xl p-4">
          <div>
            <Icon className="text-blue-600" />
          </div>
          <div>
            <h2 className="texte-md font-medium">{tip.title}</h2>
            <p className="text-md font-normal text-gray-500">{tip.description}</p>
          </div>
        </div>
      }
    </div>
  );
};

export default ProjectProgress;

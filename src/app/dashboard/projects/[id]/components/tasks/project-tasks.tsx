import React from "react";

import TasksForm from "./tasks-form";
import TasksCard from "./tasks-card";

import { getTasks } from "../../action";

import Illustration from "@/public/resources/IllustrationNoTasks.jpg";
import Image from "next/image";

const ProjectTasksCard = async ({ projectId }: { projectId: number }) => {
  const { tasks } = await getTasks(projectId.toString());

  return (
    <section className="pt-6 w-full max-w-fuill overflow-x-hidden">
      <div className="flex-2/3 bg-white p-6 rounded-xl border-1 border-blue-100/50">
        <div className="pb-6">
          <h3 className="text-md text-gray-500 pb-4">Project Tasks</h3>
          <TasksForm projectId={projectId} />
          <div className="flex flex-col gap-4 overflow-y-auto h-96 max-h-96 mt-4">
            {tasks.length > 0 ? (
              tasks.map((task) => <TasksCard key={task.id} task={task} />)
            ) : (
              <div className="w-full justify-center flex items-center h-96 flex-col">
                <Image
                  src={Illustration}
                  alt="Illustration of a boy sitting in a sofa listening to music"
                  height={300}
                />
                <h2 className="text-2xl font-semibold pb-2">No Tasks Yet</h2>
                <p className="text-gray-500 text-md">No tasks yet for this project.</p>
              </div>
            )}
          </div>
        </div>
        <hr />
        <p className="text-gray-500 pt-4">
          {tasks.filter((t) => t.isDone).length} of {tasks.length} completed
        </p>
      </div>
    </section>
  );
};

export default ProjectTasksCard;

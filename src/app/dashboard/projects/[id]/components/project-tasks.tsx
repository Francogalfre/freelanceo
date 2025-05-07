import React from "react";

import TasksForm from "./tasks/tasks-form";
import TasksCard from "./tasks/tasks-card";

import { getTasks } from "../action";

const ProjectTasksCard = async ({ projectId }: { projectId: number }) => {
  const { tasks } = await getTasks(projectId.toString());

  return (
    <section className="pt-6">
      <div className="flex-2/3 bg-white p-6 rounded-xl border-1 border-blue-100/50">
        <div className="pb-6">
          <h3 className="text-md text-gray-500 pb-4">Project Tasks</h3>
          <TasksForm projectId={projectId} />
          <div className="flex flex-col gap-4 overflow-y-auto max-h-96 mt-4">
            {tasks.length > 0 ? (
              tasks.map((task) => <TasksCard key={task.id} task={task} />)
            ) : (
              <p className="text-gray-500 text-sm">No tasks yet for this project.</p>
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

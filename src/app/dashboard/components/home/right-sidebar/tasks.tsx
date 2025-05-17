import React from "react";

import { getAllTasks } from "@/app/dashboard/projects/[id]/action";

import { Progress } from "@/components/ui/progress";

import { Smile, FrownIcon, MehIcon } from "lucide-react";

const Tasks = async () => {
  const { tasks } = await getAllTasks();

  const completedTasks = tasks.filter((task) => task.isDone == true);
  const percentage = tasks.length === 0 ? 0 : (completedTasks.length / tasks.length) * 100;

  const getStatusIcon = (percentage: number) => {
    if (percentage < 30) {
      return <FrownIcon className="bg-red-600 p-3 size-12 text-white rounded-full" />;
    } else if (percentage < 50) {
      return <MehIcon className="bg-yellow-500 p-3 size-12 text-white rounded-full" />;
    } else {
      return <Smile className="bg-blue-600 p-3 size-12 text-white rounded-full" />;
    }
  };

  const getProgressColorClass = (percentage: number) => {
    if (percentage < 30) {
      return "[&>div]:bg-red-600";
    } else if (percentage < 50) {
      return "[&>div]:bg-yellow-500";
    } else {
      return "[&>div]:bg-blue-600";
    }
  };

  return (
    <main className="min-h-[380px]">
      <h2 className="text-2xl font-semibold">
        Your Tasks <span className="text-lg font-medium text-gray-600">({tasks.length})</span>
      </h2>

      <div className="flex gap-3 items-center mt-6">
        {getStatusIcon(percentage)}
        <div className="flex-1">
          <p>
            <span className="text-2xl font-semibold">{percentage}%</span> Completed
          </p>
          <Progress
            className={`mt-2 h-2 rounded-full bg-gray-200 ${getProgressColorClass(
              percentage
            )} [&>div]:rounded-full transition-all duration-300`}
            value={percentage}
            max={tasks.length ? tasks.length : 100}
          />
        </div>
      </div>

      <ul className="flex flex-col gap-5 pt-6 max-h-[320px] h-full overflow-y-auto">
        {tasks.length > 0 ? (
          tasks.slice(0, 4).map((task) => (
            <li key={task.id} className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={task.isDone}
                disabled={true}
                className="peer h-6 w-6 appearance-none disabled:cursor-default rounded-full border border-slate-300 bg-white shadow transition-all duration-300 ease-in-out checked:bg-blue-600 checked:border-blue-600 checked:ring-2 checked:ring-offset-1 checked:ring-blue-400 hover:shadow-md disabled:opacity-60"
              />
              <div>
                <p className={`text-md ${task.isDone ? "text-gray-600" : ""}`}>{task.title}</p>
                <p className="text-sm text-gray-500">{task.createdAt.toDateString()}</p>
              </div>
            </li>
          ))
        ) : (
          <li className="flex items-center justify-center w-full h-full border-1 border-gray-400 rounded-xl text-center text-gray-500 text-md px-6">
            You don’t have tasks yet. <br /> Go to your projects and create one!
          </li>
        )}
        {tasks.length > 4 ? <span className="text-gray-500 relative bottom-2">More tasks available...</span> : ""}
      </ul>
    </main>
  );
};

export default Tasks;

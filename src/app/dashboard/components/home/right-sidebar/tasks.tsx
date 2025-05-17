import React from "react";

import { getAllTasks } from "@/app/dashboard/projects/[id]/action";

import { Progress } from "@/components/ui/progress";

import { Smile, FrownIcon, MehIcon, Check } from "lucide-react";

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

      <ul className="flex flex-col gap-3 pt-6 max-h-[300px] h-full">
        {tasks.length > 0 ? (
          tasks.slice(0, 3).map((task) => (
            <li
              key={task.id}
              className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
                task.isDone ? "bg-gray-50/50 opacity-75" : "hover:bg-gray-50"
              }`}
            >
              <div
                className={`flex items-center justify-center h-6 w-6 rounded-full border transition-all duration-300 ease-in-out ${
                  task.isDone
                    ? "bg-blue-600 border-blue-600"
                    : "border-slate-300 bg-white hover:border-blue-400 hover:bg-blue-50"
                }`}
              >
                {task.isDone && <Check className="h-4 w-4 text-white" />}
              </div>
              <div className="flex-1">
                <p className={`text-md font-medium ${task.isDone ? "text-gray-500 line-through" : "text-gray-700"}`}>
                  {task.title}
                </p>
                <p className={`text-sm ${task.isDone ? "text-gray-400" : "text-gray-500"}`}>
                  {task.createdAt.toDateString()}
                </p>
              </div>
            </li>
          ))
        ) : (
          <li className="flex items-center justify-center w-full h-full border-1 border-gray-400 rounded-xl text-center text-gray-500 text-md px-6">
            You don’t have tasks yet. <br /> Go to your projects and create one!
          </li>
        )}
      </ul>
    </main>
  );
};

export default Tasks;

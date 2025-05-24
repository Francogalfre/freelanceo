"use client";

import React, { useState } from "react";

import type { Task } from "@/utils/types";

import { deleteTask, updateTask } from "../../action";

import { Trash } from "lucide-react";

const TasksCard = ({ task }: { task: Task }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleDone = async () => {
    try {
      setIsLoading(true);
      await updateTask(task.id.toString(), task.projectId.toString(), !task.isDone);
      setIsLoading(false);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div
      className={`py-4 px-3 sm:px-6 rounded-xl border border-gray-100 flex items-center gap-4 justify-between transition-all duration-300 ease-in-out hover:bg-gray-200/30 ${
        task.isDone ? "bg-gray-100 opacity-70 line-through" : "bg-gray-50"
      }`}
    >
      <div className="flex items-center gap-4 min-w-0">
        <div className="relative flex-shrink-0">
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={handleToggleDone}
            disabled={isLoading}
            className="peer h-5 w-5 sm:h-6 sm:w-6 appearance-none rounded-full border border-slate-300 bg-white shadow transition-all duration-300 ease-in-out cursor-pointer checked:bg-blue-600 checked:border-blue-600 checked:ring-2 checked:ring-offset-1 checked:ring-blue-400 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
          />
          {isLoading && (
            <div className="absolute inset-0 bottom-1 flex items-center justify-center">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-t-transparent border-blue-600" />
            </div>
          )}
        </div>

        <div className="min-w-0 max-w-[calc(100vw-100px)]">
          <p
            className={`text-sm sm:text-base font-medium break-words ${task.isDone ? "line-through text-gray-500" : ""}`}
          >
            {task.title}
          </p>
          <p className="text-sm text-gray-500">Creado el {new Date(task.createdAt).toLocaleDateString()}</p>
        </div>
      </div>

      <button
        onClick={() => {
          deleteTask(task.projectId.toString(), task.id.toString());
        }}
        className="bg-blue-500/30 text-blue-700 p-3 rounded-full cursor-pointer hover:bg-blue-500/50 transition-all duration-200 flex-shrink-0"
      >
        <Trash className="size-4" />
      </button>
    </div>
  );
};

export default TasksCard;

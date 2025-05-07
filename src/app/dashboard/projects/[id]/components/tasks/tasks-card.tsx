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
    <div className="py-4 px-6 bg-gray-50 rounded-xl border-1 border-gray-100 flex items-center gap-4 justify-between">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={handleToggleDone}
          disabled={isLoading}
          className="w-5 h-5 rounded-full border-2 border-gray-400
               peer-checked:border-green-500 peer-checked:bg-green-500
               transition-colors duration-200"
        />
        <div>
          <p className={`font-medium ${task.isDone == true ? "line-through" : ""}`}>{task.title}</p>
          <p className="text-sm text-gray-500">Creado el {new Date(task.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
      <button
        onClick={() => {
          deleteTask(task.projectId.toString(), task.id.toString());
        }}
        className="bg-blue-500/30 text-blue-700 p-3 rounded-full cursor-pointer hover:bg-blue-500/50 transition-all duration-200"
      >
        <Trash className="size-4" />
      </button>
    </div>
  );
};

export default TasksCard;

"use client";

import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

import { createTask } from "../../action";

type FormErrors = {
  [key: string]: string;
};

const TasksForm = ({ projectId }: { projectId: number }) => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    const newTask = formData.get("task");
    const taskProjectId = projectId.toString();

    if (!newTask || newTask.toString().trim() === "") {
      setErrors({ task: "Task is required" });
      setIsLoading(false);
      return;
    }

    try {
      const result = await createTask(newTask as string, taskProjectId);
      setIsLoading(false);

      if (result?.success) {
        setErrors({});
        event.currentTarget.reset();
      } else {
        setErrors({ submit: result?.message || "Failed to add task. Please try again." });
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors({ task: "Error trying to create the task" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4 mb-6">
      <div className="relative flex flex-col w-full">
        <Input
          id="task"
          type="text"
          name="task"
          placeholder="Add a New Task..."
          className={`h-12 px-4 rounded-md border ${errors.task ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.task && (
          <p className="absolute -top-2 right-0 bg-red-500 text-white text-sm px-3 py-1 rounded-md break-words max-w-[200px]">
            {errors.task}
          </p>
        )}
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="flex items-center gap-3 bg-blue-500 text-white rounded-md text-md px-6 py-2 cursor-pointer h-12 hover:bg-blue-600 transition-colors"
      >
        <Plus size={14} className="size-6" />
        Add
      </Button>
    </form>
  );
};

export default TasksForm;

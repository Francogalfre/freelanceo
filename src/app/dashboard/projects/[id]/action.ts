"use server";

import { database } from "@/lib/database";
import { eq, and, inArray } from "drizzle-orm";

import { projectTaskTable } from "@/lib/database/schemas/projects";

import { revalidatePath } from "next/cache";

import { getProjects } from "../actions";

export const createTask = async (task: string, projectId: string) => {
  try {
    await database.insert(projectTaskTable).values({
      title: task,
      projectId: parseInt(projectId),
      isDone: false,
    });

    revalidatePath("/dashboard/projects/" + projectId);
  } catch (error) {
    console.error("Error creating task:", error);
    return { success: false, message: "Failed to create task" };
  }
};

export const getTasks = async (projectId: string) => {
  try {
    const tasks = await database
      .select()
      .from(projectTaskTable)
      .where(eq(projectTaskTable.projectId, parseInt(projectId)));

    return { success: true, tasks };
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return { success: false, message: "Failed to fetch tasks", tasks: [] };
  }
};

export const getAllTasks = async () => {
  try {
    const projects = await getProjects();

    const projectsIds = projects.map((project) => project.id);

    if (projectsIds.length === 0) {
      return { success: true, tasks: [] };
    }

    const tasks = await database
      .select()
      .from(projectTaskTable)
      .where(inArray(projectTaskTable.projectId, projectsIds));

    return { succes: true, tasks };
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return { success: false, message: "Failed to fetch tasks", tasks: [] };
  }
};

export const updateTask = async (taskId: string, projectId: string, isDone: boolean) => {
  try {
    await database
      .update(projectTaskTable)
      .set({ isDone })
      .where(and(eq(projectTaskTable.projectId, parseInt(projectId)), eq(projectTaskTable.id, parseInt(taskId))))
      .execute();

    revalidatePath("/dashboard/projects/" + projectId);
  } catch (error) {
    console.error("Error updating task:", error);
    return { success: false, message: "Failed to update task" };
  }
};

export const deleteTask = async (projectId: string, taskId: string) => {
  try {
    await database
      .delete(projectTaskTable)
      .where(and(eq(projectTaskTable.projectId, parseInt(projectId)), eq(projectTaskTable.id, parseInt(taskId))))
      .execute();

    revalidatePath("/dashboard/projects/" + projectId);
  } catch (error) {
    console.error("Error deleting task:", error);
    return { success: false, message: "Failed to delete task", tasks: [] };
  }
};

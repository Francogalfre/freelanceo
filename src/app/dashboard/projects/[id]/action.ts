"use server";

import { database } from "@/lib/database";
import { eq, and } from "drizzle-orm";

import { projectTaskTable } from "@/lib/database/schemas/projects";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

export const createTask = async (task: string, projectId: string) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("User not authenticated");
  }

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
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("User not authenticated");
  }

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

export const updateTask = async (taskId: string, projectId: string, isDone: boolean) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("User not authenticated");
  }

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
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("User not authenticated");
  }

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

"use server";
/* eslint-disable */

import { database } from "@/lib/database";

import { projectsTable } from "@/lib/database/schemas/projects";

import { getSessionOrThrow } from "@/utils/authSession";

import { revalidatePath } from "next/cache";
import { eq, and } from "drizzle-orm";

interface ProjectProps {
  title: string;
  description: string;
  deadline?: string;
  earnings?: string;
  clientId: string;
}

interface EditProjectProps {
  title?: string;
  description?: string;
  earnings?: string;
}

export const createProject = async (props: ProjectProps) => {
  const session = await getSessionOrThrow();

  const data = {
    title: props.title,
    description: props.description,
    deadline: props.deadline ? new Date(props.deadline) : null,
    earnings: props.earnings ? parseFloat(props.earnings) : null,
    clientId: props.clientId ? parseInt(props.clientId) : null,
    userId: session.user.id,
  };

  if (!data.title || !data.description || !data.clientId) {
    throw new Error("Title, description, and clientId are required");
  }

  try {
    await database
      .insert(projectsTable)
      .values(data as any)
      .execute();

    revalidatePath("/dashboard/projects");

    return { success: true, message: "Project created successfully" };
  } catch (error) {
    console.error("Error creating project:", error);
    return { success: false, message: "Failed to create project" };
  }
};

export const getProjects = async (status?: string) => {
  const session = await getSessionOrThrow();

  try {
    const projects = await database
      .select()
      .from(projectsTable)
      .where(eq(projectsTable.userId, session.user.id))
      .execute();

    const now = new Date();

    const updatedProjects = projects.map((project) => {
      const deadline = new Date(project.deadline);
      return {
        ...project,
        status: project.status === "finished" ? "finished" : deadline < now ? "delayed" : project.status,
      };
    });

    if (status && status !== "all") {
      return updatedProjects.filter((project) => project.status === status);
    }

    return updatedProjects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to fetch projects");
  }
};

export const getProjectById = async (id: string) => {
  const session = await getSessionOrThrow();
  const projectId = parseInt(id);

  try {
    const project = await database
      .select()
      .from(projectsTable)
      .where(and(eq(projectsTable.id, projectId), eq(projectsTable.userId, session.user.id)))
      .execute();

    return project;
  } catch (error) {
    console.error(`Error fetching project id ${projectId}:`, error);
    throw new Error("Failed to fetch project");
  }
};

export const deleteProject = async (id: number) => {
  const projectId = id;

  try {
    await database.delete(projectsTable).where(eq(projectsTable.id, projectId)).execute();

    revalidatePath("/dashboard/projects/" + projectId);
  } catch (error) {
    console.error(`Error deleting project id ${projectId}:`, error);
    throw new Error("Failed to delete project");
  }
};

export const editProject = async (props: EditProjectProps, id: number) => {
  const projectId = id;

  const data = {
    title: props.title,
    description: props.description,
    earnings: props.earnings ? parseFloat(props.earnings) : null,
  };

  try {
    await database
      .update(projectsTable)
      .set(data as any)
      .where(eq(projectsTable.id, projectId));

    revalidatePath("/dashboard/projects/" + projectId);
    return { success: true, message: "Project created successfully" };
  } catch (error) {
    console.error("Error updating project:", error);
    throw new Error("Failed to update project");
  }
};

export const completeProject = async (id: number) => {
  const session = await getSessionOrThrow();
  const projectId = id;

  try {
    await database
      .update(projectsTable)
      .set({ status: "finished" })
      .where(and(eq(projectsTable.id, projectId), eq(projectsTable.userId, session.user.id)))
      .execute();

    revalidatePath("/dashboard/projects");
  } catch (error) {
    console.error("Error completing project:", error);
    throw new Error("Failed to complete project");
  }
};

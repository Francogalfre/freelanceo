"use server";

import { database } from "@/lib/database";
import { projectsTable } from "@/lib/database/schemas/projects";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

interface ProjectProps {
  title: string;
  description: string;
  deadline?: string;
  earnings?: string;
  clientId: string;
}

export const createProject = async (props: ProjectProps) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("User not authenticated");
  }

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

export const getProjects = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("User not authenticated");
  }

  try {
    const clients = await database
      .select()
      .from(projectsTable)
      .where(eq(projectsTable.userId, session.user.id))
      .execute();

    return clients;
  } catch (error) {
    console.error("Error fetching clients:", error);
    throw new Error("Failed to fetch clients");
  }
};

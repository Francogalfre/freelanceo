"use server";

import { database } from "@/lib/database";
import { eq } from "drizzle-orm";

import { projectsTable } from "@/lib/database/schemas/projects";
import { clientsTable } from "@/lib/database/schemas/clients";

import { getSessionOrThrow } from "./authSession";

export const reachedMaxProjects = async (userId: string) => {
  const session = await getSessionOrThrow();

  // If the user is not subscribed, check if they have reached the limit of 5 projects
  if (session.user.isSubscribed == false) {
    try {
      const projects = await database.select().from(projectsTable).where(eq(projectsTable.userId, userId)).execute();

      return projects.length == 5;
    } catch (error) {
      console.error("Error checking projects limit:", error);
      throw new Error("Failed to check projects limit");
    }
  }
};

export const reachedMaxClients = async (userId: string) => {
  const session = await getSessionOrThrow();

  // If the user is not subscribed, check if they have reached the limit of 6 clients
  if (session.user.isSubscribed == false) {
    try {
      const clients = await database.select().from(clientsTable).where(eq(clientsTable.userId, userId)).execute();

      return clients.length == 6;
    } catch (error) {
      console.error("Error checking clients limit:", error);
      throw new Error("Failed to check clients limit");
    }
  }
};

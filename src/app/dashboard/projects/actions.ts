"use server";

import { database } from "@/lib/database";
import { projectsTable } from "@/lib/database/schemas/projects";

import { z } from "zod";

const projectSchema = z.object({
  title: z.string().min(1, "Project name is required"),
  description: z.string().min(1, "Project description is required"),
  deadline: z.date(),
  earnings: z.number(),
});

export const createProject = async (props: any) => {
  const data = props;

  const parsedData = projectSchema.safeParse(data);
  if (!parsedData.success) {
    throw new Error(parsedData.error.message);
  }

  const result = await database
    .insert(projectsTable)
    .values(parsedData.data as any)
    .execute();
};

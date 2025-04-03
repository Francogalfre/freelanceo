"use server";

import { database } from "@/lib/database";
import { projectsTable } from "@/lib/database/schemas/projects";

export const createProject = async (props: any) => {
  const data = props;

  const result = await database.insert(projectsTable).values(data).execute();
};

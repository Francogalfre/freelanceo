import { integer, numeric, pgEnum, pgTable, text, timestamp, varchar, boolean } from "drizzle-orm/pg-core";

import { clientsTable } from "./clients";

export const projectStatus = pgEnum("project_status", ["progress", "finished", "delayed"]);

export const projectsTable = pgTable("projects", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  deadline: timestamp().notNull(),
  status: projectStatus().notNull().default("progress"),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
  userId: text("userId"),
  earnings: numeric("earnings", { precision: 10, scale: 2 }),
  clientId: integer("client_id")
    .notNull()
    .references(() => clientsTable.id),
});

export const projectTaskTable = pgTable("project_tasks", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  isDone: boolean("is_done").notNull().default(false),
  createdAt: timestamp().notNull().defaultNow(),
  updateAt: timestamp().notNull().defaultNow(),
  projectId: integer("project_id")
    .notNull()
    .references(() => projectsTable.id, { onDelete: "cascade" }),
});

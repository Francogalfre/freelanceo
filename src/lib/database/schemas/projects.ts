import { integer, numeric, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

import { clientsTable } from "./clients";

import { relations } from "drizzle-orm";

export const projectsTable = pgTable("projects", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  deadline: timestamp().notNull(),
  status: varchar({ length: 50 }).notNull().default("open"),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
  userId: text("userId"),
  earnings: numeric("earnings", { precision: 10, scale: 2 }),
  clientId: integer("client_id")
    .notNull()
    .references(() => clientsTable.id),
});

import { integer, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const projectsTable = pgTable("projects", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  deadline: timestamp().notNull(),
  status: varchar({ length: 50 }).notNull().default("open"),
  clientId: integer().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
});

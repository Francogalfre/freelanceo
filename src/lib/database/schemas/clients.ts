import { timestamp } from "drizzle-orm/pg-core";
import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const clientsTable = pgTable("clients", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  userId: text("user_id").notNull(),
  name: text("name").notNull(),
  email: text("email"),
  phone: text("phone"),
  location: text("location"),
  company: text("company"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

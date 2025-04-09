import { timestamp, uuid } from "drizzle-orm/pg-core";
import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const client = pgTable("clients", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  userId: uuid("user_id").notNull(),
  name: text("name").notNull(),
  email: text("email"),
  phone: text("phone"),
  address: text("address"),
  city: text("city"),
  company: text("company"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

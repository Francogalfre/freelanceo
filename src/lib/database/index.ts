import { drizzle } from "drizzle-orm/neon-http";

export const database = drizzle(process.env.DATABASE_URL!);

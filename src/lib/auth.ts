import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { database } from "@/lib/database";
import * as authSchema from "@/lib/database/schemas/auth";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: drizzleAdapter(database, {
    provider: "pg",
    schema: authSchema,
  }),
});

export type Session = typeof auth.$Infer.Session;

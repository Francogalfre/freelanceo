import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { sendResetPasswordEmail } from "./email";

import { database } from "@/lib/database";
import * as authSchema from "@/lib/database/schemas/auth";

export const auth = betterAuth({
  user: {
    additionalFields: {
      isSubscribed: {
        type: "boolean",
        defaultValue: false,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      await sendResetPasswordEmail(user.email, url);
    },
  },
  database: drizzleAdapter(database, {
    provider: "pg",
    schema: authSchema,
  }),
});

export type Session = typeof auth.$Infer.Session;

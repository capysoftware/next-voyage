import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url({
    message: "DATABASE_URL must be a valid connection string URL",
  }),
  BETTER_AUTH_SECRET: z.string({
    message: "BETTER_AUTH_SECRET is required",
  }),
  DISCORD_CLIENT_ID: z.string({
    message: "DISCORD_CLIENT_ID is required",
  }),
  DISCORD_CLIENT_SECRET: z.string({
    message: "DISCORD_CLIENT_SECRET is required",
  }),
});

export const env = envSchema.parse(process.env);

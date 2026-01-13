import { defineConfig } from "drizzle-kit";

// Replit publish sometimes probes Drizzle/Neon to check for DB diffs.
// That can fail when Neon Migrations API endpoint is disabled (default on some plans).
// To make publishing robust by default, we only provide dbCredentials when explicitly enabled.
// Set DRIZZLE_ENABLE_DB=1 (and provide DATABASE_URL) to allow Drizzle CLI to talk to your DB.

const ENABLE_DB = process.env.DRIZZLE_ENABLE_DB === "1";
const DATABASE_URL = process.env.DATABASE_URL;

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  // Only include dbCredentials when explicitly enabled to avoid unintended Neon API calls during publish
  ...(ENABLE_DB && DATABASE_URL
    ? {
        dbCredentials: { url: DATABASE_URL },
      }
    : {}),
});

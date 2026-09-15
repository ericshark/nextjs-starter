/**
 * Application environment configuration.
 * Centralized place for environment variables with safe defaults.
 */
export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  NEXT_PUBLIC_APP_URL:
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
} as const;

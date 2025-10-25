import { config } from "dotenv";

// Load environment file dynamically
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

// Export all environment variables cleanly
export const {
  PORT,
  NODE_ENV,
  DB_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
} = process.env;

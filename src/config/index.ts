// src/config/index.ts
import dotenv from 'dotenv';
import path from 'path';
import Joi from 'joi';

// Get the absolute path the ot he monorepo root 
const monorepoRoot = path.resolve(__dirname, '../../../../');

// Load environment-specific .env file
const envFile = path.join(
  monorepoRoot,
  `.env.${process.env.NODE_ENV || 'development'}`
);

dotenv.config({ 
  path: envFile,
});

console.log('process', process.env.NODE_ENV)
// Define configuration schema
const configSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'staging')
    .default('development'),
  PORT: Joi.string().required(),
  MONGODB_URI: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().default('1d'),
  JWT_REFRESH_SECRET: Joi.string().required(),
  JWT_REFRESH_EXPIRES_IN: Joi.string().default('30d'),
  LOG_LEVEL: Joi.string()
    .valid('error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly')
    .default('info'),
   
  GOOGLE_CLIENT_ID: Joi.string().required(),
  GOOGLE_CLIENT_SECRET: Joi.string().required(),
  GOOGLE_DEVELOPMENT_REDIRECT_URI: Joi.string().required(),

  // FACEBOOK_CLIENT_ID: Joi.string().required(),
  // FACEBOOK_CLIENT_SECRET: Joi.string().required(),
  // FACEBOOK_DEVELOPMENT_REDIRECT_URI: Joi.string().required(),
}).unknown();

// Validate and extract the config
const { value: envVars, error } = configSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

// Export the config object
export const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongodbUri: envVars.MONGODB_URI,
  jwt: {
    secret: envVars.JWT_SECRET,
    expiresIn: envVars.JWT_EXPIRES_IN,
    refreshSecret: envVars.JWT_REFRESH_SECRET,
    refreshExpiresIn: envVars.JWT_REFRESH_EXPIRES_IN,
  },
  logLevel: envVars.LOG_LEVEL,
  google: {
    clientId: envVars.GOOGLE_CLIENT_ID,
    clientSecret: envVars.GOOGLE_CLIENT_SECRET,
    redirectUri: envVars.GOOGLE_DEVELOPMENT_REDIRECT_URI,
  },
  
  
} as const;

// Type for the config object
export type Config = typeof config;

import express from 'express';
import { connectToDatabase } from './config/mongodb';
import { logger } from './utils/helpers/logger';
import { ErrorHandler } from './middleware/errorHandler';
import httpLogger from './utils/helpers/httpLogger';
import helmet from 'helmet';
import cors from 'cors'
import routes from './routes';
import passport from './config/passport';

const app = express();

// Security Headers
app.use(helmet());
app.use(
  cors({
    origin: ['*'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['set-cookie']
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
// // Routes
app.use(routes);

// Logging
app.use(httpLogger);

// Global Error Handlers
app.use(ErrorHandler.notFound);
app.use(ErrorHandler.handle);

// Connect to MongoDB
connectToDatabase()
  .then(async () => {
    logger.info('MongoDB connected successfully');
  })
  .catch((error) => {
    logger.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  });

export default app;

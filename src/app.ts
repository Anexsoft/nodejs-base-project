import dotenv from "dotenv";
import express from "express";
import container from "./providers/container";
import { loadControllers, scopePerRequest } from "awilix-express";

// start environment variables
dotenv.config();

// create a new express application instance
const app: express.Application = express();
app.use(scopePerRequest(container));

// controllers
app.use(loadControllers('controllers/*.ts', { cwd: __dirname }))

export default app;
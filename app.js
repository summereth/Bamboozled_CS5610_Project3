import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import logger from "morgan";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import quizRoutes from "./routes/quizRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "frontend/dist")));

// routes
app.use("/api/quiz", quizRoutes);

export default app;

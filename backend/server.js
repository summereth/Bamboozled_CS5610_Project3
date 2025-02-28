import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import quizRoutes from "./routes/quizRoutes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Enable CORS for all routes
app.use(cors());

// routes
app.use("/api/quiz", quizRoutes);

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});

export default app;

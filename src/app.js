import express from "express";
import morgan from "morgan";
const app = express();
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";

import taskRoutes from "./routes/tasks.routes.js";
import cors from "cors";
app.use(morgan("dev"));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", taskRoutes);
export default app;

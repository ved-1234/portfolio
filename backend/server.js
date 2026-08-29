import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";
import certificationRoutes from "./routes/certificationRoutes.js";

dotenv.config();

const app = express();

/* ============================================================
   CORS
   ============================================================ */

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* ============================================================
   MIDDLEWARE
   ============================================================ */

app.use(express.json());

/* ============================================================
   DATABASE
   ============================================================ */

connectDB();

/* ============================================================
   ROUTES
   ============================================================ */

app.use("/api/projects", projectRoutes);

app.use("/api/certifications", certificationRoutes);

/* ============================================================
   ROOT
   ============================================================ */

app.get("/", (req, res) => {
  res.send("Backend running");
});

/* ============================================================
   SERVER
   ============================================================ */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import express from "express";
import {
  getProjects,
  createProject
} from "../controllers/projectController.js";

const router = express.Router();

// GET
router.get("/", getProjects);

// POST
router.post("/", createProject);

export default router;

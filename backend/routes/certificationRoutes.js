import express from "express";
import {
  getCertifications,
  createCertification,
} from "../controllers/certificationController.js";

const router = express.Router();

// GET
router.get("/", getCertifications);

// POST
router.post("/", createCertification);

export default router;



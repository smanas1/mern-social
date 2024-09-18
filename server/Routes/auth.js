import express from "express";
import { registerController } from "../Controllers/authController.js";
import { registerMiddleware } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerMiddleware, registerController);

export default router;

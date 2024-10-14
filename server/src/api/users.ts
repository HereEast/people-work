import express from "express";
import { createUser } from "../api-handlers/createUser.js";

const router = express.Router();

// Get
router.route("/").post(createUser);

export { router as userRouter };

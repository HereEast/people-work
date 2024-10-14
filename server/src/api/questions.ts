import express from "express";

import { getQuestions } from "../api-handlers/getQuestions.js";

const router = express.Router();

// Get
router.route("/").get(getQuestions);

export { router as questionRouter };
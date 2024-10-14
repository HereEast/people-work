import express from "express";

import { addAnswer } from "../api-handlers/addAnswer.js";
import { getAnswersByPersonID } from "../api-handlers/getAnswers.js";

const router = express.Router();

// Get
router.route("/:personId").get(getAnswersByPersonID);

// Post answers
router.route("/admin").post(addAnswer);

export { router as answerRouter };
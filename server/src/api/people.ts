import express from "express";

import { getPeople, getPerson } from "../api-handlers/getPeople.js";

const router = express.Router();

// Get
router.route("/").get(getPeople);
router.route("/:slug").get(getPerson);

export { router as peopleRouter };

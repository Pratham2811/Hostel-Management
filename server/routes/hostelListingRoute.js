import express from "express";
import { getHostelsController } from "../controllers/getHostelsList.js";
import { getHostelDetailsController } from "../controllers/getHostelDetails.js";

const router = express.Router();

router.get("/", getHostelsController);
router.get("/:id",getHostelDetailsController)
export default router;

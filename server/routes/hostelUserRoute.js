import express from "express"
import { createHostelUserController } from "../controllers/hostelUserController.js";

const router=express.Router();


router.post('/',createHostelUserController)

export default router
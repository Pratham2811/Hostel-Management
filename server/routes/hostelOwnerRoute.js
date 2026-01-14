import express from "express"
import { createHostelOwner } from "../controllers/hostelOwnerController.js"

const router=express.Router()

router.post("/register",createHostelOwner)


export default router
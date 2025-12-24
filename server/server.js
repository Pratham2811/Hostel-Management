import express from "express"
import cors from"cors";
const PORT=5000
const app=express();
import hostelListingRoute from "./routes/hostelListingRoute.js"
import aminitiesRoute from "./routes/aminitiesRoute.js"
import hostelOwnerRoute from "./routes/hostelOwnerRoute.js"
import { configDotenv } from "dotenv";
import dotenv from "dotenv"
import "./config/db.js"
dotenv.config()

app.use(cors({
    
    
     origin:"http://localhost:5173",
}))
app.use(express.json())
app.use("/api/v1/hostels",(req,res,next)=>{
   
    next();
},hostelListingRoute)
app.use("/api/v1/amenities",aminitiesRoute)
app.use("/api/hostel-owner",hostelOwnerRoute)
app.listen(PORT,()=>{
    console.log(`server is runnig on ${PORT}`);
    
})


import express from "express"
import cors from"cors";
const PORT=5000
const app=express();
import hostelListingRoute from "./routes/hostelListingRoute.js"
import aminitiesRoute from "./routes/aminitiesRoute.js"
import { configDotenv } from "dotenv";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
dotenv.config()
const connection=connectDB();
app.use(cors({
    
    
     origin:"http://localhost:5173",
}))
app.use("/api/v1/hostels",(req,res,next)=>{
   
    next();
},hostelListingRoute)
app.use("/api/v1/amenities",aminitiesRoute)
app.listen(PORT,()=>{
    console.log(`server is runnig on ${PORT}`);
    
})


import express from "express"
import cors from"cors";
const PORT=5000
const app=express();
import hostelListingRoute from "./routes/hostelListingRoute.js"
app.use(cors({
    
    
     origin:"http://localhost:5173",
}))
app.use("{/api/v1/hostels}",(req,res,next)=>{
    console.log("foewhfiwfirfiuhiu");
    next();
},hostelListingRoute)

app.listen(PORT,()=>{
    console.log(`server is runnig on ${PORT}`);
    
})


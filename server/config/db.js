import {MongoClient} from "mongodb"
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
const client=new MongoClient(process.env.MONGO_URI);
try{
    const clientObj=await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");

    

}catch(error){
    console.log("Error while connecting to db",error);
    
    
}





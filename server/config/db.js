import {MongoClient} from "mongodb"
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
const client=new MongoClient(process.env.MONGO_URI);
const clientObj=await mongoose.connect(process.env.MONGO_URI);

export async function connectDB(){
    
try{
    await client.connect();
    const db=  client.db();
    console.log(db.namespace);
    
    console.log("DB connected");
    
}catch(error){
console.log("error connectiong to DB",error);

}
}


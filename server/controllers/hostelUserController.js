import { createHostelUser } from "../services/hostelUserService.js";



export const createHostelUserController=async(req,res)=>{
      try{
        const hostelUserData=req.body;
        if(!hostelUserData){
            return res.status(400).json({
                message:"Error Creating Request, Check you credentials",
            })
        }
         const createdHostelUser= await createHostelUser(hostelUserData);
         
         return res.status(201).json({
            message:"User Created Successfully",
            user:createdHostelUser
         })
      }catch(error){
        console.log("Error while creating user",error);
        return res.status(500).json({
            message:"Internal Server Error"
        })
      }
}
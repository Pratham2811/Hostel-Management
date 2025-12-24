import { createOwner } from "../services/hostelOwnerService.js"

export const createHostelOwner=async (req,res)=>{

    try{
        if(!req.body){
            return res.status(400).json({
                message:"Enter valid credentials"
            })
        }
   const hostelOwner=await createOwner(req.body)
   return res.status(201).json({
    message:"Hostel Owner created succesfully",
     hostelOwner
   })

    }catch(error){
        return res.status(500).json({
            type:"error",
            message:"Internal Server Error"
        })
    }
}
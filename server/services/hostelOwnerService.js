
import HostelOwner from "../models/hostelOwner.js";
export const createOwner=async (hostelOwnerData)=>{

    try{
        
        const hostelOwner=new HostelOwner(hostelOwnerData);
        hostelOwner.save();
        const data=await hostelOwner.save();
        return data;
        
    }catch(error){
        console.log(error);
        
    }
}
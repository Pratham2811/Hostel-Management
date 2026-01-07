import hostelUser from "../models/hostelUser.js";

export const  createHostelUser = async (hostelUserData) => {
  try {

     const existingEmail=await hostelUser.findOne({email:hostelUserData.email});
     if(existingEmail){
      throw new Error({message:"Email already exist",status:409})
     }
    const createdUser = new hostelUser(hostelUserData);
    const createdHostelUser = await createdUser.save();
    console.log(createdHostelUser);
    return createdHostelUser;
  } catch (error) {
    console.log("Error creating User", error);
    return error;
  }
};

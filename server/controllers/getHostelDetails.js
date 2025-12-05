import { gethostels } from "../utils/dummydata.js";  // ES6 import (note .js extension)

export const getHostelDetailsController = (req, res) => {
  try {
    const {id}=req.params;
    
    console.log("ID of the incomign request",id);
    
    console.log("Request reached controller details ");

    const hostels = gethostels(); // function returns dummy data


 
  const  hostelDetails= hostels.find((hostel)=>hostel.id==id)
   
   return res.status(200).json({data:hostelDetails})

  } catch (error) {
    console.error("Error in getHostels:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

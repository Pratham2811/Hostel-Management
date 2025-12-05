import { gethostels } from "../utils/dummydata.js";  // ES6 import (note .js extension)

export const getHostelsController = (req, res) => {
  try {
  const query=req.query;
 console.log(query);
 const{ min_price,max_price,gender,amenities}=req.query;
 console.log(min_price,max_price,gender,amenities);
 
    let hostels = gethostels(); // function returns dummy data
    if(min_price){
      hostels=hostels.filter((hostel)=>hostel.pricing.monthly>=min_price);
    }
      if(max_price){
      hostels=hostels.filter((hostel)=>hostel.pricing.monthly<=max_price);
    }
  if(gender){
      hostels=hostels.filter((hostel)=>hostel.gender===gender);
    }

  
    return res.json({
      success: true,
      data: hostels
    });

  } catch (error) {
    console.error("Error in getHostels:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

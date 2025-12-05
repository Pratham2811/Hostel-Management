// Listings API service
import axios from "axios";


const API_BASE_URL = "http://localhost:5000";

/**
 * Fetches the list of all hostels from the API.
 * @returns {Promise<Array<Object>|undefined>} The array of hostel data or undefined on error.
 */
export const getHostels = async (filters) => {
  try {
   console.log("Filters reach at the fucking ",filters);
   const queryString = new URLSearchParams(filters).toString();
   console.log(queryString);
   
    const response = await axios.get(`${API_BASE_URL}/api/v1/hostels?${queryString}`);
     console.log("data from axios",response.data);
   
    return response.data.data;
   
    
  } catch (error) {
    
    console.error("Error reading hostels data:", error);
    
    
    return undefined;
  }
}
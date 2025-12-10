import express from "express"

const router=express.Router()

router.get("/",(req,res)=>{
    
const AMENITIES = [
  // Connectivity
  { id: "wifi", label: "Free Wi-Fi", category: "Connectivity" },
  { id: "high_speed_internet", label: "High-Speed Internet", category: "Connectivity" },
  { id: "ethernet", label: "Ethernet Connection", category: "Connectivity" },

  // Parking & Transport
  { id: "parking", label: "Parking Available", category: "Parking" },
  { id: "free_parking", label: "Free Parking", category: "Parking" },
  { id: "bike_parking", label: "Bike Parking", category: "Parking" },
  { id: "ev_charger", label: "EV Charger", category: "Parking" },
  { id: "airport_shuttle", label: "Airport Shuttle", category: "Transport" },

  // Food & Kitchen
  { id: "kitchen", label: "Kitchen Access", category: "Kitchen" },
  { id: "shared_kitchen", label: "Shared Kitchen", category: "Kitchen" },
  { id: "microwave", label: "Microwave", category: "Kitchen" },
  { id: "refrigerator", label: "Refrigerator", category: "Kitchen" },
  { id: "water_purifier", label: "Water Purifier", category: "Kitchen" },
  { id: "cooking_allowed", label: "Cooking Allowed", category: "Kitchen" },
  { id: "breakfast", label: "Breakfast Included", category: "Food" },
  { id: "meals_available", label: "Meals Available", category: "Food" },

  // Bedroom
  { id: "bed_linen", label: "Bed Linen", category: "Bedroom" },
  { id: "wardrobe", label: "Wardrobe", category: "Bedroom" },
  { id: "room_cleaning", label: "Daily Room Cleaning", category: "Bedroom" },
  { id: "ac", label: "Air Conditioning", category: "Bedroom" },
  { id: "fan", label: "Ceiling Fan", category: "Bedroom" },
  { id: "heater", label: "Room Heater", category: "Bedroom" },

  // Bathroom
  { id: "geyser", label: "Geyser / Hot Water", category: "Bathroom" },
  { id: "private_bathroom", label: "Private Bathroom", category: "Bathroom" },
  { id: "shared_bathroom", label: "Shared Bathroom", category: "Bathroom" },
  { id: "toiletries", label: "Free Toiletries", category: "Bathroom" },

  // Laundry
  { id: "laundry", label: "Laundry Service", category: "Laundry" },
  { id: "washing_machine", label: "Washing Machine", category: "Laundry" },
  { id: "dryer", label: "Clothes Dryer", category: "Laundry" },

  // Safety
  { id: "cctv", label: "CCTV Surveillance", category: "Safety" },
  { id: "security_guard", label: "24/7 Security Guard", category: "Safety" },
  { id: "fire_extinguisher", label: "Fire Extinguisher", category: "Safety" },
  { id: "first_aid", label: "First Aid Kit", category: "Safety" },

  // Comfort
  { id: "tv", label: "TV", category: "Comfort" },
  { id: "balcony", label: "Balcony", category: "Comfort" },
  { id: "garden_view", label: "Garden View", category: "Comfort" },
  { id: "mountain_view", label: "Mountain View", category: "Comfort" },

  // Building facilities
  { id: "power_backup", label: "Power Backup", category: "Building" },
  { id: "lift", label: "Lift / Elevator", category: "Building" },
  { id: "common_area", label: "Common Lounge/Seating Area", category: "Building" },
  { id: "terrace", label: "Terrace Access", category: "Building" },

  // Sports & Recreation
  { id: "gym", label: "Gym", category: "Recreation" },
  { id: "swimming_pool", label: "Swimming Pool", category: "Recreation" },
  { id: "play_area", label: "Kids Play Area", category: "Recreation" },
  { id: "indoor_games", label: "Indoor Games", category: "Recreation" },
  { id: "sports_ground", label: "Sports Ground", category: "Recreation" },

  // Student/Hostel-specific
  { id: "study_table", label: "Study Table", category: "Student" },
  { id: "study_room", label: "Common Study Room", category: "Student" },
  { id: "library", label: "Library Access", category: "Student" },
  { id: "laptop_friendly", label: "Laptop Friendly", category: "Student" },

  // Additional services
  { id: "housekeeping", label: "Housekeeping Service", category: "Services" },
  { id: "room_service", label: "Room Service", category: "Services" },
  { id: "storage", label: "Luggage Storage", category: "Services" },
  { id: "front_desk", label: "24/7 Front Desk", category: "Services" },
  { id: "maintenance", label: "On-site Maintenance", category: "Services" },

  // Environment
  { id: "greenery", label: "Green Surroundings", category: "Environment" },
  { id: "pet_friendly", label: "Pet Friendly", category: "Environment" },

  // Internet/Work-friendly
  { id: "workspace", label: "Dedicated Workspace", category: "Work" },
  { id: "power_outlet", label: "Extra Power Outlets", category: "Work" }
];

return res.json(AMENITIES)
    
})
export default router
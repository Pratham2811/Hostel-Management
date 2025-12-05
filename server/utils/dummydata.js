export function gethostels() {
  const hostels = [
    {
      id: 1,
      name: "The Student Hive",
      description: "A modern co-living space located in the heart of the IT hub, perfect for students and young professionals.",
      city: "Pune",
      address: "Plot 45, Near Wipro Circle, Hinjewadi Phase 1, Pune, Maharashtra 411057",
      images: [
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Open",
      seats_remaining: 12,
      seats_filled: 88,
      total_seats: 100,
      pricing: {
        monthly: 8500,
        deposit: 15000,
        currency: "INR"
      },
      services: ["Daily Housekeeping", "High-Speed WiFi", "Laundry Service", "Mess Facility"],
      owner: "Amit Deshmukh",
      features: ["Biometric Entry", "Gaming Zone", "Study Library", "24/7 Power Backup"],
      rating: 4.5,
      comments: [
        { user: "Rahul S.", text: "Great vibe, but the food can be spicy.", rating: 4 },
        { user: "Sneha K.", text: "Best wifi speed I have found in Hinjewadi.", rating: 5 }
      ]
    },
    {
      id: 2,
      name: "Backpackers Panda Pune",
      description: "Vibrant and colorful hostel designed for travelers and backpackers looking for a community feel.",
      city: "Pune",
      address: "Lane 7, Koregaon Park, Pune, Maharashtra 411001",
      images: [
        "https://images.unsplash.com/photo-1596276020587-8044fe049813?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Almost Full",
      seats_remaining: 3,
      seats_filled: 47,
      total_seats: 50,
      pricing: {
        monthly: 12000,
        deposit: 10000,
        currency: "INR"
      },
      services: ["Bike Rental", "City Tours", "Breakfast Included", "Lockers"],
      owner: "Rohan Mehta",
      features: ["Rooftop Cafe", "Air Conditioning", "Hot Water", "Social Events"],
      rating: 4.8,
      comments: [
        { user: "John D.", text: "Amazing location near all the best cafes.", rating: 5 },
        { user: "Priya M.", text: "A bit noisy on weekends due to parties.", rating: 4 }
      ]
    },
    {
      id: 3,
      name: "Scholar's Den",
      description: "Quiet and focused environment optimized for competitive exam students.",
      city: "Pune",
      address: "12B, Fergusson College Road, Shivajinagar, Pune, Maharashtra 411005",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Open",
      seats_remaining: 25,
      seats_filled: 125,
      total_seats: 150,
      pricing: {
        monthly: 6000,
        deposit: 10000,
        currency: "INR"
      },
      services: ["24/7 Library Access", "Tea/Coffee Vending", "Newspaper Subscription"],
      owner: "Suresh Patil",
      features: ["Soundproof Study Rooms", "CCTV Surveillance", "Single Occupancy Options"],
      rating: 4.2,
      comments: [
        { user: "Ankit V.", text: "Perfect for studying, very silent.", rating: 5 },
        { user: "Varun T.", text: "Rooms are small but functional.", rating: 4 }
      ]
    },
    {
      id: 4,
      name: "Youthville Girls Hostel",
      description: "Premium accommodation exclusively for women with top-tier security and amenities.",
      city: "Pune",
      address: "Sr. No 45, Bavdhan, Pune, Maharashtra 411021",
      images: [
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Waitlist",
      seats_remaining: 0,
      seats_filled: 200,
      total_seats: 200,
      pricing: {
        monthly: 15000,
        deposit: 30000,
        currency: "INR"
      },
      services: ["Shuttle Bus to Colleges", "In-house Gym", "Dietician Consults"],
      owner: "Youthville Management Pvt Ltd",
      features: ["Face Recognition Entry", "Mini Theatre", "Community Kitchen"],
      rating: 4.9,
      comments: [
        { user: "Aditi G.", text: "Feel very safe here. The gym is great.", rating: 5 },
        { user: "Kavya R.", text: "Expensive but worth it.", rating: 5 }
      ]
    },
    {
      id: 5,
      name: "Viman Nagar Boys Stay",
      description: "Affordable stays near the airport and major design colleges.",
      city: "Pune",
      address: "Row House 4, Viman Nagar, Pune, Maharashtra 411014",
      images: [
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Open",
      seats_remaining: 8,
      seats_filled: 32,
      total_seats: 40,
      pricing: {
        monthly: 7500,
        deposit: 15000,
        currency: "INR"
      },
      services: ["Tiffin Service", "Laundry", "Two-wheeler Parking"],
      owner: "Mr. Kulkarni",
      features: ["Balconies", "Attached Washrooms", "Solar Water Heater"],
      rating: 3.8,
      comments: [
        { user: "Samir K.", text: "Good value for money.", rating: 4 },
        { user: "Rohit P.", text: "Maintenance could be better.", rating: 3 }
      ]
    },
    {
      id: 6,
      name: "Techie Tower",
      description: "Luxury PG for IT professionals working in Magarpatta City.",
      city: "Pune",
      address: "Tower 6, Magarpatta City, Hadapsar, Pune, Maharashtra 411028",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Open",
      seats_remaining: 15,
      seats_filled: 85,
      total_seats: 100,
      pricing: {
        monthly: 18000,
        deposit: 40000,
        currency: "INR"
      },
      services: ["Room Service", "Smart TV", "High-speed Fiber Net"],
      owner: "Magarpatta Hospitality",
      features: ["Swimming Pool Access", "Clubhouse", "Lift Backup"],
      rating: 4.7,
      comments: [
        { user: "Vikram S.", text: "Feels like a hotel.", rating: 5 }
      ]
    },
    {
      id: 7,
      name: "Kothrud Student Home",
      description: "Homely atmosphere for engineering students near MIT college.",
      city: "Pune",
      address: "Paud Road, Kothrud, Pune, Maharashtra 411038",
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Closed",
      seats_remaining: 0,
      seats_filled: 30,
      total_seats: 30,
      pricing: {
        monthly: 5500,
        deposit: 10000,
        currency: "INR"
      },
      services: ["Home Cooked Meals", "Doctor on Call"],
      owner: "Mrs. Joshi",
      features: ["Garden Area", "Quiet Locality", "Purified Water"],
      rating: 4.0,
      comments: [
        { user: "Tejas M.", text: "Aunty cooks amazing food.", rating: 5 },
        { user: "Nikhil B.", text: "Strict curfew times.", rating: 3 }
      ]
    },
    {
      id: 8,
      name: "Wakad Co-Live",
      description: "Budget co-living space with shared amenities.",
      city: "Pune",
      address: "Datta Mandir Road, Wakad, Pune, Maharashtra 411057",
      images: [
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556912172-4545a97795fe?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Open",
      seats_remaining: 40,
      seats_filled: 60,
      total_seats: 100,
      pricing: {
        monthly: 7000,
        deposit: 14000,
        currency: "INR"
      },
      services: ["Self-cooking Kitchen", "Washing Machine", "Ironing"],
      owner: "SmartStay Group",
      features: ["No Brokerage", "Flexible Lock-in", "App-based Support"],
      rating: 3.9,
      comments: [
        { user: "Arun K.", text: "Decent for the price.", rating: 4 }
      ]
    },
    {
      id: 9,
      name: "Baner Elite Hostel",
      description: "Upscale hostel with focus on networking and startups.",
      city: "Pune",
      address: "High Street, Baner, Pune, Maharashtra 411045",
      images: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Open",
      seats_remaining: 5,
      seats_filled: 45,
      total_seats: 50,
      pricing: {
        monthly: 14000,
        deposit: 28000,
        currency: "INR"
      },
      services: ["Co-working Space", "Conference Room", "Cafe"],
      owner: "Rajeev Chandran",
      features: ["Networking Events", "Ergonomic Chairs", "AC Rooms"],
      rating: 4.6,
      comments: [
        { user: "Simran L.", text: "Great place to meet founders.", rating: 5 }
      ]
    },
    {
      id: 10,
      name: "Aundh Girls Residency",
      description: "Safe and convenient hostel near Pune University.",
      city: "Pune",
      address: "ITI Road, Aundh, Pune, Maharashtra 411007",
      images: [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Almost Full",
      seats_remaining: 2,
      seats_filled: 58,
      total_seats: 60,
      pricing: {
        monthly: 9000,
        deposit: 18000,
        currency: "INR"
      },
      services: ["24hr Security Guard", "Daily Cleaning", "Hot Water"],
      owner: "Pooja Hegde",
      features: ["Biometric Access", "Study Tables", "Wardrobes"],
      rating: 4.3,
      comments: [
        { user: "Neha S.", text: "Very clean.", rating: 4 },
        { user: "Riya D.", text: "Warden is strict.", rating: 3 }
      ]
    },
    {
      id: 11,
      name: "Karve Nagar Boys Hostel",
      description: "Standard accommodation for Cummins college vicinity.",
      city: "Pune",
      address: "Lane 3, Karve Nagar, Pune, Maharashtra 411052",
      images: [
        "https://images.unsplash.com/photo-1595524362625-f76156e52c72?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Open",
      seats_remaining: 10,
      seats_filled: 40,
      total_seats: 50,
      pricing: {
        monthly: 5000,
        deposit: 10000,
        currency: "INR"
      },
      services: ["Mess (Veg only)", "Parking"],
      owner: "Mr. Shinde",
      features: ["Walking distance to college", "Filtered Water"],
      rating: 3.5,
      comments: [
        { user: "Omkar P.", text: "Food is average.", rating: 3 }
      ]
    },
    {
      id: 12,
      name: "FC Road Backpackers",
      description: "Transit hostel for travelers visiting Deccan area.",
      city: "Pune",
      address: "Deccan Gymkhana, Pune, Maharashtra 411004",
      images: [
        "https://images.unsplash.com/photo-1555248601-3bcc2107565e?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Open",
      seats_remaining: 18,
      seats_filled: 12,
      total_seats: 30,
      pricing: {
        monthly: 9500,
        deposit: 5000,
        currency: "INR"
      },
      services: ["24hr Check-in", "Travel Desk", "Free WiFi"],
      owner: "Travel Stay Pvt Ltd",
      features: ["Lockers", "Common Lounge", "Map Library"],
      rating: 4.1,
      comments: [
        { user: "Alex F.", text: "Good for short stays.", rating: 4 }
      ]
    },
    {
      id: 13,
      name: "Yerwada Commerce Stay",
      description: "Hostel for commerce students and interns.",
      city: "Pune",
      address: "Airport Road, Yerwada, Pune, Maharashtra 411006",
      images: [
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Open",
      seats_remaining: 20,
      seats_filled: 80,
      total_seats: 100,
      pricing: {
        monthly: 6500,
        deposit: 13000,
        currency: "INR"
      },
      services: ["Bus Pass Assistance", "Canteen"],
      owner: "Commerce Welfare Trust",
      features: ["Large Campus", "Sports Ground"],
      rating: 3.7,
      comments: [
        { user: "Karan J.", text: "Big campus but old buildings.", rating: 3 }
      ]
    },
    {
      id: 14,
      name: "Kalyani Nagar Luxe",
      description: "High-end PG for corporate clients.",
      city: "Pune",
      address: "East Avenue, Kalyani Nagar, Pune, Maharashtra 411006",
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Waitlist",
      seats_remaining: 0,
      seats_filled: 20,
      total_seats: 20,
      pricing: {
        monthly: 22000,
        deposit: 50000,
        currency: "INR"
      },
      services: ["Concierge", "Housekeeping", "Laundry", "Meals"],
      owner: "Elite Stays",
      features: ["AC", "TV", "Fridge in Room", "Balcony"],
      rating: 4.8,
      comments: [
        { user: "Sameer W.", text: "Luxury living.", rating: 5 }
      ]
    },
    {
      id: 15,
      name: "Pimpri Chinchwad Workers Hostel",
      description: "Affordable stays for industrial workers.",
      city: "Pune",
      address: "MIDC Road, Pimpri, Pune, Maharashtra 411018",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Open",
      seats_remaining: 50,
      seats_filled: 150,
      total_seats: 200,
      pricing: {
        monthly: 4000,
        deposit: 5000,
        currency: "INR"
      },
      services: ["Canteen", "Bicycle Stand"],
      owner: "Industrial Association",
      features: ["Low Cost", "Near Factories"],
      rating: 3.2,
      comments: [
        { user: "Ramesh P.", text: "Good for workers.", rating: 3 }
      ]
    },
    {
      id: 16,
      name: "Katraj Nature Hostel",
      description: "Hostel near the zoo and Bharati Vidyapeeth, surrounded by greenery.",
      city: "Pune",
      address: "Katraj-Kondhwa Road, Pune, Maharashtra 411046",
      images: [
        "https://images.unsplash.com/photo-1534958925528-72e2930491a9?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Open",
      seats_remaining: 15,
      seats_filled: 35,
      total_seats: 50,
      pricing: {
        monthly: 5500,
        deposit: 10000,
        currency: "INR"
      },
      services: ["Bus Service", "Mess"],
      owner: "Mr. Chavan",
      features: ["Garden", "Open Terrace"],
      rating: 3.9,
      comments: [
        { user: "Soham D.", text: "Peaceful location.", rating: 4 }
      ]
    },
    {
      id: 17,
      name: "Hadapsar Gliding Hostel",
      description: "Located near the gliding center, popular with aviation students.",
      city: "Pune",
      address: "Saswad Road, Hadapsar, Pune, Maharashtra 411028",
      images: [
        "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Open",
      seats_remaining: 8,
      seats_filled: 42,
      total_seats: 50,
      pricing: {
        monthly: 6000,
        deposit: 12000,
        currency: "INR"
      },
      services: ["WiFi", "Laundry"],
      owner: "Sky High Ventures",
      features: ["Terrace Access", "Power Backup"],
      rating: 4.0,
      comments: [
        { user: "Aviator123", text: "Close to training center.", rating: 5 }
      ]
    },
    {
      id: 18,
      name: "SB Road Corporate Stay",
      description: "For professionals working at ICC Trade Tower.",
      city: "Pune",
      address: "Senapati Bapat Road, Pune, Maharashtra 411016",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Almost Full",
      seats_remaining: 2,
      seats_filled: 18,
      total_seats: 20,
      pricing: {
        monthly: 11000,
        deposit: 25000,
        currency: "INR"
      },
      services: ["AC", "Housekeeping", "High Speed Internet"],
      owner: "Urban Living",
      features: ["Premium Furnishing", "Lift"],
      rating: 4.4,
      comments: [
        { user: "Pooja K.", text: "Very convenient for office.", rating: 5 }
      ]
    },
    {
      id: 19,
      name: "Warje Highway Hostel",
      description: "Affordable stopover and student hostel on the highway.",
      city: "Pune",
      address: "Mumbai-Bangalore Highway, Warje, Pune, Maharashtra 411058",
      images: [
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Open",
      seats_remaining: 25,
      seats_filled: 25,
      total_seats: 50,
      pricing: {
        monthly: 4500,
        deposit: 8000,
        currency: "INR"
      },
      services: ["Parking", "Water Cooler"],
      owner: "Mr. Pawar",
      features: ["CCTV", "24hr Water"],
      rating: 3.6,
      comments: [
        { user: "Manoj T.", text: "Noisy due to highway.", rating: 3 }
      ]
    },
    {
      id: 20,
      name: "Bibwewadi Student Arcade",
      description: "Popular among medical students.",
      city: "Pune",
      address: "Bibwewadi, Pune, Maharashtra 411037",
      images: [
        "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80"
      ],
      booking_status: "Open",
      seats_remaining: 12,
      seats_filled: 38,
      total_seats: 50,
      pricing: {
        monthly: 7000,
        deposit: 15000,
        currency: "INR"
      },
      services: ["Mess", "Library"],
      owner: "Dr. Deshpande",
      features: ["Clean Rooms", "Study Environment"],
      rating: 4.1,
      comments: [
        { user: "Sushant R.", text: "Good environment for studies.", rating: 4 }
      ]
    },
    {
    "id": 21,
    "name": "Kothrud Youth Hostel",
    "description": "Located near MIT college, ideal for engineering students.",
    "city": "Pune",
    "address": "Kothrud, Pune, Maharashtra 411038",
    "images": [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Fast Filling",
    "seats_remaining": 5,
    "seats_filled": 45,
    "total_seats": 50,
    "pricing": {
      "monthly": 7500,
      "deposit": 15000,
      "currency": "INR"
    },
    "services": ["WiFi", "Mess", "Laundry"],
    "owner": "Mr. Kulkarni",
    "features": ["24/7 Water", "CCTV"],
    "rating": 4.3,
    "comments": [
      { "user": "Rahul M.", "text": "Best food quality in the area.", "rating": 5 }
    ]
  },
  {
    "id": 22,
    "name": "Viman Nagar Elite Stay",
    "description": "Premium PG near Symbiosis and Phoenix Market City.",
    "city": "Pune",
    "address": "Viman Nagar, Pune, Maharashtra 411014",
    "images": [
      "https://images.unsplash.com/photo-1522771753035-4850d32f541d?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Open",
    "seats_remaining": 15,
    "seats_filled": 25,
    "total_seats": 40,
    "pricing": {
      "monthly": 12000,
      "deposit": 25000,
      "currency": "INR"
    },
    "services": ["AC", "Gym", "Housekeeping"],
    "owner": "Mrs. Mehta",
    "features": ["Luxury Rooms", "Biometric Entry"],
    "rating": 4.6,
    "comments": [
      { "user": "Ananya S.", "text": "A bit expensive but worth the amenities.", "rating": 4 }
    ]
  },
  {
    "id": 23,
    "name": "Hinjewadi Tech Hostel",
    "description": "Affordable stay for interns and IT students.",
    "city": "Pune",
    "address": "Phase 1, Hinjewadi, Pune, Maharashtra 411057",
    "images": [
      "https://images.unsplash.com/photo-1596276020587-8044fe049813?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Open",
    "seats_remaining": 30,
    "seats_filled": 70,
    "total_seats": 100,
    "pricing": {
      "monthly": 6500,
      "deposit": 12000,
      "currency": "INR"
    },
    "services": ["WiFi", "Transport", "Mess"],
    "owner": "Mr. Singh",
    "features": ["Spacious Campus", "Sports Ground"],
    "rating": 3.9,
    "comments": [
      { "user": "Vikram J.", "text": "Good for budget stay.", "rating": 4 }
    ]
  },
  {
    "id": 24,
    "name": "Wakad Comfort Zone",
    "description": "Quiet environment suitable for study and work.",
    "city": "Pune",
    "address": "Datta Mandir Road, Wakad, Pune, Maharashtra 411057",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Waitlist",
    "seats_remaining": 0,
    "seats_filled": 30,
    "total_seats": 30,
    "pricing": {
      "monthly": 8000,
      "deposit": 16000,
      "currency": "INR"
    },
    "services": ["Cleaning", "TV Room"],
    "owner": "Suresh Patil",
    "features": ["Balcony Rooms", "Power Backup"],
    "rating": 4.2,
    "comments": [
      { "user": "Amit K.", "text": "Very clean and peaceful.", "rating": 5 }
    ]
  },
  {
    "id": 25,
    "name": "Katraj Scholar's Den",
    "description": "Walking distance from Bharati Vidyapeeth.",
    "city": "Pune",
    "address": "Katraj, Pune, Maharashtra 411046",
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Open",
    "seats_remaining": 8,
    "seats_filled": 32,
    "total_seats": 40,
    "pricing": {
      "monthly": 6000,
      "deposit": 10000,
      "currency": "INR"
    },
    "services": ["Mess", "Library", "Hot Water"],
    "owner": "Dr. Joshi",
    "features": ["Strict Security", "Reading Hall"],
    "rating": 4.0,
    "comments": [
      { "user": "Pooja L.", "text": "Strict rules but safe.", "rating": 4 }
    ]
  },
  {
    "id": 26,
    "name": "Karve Nagar Green Leaf",
    "description": "Eco-friendly hostel with garden area.",
    "city": "Pune",
    "address": "Karve Nagar, Pune, Maharashtra 411052",
    "images": [
      "https://images.unsplash.com/photo-1512918760383-5658fae4ce60?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Open",
    "seats_remaining": 10,
    "seats_filled": 15,
    "total_seats": 25,
    "pricing": {
      "monthly": 7200,
      "deposit": 15000,
      "currency": "INR"
    },
    "services": ["Garden", "WiFi", "Self-Cooking"],
    "owner": "Mrs. Apte",
    "features": ["Quiet Area", "Attached Washrooms"],
    "rating": 4.5,
    "comments": [
      { "user": "Sneha R.", "text": "Feels like home.", "rating": 5 }
    ]
  },
  {
    "id": 27,
    "name": "Shivaji Nagar Central",
    "description": "Right in the heart of the city, near COEP.",
    "city": "Pune",
    "address": "Shivaji Nagar, Pune, Maharashtra 411005",
    "images": [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Fast Filling",
    "seats_remaining": 3,
    "seats_filled": 57,
    "total_seats": 60,
    "pricing": {
      "monthly": 8500,
      "deposit": 17000,
      "currency": "INR"
    },
    "services": ["Mess", "Laundry", "Cycle Parking"],
    "owner": "Mr. Deshmukh",
    "features": ["Centrally Located", "Market Nearby"],
    "rating": 4.1,
    "comments": [
      { "user": "Rohan D.", "text": "Great connectivity to everywhere.", "rating": 4 }
    ]
  },
  {
    "id": 28,
    "name": "Baner Smart Living",
    "description": "Modern apartments converted to student sharing.",
    "city": "Pune",
    "address": "Baner Road, Pune, Maharashtra 411045",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Open",
    "seats_remaining": 20,
    "seats_filled": 20,
    "total_seats": 40,
    "pricing": {
      "monthly": 10000,
      "deposit": 20000,
      "currency": "INR"
    },
    "services": ["WiFi", "Fridge", "Washing Machine"],
    "owner": "Smart Stays Corp",
    "features": ["Fully Furnished", "Lift"],
    "rating": 4.4,
    "comments": [
      { "user": "Karan P.", "text": "Modern facilities, reliable WiFi.", "rating": 5 }
    ]
  },
  {
    "id": 29,
    "name": "Hadapsar Sunrise Home",
    "description": "Budget friendly accommodation for working students.",
    "city": "Pune",
    "address": "Magarpatta, Hadapsar, Pune, Maharashtra 411028",
    "images": [
      "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Open",
    "seats_remaining": 25,
    "seats_filled": 25,
    "total_seats": 50,
    "pricing": {
      "monthly": 5500,
      "deposit": 10000,
      "currency": "INR"
    },
    "services": ["Tiffin Service", "Parking"],
    "owner": "Mr. Pawar",
    "features": ["Affordable", "Close to Highway"],
    "rating": 3.8,
    "comments": [
      { "user": "Nilesh G.", "text": "Value for money.", "rating": 4 }
    ]
  },
  {
    "id": 30,
    "name": "Warje River View",
    "description": "Peaceful location overlooking the river.",
    "city": "Pune",
    "address": "Warje Malwadi, Pune, Maharashtra 411058",
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Open",
    "seats_remaining": 12,
    "seats_filled": 18,
    "total_seats": 30,
    "pricing": {
      "monthly": 5800,
      "deposit": 12000,
      "currency": "INR"
    },
    "services": ["Hot Water", "Common TV"],
    "owner": "Mrs. Chavan",
    "features": ["Ventilated Rooms", "Terrace"],
    "rating": 4.0,
    "comments": [
      { "user": "Omkar T.", "text": "Nice breeze in the evenings.", "rating": 4 }
    ]
  },
  {
    "id": 31,
    "name": "Aundh Modern Youth",
    "description": "Upscale locality with easy access to university.",
    "city": "Pune",
    "address": "DP Road, Aundh, Pune, Maharashtra 411007",
    "images": [
      "https://images.unsplash.com/photo-1596276020587-8044fe049813?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Fast Filling",
    "seats_remaining": 4,
    "seats_filled": 46,
    "total_seats": 50,
    "pricing": {
      "monthly": 9000,
      "deposit": 18000,
      "currency": "INR"
    },
    "services": ["WiFi", "Gym", "Library"],
    "owner": "Mr. Shetty",
    "features": ["Study Hall", "Cafe Nearby"],
    "rating": 4.3,
    "comments": [
      { "user": "Alok V.", "text": "Crowd is good, area is safe.", "rating": 5 }
    ]
  },
  {
    "id": 32,
    "name": "Pimpri Industrial Stay",
    "description": "Convenient for students doing internships in MIDC.",
    "city": "Pune",
    "address": "Pimpri Chinchwad, Pune, Maharashtra 411018",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Open",
    "seats_remaining": 18,
    "seats_filled": 22,
    "total_seats": 40,
    "pricing": {
      "monthly": 6000,
      "deposit": 10000,
      "currency": "INR"
    },
    "services": ["Mess", "Laundry"],
    "owner": "Mr. Kale",
    "features": ["Early Breakfast", "Transport Help"],
    "rating": 3.7,
    "comments": [
      { "user": "Suraj B.", "text": "Basic but functional.", "rating": 3 }
    ]
  },
  {
    "id": 33,
    "name": "Erandwane Creative Corner",
    "description": "Popular among Film Institute and Art students.",
    "city": "Pune",
    "address": "Erandwane, Pune, Maharashtra 411004",
    "images": [
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Waitlist",
    "seats_remaining": 0,
    "seats_filled": 20,
    "total_seats": 20,
    "pricing": {
      "monthly": 8200,
      "deposit": 20000,
      "currency": "INR"
    },
    "services": ["High-speed WiFi", "Art Studio Access"],
    "owner": "Mrs. Godbole",
    "features": ["Creative Vibes", "No Curfew"],
    "rating": 4.7,
    "comments": [
      { "user": "Riya K.", "text": "Amazing place for artists.", "rating": 5 }
    ]
  },
  {
    "id": 34,
    "name": "Pashan Nature's Nest",
    "description": "Near NCL and IISER, quiet and green.",
    "city": "Pune",
    "address": "Pashan-Sus Road, Pune, Maharashtra 411021",
    "images": [
      "https://images.unsplash.com/photo-1536304929831-d74863d09a25?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Open",
    "seats_remaining": 7,
    "seats_filled": 28,
    "total_seats": 35,
    "pricing": {
      "monthly": 7000,
      "deposit": 14000,
      "currency": "INR"
    },
    "services": ["Bird Watching Spot", "Library"],
    "owner": "Mr. Agarkar",
    "features": ["Peaceful", "Trekking nearby"],
    "rating": 4.2,
    "comments": [
      { "user": "Sameer J.", "text": "Very relaxing environment.", "rating": 4 }
    ]
  },
  {
    "id": 35,
    "name": "Kharadi IT Park PG",
    "description": "Close to EON IT Park, premium facilities.",
    "city": "Pune",
    "address": "Kharadi, Pune, Maharashtra 411014",
    "images": [
      "https://images.unsplash.com/photo-1484154218962-a1c00207099b?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Open",
    "seats_remaining": 10,
    "seats_filled": 40,
    "total_seats": 50,
    "pricing": {
      "monthly": 10500,
      "deposit": 22000,
      "currency": "INR"
    },
    "services": ["AC", "Smart TV", "Housekeeping"],
    "owner": "Urban Stays",
    "features": ["Modern Interiors", "Security Guard"],
    "rating": 4.5,
    "comments": [
      { "user": "Deepak S.", "text": "High standard living.", "rating": 5 }
    ]
  },
  {
    "id": 36,
    "name": "Dhankawadi South Stay",
    "description": "Close to PICT college and Satara Road.",
    "city": "Pune",
    "address": "Dhankawadi, Pune, Maharashtra 411043",
    "images": [
      "https://images.unsplash.com/photo-1523908511403-7fc7b252095e?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Fast Filling",
    "seats_remaining": 5,
    "seats_filled": 55,
    "total_seats": 60,
    "pricing": {
      "monthly": 5800,
      "deposit": 10000,
      "currency": "INR"
    },
    "services": ["Mess", "Study Room"],
    "owner": "Mr. Jagtap",
    "features": ["Student Community", "Low Cost"],
    "rating": 3.9,
    "comments": [
      { "user": "Ashish M.", "text": "Mess food is average, but stay is good.", "rating": 3 }
    ]
  },
  {
    "id": 37,
    "name": "Koregaon Park Luxury Suites",
    "description": "High-end student accommodation in KP.",
    "city": "Pune",
    "address": "North Main Road, KP, Pune, Maharashtra 411001",
    "images": [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Open",
    "seats_remaining": 5,
    "seats_filled": 15,
    "total_seats": 20,
    "pricing": {
      "monthly": 15000,
      "deposit": 45000,
      "currency": "INR"
    },
    "services": ["AC", "Clubhouse", "Concierge"],
    "owner": "KP Residences",
    "features": ["Posh Location", "International Standards"],
    "rating": 4.8,
    "comments": [
      { "user": "Sara W.", "text": "Absolutely beautiful place.", "rating": 5 }
    ]
  },
  {
    "id": 38,
    "name": "Kondhwa Hillside Hostel",
    "description": "Near VIIT/VICT colleges, airy and open.",
    "city": "Pune",
    "address": "Kondhwa Budruk, Pune, Maharashtra 411048",
    "images": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Open",
    "seats_remaining": 15,
    "seats_filled": 35,
    "total_seats": 50,
    "pricing": {
      "monthly": 6200,
      "deposit": 12000,
      "currency": "INR"
    },
    "services": ["Mess", "Shuttle Bus"],
    "owner": "Mr. Khan",
    "features": ["Big Playground", "Medical Aid"],
    "rating": 4.0,
    "comments": [
      { "user": "Farhan A.", "text": "Good facilities for engineering students.", "rating": 4 }
    ]
  },
  {
    "id": 39,
    "name": "Deccan Gymkhana Old Charm",
    "description": "Vintage bungalow converted for students.",
    "city": "Pune",
    "address": "Prabhat Road, Deccan, Pune, Maharashtra 411004",
    "images": [
      "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Waitlist",
    "seats_remaining": 0,
    "seats_filled": 12,
    "total_seats": 12,
    "pricing": {
      "monthly": 8800,
      "deposit": 25000,
      "currency": "INR"
    },
    "services": ["Home Food", "Garden"],
    "owner": "Mrs. Gokhale",
    "features": ["Safe Area", "Cultural Hub"],
    "rating": 4.9,
    "comments": [
      { "user": "Tanvi D.", "text": "Best PG experience ever.", "rating": 5 }
    ]
  },
  {
    "id": 40,
    "name": "Balewadi Stadium View",
    "description": "Sports-focused hostel near the stadium.",
    "city": "Pune",
    "address": "Balewadi High Street, Pune, Maharashtra 411045",
    "images": [
      "https://images.unsplash.com/photo-1496417263034-38ec4f0d6b21?auto=format&fit=crop&w=800&q=80"
    ],
    "booking_status": "Open",
    "seats_remaining": 8,
    "seats_filled": 32,
    "total_seats": 40,
    "pricing": {
      "monthly": 9200,
      "deposit": 18000,
      "currency": "INR"
    },
    "services": ["Gym", "Healthy Mess"],
    "owner": "FitLife Hostels",
    "features": ["Jogging Track", "Modern Amenities"],
    "rating": 4.3,
    "comments": [
      { "user": "Arjun R.", "text": "Great for fitness enthusiasts.", "rating": 4 }
    ]
  }
  ];

  return hostels;
}
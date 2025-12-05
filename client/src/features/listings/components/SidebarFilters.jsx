import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, Star, RotateCcw, Check, X } from "lucide-react";

// --- CONSTANTS ---
const AMENITIES_LIST = [
  { id: "wifi", label: "WiFi" },
  { id: "ac", label: "AC" },
  { id: "mess", label: "Mess / Food" },
  { id: "gym", label: "Gym" },
  { id: "laundry", label: "Laundry" },
  { id: "tv", label: "TV" },
];

const LOCATIONS = ["Hinjewadi", "Kothrud", "Viman Nagar", "Baner", "Wakad", "Koregaon Park"];

export const SidebarFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileOpen, setIsMobileOpen] = useState(false); // New State for Mobile Menu

  // --- LOCAL STATE ---
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [priceRange, setPriceRange] = useState({
    min: searchParams.get("min_price") || "",
    max: searchParams.get("max_price") || "",
  });
  const [selectedGender, setSelectedGender] = useState(searchParams.get("gender") || "any");
  const initialAmenities = searchParams.get("amenities") ? searchParams.get("amenities").split(",") : [];
  const [selectedAmenities, setSelectedAmenities] = useState(initialAmenities);
  const [minRating, setMinRating] = useState(searchParams.get("rating") || 0);
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "recommended");

  // --- HANDLERS ---
  const toggleAmenity = (id) => {
    if (selectedAmenities.includes(id)) {
      setSelectedAmenities(selectedAmenities.filter((item) => item !== id));
    } else {
      setSelectedAmenities([...selectedAmenities, id]);
    }
  };

  const handleApplyFilters = () => {
    const params = {};
    if (location) params.location = location;
    if (priceRange.min) params.min_price = priceRange.min;
    if (priceRange.max) params.max_price = priceRange.max;
    if (selectedGender !== "any") params.gender = selectedGender;
    if (selectedAmenities.length > 0) params.amenities = selectedAmenities.join(",");
    if (minRating > 0) params.rating = minRating;
    if (sortBy !== "recommended") params.sort = sortBy;

    setSearchParams(params);
    setIsMobileOpen(false); // Close mobile menu after applying
  };

  const handleReset = () => {
    setLocation("");
    setPriceRange({ min: "", max: "" });
    setSelectedGender("any");
    setSelectedAmenities([]);
    setMinRating(0);
    setSortBy("recommended");
    setSearchParams({});
    setIsMobileOpen(false);
  };

  // --- REUSABLE FORM CONTENT (To avoid duplication) ---
  const FilterFormContent = (
    <div className="space-y-6">
      {/* 1. SORT BY */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Sort By</label>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-rose-500"
        >
          <option value="recommended">Recommended</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <hr className="border-gray-100" />

      {/* 2. LOCATION */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
        <div className="flex flex-wrap gap-2">
          {LOCATIONS.map((loc) => (
            <button
              key={loc}
              onClick={() => setLocation(location === loc ? "" : loc)}
              className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                location === loc 
                  ? "bg-rose-500 text-white border-rose-500" 
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>

      {/* 3. PRICE RANGE */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Budget (₹)</label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
            className="w-1/2 p-2 border rounded-lg text-sm focus:ring-2 focus:ring-rose-500 outline-none"
          />
          <input
            type="number"
            placeholder="Max"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
            className="w-1/2 p-2 border rounded-lg text-sm focus:ring-2 focus:ring-rose-500 outline-none"
          />
        </div>
      </div>

      {/* 4. GENDER */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Suitable For</label>
        <div className="flex bg-gray-100 p-1 rounded-lg">
          {["any", "boys", "girls"].map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGender(g)}
              className={`flex-1 py-1.5 text-sm rounded-md capitalize transition-all ${
                selectedGender === g 
                  ? "bg-white text-gray-900 shadow-sm font-medium" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* 5. RATING */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Minimum Rating</label>
        <div className="space-y-2">
          {[4, 3, 2].map((star) => (
            <label key={star} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input
                type="radio"
                name="rating"
                checked={Number(minRating) === star}
                onChange={() => setMinRating(star)}
                className="accent-rose-500 w-4 h-4"
              />
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < star ? "currentColor" : "none"} strokeWidth={i < star ? 0 : 2} className={i >= star ? "text-gray-300" : ""} />
                ))}
              </div>
              <span className="text-sm text-gray-600">& Up</span>
            </label>
          ))}
        </div>
      </div>

      {/* 6. AMENITIES */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Amenities</label>
        <div className="grid grid-cols-2 gap-2">
          {AMENITIES_LIST.map((amenity) => (
            <label key={amenity.id} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-900 bg-gray-50 p-2 rounded border border-transparent hover:border-gray-200">
              <div className={`w-4 h-4 border rounded flex items-center justify-center transition-colors ${selectedAmenities.includes(amenity.id) ? "bg-rose-500 border-rose-500 text-white" : "border-gray-300 bg-white"}`}>
                {selectedAmenities.includes(amenity.id) && <Check size={10} />}
              </div>
              <input
                type="checkbox"
                className="hidden"
                checked={selectedAmenities.includes(amenity.id)}
                onChange={() => toggleAmenity(amenity.id)}
              />
              {amenity.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* --- MOBILE TOGGLE BUTTON (Visible only on small screens) --- */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold shadow-sm"
        >
          <Filter size={18} />
          Filters & Sort
        </button>
      </div>

      {/* --- DESKTOP SIDEBAR (Visible md+) --- */}
      <div className="hidden md:block bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
        <div className="flex justify-between items-center mb-6">
          <h2 className="flex items-center gap-2 font-bold text-xl text-gray-800">
            <Filter size={20} /> Filters
          </h2>
          <button onClick={handleReset} className="text-sm text-gray-500 hover:text-rose-500 flex items-center gap-1 transition-colors">
            <RotateCcw size={14} /> Reset
          </button>
        </div>
        
        {FilterFormContent}
        
        <div className="mt-8 pt-4 border-t">
            <button
            onClick={handleApplyFilters}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-rose-500/30 transition-all active:scale-95"
            >
            Apply Filters
            </button>
        </div>
      </div>

      {/* --- MOBILE FULLSCREEN MODAL (Visible when isMobileOpen is true) --- */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-white animate-in slide-in-from-bottom duration-200">
          
          {/* Mobile Header */}
          <div className="flex justify-between items-center p-4 border-b bg-white">
            <h2 className="font-bold text-lg">Filters</h2>
            <button onClick={() => setIsMobileOpen(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <X size={20} />
            </button>
          </div>

          {/* Mobile Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-5 pb-24">
             {FilterFormContent}
          </div>

          {/* Mobile Footer (Fixed Bottom) */}
          <div className="p-4 border-t bg-white flex gap-3">
             <button 
                onClick={handleReset}
                className="flex-1 py-3 text-gray-600 font-semibold border rounded-xl"
             >
                Reset
             </button>
             <button 
                onClick={handleApplyFilters}
                className="flex-[2] py-3 bg-rose-500 text-white font-bold rounded-xl shadow-lg shadow-rose-500/30"
             >
                Apply
             </button>
          </div>
        </div>
      )}
    </>
  );
};
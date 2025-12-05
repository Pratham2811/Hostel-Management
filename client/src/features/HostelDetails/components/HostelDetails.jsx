import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { 
  Star, 
  MapPin, 
  Share, 
  Heart, 
  Wifi, 
  Zap, 
  ShieldCheck, 
  UserCircle,
} from "lucide-react";
import { getHostelDetails } from "../services/details.api";

export default function HostelDetails() {
  const { id } = useParams();
  const [hostel, setHostel] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchHostel = async () => {
    try {
      // Assuming getHostelDetails handles errors gracefully or returns null on fail
      const response = await getHostelDetails(id);
      setHostel(response);
    } catch (error) {
      console.error("Failed to fetch hostel details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHostel();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-slate-500 animate-pulse">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-4 border-rose-500 border-t-transparent rounded-full animate-spin"></div>
          <p>Loading details...</p>
        </div>
      </div>
    );
  }

  if (!hostel) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-slate-500">
        <h2 className="text-2xl font-bold text-slate-800">Not Found</h2>
        <p>We couldn't find the hostel you were looking for.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 font-sans text-slate-900">
      
      {/* 1. TITLE HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 leading-tight">
          {hostel.name}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm font-medium text-slate-700">
          
          {/* Rating & Location */}
          <div className="flex flex-wrap items-center gap-2 text-slate-800">
            <div className="flex items-center gap-1 font-semibold">
              <Star size={16} className="fill-slate-900" />
              <span>{hostel.rating}</span>
            </div>
            <span className="hidden sm:inline">·</span>
            <span className="underline decoration-slate-400 cursor-pointer hover:text-rose-600 transition">
              {hostel.reviewCount} reviews
            </span>
            <span className="hidden sm:inline">·</span>
            <div className="flex items-center gap-1 text-slate-600 underline decoration-slate-300 cursor-pointer hover:text-rose-600 transition">
              <MapPin size={16} /> 
              <span className="truncate max-w-[200px] sm:max-w-none">{hostel.city}, {hostel.address}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 sm:gap-4">
            <button className="flex items-center gap-2 hover:bg-slate-100 px-3 py-2 rounded-lg underline decoration-transparent hover:decoration-slate-900 transition-all">
              <Share size={16} /> 
              <span className="hidden sm:inline">Share</span>
            </button>
            <button className="flex items-center gap-2 hover:bg-slate-100 px-3 py-2 rounded-lg underline decoration-transparent hover:decoration-slate-900 transition-all">
              <Heart size={16} /> 
              <span className="hidden sm:inline">Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. IMAGE GRID (Responsive) */}
      {/* Mobile: 1 image. Tablet: 1 Image. Desktop: Mosaic */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8 md:mb-12 shadow-sm">
        
        {/* Main Hero Image */}
        <div className="col-span-1 lg:col-span-2 h-full relative group cursor-pointer">
          <img 
            src={hostel.images[0]} 
            className="w-full h-full object-cover hover:brightness-95 transition duration-300" 
            alt="Main view" 
          />
        </div>

        {/* Secondary Images (Hidden on mobile/tablet) */}
        <div className="hidden lg:grid grid-cols-2 gap-2 col-span-2 h-full">
           {hostel.images.slice(1, 5).map((img, i) => (
             <div key={i} className="relative h-full overflow-hidden cursor-pointer group">
               <img 
                 src={img} 
                 className="w-full h-full object-cover hover:scale-105 hover:brightness-95 transition duration-500" 
                 alt={`Gallery ${i}`} 
               />
             </div>
           ))}
        </div>
      </div>

      {/* 3. MAIN CONTENT LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
        
        {/* --- LEFT COLUMN: DETAILS --- */}
        <div className="lg:col-span-2">
          
          {/* Host Info */}
          <div className="flex justify-between items-center border-b border-slate-200 pb-6 mb-6">
             <div>
               <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                 Hosted by {hostel.host_name || "Host"}
               </h2>
               <p className="text-slate-500 text-sm md:text-base mt-1">
                 Superhost · 3 years hosting
               </p>
             </div>
             <div className="bg-slate-100 p-3 rounded-full">
               <UserCircle size={40} className="text-slate-400" />
             </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6 border-b border-slate-200 pb-8 mb-8">
             <div className="flex gap-4 items-start">
                <Wifi className="text-slate-700 mt-1 shrink-0" size={24} />
                <div>
                   <h3 className="font-semibold text-slate-900">Fast Wifi</h3>
                   <p className="text-slate-500 text-sm">Reliable speed for all your devices.</p>
                </div>
             </div>
             <div className="flex gap-4 items-start">
                <ShieldCheck className="text-slate-700 mt-1 shrink-0" size={24} />
                <div>
                   <h3 className="font-semibold text-slate-900">Secure Campus</h3>
                   <p className="text-slate-500 text-sm">24/7 Security guard on duty and CCTV surveillance.</p>
                </div>
             </div>
          </div>

          {/* Description */}
          <div className="border-b border-slate-200 pb-8 mb-8">
             <h2 className="text-xl font-semibold mb-4">About this place</h2>
             <p className="text-slate-700 leading-relaxed text-base md:text-lg">
               {hostel.description}
             </p>
          </div>

          {/* Amenities Grid */}
          <div className="mb-10">
             <h2 className="text-xl font-semibold mb-6">Amenities</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {hostel.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700">
                    <Zap size={20} className="text-slate-900 shrink-0" /> 
                    <span className="text-base">{f}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: BOOKING CARD --- */}
        <div className="relative">
           {/* Sticky Wrapper - Only sticky on large screens */}
           <div className="lg:sticky lg:top-28 w-full">
             <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-6">
               
               {/* Pricing Header */}
               <div className="flex justify-between items-baseline mb-6">
                  <div className="flex items-baseline gap-1">
                     <span className="text-2xl font-bold text-slate-900">₹{hostel.pricing.monthly}</span>
                     <span className="text-slate-500 font-medium">/ month</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold">
                     <Star size={14} className="fill-slate-900" /> 
                     <span>{hostel.rating}</span>
                  </div>
               </div>

               {/* Date Picker Dummy */}
               <div className="border border-slate-400 rounded-xl mb-4 overflow-hidden">
                  <div className="grid grid-cols-2 border-b border-slate-400">
                     <div className="p-3 border-r border-slate-400 hover:bg-slate-50 cursor-pointer transition">
                        <label className="text-[10px] font-bold uppercase block text-slate-800">Check-in</label>
                        <input type="date" className="w-full text-sm outline-none bg-transparent cursor-pointer" />
                     </div>
                     <div className="p-3 hover:bg-slate-50 cursor-pointer transition">
                        <label className="text-[10px] font-bold uppercase block text-slate-800">Check-out</label>
                        <input type="date" className="w-full text-sm outline-none bg-transparent cursor-pointer" />
                     </div>
                  </div>
                  <div className="p-3 hover:bg-slate-50 cursor-pointer transition">
                     <label className="text-[10px] font-bold uppercase block text-slate-800">Guests</label>
                     <div className="text-sm text-slate-600">1 Guest</div>
                  </div>
               </div>

               {/* Reserve Button */}
               <button className="w-full bg-rose-600 hover:bg-rose-700 active:scale-[0.98] text-white font-bold py-3.5 rounded-xl transition duration-200 mb-4 shadow-lg shadow-rose-600/20">
                  Reserve
               </button>

               <div className="text-center text-sm text-slate-500 mb-6">You won't be charged yet</div>

               {/* Price Breakdown */}
               <div className="space-y-3">
                  <div className="flex justify-between text-slate-700">
                     <span className="underline decoration-slate-300">₹{hostel.pricing.monthly} x 6 months</span>
                     <span>₹{hostel.pricing.monthly * 6}</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                     <span className="underline decoration-slate-300">Service fee</span>
                     <span>₹0</span>
                  </div>
                  <hr className="border-slate-200 my-4" />
                  <div className="flex justify-between font-bold text-lg text-slate-900">
                     <span>Total</span>
                     <span>₹{hostel.pricing.monthly * 6}</span>
                  </div>
               </div>

             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
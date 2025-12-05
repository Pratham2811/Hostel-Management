import React, { useState } from "react";
import { Star, Heart, ChevronLeft, ChevronRight } from "lucide-react";

export default function HostelCard({ hostel }) {
  if (!hostel) return null;

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Destructure with fallbacks
  const {
    id,
    name = "Hostel Name",
    city = "City",
    pricing = {},
    rating = "New",
    images = []
  } = hostel;

  // Fallback image if array is empty
  const displayImages = images.length > 0 
    ? images 
    : ["https://placehold.co/600x600/e2e8f0/94a3b8?text=No+Image"];

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: pricing?.currency || "INR",
    maximumFractionDigits: 0,
  }).format(pricing?.monthly || 0);

  // --- Handlers ---

  const nextImage = (e) => {
    e.preventDefault(); // Prevent clicking the parent link
    setCurrentImgIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImgIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  return (
    <div className="group flex flex-col gap-3 w-full cursor-pointer">
      
      {/* --- IMAGE CAROUSEL SECTION --- */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-200">
        <img
          src={displayImages[currentImgIndex]}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Wishlist Heart */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 z-10 transition-transform active:scale-90"
        >
          <Heart
            size={24}
            className={`${
              isLiked ? "fill-rose-500 text-rose-500" : "fill-black/50 text-white"
            } stroke-[2px]`}
          />
        </button>

        {/* Carousel Arrows (Show only on hover & if multiple images) */}
        {displayImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/90 p-1.5 text-black opacity-0 shadow-md transition-opacity group-hover:opacity-100 hover:scale-110 disabled:opacity-0"
            >
              <ChevronLeft size={16} strokeWidth={3} />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/90 p-1.5 text-black opacity-0 shadow-md transition-opacity group-hover:opacity-100 hover:scale-110"
            >
              <ChevronRight size={16} strokeWidth={3} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {displayImages.slice(0, 5).map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full shadow-sm transition-all ${
                    idx === currentImgIndex
                      ? "bg-white w-1.5"
                      : "bg-white/60 w-1.5 group-hover:w-1.5"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* --- INFO SECTION --- */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-gray-900 text-[15px] truncate pr-2">
            {city}, India
          </h3>
          <div className="flex items-center gap-1 text-[15px]">
            <Star size={14} className="fill-black text-black" />
            <span className="font-light text-gray-900">{rating}</span>
          </div>
        </div>

        <p className="text-[15px] text-gray-500 leading-4 truncate">
          {name}
        </p>
        
        <p className="text-[15px] text-gray-500 leading-4">
          Available now
        </p>

        <div className="mt-1 flex items-baseline gap-1 text-[15px]">
          <span className="font-semibold text-gray-900">{formattedPrice}</span>
          <span className="text-gray-900 font-light">month</span>
        </div>
      </div>
    </div>
  );
}
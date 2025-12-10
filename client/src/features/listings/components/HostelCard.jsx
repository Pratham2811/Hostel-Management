import React, { useState, useCallback } from "react";
import { Star, Heart, ChevronLeft, ChevronRight } from "lucide-react";

export default function HostelCard({ hostel, onClick }) {
  // 1. Safety Check: If data is missing, don't crash the app.
  if (!hostel) return null;

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Track hover state for performance

  // Destructure with default values to prevent "undefined" errors
  const {
    id,
    name = "Hostel Name",
    city = "City",
    pricing = {},
    rating = "New",
    images = []
  } = hostel;

  const displayImages = images.length > 0 
    ? images 
    : ["https://placehold.co/600x600/e2e8f0/94a3b8?text=No+Image"];

  // 2. Localization: Robust formatting for different locales/currencies
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: pricing?.currency || "INR",
    maximumFractionDigits: 0,
  }).format(pricing?.monthly || 0);

  // --- Handlers (Memoized for performance) ---
  
  const handleLike = useCallback((e) => {
    e.preventDefault(); // Stop link navigation
    e.stopPropagation(); // Stop bubbling
    setIsLiked((prev) => !prev);
    // API call to save wishlist state would go here
  }, []);

  const nextImage = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  }, [displayImages.length]);

  const prevImage = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  }, [displayImages.length]);

  return (
    <article 
      className="group flex flex-col w-full cursor-pointer isolate" // 'isolate' helps with z-index stacking context
      onClick={onClick} // Allow parent to handle navigation
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* --- IMAGE SECTION --- */}
      <div className="relative aspect-[20/19] w-full overflow-hidden rounded-2xl bg-gray-200 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-300/50">
        
        {/* 3. Performance: Lazy Load Images */}
        <img
          src={displayImages[currentImgIndex]}
          alt={`${name} in ${city}`} // SEO friendly alt text
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
        />

        {/* Gradient for text contrast */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

        {/* 4. Accessibility: Aria Labels for Screen Readers */}
        <button
          onClick={handleLike}
          aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/10 backdrop-blur-md transition-transform active:scale-90 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <Heart
            size={19}
            className={`${
              isLiked ? "fill-rose-500 text-rose-500" : "fill-black/20 text-white"
            } stroke-[2px] transition-colors`}
          />
        </button>

        {/* Carousel Logic: Only render if multiple images exist */}
        {displayImages.length > 1 && (
          <>
            {/* Show arrows only on desktop hover, or always on mobile if needed */}
            <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 lg:opacity-0'}`}>
                <button
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-800 shadow-lg transition-all hover:scale-105 hover:bg-white disabled:opacity-0"
                >
                <ChevronLeft size={16} strokeWidth={2.5} />
                </button>
                <button
                onClick={nextImage}
                aria-label="Next image"
                className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-800 shadow-lg transition-all hover:scale-105 hover:bg-white"
                >
                <ChevronRight size={16} strokeWidth={2.5} />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 pointer-events-none">
              {displayImages.slice(0, 5).map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full shadow-sm backdrop-blur-sm transition-all duration-300 ${
                    idx === currentImgIndex
                      ? "w-4 bg-white"
                      : "w-1.5 bg-white/60"
                  }`}
                  aria-hidden="true" // Decorative only
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* --- INFO SECTION --- */}
      <div className="mt-3 flex flex-col gap-0.5 px-1">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-gray-900 text-base leading-tight truncate pr-2">
            {city}, India
          </h3>
          <div className="flex items-center gap-1" aria-label={`Rated ${rating} stars`}>
            <Star size={14} className="fill-black text-black" aria-hidden="true" />
            <span className="text-sm font-medium text-gray-900">{rating}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 truncate">{name}</p>
        <p className="text-sm text-gray-500">Available now</p>

        <div className="mt-1.5 flex items-baseline gap-1">
          <span className="font-semibold text-gray-900 text-[15px]">
            {formattedPrice}
          </span>
          <span className="text-gray-500 text-sm font-normal">
             month
          </span>
        </div>
      </div>
    </article>
  );
}
import React from "react"; // No more useState/useEffect for data fetching here
import HostelCard from "./HostelCard";
import { Link } from "react-router-dom";

// Accept 'data' and 'loading' from Parent
export const HostelLists = ({ data, loading }) => {
  
  return (
    <section className="px-6 py-8 md:px-10 lg:px-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-10">
        
        {loading ? (
          // Skeleton Loading
          [...Array(8)].map((_, i) => <SkeletonCard key={i} />)
        ) : (
          // Real Data
          data.length > 0 ? (
            data.map((hostel) => (
              <Link key={hostel.id} to={`${hostel.id}`}>
                <HostelCard hostel={hostel} />
              </Link>
            ))
          ) : (
             <div className="col-span-full text-center text-gray-500 py-10">
                No hostels found matching your filters.
             </div>
          )
        )}

      </div>
    </section>
  );
};

const SkeletonCard = () => (
  <div className="flex flex-col gap-3 animate-pulse">
    <div className="aspect-square bg-gray-200 rounded-xl" />
    <div className="space-y-2">
      <div className="flex justify-between">
        <div className="h-4 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-200 rounded w-10" />
      </div>
      <div className="h-4 bg-gray-200 rounded w-1/2" />
      <div className="h-4 bg-gray-200 rounded w-1/4" />
    </div>
  </div>
);
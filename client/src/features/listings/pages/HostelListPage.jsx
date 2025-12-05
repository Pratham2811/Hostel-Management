import React, { useState, useEffect } from "react";
import { HostelLists } from "../components/HostelLists.jsx"; 
import { SidebarFilters } from "../components/SidebarFilters.jsx";
import Header from "../../../shared/components/Header.jsx";
import { getHostels } from "../services/listings.api"; // Import API here now!
import { useSearchParams } from "react-router-dom";
import {Footer} from  "../../../shared/components/Footer.jsx"
import Searchbar from "../components/Searchbar.jsx";
export const HostelListPage = () => {
  // 1. STATE LIVES HERE NOW
  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(true);
  const[searchParams]=useSearchParams();

  // 2. THE FETCH FUNCTION (Handles both initial load and filtering)
  const fetchHostelsData = async (filters) => {
    setLoading(true);
    try {
      // Assuming getHostels accepts a filter object or query string
      // If your getHostels function handles the query param creation, pass 'filters' directly
      const data = await getHostels(filters); 
      setHostels(data || []);
    } catch (error) {
      console.error("Error fetching hostels:", error);
    } finally {
      setLoading(false);
    }
  };

  // 3. INITIAL LOAD (Run once on mount)
  useEffect(() => {
    const currentFilters = Object.fromEntries([...searchParams]);
    fetchHostelsData(currentFilters); 
  }, [searchParams]);

  return (
    <>
      <Header />
      <Searchbar/>
      <main className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* --- SIDEBAR --- */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28">
                {/* 4. PASS THE FETCH FUNCTION DOWN */}
                <SidebarFilters 
                    onApply={fetchHostelsData} 
                    isLoading={loading} 
                />
              </div>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <div className="lg:col-span-3">
               <div className="lg:hidden mb-4">
                  <button className="w-full py-3 bg-white border border-gray-200 rounded-xl font-semibold text-gray-700 shadow-sm">
                    Filters
                  </button>
               </div>

              {/* 5. PASS DATA AND LOADING DOWN */}
              <HostelLists data={hostels} loading={loading} />
            </div>

          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};
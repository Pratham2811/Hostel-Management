import React, { useState } from "react";
import { 
  Search, 
  Globe, 
  Menu, 
  UserCircle, 
  LogOut, 
  User, 
  Heart, 
  Home 
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-100 transition-all duration-300">
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-14 h-20">
        
        {/* --- LEFT: LOGO --- */}
        <div className="flex-1 flex items-center cursor-pointer">
          {/* Logo Icon */}
          <div className="bg-rose-500 p-1.5 rounded-lg mr-2">
            <Home className="text-white w-5 h-5" strokeWidth={2.5} />
          </div>
          <span className="text-rose-500 text-xl font-bold tracking-tighter hidden md:block">
            dwell
          </span>
        </div>

        {/* --- CENTER: SEARCH PILL (Desktop) --- */}
        <div className="hidden md:flex items-center justify-between bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer py-2.5 px-4 min-w-[350px]">
            <div className="px-4 border-r border-gray-300 text-sm font-medium text-gray-900 truncate">
              Anywhere
            </div>
            <div className="px-4 border-r border-gray-300 text-sm font-medium text-gray-900 truncate">
              Any week
            </div>
            <div className="pl-4 pr-2 text-sm font-light text-gray-500 truncate">
              Add guests
            </div>
            <div className="bg-rose-500 p-2 rounded-full text-white ml-2">
              <Search size={14} strokeWidth={3} />
            </div>
        </div>

        {/* --- CENTER: SEARCH PILL (Mobile Fallback) --- */}
        <div className="flex md:hidden flex-1 mx-4 bg-gray-100 items-center rounded-full px-4 py-2.5">
           <Search size={18} className="text-gray-500 mr-3" />
           <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900 leading-tight">Where to?</span>
              <span className="text-[10px] text-gray-500 leading-tight">Anywhere • Any week • Add guests</span>
           </div>
        </div>

        {/* --- RIGHT: ACTIONS --- */}
        <div className="flex-1 flex items-center justify-end gap-2">
          
          <button className="hidden md:block text-sm font-medium text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full transition">
            Dwell your home
          </button>
          
          <button className="hidden md:block p-2 text-gray-700 hover:bg-gray-100 rounded-full transition">
            <Globe size={18} />
          </button>

          {/* User Menu Dropdown Trigger */}
          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 border border-gray-300 rounded-full p-1 pl-3 hover:shadow-md transition ml-1"
            >
              <Menu size={18} className="text-gray-600" />
              <UserCircle size={30} className="text-gray-500 fill-gray-200" />
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <>
                {/* Backdrop to close on click outside */}
                <div 
                  className="fixed inset-0 z-40 bg-transparent" 
                  onClick={() => setIsMenuOpen(false)} 
                />
                
                <div className="absolute right-0 top-12 mt-2 w-60 bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-2 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  <div className="px-4 py-3 border-b border-gray-100">
                     <p className="text-sm font-semibold text-gray-900">Hello, Traveler</p>
                     <p className="text-xs text-gray-500">Welcome back</p>
                  </div>

                  <div className="py-2">
                    <MenuItem icon={<User size={16}/>} label="Profile" />
                    <MenuItem icon={<Heart size={16}/>} label="Wishlist" badge="2" />
                    <MenuItem icon={<Home size={16}/>} label="Manage Listings" />
                  </div>
                  
                  <div className="border-t border-gray-100 py-2">
                    <MenuItem icon={<LogOut size={16}/>} label="Log out" isRed />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

// Helper for menu items
const MenuItem = ({ icon, label, badge, isRed }) => (
  <button className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-gray-50 transition ${isRed ? 'text-rose-500' : 'text-gray-700'}`}>
    <div className="flex items-center gap-3">
      {icon}
      <span>{label}</span>
    </div>
    {badge && <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{badge}</span>}
  </button>
);
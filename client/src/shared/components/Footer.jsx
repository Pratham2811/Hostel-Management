import React from "react";
import { 
  
  Facebook,
  Twitter,
  Instagram,
  Globe
} from "lucide-react";
export  const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-12 pt-12 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Support */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-slate-900 mb-1">Support</h3>
            <a href="#" className="text-slate-600 hover:underline">Help Centre</a>
            <a href="#" className="text-slate-600 hover:underline">Safety information</a>
            <a href="#" className="text-slate-600 hover:underline">Cancellation options</a>
            <a href="#" className="text-slate-600 hover:underline">Report a concern</a>
          </div>

          {/* Community */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-slate-900 mb-1">Community</h3>
            <a href="#" className="text-slate-600 hover:underline">Dwell.org: disaster relief</a>
            <a href="#" className="text-slate-600 hover:underline">Combating discrimination</a>
          </div>

          {/* Hosting */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-slate-900 mb-1">Hosting</h3>
            <a href="#" className="text-slate-600 hover:underline">Dwell your home</a>
            <a href="#" className="text-slate-600 hover:underline">Cover for Hosts</a>
            <a href="#" className="text-slate-600 hover:underline">Community resources</a>
          </div>

          {/* Dwell */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-slate-900 mb-1">Dwell</h3>
            <a href="#" className="text-slate-600 hover:underline">Newsroom</a>
            <a href="#" className="text-slate-600 hover:underline">New features</a>
            <a href="#" className="text-slate-600 hover:underline">Careers</a>
            <a href="#" className="text-slate-600 hover:underline">Investors</a>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-2 text-slate-500">
            <span>© 2024 Dwell, Inc.</span>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
          
          <div className="flex items-center gap-6 font-medium text-slate-900">
            <div className="flex items-center gap-2 cursor-pointer hover:underline">
              <Globe size={16} />
              <span>English (IN)</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:underline">
              <span>₹ INR</span>
            </div>
            <div className="flex items-center gap-4">
              <Facebook size={18} className="cursor-pointer hover:text-slate-600" />
              <Twitter size={18} className="cursor-pointer hover:text-slate-600" />
              <Instagram size={18} className="cursor-pointer hover:text-slate-600" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
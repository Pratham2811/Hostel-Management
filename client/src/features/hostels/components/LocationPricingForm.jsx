import React from "react";
import { MapPin, DollarSign } from "lucide-react";

export default function LocationPricingForm({ city, price, address, onChange, error }) {
  return (
    <>
      <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
        <MapPin className="text-rose-500" size={24} />
        Location & Pricing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">City</label>
          <select
            name="city"
            value={city}
            onChange={(e) => onChange("city", e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition bg-white"
          >
            <option value="">Select City</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Kota">Kota</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Monthly Rent (₹)</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => onChange("price", e.target.value)}
              required
              placeholder="12500"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
            />
          </div>
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">Full Address</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => onChange("address", e.target.value)}
            required
            placeholder="Street, Area, Landmark"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
          />
        </div>
      </div>

      {error && <div className="text-sm text-red-600 mt-3">{error}</div>}
    </>
  );
}

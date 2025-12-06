import React from "react";
import { Home } from "lucide-react";

export default function BasicDetailsForm({ name, host_name, seats, description, onChange, error }) {
  return (
    <>
      <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
        <Home className="text-rose-500" size={24} />
        Basic Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">Hostel Name</label>
          <input
            name="name"
            value={name}
            onChange={(e) => onChange("name", e.target.value)}
            required
            placeholder="e.g. Zolo Stays - Premium Student Living"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Host Name</label>
          <input
            name="host_name"
            value={host_name}
            onChange={(e) => onChange("host_name", e.target.value)}
            required
            placeholder="e.g. Ramesh"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Total Seats / Capacity</label>
          <input
            name="seats"
            type="number"
            value={seats}
            onChange={(e) => onChange("seats", e.target.value)}
            placeholder="e.g. 40"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
          <textarea
            name="description"
            rows="4"
            value={description}
            onChange={(e) => onChange("description", e.target.value)}
            placeholder="Tell us about the vibe, the crowd, and what makes your hostel special..."
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
          />
        </div>
      </div>

      {error && <div className="text-sm text-red-600 mt-3">{error}</div>}
    </>
  );
}

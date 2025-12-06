import React, { useState } from "react";
import { 
  Upload, 
  X, 
  Plus, 
  MapPin, 
  DollarSign, 
  Home, 
  Wifi, 
  Zap, 
  Coffee, 
  ShieldCheck, 
  Wind, 
  Save 
} from "lucide-react";

export default function HostelRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    host_name: "",
    city: "",
    address: "",
    description: "",
    price: "",
    seats: "",
    features: [],
    images: []
  });

  const amenitiesOptions = [
    { id: "High-Speed Wifi", icon: <Wifi size={16} /> },
    { id: "Power Backup", icon: <Zap size={16} /> },
    { id: "Meals Included", icon: <Coffee size={16} /> },
    { id: "Housekeeping", icon: <Home size={16} /> },
    { id: "24/7 Security", icon: <ShieldCheck size={16} /> },
    { id: "Air Conditioning", icon: <Wind size={16} /> },
    { id: "Washing Machine", icon: <div className="text-xs font-bold border border-current rounded px-1">WM</div> }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleFeature = (feature) => {
    if (formData.features.includes(feature)) {
      setFormData({
        ...formData,
        features: formData.features.filter((f) => f !== feature),
      });
    } else {
      setFormData({ ...formData, features: [...formData.features, feature] });
    }
  };

  // Mock Image Upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    // In a real app, you'd upload these to Firebase/S3 and get URLs back.
    // Here we just create local preview URLs.
    const newImages = files.map((file) => URL.createObjectURL(file));
    setFormData({ ...formData, images: [...formData.images, ...newImages] });
  };

  const removeImage = (index) => {
    const updatedImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: updatedImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Hostel Data:", formData);
    alert("Hostel registered successfully! (Check console for data)");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-slate-900">List your Hostel</h1>
          <p className="mt-2 text-slate-500">
            Share your space with students and travelers.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Section 1: Basic Info */}
          <div className="p-8 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <Home className="text-rose-500" size={24} />
              Basic Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">Hostel Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Zolo Stays - Premium Student Living"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Host Name</label>
                <input
                  type="text"
                  name="host_name"
                  required
                  placeholder="e.g. Ramesh"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                  value={formData.host_name}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Total Seats / Capacity</label>
                <input
                  type="number"
                  name="seats"
                  placeholder="e.g. 40"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                  value={formData.seats}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <textarea
                  name="description"
                  rows="4"
                  placeholder="Tell us about the vibe, the crowd, and what makes your hostel special..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* Section 2: Location & Price */}
          <div className="p-8 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <MapPin className="text-rose-500" size={24} />
              Location & Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">City</label>
                <select
                  name="city"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition bg-white"
                  value={formData.city}
                  onChange={handleInputChange}
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
                    required
                    placeholder="12500"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="Street, Area, Landmark"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* Section 3: Amenities */}
          <div className="p-8 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <Zap className="text-rose-500" size={24} />
              Amenities
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {amenitiesOptions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleFeature(item.id)}
                  className={`cursor-pointer flex items-center gap-3 p-4 rounded-xl border transition-all ${
                    formData.features.includes(item.id)
                      ? "bg-rose-50 border-rose-500 text-rose-700 shadow-sm"
                      : "bg-white border-gray-200 text-slate-600 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className={formData.features.includes(item.id) ? "text-rose-500" : "text-gray-400"}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium">{item.id}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Photos */}
          <div className="p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Upload className="text-rose-500" size={24} />
              Photos
            </h2>
            <p className="text-slate-500 text-sm mb-6">Upload at least 3 photos to show off your hostel.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {formData.images.map((img, idx) => (
                <div key={idx} className="relative group aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                  <img src={img} alt="Preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="absolute top-2 right-2 bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-600"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}

              <label className="aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-rose-500 hover:bg-rose-50 transition gap-2 group">
                <div className="bg-gray-100 p-3 rounded-full group-hover:bg-rose-100 transition-colors">
                  <Plus className="text-gray-400 group-hover:text-rose-500" />
                </div>
                <span className="text-sm font-medium text-gray-500 group-hover:text-rose-600">Add Photos</span>
                <input 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleImageUpload} 
                />
              </label>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-end gap-4">
            <button
              type="button"
              className="px-6 py-3 text-slate-700 font-semibold hover:bg-gray-200 rounded-xl transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold rounded-xl shadow-lg shadow-rose-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition flex items-center gap-2"
            >
              <Save size={18} />
              Register Property
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
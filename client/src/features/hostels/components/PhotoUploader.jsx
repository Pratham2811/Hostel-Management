import React, { useRef } from "react";
import { Plus, X } from "lucide-react";

/**
 * Props:
 *  - previewImages: array of preview URLs (strings)
 *  - onFilesSelected(files: File[])  -> parent handles storing File objects and previews
 *  - onRemove(index)
 */
export default function PhotoUploader({ previewImages = [], onFilesSelected, onRemove }) {
  const inputRef = useRef(null);

  function handleChange(e) {
    const files = Array.from(e.target.files || []);
    if (files.length) onFilesSelected(files);
    // reset input so same file can be uploaded again if needed
    e.target.value = "";
  }

  return (
    <>
      <h2 className="text-xl font-semibold text-slate-900 mb-2 flex items-center gap-2">
        <Plus className="text-rose-500" size={20} />
        Photos
      </h2>
      <p className="text-slate-500 text-sm mb-4">Upload at least 3 photos to show off your hostel.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {previewImages.map((img, idx) => (
          <div key={idx} className="relative group aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
            <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
            <button
              type="button"
              onClick={() => onRemove(idx)}
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
          <input ref={inputRef} type="file" multiple accept="image/*" className="hidden" onChange={handleChange} />
        </label>
      </div>
    </>
  );
}

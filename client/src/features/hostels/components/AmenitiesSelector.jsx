import React, { useEffect, useRef, useState, useMemo } from "react";
import { Search, Plus, Loader2 } from "lucide-react"; // Added Loader2
import { getAmenities, createAmenity } from "../services/hostel.service";

export default function AmenitiesSelector({ selected = [], onChange, allowCreate = false }) {
  const [q, setQ] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false); // New state to prevent double-submit
  const [error, setError] = useState(null);

  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const containerRef = useRef(null);
  const listRef = useRef(null);

  // 1. Fetch options
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getAmenities()
      .then((arr) => mounted && setOptions(arr || []))
      .catch((e) => mounted && setError(e?.message || "Failed to load amenities"))
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, []);
console.log("aminities",options);

  // 2. Memoize filter to prevent recalculation on unrelated renders
  const filtered = useMemo(() => {
    return q.trim()
      ? options.filter((o) => o.label.toLowerCase().includes(q.trim().toLowerCase()))
      : options;
  }, [q, options]);

  function isSelectedByName(name) {
    return selected.some((s) => 
      s.id ? (s.name === name) : (s.name || "").toLowerCase() === (name || "").toLowerCase()
    );
  }

  async function handleSelect(option) {
    // Prevent selection while currently creating a new tag
    if (isCreating) return;

    let newItem;
    
    // CASE A: Creating new Custom Option
    if (typeof option === "string") {
      newItem = { id: null, name: option, custom: true };
      
      if (allowCreate) {
        setIsCreating(true);
        try {
          const created = await createAmenity({ name: option });
          if (created?.id) {
            newItem = { id: created.id, name: created.name, custom: false };
            // Optional: Add new item to canonical options list so it appears in future searches
            setOptions(prev => [...prev, newItem]); 
          }
        } catch (err) {
          console.warn("Create amenity failed, using local custom tag:", err);
        } finally {
          setIsCreating(false);
        }
      }
    } 
    // CASE B: Selecting existing Option
    else {
      newItem = { id: option.id ?? null, name: option.name ?? String(option) };
    }

    // Update Parent
    if (!isSelectedByName(newItem.name)) {
      onChange([...selected, newItem]);
    }

    // Reset UI
    setQ("");
    setOpen(false);
    setActiveIdx(-1);
  }

  function handleRemove(index) {
    const copy = [...selected];
    copy.splice(index, 1);
    onChange(copy);
  }

  // Click outside
  useEffect(() => {
    function onDocClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Keyboard Navigation
  function onKeyDown(e) {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      setActiveIdx(0);
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIdx((prev) => Math.min(prev + 1, filtered.length - 1));
        scrollToActive();
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIdx((prev) => Math.max(prev - 1, 0));
        scrollToActive();
        break;
      case "Enter":
        e.preventDefault();
        if (activeIdx >= 0 && filtered[activeIdx]) {
          handleSelect(filtered[activeIdx]);
        } else if (q.trim()) {
          handleSelect(q.trim());
        }
        break;
      case "Escape":
        setOpen(false);
        setActiveIdx(-1);
        break;
      default:
        break;
    }
  }

  function scrollToActive() {
    requestAnimationFrame(() => {
      if (!listRef.current || activeIdx < 0) return;
      const activeEl = listRef.current.querySelector(`[data-idx="${activeIdx}"]`);
      if (activeEl) {
        // block: 'nearest' prevents the whole browser window from jumping
        activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    });
  }

  useEffect(() => {
    setActiveIdx(filtered.length > 0 ? 0 : -1);
  }, [q]); // Removed 'options' from dependency to prevent jumpiness if options update in background

  return (
    <div ref={containerRef} className="relative group" aria-expanded={open}>
      <label className="block text-sm font-medium text-slate-700 mb-2">Amenities</label>

      {/* Selected Chips */}
      <div className="flex flex-wrap gap-2 mb-3 min-h-[32px]">
        {selected.map((s, i) => (
          
          <div key={s.id ?? `${s.label}-${i}`} className="flex items-center gap-1 bg-rose-50 text-rose-700 px-3 py-1 rounded-full text-sm border border-rose-100 animate-in fade-in zoom-in duration-200">
            <span>{s.label}</span>
            {console.log(s)
            }
            <button 
              type="button" 
              onClick={() => handleRemove(i)} 
              className="ml-1 text-rose-400 hover:text-rose-900 focus:outline-none"
              aria-label={`Remove ${s.label}`}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          {isCreating ? <Loader2 className="animate-spin text-rose-500" size={16} /> : <Search size={16} className="text-gray-400" />}
        </div>

        <input
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-controls="amenities-listbox"
          aria-activedescendant={activeIdx >= 0 ? `amenity-${activeIdx}` : undefined}
          value={q}
          disabled={isCreating}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onKeyDown={onKeyDown}
          onFocus={() => setOpen(true)}
          placeholder="Search or add amenities..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
        />
      </div>

      {/* Dropdown */}
      {open && (
        <ul
          ref={listRef}
          id="amenities-listbox"
          role="listbox"
          className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-auto"
        >
          {loading && <li className="p-3 text-sm text-gray-500 flex items-center gap-2"><Loader2 className="animate-spin" size={14} /> Loading...</li>}

          {!loading && filtered.length === 0 && !q.trim() && (
            <li className="p-3 text-sm text-gray-500">Start typing to search...</li>
          )}

          {!loading && filtered.map((opt, idx) => {
            const alreadySelected = isSelectedByName(opt.label);
            const isActive = idx === activeIdx;
            return (
              <li
                key={opt.id ?? idx}
                id={`amenity-${idx}`}
                role="option"
                aria-selected={isActive}
                data-idx={idx}
                onClick={() => handleSelect(opt)}
                className={`cursor-pointer w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${
                  isActive ? "bg-rose-50 text-rose-900" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className={alreadySelected ? "opacity-50 line-through" : ""}>{opt.label}</span>
                {alreadySelected && <span className="text-xs text-gray-400 font-medium">Selected</span>}
              </li>
            );
          })}

          {/* Custom Add Option */}
          {!loading && q.trim() && !filtered.some(o => o.name.toLowerCase() === q.trim().toLowerCase()) && (
            <li 
              role="option"
              aria-selected={activeIdx === filtered.length} // logic might vary based on how you index this
              className="border-t px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-rose-50 group"
              onClick={() => handleSelect(q.trim())}
            >
              <div className="text-sm text-gray-600 group-hover:text-rose-700">
                Create <strong>"{q.trim()}"</strong>
              </div>
              <div className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded group-hover:bg-rose-200 group-hover:text-rose-800">
                <Plus size={12} /> Add
              </div>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
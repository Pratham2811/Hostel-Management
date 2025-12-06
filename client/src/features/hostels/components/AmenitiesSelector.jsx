// src/features/hostelRegistration/components/AmenitiesSelector.jsx
import React, { useEffect, useRef, useState } from "react";
import { Search, Plus } from "lucide-react";
import { getAmenities, createAmenity } from "../services/hostel.service";

/**
 * Props:
 *  - selected: array of { id?, name, custom? }
 *  - onChange: function(newSelectedArray)
 *  - allowCreate: boolean
 */
export default function AmenitiesSelector({ selected = [], onChange, allowCreate = false }) {
  const [q, setQ] = useState("");
  const [options, setOptions] = useState([]); // canonical list from backend
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1); // keyboard active option
  const containerRef = useRef(null);
  const listRef = useRef(null);

  // fetch options on mount
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getAmenities()
      .then((arr) => mounted && setOptions(arr || []))
      .catch((e) => mounted && setError(e?.message || "Failed to load amenities"))
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, []);

  // computed filtered options (client-side). For large lists, call API with q.
  const filtered = q.trim()
    ? options.filter((o) => o.name.toLowerCase().includes(q.trim().toLowerCase()))
    : options;

  // helper to test if a name is already selected (case-insensitive)
  function isSelectedByName(name) {
    return selected.some((s) => (s.id ? s.id === name || s.name === name : (s.name || "").toLowerCase() === (name || "").toLowerCase()));
  }

  // select an option object OR free-text string
  async function handleSelect(option) {
    let newItem;
    if (typeof option === "string") {
      newItem = { id: null, name: option, custom: true };
      if (allowCreate) {
        try {
          const created = await createAmenity({ name: option });
          if (created && (created.id || created.name)) {
            newItem = { id: created.id ?? null, name: created.name ?? option, custom: !(created.id) };
          }
        } catch (err) {
          // failed to create - keep as custom (local)
          console.warn("create amenity failed:", err);
        }
      }
    } else {
      newItem = { id: option.id ?? null, name: option.name ?? String(option) };
    }

    if (!isSelectedByName(newItem.name)) {
      onChange([...selected, newItem]);
    }
    setQ("");
    setOpen(false);
    setActiveIdx(-1);
  }

  // remove selected by index
  function handleRemove(index) {
    const copy = [...selected];
    copy.splice(index, 1);
    onChange(copy);
  }

  // click outside to close
  useEffect(() => {
    function onDocClick(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // keyboard handlers
  function onKeyDown(e) {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      setActiveIdx(0);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((prev) => Math.min(prev + 1, Math.max(0, filtered.length - 1)));
      scrollToActive();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((prev) => Math.max(prev - 1, 0));
      scrollToActive();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIdx >= 0 && filtered[activeIdx]) {
        handleSelect(filtered[activeIdx]);
      } else if (q.trim()) {
        handleSelect(q.trim());
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      setActiveIdx(-1);
    }
  }

  // scroll the active option into view inside the dropdown
  function scrollToActive() {
    requestAnimationFrame(() => {
      if (!listRef.current || activeIdx < 0) return;
      const container = listRef.current;
      const activeEl = container.querySelector(`[data-idx="${activeIdx}"]`);
      if (activeEl) activeEl.scrollIntoView({ block: "nearest" });
    });
  }

  // when filtered list changes, reset active index
  useEffect(() => {
    setActiveIdx(filtered.length > 0 ? 0 : -1);
  }, [q, options]);

  return (
    <div ref={containerRef} className="relative" aria-expanded={open}>
      <label className="block text-sm font-medium text-slate-700 mb-2">Amenities</label>

      {/* selected chips */}
      <div className="flex flex-wrap gap-2 mb-3">
        {selected.map((s, i) => (
          <div key={s.id ?? s.name + i} className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full text-sm border">
            <span>{s.name}</span>
            <button type="button" onClick={() => handleRemove(i)} className="text-gray-500 hover:text-red-600" aria-label={`Remove ${s.name}`}>
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search size={16} className="text-gray-400" />
        </div>

        <input
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls="amenities-listbox"
          aria-activedescendant={activeIdx >= 0 && filtered[activeIdx] ? `amenity-${filtered[activeIdx].id ?? activeIdx}` : undefined}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onKeyDown={onKeyDown}
          onFocus={() => setOpen(true)}
          placeholder="Search or add amenities (e.g. Wifi, Meals)"
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none"
        />
      </div>

      {/* dropdown */}
      {open && (
        <div
          ref={listRef}
          id="amenities-listbox"
          role="listbox"
          className="absolute z-40 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-56 overflow-auto"
        >
          {loading && <div className="p-3 text-sm text-gray-500">Loading...</div>}

          {!loading && filtered.length === 0 && options.length === 0 && (
            <div className="p-3 text-sm text-gray-500">No amenities available</div>
          )}

          {!loading && filtered.length === 0 && options.length > 0 && (
            <div className="p-3 text-sm text-gray-500">No matches</div>
          )}

          {!loading &&
            filtered.map((opt, idx) => {
              const alreadySelected = isSelectedByName(opt.name);
              const isActive = idx === activeIdx;
              return (
                <button
                  key={opt.id ?? opt.name}
                  data-idx={idx}
                  id={`amenity-${opt.id ?? idx}`}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => handleSelect(opt)}
                  className={`w-full text-left px-3 py-2 text-sm flex items-center justify-between ${isActive ? "bg-gray-100" : "hover:bg-gray-50"}`}
                >
                  <span className={`${alreadySelected ? "text-gray-400 line-through" : "text-gray-800"}`}>{opt.name}</span>
                  {alreadySelected ? <span className="text-xs text-gray-400">Selected</span> : <span className="text-xs text-gray-500">Add</span>}
                </button>
              );
            })}

          {/* custom add row */}
          {!loading && q.trim() && !filtered.some((o) => o.name.toLowerCase() === q.trim().toLowerCase()) && (
            <div className="border-t px-3 py-2 flex items-center justify-between">
              <div className="text-sm">Add <strong>“{q.trim()}”</strong> as custom amenity</div>
              <button
                onClick={() => handleSelect(q.trim())}
                className="flex items-center gap-2 bg-rose-50 px-3 py-1 rounded text-rose-600"
              >
                <Plus size={14} /> Add
              </button>
            </div>
          )}
        </div>
      )}

      {error && <div className="text-sm text-red-600 mt-2">{error}</div>}
    </div>
  );
}

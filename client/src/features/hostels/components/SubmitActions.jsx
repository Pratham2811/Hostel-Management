import React from "react";
import { Save } from "lucide-react";

export default function SubmitActions({ submitting = false }) {
  return (
    <>
      <button
        type="button"
        onClick={() => window.history.back()}
        className="px-6 py-3 text-slate-700 font-semibold hover:bg-gray-200 rounded-xl transition"
      >
        Cancel
      </button>

      <button
        type="submit"
        disabled={submitting}
        className="px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold rounded-xl shadow-lg shadow-rose-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition flex items-center gap-2"
      >
        <Save size={18} />
        {submitting ? "Registering..." : "Register Property"}
      </button>
    </>
  );
}

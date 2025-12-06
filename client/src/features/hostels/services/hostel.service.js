// // adjust import depending on your apiClient location
// import api from "../../../services/apiClient";

// /**
//  * Returns array [{ id, name }]
//  */
// export async function getAmenities(q = "") {
//   if (typeof api.get === "function") {
//     const resp = await api.get("/api/amenities", { params: q ? { q } : {} });
//     // support both mock (array) and { data: [...] } shape
//     const payload = resp.data ?? resp;
//     return Array.isArray(payload) ? payload : (payload.data || []);
//   }
//   // fallback static
//   return [
//     { id: "wifi", name: "High-Speed Wifi" },
//     { id: "power_backup", name: "Power Backup" },
//     { id: "meals_included", name: "Meals Included" },
//     { id: "housekeeping", name: "Housekeeping" },
//   ];
// }

// /**
//  * Optionally create a new amenity (may require admin approval)
//  */
// export async function createAmenity({ name }) {
//   const resp = await api.post("/api/amenities", { name });
//   return resp.data?.data || resp.data;
// }

// /**
//  * Create listing
//  */
// export async function createListing(payload) {
//   const resp = await api.post("/api/listings", payload);
//   return resp.data?.data || resp.data;
// }

// /**
//  * Upload image using multipart/form-data or presigned URL approach.
//  * For mock dev this function returns a placeholder URL after a short delay.
//  */
// export async function uploadImage(file) {
//   // MOCK: simulate upload delay and return a placeholder or blob url
//   if (process.env.NODE_ENV === "development") {
//     await new Promise((r) => setTimeout(r, 400)); // simulate
//     // In dev return a data URL? We'll return a placeholder path
//     return "/mock/uploads/" + encodeURIComponent(file.name);
//   }

//   // PRODUCTION example (presigned) - replace with your real implementation:
//   // 1) request presigned URL: POST /api/uploads/presign { filename }
//   // 2) PUT to presigned url
//   // 3) return the public URL
//   const form = new FormData();
//   form.append("file", file);
//   const resp = await api.post("/api/uploads", form, { headers: { "Content-Type": "multipart/form-data" } });
//   return resp.data?.url || resp.data;
// }

// export default {
//   getAmenities,
//   createAmenity,
//   createListing,
//   uploadImage,
// };

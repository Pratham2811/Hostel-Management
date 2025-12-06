import { useState } from "react";
import { createListing, uploadImage, getAmenities } from "../services/hostel.service";

/**
 * Manages whole form state (preview images, File objects, selected amenities),
 * handles validation, image upload (mock or real), and final submit.
 */
export function useHostelForm(initial = {}) {
  const [formData, setFormData] = useState({
    name: "",
    host_name: "",
    city: "",
    address: "",
    description: "",
    price: "",
    seats: "",
    // selectedAmenities: array of { id?, name, custom? }
    selectedAmenities: [],
    // previewImages: URLs for preview shown in uploader
    previewImages: [],
    // _imageFiles: actual File objects to upload
    _imageFiles: [],
    ...initial,
  });

  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  function setField(name, value) {
    setFormData((s) => ({ ...s, [name]: value }));
  }

  function setSelectedAmenities(arr) {
    setFormData((s) => ({ ...s, selectedAmenities: arr }));
  }

  function addPreviewImages(files) {
    // files: File[]
    const newFiles = Array.from(files);
    const previews = newFiles.map((f) => URL.createObjectURL(f));
    setFormData((s) => ({
      ...s,
      _imageFiles: [...s._imageFiles, ...newFiles],
      previewImages: [...s.previewImages, ...previews],
    }));
  }

  function removePreviewImage(index) {
    setFormData((s) => {
      // revoke object url
      const url = s.previewImages[index];
      try { if (url.startsWith("blob:")) URL.revokeObjectURL(url); } catch (e) {}
      const previewImages = s.previewImages.filter((_, i) => i !== index);
      const _imageFiles = s._imageFiles.filter((_, i) => i !== index);
      return { ...s, previewImages, _imageFiles };
    });
  }

  function validate() {
    const e = {};
    if (!formData.name) e.basic = "Hostel name is required";
    if (!formData.city) e.location = "City is required";
    if (!formData.price) e.location = "Price is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit() {
    if (!validate()) return Promise.reject({ message: "Validation failed", errors });

    setSubmitting(true);
    try {
      // upload images sequentially or in parallel depending on backend
      const uploadedUrls = [];
      for (const file of formData._imageFiles) {
        // uploadImage returns a URL or throws
        const url = await uploadImage(file);
        uploadedUrls.push(url);
      }

      // transform amenities
      const amenityIds = formData.selectedAmenities.filter((s) => s.id).map((s) => s.id);
      const customAmenities = formData.selectedAmenities.filter((s) => !s.id).map((s) => s.name);

      const payload = {
        name: formData.name,
        host_name: formData.host_name,
        city: formData.city,
        address: formData.address,
        description: formData.description,
        price: Number(formData.price),
        seats: Number(formData.seats),
        amenityIds,
        customAmenities,
        images: [...formData.previewImages.filter((u) => !u.startsWith("blob:")), ...uploadedUrls],
      };

      // create listing
      await createListing(payload);

      setSubmitting(false);
      // optionally clear or navigate
      window.alert("Hostel registered successfully");
      return { success: true };
    } catch (err) {
      setSubmitting(false);
      console.error("submit error", err);
      throw err;
    }
  }

  return {
    formData,
    setField,
    setSelectedAmenities,
    addPreviewImages,
    removePreviewImage,
    submit,
    submitting,
    errors,
  };
}

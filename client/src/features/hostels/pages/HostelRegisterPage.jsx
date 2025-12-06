import React from "react";
import BasicDetailsForm from "../components/BasicDetailsForm";
import LocationPricingForm from "../components/LocationPricingForm";
import AmenitiesSelector from "../components/AmenitiesSelector";
import PhotoUploader from "../components/PhotoUploader";
import SubmitActions from "../components/SubmitActions";
import { useHostelForm } from "../hooks/useHostelForm";

/**
 * Page: orchestrates the smaller components and provides the form hook.
 */
export default function HostelRegistrationPage() {
  const {
    formData,
    setField,
    setSelectedAmenities,
    addPreviewImages,
    removePreviewImage,
    submit,
    submitting,
    errors,
  } = useHostelForm();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">List your Hostel</h1>
          <p className="mt-2 text-slate-500">Share your space with students and travelers.</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit().catch((err) => {
              // submit handles error; we can optionally show toast here
              console.error(err);
            });
          }}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
        >
          <div className="p-8 border-b border-gray-100">
            <BasicDetailsForm
              name={formData.name}
              host_name={formData.host_name}
              seats={formData.seats}
              description={formData.description}
              onChange={(name, value) => setField(name, value)}
              error={errors.basic}
            />
          </div>

          <div className="p-8 border-b border-gray-100 bg-gray-50/50">
            <LocationPricingForm
              city={formData.city}
              price={formData.price}
              address={formData.address}
              onChange={(name, value) => setField(name, value)}
              error={errors.location}
            />
          </div>

          <div className="p-8 border-b border-gray-100">
            <AmenitiesSelector
              selected={formData.selectedAmenities}
              onChange={setSelectedAmenities}
              allowCreate={true}
            />
          </div>

          <div className="p-8">
            <PhotoUploader
              previewImages={formData.previewImages}
              onFilesSelected={addPreviewImages}
              onRemove={removePreviewImage}
            />
          </div>

          <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-end gap-4">
            <SubmitActions submitting={submitting} />
          </div>
        </form>
      </div>
    </div>
  );
}

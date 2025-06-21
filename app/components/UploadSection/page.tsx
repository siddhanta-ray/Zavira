
import LocationForm from "@/app/components/LocationForm";
import FileUploader from "@/app/components/FileUploader";
import UploadHistory from "@/app/components/UploadHistory";

export default function UploadSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eaffd0] to-[#a7d8a8] p-6">
      <div className="bg-[#b5dcb7] rounded-lg p-6 mt-4 shadow-md">
        <LocationForm />
        <FileUploader />
      </div>
      <UploadHistory />
    </div>
  );
}

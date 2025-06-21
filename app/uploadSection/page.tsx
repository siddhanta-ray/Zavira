import LocationForm from "@/app/components/LocationForm";
import FileUploader from "@/app/components/FileUploader";
import UploadHistory from "@/app/components/UploadHistory";
import UserGreeting from "@/app/components/UserGreeting"
import ImageUploadForm from "../components/Image-upload-form";
export default function uploadSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eaffd0] to-[#a7d8a8] mt-16 p-6">
      <UserGreeting />
      <div className="bg-[#b5dcb7] rounded-lg p-6 mt-4 shadow-md">
        {/* <LocationForm /> */}
        {/* <FileUploader /> */}
        <ImageUploadForm />
      </div>
      {/* <UploadHistory /> */}
    </div>
  );
}

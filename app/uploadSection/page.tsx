import UserGreeting from "@/app/components/UserGreeting"
import ImageUploadForm from "../components/Image-upload-form";
export default function uploadSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eaffd0] to-[#a7d8a8]  mt-24 rounded-3xl p-6">
      <UserGreeting />
      <div>
        <ImageUploadForm />
      </div>
    </div>
  );
}

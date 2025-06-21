"use client";
export default function UploadHistory() {
  return (
    <div className="mt-6">
      <h3 className="text-md font-medium mb-3">Upload history:</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="h-24 bg-green-100 rounded"></div>
        <div className="h-24 bg-green-100 rounded"></div>
        <div className="h-24 bg-green-100 rounded"></div>
        <div className="h-24 bg-green-100 rounded"></div>
      </div>
    </div>
  );
}
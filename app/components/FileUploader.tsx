"use client";

import { useState } from "react";

export default function FileUploader() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!file) return alert("Please select a file to upload.");

    const formData = new FormData();
    formData.append("file", file);

    // Example placeholder: Replace with actual API endpoint
    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => alert("Upload successful!"))
      .catch((err) => alert("Upload failed."));
  };

  return (
    <div className="mb-6">
      <label className="block mb-2 font-medium">Upload:</label>
      <div className="relative border-2 border-dashed border-gray-500 rounded h-40 flex justify-center items-center mb-4 bg-white/20">
        <input
          type="file"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        <div className="text-gray-600 pointer-events-none">Drag & drop file here or click to browse</div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-white px-4 py-1 rounded shadow hover:bg-gray-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
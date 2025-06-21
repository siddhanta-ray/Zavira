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
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
      />
      <button
        onClick={handleSubmit}
        className="bg-white px-4 py-1 rounded shadow hover:bg-gray-200"
      >
        Submit
      </button>
    </div>
  );
}
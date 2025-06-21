"use client";

import { useState } from "react";

export default function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [base64Data, setBase64Data] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const base64 = await convertToBase64(selectedFile);
      setBase64Data(base64);
      console.log("Base64 Image Data:", base64); // prints to terminal/console
    }
  };

  // Convert file to base64
  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = () => {
    if (!file) return alert("Please select an image to upload.");
    alert("Image converted to Base64 and logged in console.");
  };

  return (
    <div className="mb-6">
      <label className="block mb-2 font-medium">Upload Image:</label>
      <div className="relative border-2 border-dashed border-gray-500 rounded h-40 flex justify-center items-center mb-4 bg-white/20">
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        <div className="text-gray-600 pointer-events-none">
          Drag & drop an image here or click to browse/take a photo
        </div>
      </div>

      {file && (
        <p className="text-sm text-green-700 mb-2">
          Selected: {file.name}
        </p>
      )}

      {base64Data && (
        <p className="text-xs text-blue-700 truncate mb-2">
          Base64: {base64Data.substring(0, 50)}...
        </p>
      )}

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

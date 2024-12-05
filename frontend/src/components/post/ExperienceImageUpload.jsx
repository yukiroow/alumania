import { useState } from "react";

{/* @author Jude Angelo Ilumin*/}

const ExperienceImageUpload = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length) {
      const uploadedFile = files[0];
      setFile(uploadedFile);
      setPreviewUrl(URL.createObjectURL(uploadedFile));
    }
  };

  const handleFileInput = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    setPreviewUrl(URL.createObjectURL(uploadedFile));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[600px] p-6 bg-white rounded-lg shadow-md">
        <button className="text-gray-500 mb-4">Cancel</button>

        <div
          className="relative flex flex-col items-center justify-center w-full h-[300px] border-2 border-dashed border-gray-400 rounded-lg bg-gray-50 hover:bg-gray-100 overflow-hidden"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Uploaded Preview"
              className="absolute inset-0 object-cover w-full h-full"
            />
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <p className="mt-2 text-gray-500">Drag and Drop or Click here</p>
              <p className="text-gray-500 text-sm">to upload a file</p>
            </>
          )}

          <input
            type="file"
            className="opacity-0 absolute inset-0 cursor-pointer"
            onChange={handleFileInput}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceImageUpload;

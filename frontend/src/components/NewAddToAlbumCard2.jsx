import React, { useState } from "react";

{/* @author Jude Angelo Ilumin*/}

const ImageUpload = () => {
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
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-500"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M5.5 15.5L8.79289 12.2071C9.18342 11.8166 9.81658 11.8166 10.2071 12.2071L12.8867 14.8867C13.2386 15.2386 13.7957 15.2782 14.1938 14.9796L15.1192 14.2856C15.3601 14.1049 15.6696 14.0424 15.9618 14.1154L19.5 15M5.5 6.5H19.5V18.5H5.5V6.5ZM15.5 10.5C15.5 11.0523 15.0523 11.5 14.5 11.5C13.9477 11.5 13.5 11.0523 13.5 10.5C13.5 9.94772 13.9477 9.5 14.5 9.5C15.0523 9.5 15.5 9.94772 15.5 10.5Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  ></path>
                </g>
              </svg>
              <p className="mt-2 text-gray-500">Drag and Drop or Click here</p>
              <p className="text-gray-500 text-sm">to upload a photo</p>
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

export default ImageUpload;

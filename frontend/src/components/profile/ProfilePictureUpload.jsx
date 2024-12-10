import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ProfilePictureUpload = ({ onImageUpload }) => {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");

    const handleFileInput = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
        }
    };

    const handleConfirm = () => {
        onImageUpload(file);
        document.getElementById("uploadpfp_modal").close();
        setFile(null);
        setPreviewUrl("");
    };

    return (
        <>
            <dialog id="uploadpfp_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button
                            className="btn btn-sm text-gray-400 btn-link absolute right-2 top-6 no-underline hover:underline focus:outline-none focus:border-none"
                            onClick={() => {
                                setFile(null);
                                setPreviewUrl("");
                            }}
                        >
                            Cancel
                        </button>
                    </form>
                    <h3 className="text-lg text-primary text-center border-b border-gray-400 py-2 mb-4 cursor-default select-none">
                        Upload New Profile Photo
                    </h3>
                    <div className="relative flex flex-col items-center justify-center w-full h-[300px] border-2 border-dashed border-gray-400 rounded-lg bg-gray-50 hover:bg-gray-100 overflow-hidden mb-3">
                        {previewUrl ? (
                            <img
                                src={previewUrl}
                                alt="Preview"
                                className="object-cover object-center w-full h-full"
                            />
                        ) : (
                            <>
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    className="w-10 h-10 text-gray-500"
                                />
                                <p className="mt-2 text-gray-500">Click here</p>
                                <p className="text-gray-500 text-sm">
                                    to upload a file
                                </p>
                            </>
                        )}
                        <input
                            type="file"
                            className="opacity-0 absolute inset-0 cursor-pointer"
                            onChange={handleFileInput}
                            accept="image/jpeg,image/png,image/jpg"
                        />
                    </div>
                    {previewUrl ? (
                        <button
                            className="btn btn-sm btn-secondary w-full rounded-full"
                            onClick={handleConfirm}
                        >
                            Confirm
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </dialog>
        </>
    );
};

export default ProfilePictureUpload;

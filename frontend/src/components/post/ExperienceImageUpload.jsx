import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faFile,
    faArrowCircleLeft,
    faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

{
    /* @author Jude Angelo Ilumin*/
}

const ExperienceImageUpload = ({ onImageUpload }) => {
    const [files, setFiles] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null); // Reference to carousel container

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = Array.from(event.dataTransfer.files);
        addFiles(droppedFiles);
    };

    const handleFileInput = (event) => {
        const selectedFiles = Array.from(event.target.files);
        addFiles(selectedFiles);
    };

    const addFiles = (newFiles) => {
        const totalFiles = newFiles.length;
        if (totalFiles > 10) {
            alert(`You can only upload up to 10 files.`);
            return;
        }

        setFiles(newFiles);
        setPreviewUrls(newFiles.map((file) => URL.createObjectURL(file)));
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleConfirm = () => {
        onImageUpload(files);
        document.getElementById("uploadimage_modal").close();
        setFiles([]);
        setPreviewUrls([]);
        setCurrentIndex(0);
    };

    const handleNext = () => {
        if (currentIndex < previewUrls.length - 1) {
            setCurrentIndex(currentIndex + 1);
            scrollToIndex(currentIndex + 1);
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            scrollToIndex(currentIndex - 1);
        }
    };

    const scrollToIndex = (index) => {
        if (carouselRef.current) {
            const scrollAmount = index * carouselRef.current.clientWidth;
            carouselRef.current.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <dialog id="uploadimage_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button
                            className="btn btn-sm text-gray-400 btn-link absolute right-2 top-6 no-underline hover:underline focus:outline-none focus:border-none"
                            onClick={() => {
                                setFiles([]);
                                setPreviewUrls([]);
                            }}
                        >
                            Cancel
                        </button>
                    </form>
                    <h3 className="text-lg text-primary text-center border-b border-gray-400 py-2 mb-4 cursor-default select-none">
                        Upload Photos
                    </h3>
                    <div
                        className="relative flex flex-col items-center justify-center w-full h-[300px] border-2 border-dashed border-gray-400 rounded-lg bg-gray-50 hover:bg-gray-100 overflow-hidden mb-3"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        {previewUrls.length ? (
                            <>
                                <span className="badge badge-neutral absolute top-1 right-1 font-normal p-3">{`${
                                    currentIndex + 1
                                } / ${previewUrls.length}`}</span>
                                <div
                                    className="carousel flex overflow-x-hidden w-full h-full rounded-lg"
                                    ref={carouselRef}
                                >
                                    {previewUrls.map((url, idx) => (
                                        <div
                                            key={idx}
                                            className="carousel-item w-full"
                                        >
                                            <img
                                                src={url}
                                                alt="Preview"
                                                className="object-cover object-center w-full h-full"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-primary rounded-full p-2 transition-all disabled:hidden hover:opacity-50"
                                    onClick={handleBack}
                                    disabled={currentIndex === 0}
                                >
                                    <FontAwesomeIcon
                                        icon={faArrowCircleLeft}
                                        size="xl"
                                    />
                                </button>
                                <button
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary rounded-full p-2 transition-all disabled:hidden hover:opacity-50"
                                    onClick={handleNext}
                                    disabled={
                                        currentIndex === previewUrls.length - 1
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faArrowCircleRight}
                                        size="xl"
                                    />
                                </button>
                            </>
                        ) : (
                            <>
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    className="w-10 h-10 text-gray-500"
                                />
                                <p className="mt-2 text-gray-500">
                                    Drag and Drop or Click here
                                </p>
                                <p className="text-gray-500 text-sm">
                                    to upload a file
                                </p>
                            </>
                        )}
                        {previewUrls.length ? (
                            <div className="absolute border-t-2 border-gray-400 bg-gray-50 border-dashed bottom-0 w-full h-[10%] transition-all hover:opacity-70">
                                <input
                                    type="file"
                                    className="opacity-0 cursor-pointer w-full h-full"
                                    multiple
                                    onChange={handleFileInput}
                                    accept="image/jpeg,image/png,image/jpg"
                                />
                                <FontAwesomeIcon
                                    icon={faFile}
                                    className="text-primary-content absolute bottom-1 left-[48%] text-center h-4 w-4"
                                />
                            </div>
                        ) : (
                            <input
                                type="file"
                                className="opacity-0 absolute inset-0 cursor-pointer"
                                multiple
                                onChange={handleFileInput}
                                accept="image/jpeg,image/png,image/jpg"
                            />
                        )}
                    </div>
                    {previewUrls.length ? (
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

export default ExperienceImageUpload;

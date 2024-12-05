import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import ExperienceImageUpload from "./ExperienceImageUpload";
import axios from "axios";

{
    /* @author Jude Angelo Ilumin*/
}

const NewPostModal = ({ handleAddPost }) => {
    const username = localStorage.getItem("user");
    const id = localStorage.getItem("userid");
    const dpRaw = localStorage.getItem("userdp");
    const [albums, setAlbums] = useState([]);
    const [chars, setChars] = useState(0);
    const [postDetails, setPostDetails] = useState({
        content: "",
        images: [],
        albumid: "",
    });

    const dpImage =
        dpRaw === null
            ? dpRaw.data.length > 0
                ? `data:${dpRaw.data.mimetype};base64,${btoa(
                      new Uint8Array(dpRaw.data).reduce(
                          (data, byte) => data + String.fromCharCode(byte),
                          ""
                      )
                  )}`
                : null
            : null;

    const fetchAlbums = async () => {
        const res = await axios.get(
            `http://localhost:2012/experiences/albums/${id.substring(
                1,
                id.length - 1
            )}`
        );
        setAlbums(res.data);
    };

    const updateModal = (event) => {
        const content = event.target.value;
        setPostDetails((prev) => ({ ...prev, ["content"]: content }));
        setChars(content.length);
        const textarea = event.target;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    const handleImageClick = (event) => {
        event.preventDefault();
        document.getElementById("uploadimage_modal").showModal();
    };

    const handleImageUpload = (newImages) => {
        setPostDetails((prev) => ({
            ...prev,
            images: [...prev.images, ...newImages],
        }));
    };

    const handleAlbumSelect = (album) => {
        setPostDetails((prev) => ({
            ...prev,
            albumid: album.albumid,
        }));
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("userid", id.substring(1, id.length - 1));
        formData.append("content", postDetails.content);
        formData.append("albumid", postDetails.albumid);

        postDetails.images.forEach((image) => {
            formData.append("images", image);
        });

        try {
            const response = await axios.post(
                "http://localhost:2012/experiences/new",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.status === 200) {
                alert("Post successfully uploaded!");
                setPostDetails({ content: "", images: [], albumid: "" });
                setChars(0);
                setAlbums([]);
                handleAddPost();
                document.getElementById("addpost_modal").close();
            }
        } catch (error) {
            console.error("Error uploading post:", error);
            alert("Failed to upload post. Please try again.");
        }
    };

    const avatar = dpImage ? (
        <div className="avatar">
            <div className="h-12 w-12 rounded-full ring ring-offset-2 ring-secondary ring-offset-base-100">
                <img src={dpImage} />
            </div>
        </div>
    ) : (
        <div className="avatar placeholder">
            <div className="bg-primary text-neutral-content w-12 h-12 rounded-full ring ring-offset-2 ring-secondary ring-offset-base-100">
                <p className="text-xl cursor-default select-none">
                    {username.substring(1, 2).toUpperCase()}
                </p>
            </div>
        </div>
    );

    return (
        <>
            <ExperienceImageUpload onImageUpload={handleImageUpload} />
            <dialog id="addpost_modal" className="modal">
                <div className="modal-box w-11/12 max-w-2xl">
                    <form method="dialog">
                        <button
                            className="btn btn-sm text-gray-400 btn-link absolute right-2 top-6 no-underline hover:underline focus:outline-none focus:border-none"
                            onClick={() => {
                                setPostDetails({
                                    content: "",
                                    images: [],
                                    albumid: "",
                                });
                                handleAddPost();
                            }}
                        >
                            Cancel
                        </button>
                    </form>
                    <h3 className="text-lg text-primary text-center border-b border-gray-400 py-2 mb-4 cursor-default select-none">
                        Create Experience
                    </h3>
                    <div className="flex flex-row gap-5 align-middle">
                        {avatar}
                        <div className="w-full">
                            <p className="text-primary font-semibold cursor-default select-none">
                                {username.substring(1, username.length - 1)}
                            </p>
                            <form onSubmit={submitHandler}>
                                <textarea
                                    className="textarea textarea-ghost w-full p-0 focus:border-none focus:outline-none"
                                    placeholder="Share your experience"
                                    value={postDetails.content}
                                    onInput={(e) => {
                                        if (e.target.value.length > 280) return;
                                        updateModal(e);
                                    }}
                                ></textarea>
                                <p
                                    className={`text-end text-sm cursor-default select-none
                                    ${
                                        chars === 280
                                            ? "text-error font-semibold"
                                            : "text-gray-400"
                                    }`}
                                >
                                    {chars}/280
                                </p>
                                <div className="flex flex-row gap-1">
                                    <button
                                        className="btn btn-xs btn-outline btn-secondary"
                                        onClick={handleImageClick}
                                    >
                                        <FontAwesomeIcon icon={faPhotoFilm} />
                                        Add Photos
                                    </button>
                                    <select
                                        className="select select-xs select-secondary focus:outline-none active:outline-none"
                                        onClick={fetchAlbums}
                                    >
                                        <option disabled selected>
                                            Select from your albums
                                        </option>
                                        {albums.length === 0 ? (
                                            <option disabled>
                                                You have no albums
                                            </option>
                                        ) : (
                                            albums.map((album, index) => (
                                                <option
                                                    key={index}
                                                    onClick={() =>
                                                        handleAlbumSelect(album)
                                                    }
                                                >
                                                    {album.title}
                                                </option>
                                            ))
                                        )}
                                    </select>
                                </div>
                                <div className="flex flex-row justify-end rounded-full">
                                    <button
                                        className="btn btn-secondary btn-sm w-[5rem] rounded-full transition-all hover:scale-105"
                                        type="submit"
                                    >
                                        Post
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default NewPostModal;

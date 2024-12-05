import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoFilm, faPlus } from "@fortawesome/free-solid-svg-icons";

{
    /* @author Jude Angelo Ilumin*/
}

const NewPostModal = ({ handleAddPost }) => {
    const username = localStorage.getItem("user");
    const dpRaw = localStorage.getItem("userdp");
    const [chars, setChars] = useState(0);
    const [postDetails, setPostDetails] = useState({
        content: "",
        images: [],
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

    const updateModal = (event) => {
        const content = event.target.value;
        setPostDetails((prev) => ({ ...prev, ["content"]: content }));
        setChars(content.length);
        const textarea = event.target;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
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
            <dialog id="addpost_modal" className="modal">
                <div className="modal-box w-11/12 max-w-2xl">
                    <form method="dialog">
                        <button
                            className="btn btn-sm text-gray-400 btn-link absolute right-2 top-6 no-underline hover:underline focus:outline-none focus:border-none"
                            onClick={handleAddPost}
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
                            <form>
                                <textarea
                                    className="textarea textarea-ghost w-full p-0 focus:border-none focus:outline-none"
                                    placeholder="Share your experience"
                                    value={postDetails.content}
                                    onInput={(e) => {
                                        if (e.target.value.length > 280) return;
                                        updateModal(e);
                                    }}
                                ></textarea>
                                <p className={`text-end text-sm cursor-default select-none
                                    ${chars === 280 ? 'text-error font-semibold' : 'text-gray-400'}`}>
                                    {chars}/280
                                </p>
                                <div className="flex flex-row gap-1">
                                    <button className="btn btn-xs btn-outline btn-secondary">
                                        <FontAwesomeIcon icon={faPhotoFilm} />
                                        Add Photos
                                    </button>
                                    <button className="btn btn-xs btn-outline btn-secondary">
                                        <FontAwesomeIcon icon={faPlus} />
                                        Add to Album
                                    </button>
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

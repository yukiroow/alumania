// Author: @yukiroow Harry Dominguez

import axios from "axios";
/**
 * Delete Post Modal for confirming the deletion of a post.
 * This modal is triggered when a user attempts to delete an experience post.
 * It sends a DELETE request to the server to remove the post and reloads the page upon success.
 */
const DeletePostModal = ({ xpid }) => {
    const fetchDeletePost = async () => {
        try {
            await axios.delete(
                `http://localhost:2012/experiences/removexperience/${xpid}`
            );
            window.location.reload();
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };
    return (
        <>
            <dialog id={`deletepost_modal${xpid}`} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-primary">
                        Delete Experience
                    </h3>
                    <p className="py-4">
                        Are you sure you want to delete this experience?
                    </p>
                    <div className="modal-action">
                        <form method="dialog" className="flex space-x-2">
                            <button
                                className="btn btn-warning text-white"
                                onClick={fetchDeletePost}
                            >
                                Delete
                            </button>
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default DeletePostModal;

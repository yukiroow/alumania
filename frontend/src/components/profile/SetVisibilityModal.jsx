// Author: @yukiroow Harry Dominguez
import axios from "axios";
/**
 * Set Visibility Modal that allows the user to toggle their profile's visibility (public or private).
 * Sends a PUT request to update the profile's visibility status and reloads the page upon success.
 * The modal provides options to confirm or cancel the visibility change.
 */
const SetVisibilityModal = ({ userid, isVisible }) => {
    const type = isVisible ? 0 : 1;
    const fetchVisibility = async () => {
        try {
            await axios.put(
                `http://localhost:2012/users/setvisible/${userid}`,
                {
                    type: type,
                }
            );
            window.location.reload();
        } catch (error) {
            console.error("Error setting visibility:", error);
        }
    };

    const handleConfirmClick = (event) => {
        event.preventDefault();
        fetchVisibility();
    };

    return (
        <>
            <dialog id={`visibility_modal`} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-primary">
                        Set Profile Privacy
                    </h3>
                    <p className="py-4">
                        {isVisible
                            ? "Are you sure you want to make your Profile public?"
                            : "Are you sure you want to hide your Profile?"}
                    </p>
                    <div className="modal-action">
                        <form method="dialog" className="flex space-x-2">
                            <button
                                className="btn btn-warning text-white"
                                onClick={handleConfirmClick}
                            >
                                Confirm
                            </button>
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default SetVisibilityModal;

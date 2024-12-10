import axios from "axios";
const SetVisibilityModal = ({ userid, isVisible }) => {
    const type = isVisible ? 0 : 1;
    const fetchVisibility = async () => {
        try {
            await axios.put(
                `http://localhost:2012/users/setvisible/${userid}`,
                { type: type }
            );
            window.location.reload();
        } catch (error) {
            console.error("Error setting visibility:", error);
        }
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
                            ? "Are you sure you want to hide your Profile?"
                            : "Are you sure you want to make your Profile public?"}
                    </p>
                    <div className="modal-action">
                        <form method="dialog" className="flex space-x-2">
                            <button
                                className="btn btn-warning text-white"
                                onClick={fetchVisibility}
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

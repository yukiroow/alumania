// Author: @PEEACHYBEE Freskkie Encarnacion
import ProfilePaneModal from "../profile/ProfilePaneModal";
import { useState } from "react";
/**
 * UserSearchCard component that displays a user card with their profile picture (or initials),
 * name, and a clickable area that opens a modal with more detailed information about the user.
 */
const UserSearchCard = ({ user }) => {
    const [showModal, setShowModal] = useState(false);
    const fullName = user.middlename
        ? `${user.firstname} ${user.middlename} ${user.lastname}`
        : `${user.firstname} ${user.lastname}`;

    const dpImage = user.displaypic
        ? user.displaypic.data.length > 0
            ? `data:${user.displaypic.data.mimetype};base64,${btoa(
                  new Uint8Array(user.displaypic.data).reduce(
                      (data, byte) => data + String.fromCharCode(byte),
                      ""
                  )
              )}`
            : null
        : null;

    const avatar = dpImage ? (
        <div className="avatar">
            <div className="h-12 w-12 rounded-full ring ring-offset-2 ring-secondary ring-offset-base-100">
                <img src={dpImage} />
            </div>
        </div>
    ) : (
        <div className="avatar placeholder">
            <div className="bg-primary text-neutral-content w-12 h-12 rounded-full ring ring-offset-2 ring-secondary ring-offset-base-100">
                <p className="text-lg cursor-default select-none">
                    {user.username.substring(0, 2).toUpperCase()}
                </p>
            </div>
        </div>
    );

    const handleProfileClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            {showModal && (
                <ProfilePaneModal userid={user.userid} onClose={closeModal} />
            )}
            <div
                className="join-item justify-self-center p-4 w-full bg-white rounded-xl space-y-7 border transition-all hover:opacity-80 hover:cursor-pointer"
                onClick={handleProfileClick}
            >
                <div className="flex ml-5 items-start space-x-5">
                    {avatar}
                    <div className="flex flex-col">
                        <div className="flex items-center space-x-2">
                            <p className="font-medium font-semibold">
                                {user.username}
                            </p>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                            <p className="text-sm text-primary">{fullName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserSearchCard;

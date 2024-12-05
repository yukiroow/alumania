import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faSearch,
    faPlusCircle,
    faSignOutAlt,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import NewPostModal from "../post/NewPostModal";

{
    /* @author Freskkie Encarnacion*/
}

const SideBar = () => {
    const { logout } = useAuth();
    const [addPost, setAddPost] = useState(false);

    const handleLogout = () => {
        document.getElementById("logout_modal").showModal();
    };

    const handleAddPost = () => {
        setAddPost((prev) => !prev);
        document.getElementById("addpost_modal").showModal();
    };

    return (
        <>
            <LogoutModal auth={logout} />
            <NewPostModal handleAddPost={handleAddPost} />
            <nav className="flex flex-col h-screen w-20 items-center py-9 fixed top-0 left-0">
                {/* Top Logo */}
                <img src={Logo} alt="Logo" className="w-10 h-10" />
                {/* Middle Icons */}
                <div className="flex flex-col items-center space-y-9 flex-grow mt-60">
                    <NavLink to="/app/home">
                        {({ isActive }) =>
                            isActive ? (
                                <FontAwesomeIcon
                                    icon={faHome}
                                    className="text-2xl cursor-pointer text-[#032543] transition-all translate-x-2"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faHome}
                                    className="text-2xl cursor-pointer text-[#A29C9C] transition-all hover:text-[#032543]"
                                />
                            )
                        }
                    </NavLink>
                    <NavLink to="/app/search">
                        {({ isActive }) =>
                            isActive ? (
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="text-2xl cursor-pointer text-primary transition-all translate-x-2"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="text-2xl cursor-pointer text-[#A29C9C] hover:text-primary"
                                />
                            )
                        }
                    </NavLink>
                    <FontAwesomeIcon
                        icon={faPlusCircle}
                        className={`text-2xl cursor-pointer 
                            ${
                                addPost
                                    ? "text-secondary transition-all translate-x-2 scale-110"
                                    : "text-[#A29C9C] hover:text-primary"
                            }`}
                        onClick={handleAddPost}
                    />
                    <NavLink to="/app/profile">
                        {({ isActive }) =>
                            isActive ? (
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className="text-2xl cursor-pointer text-primary transition-all translate-x-2"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className="text-2xl cursor-pointer text-[#A29C9C] hover:text-primary"
                                />
                            )
                        }
                    </NavLink>
                    {/* Bottom Logout Icon */}
                    <FontAwesomeIcon
                        icon={faSignOutAlt}
                        onClick={handleLogout}
                        className="text-2xl text-[#A29C9C] hover:text-[#032543]"
                    />
                </div>
            </nav>
        </>
    );
};

const LogoutModal = (props) => {
    return (
        <>
            <dialog id="logout_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-primary">Logout</h3>
                    <p className="py-4">Are you sure you want to logout?</p>
                    <div className="modal-action">
                        <button
                            className="btn btn-warning text-white"
                            onClick={() => {
                                props.auth();
                            }}
                        >
                            Logout
                        </button>
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default SideBar;

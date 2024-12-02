import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faSearch,
    faPlus,
    faBell,
    faSignOutAlt,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useAuth } from "../hooks/useAuth";

{/* @author Freskkie Encarnacion*/}

const SideBar = () => {
    const [activeIcon, setActiveIcon] = useState("home");
    const { logout } = useAuth();

    const handleIconClick = (iconName) => {
        setActiveIcon(iconName);
    };

    const handleLogout = () => {
        document.getElementById("logout_modal").showModal();
    };

    return (
        <>
            <LogoutModal auth={logout} />
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
                                    className="text-2xl cursor-pointer text-[#032543]"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faHome}
                                    className="text-2xl cursor-pointer text-[#A29C9C]"
                                />
                            )
                        }
                    </NavLink>
                    <NavLink to="/app/search">
                        {({ isActive }) =>
                            isActive ? (
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="text-2xl cursor-pointer text-[#032543]"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="text-2xl cursor-pointer text-[#A29C9C]"
                                />
                            )
                        }
                    </NavLink>
                    <NavLink to="/app/post">
                        {({ isActive }) =>
                            isActive ? (
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    className="text-2xl cursor-pointer text-[#032543]"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    className="text-2xl cursor-pointer text-[#A29C9C]"
                                />
                            )
                        }
                    </NavLink>
                    <NavLink to="/app/notifications">
                        {({ isActive }) =>
                            isActive ? (
                                <FontAwesomeIcon
                                    icon={faBell}
                                    className="text-2xl cursor-pointer text-[#032543]"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faBell}
                                    className="text-2xl cursor-pointer text-[#A29C9C]"
                                />
                            )
                        }
                    </NavLink>
                    <NavLink to="/app/profile">
                        {({ isActive }) =>
                            isActive ? (
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className="text-2xl cursor-pointer text-[#032543]"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className="text-2xl cursor-pointer text-[#A29C9C]"
                                />
                            )
                        }
                    </NavLink>
                </div>
                {/* Bottom Logout Icon */}
                <FontAwesomeIcon
                    icon={faSignOutAlt}
                    className={`text-2xl cursor-pointer ${
                        activeIcon === "logout"
                            ? "text-[#032543]"
                            : "text-[#A29C9C]"
                    }`}
                    onClick={() => handleLogout()}
                />
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

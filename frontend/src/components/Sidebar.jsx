import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faSearch,
    faPlus,
    faBell,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useAuth } from "../hooks/useAuth";

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
            <aside className="flex">
                <nav className="flex flex-col h-screen w-20 items-center py-9">
                    {/* Top Logo */}
                    <img src={Logo} alt="Logo" className="w-10 h-10" />
                    {/* Middle Icons */}
                    <div className="flex flex-col items-center space-y-9 flex-grow mt-60">
                        <NavLink to="/home">
                            <FontAwesomeIcon
                                icon={faHome}
                                className={`text-2xl cursor-pointer ${
                                    activeIcon === "home"
                                        ? "text-[#032543]"
                                        : "text-[#A29C9C]"
                                }`}
                                onClick={() => handleIconClick("home")}
                            />
                        </NavLink>
                        <NavLink to="/home/search">
                            <FontAwesomeIcon
                                icon={faSearch}
                                className={`text-2xl cursor-pointer ${
                                    activeIcon === "search"
                                        ? "text-[#032543]"
                                        : "text-[#A29C9C]"
                                }`}
                                onClick={() => handleIconClick("search")}
                            />
                        </NavLink>
                        <NavLink to="/home/post">
                            <FontAwesomeIcon
                                icon={faPlus}
                                className={`text-2xl cursor-pointer ${
                                    activeIcon === "plus"
                                        ? "text-[#032543]"
                                        : "text-[#A29C9C]"
                                }`}
                                onClick={() => handleIconClick("plus")}
                            />
                        </NavLink>
                        <NavLink to="/home/notifications">
                            <FontAwesomeIcon
                                icon={faBell}
                                className={`text-2xl cursor-pointer ${
                                    activeIcon === "bell"
                                        ? "text-[#032543]"
                                        : "text-[#A29C9C]"
                                }`}
                                onClick={() => handleIconClick("bell")}
                            />
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
            </aside>
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

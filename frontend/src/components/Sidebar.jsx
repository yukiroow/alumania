import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faPlus,
  faBell,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar"; // Import the Navbar component
import Logo from "../assets/logo.svg";

const SideBar = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

return (
    <div className="flex">
        <nav className="flex flex-col h-screen w-20 items-center py-9">
            {/* Top Logo */}
            <img src={Logo} alt="Logo" className="w-10 h-10 mb-12" />
            {/* Middle Icons */}
            <div className="flex flex-col items-center space-y-9 flex-grow mt-60">
                <FontAwesomeIcon
                icon={faHome}
                className={`text-2xl cursor-pointer ${
                    activeIcon === "home" ? "text-[#032543]" : "text-[#A29C9C]"
                }`}
                onClick={() => handleIconClick("home")}
            />
            <FontAwesomeIcon
                icon={faSearch}
                className={`text-2xl cursor-pointer ${
                activeIcon === "search" ? "text-[#032543]" : "text-[#A29C9C]"
                }`}
                onClick={() => handleIconClick("search")}
            />
            <FontAwesomeIcon
                icon={faPlus}
                className={`text-2xl cursor-pointer ${
                activeIcon === "plus" ? "text-[#032543]" : "text-[#A29C9C]"
                }`}
                onClick={() => handleIconClick("plus")}
            />
            <FontAwesomeIcon
                icon={faBell}
                className={`text-2xl cursor-pointer ${
                activeIcon === "bell" ? "text-[#032543]" : "text-[#A29C9C]"
                }`}
                onClick={() => handleIconClick("bell")}
            />
            </div>
            {/* Bottom Logout Icon */}
            <FontAwesomeIcon
            icon={faSignOutAlt}
            className={`text-2xl cursor-pointer ${
                activeIcon === "logout" ? "text-[#032543]" : "text-[#A29C9C]"
            }`}
            onClick={() => handleIconClick("logout")}
            />
        </nav>
        
        <div className="flex-1">
            <Navbar />
        </div>
    </div>
    );
};

export default SideBar;

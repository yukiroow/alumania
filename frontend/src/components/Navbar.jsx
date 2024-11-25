import React, { useState } from "react";

const Navbar = () => {
    const [activeNav, setActiveNav] = useState("");

    const handleNavClick = (navItem) => {
        setActiveNav(navItem);
    };

    return (
        <div className="flex items-center px-8 py-8 justify-center space-x-20">
            {["Experience", "Albums", "Events", "Opportunities"].map((item) => (
                <button
                    key={item}
                    className={`text-lg font-semibold cursor-pointer transition-colors duration-300 ${
                        activeNav === item ? "text-[#022543]" : "text-[#7C7575]"
                    }`}
                    onClick={() => handleNavClick(item)}
                >
                    {item}
                </button>
            ))}
        </div>
    );
};

export default Navbar;

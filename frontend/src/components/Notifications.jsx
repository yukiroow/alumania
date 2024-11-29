import React, { useState } from "react";

const Notifications = () => {
    const [selectedOption, setSelectedOption] = useState("All"); 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
    const options = ["All", "Likes", "Comments"];
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };
    
    return (
        <div className="dropdown flex items-center px-8 py-8 justify-center relative">
            {/* Dropdown Trigger */}
            <div
                tabIndex={0}
                role="button"
                className={`flex items-center space-x-2 text-gray-800 font-bold ${
                    isDropdownOpen ? "text-[#022543]" : ""
                } cursor-pointer`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                <span>{selectedOption}</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 transition-transform duration-200 ${ isDropdownOpen ? "rotate-180" : "" }`}> <path d="M7 10L12 15L17 10" stroke="#022543" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ></path> </svg>
            </div>
            {/* Dropdown Content */}
            {isDropdownOpen && (
                <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-48 p-2 shadow border border-gray-300 mt-40">
                    {options.map((option) => (
                        <li key={option}>
                            <a
                                href="#sendmcdonuggies"
                                className={`block px-2 py-1 text-center ${
                                    selectedOption === option
                                        ? "text-[#022543]"
                                        : "text-[#8192a1]"
                                } hover:text-[#022543] hover:font-bold`}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default Notifications;
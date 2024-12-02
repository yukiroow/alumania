import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faMapLocation,
    faEllipsis
} from "@fortawesome/free-solid-svg-icons";

{/* @author Freskkie Encarnacion*/}

const SearchOppurtunies = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const handleOptionClick = (option) => {
        console.log(`Selected option: ${option}`);
        setIsDropdownOpen(false);
    };

    const dropdownOptions = ['Remove'];

    return (
    <>
        <div className="flex justify-center items-start min-h-screen bg-gray-100 p-6">
        {/* Nag aauto adjust yung bg depende sa number of content)*/}
            <div className="w-2/4 bg-white rounded-2xl shadow-md p-4 flex flex-col space-y-8">
                {/* 1st Card*/}
                <div className="p-10 rounded-xl hover:shadow-md cursor-pointer">
                    <div className="flex items-center gap-5">
                        <h2 className="card-title text-secondary font-bold">Job Title</h2>
                        <div className="relative flex justify-center items-center w-20 h-5 bg-accent rounded-full">
                            <p className="absolute text-text text-xs font-semibold">Hybrid</p>
                        </div>
                        <div className="ml-auto relative ">
                            <FontAwesomeIcon icon={faEllipsis} className="h-5 w-5 text-primary" onClick={toggleDropdown} />
                            {isDropdownOpen && (
                                    <ul
                                    tabIndex={0}
                                    className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow z-50 border p-2"
                                >
                                    {dropdownOptions.map((option) => (
                                        <li key={option}>
                                            <a
                                                className="rounded-lg block px-2 py-1 text-[#7C7575] 
                                                hover:bg-gray-100 hover:text-primary hover:font-bold"
                                                onClick={() => handleOptionClick(option)} // Handle click
                                            >
                                                {option}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-700 mt-2">
                        <FontAwesomeIcon icon={faBuilding} className="h-5 w-5 text-primary" />
                        <p>Company Name</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700">
                        <FontAwesomeIcon icon={faMapLocation} className="h-5 w-5" />
                        <p>Company Address</p>
                    </div>
                        <p className="mt-4 ml-7 text-primary">Company description</p>
                </div>

                <hr className="border-t border-gray-400" />

                {/* 2nd Card*/}
                <div className="p-10 rounded-xl hover:shadow-lg cursor-pointer">
                    <div className="flex items-center gap-5">
                        <h2 className="card-title text-secondary font-bold">Job Title</h2>
                        <div className="relative flex justify-center items-center w-20 h-5 bg-accent rounded-full">
                            <p className="absolute text-text text-xs font-semibold">Hybrid</p>
                        </div>
                        <div className="ml-auto relative ">
                                <FontAwesomeIcon icon={faEllipsis} className="h-5 w-5 text-primary" onClick={toggleDropdown} />
                                {isDropdownOpen && (
                                        <ul
                                        tabIndex={0}
                                        className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow z-50 border p-2"
                                    >
                                        {dropdownOptions.map((option) => (
                                            <li key={option}>
                                                <a
                                                    className="rounded-lg block px-2 py-1 text-[#7C7575] 
                                                    hover:bg-gray-100 hover:text-primary hover:font-bold"
                                                    onClick={() => handleOptionClick(option)} // Handle click
                                                >
                                                    {option}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-700 mt-2">
                        <FontAwesomeIcon icon={faBuilding} className="h-5 w-5 text-primary" />
                        <p>Company Name</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700">
                        <FontAwesomeIcon icon={faMapLocation} className="h-5 w-5" />
                        <p>Company Address</p>
                    </div>
                        <p className="mt-4 ml-7 text-primary">Company description</p>
                </div>
            </div>
        </div>
    </>
    );
};

export default SearchOppurtunies;
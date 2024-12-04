import React, { useState } from "react";

{/* @author Freskkie Encarnacion*/}

const SearchBar = () => {
    const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("All");
    const filters = ["All", "Users", "Experiences", "Albums", "Events", "Opportunities"];
    const sortOptions = ["Ascending", "Descending"];

    const toggleFilterDropdown = () => {
        setIsFilterDropdownOpen((prev) => !prev);
    };

    const toggleSortDropdown = () => {
        setIsSortDropdownOpen((prev) => !prev);
    };

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
        setIsFilterDropdownOpen(false);
    };

    return (
        <div className="relative flex justify-center items-center h-[34px] mt-7 text-[14px] text-white/60 gap-0.5">
            {/* Search Box */}
            <div
                className="flex items-center bg-[#FFFFFF] rounded-l-lg drop-shadow-md w-3/6 pl-2 
                focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-500" >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#8192a1] ml-2" > <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#8192a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ></path></svg>
                <input
                    className="input bg-transparent w-full text-[#4d6c88] focus:outline-none focus:ring-0 focus:border-none"
                    name="text"
                    type="text"
                    placeholder="Search" />
            </div>
            {/* Filter Dropdown */}
            <div className="dropdown dropdown-bottom relative">
                <div
                    tabIndex={0}
                    role="button"
                    className="text-[#8192a1] px-7 py-3 bg-[#FFFFFF]
                    rounded-r-md border-y border-r 
                    border-r-white/10 border-y-white/10 
                    drop-shadow-md
                    hover:bg-[#dddddd] cursor-pointer"
                    onClick={toggleFilterDropdown} >
                    {selectedFilter}
                </div>
                {isFilterDropdownOpen && (
                    <ul
                        tabIndex={0}
                        className="absolute dropdown-content menu bg-white rounded-lg z-50 w-[145px] p-2 right-0 shadow border mt-2" >
                        {filters.map((filter) => (
                            <li key={filter}>
                                <a
                                    className="block py-1 text-left text-[#7C7575] hover:bg-gray-200 hover:text-[#022543] hover:font-bold"
                                    onClick={() => handleFilterClick(filter)} >
                                    {filter}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {/* Sort SVG with Dropdown */}
            <div className="relative">
                <svg viewBox="0 0 24 24" fill="none" className="cursor-pointer w-6 h-6 text-gray-500 hover:text-gray-700 ml-5" onClick={toggleSortDropdown} xmlns="http://www.w3.org/2000/svg" > <path fillRule="evenodd" clipRule="evenodd" d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM14.75 16C14.75 16.4142 14.4142 16.75 14 16.75H10C9.58579 16.75 9.25 16.4142 9.25 16C9.25 15.5858 9.58579 15.25 10 15.25H14C14.4142 15.25 14.75 15.5858 14.75 16ZM16 12.75C16.4142 12.75 16.75 12.4142 16.75 12C16.75 11.5858 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75H16ZM18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8Z" fill="#c2c2c2" ></path> </svg>
                {isSortDropdownOpen && (
                    <div className="absolute dropdown-content menu left-5 mt-5 bg-white shadow rounded-lg border w-28 text-[#7C7575] z-10">
                        {sortOptions.map((option) => (
                            <button
                                key={option}
                                className="block w-full text-center py-1 hover:bg-gray-200 hover:text-[#022543] hover:font-bold rounded-lg"
                                onClick={() => {
                                    setIsSortDropdownOpen(false); 
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
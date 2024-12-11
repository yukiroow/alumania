import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faSortAmountDesc,
    faSortAmountAsc,
} from "@fortawesome/free-solid-svg-icons";

{
    /* @author Freskkie Encarnacion*/
}

const SearchBar = ({ setSearchQuery, setFilter, setSortOrder }) => {
    const [selectedFilter, setSelectedFilter] = useState("Users");
    const [descending, setDescending] = useState(true);

    const handleFilterClick = (filter) => {
        const menu = document.activeElement;
        if (menu) {
            menu.blur();
        }
        setFilter(filter.toLowerCase());
        setSelectedFilter(filter);
    };

    const handleSortClick = () => {
        const menu = document.activeElement;
        if (menu) {
            menu.blur();
        }
        const newSortOrder = descending ? "ASC" : "DESC";
        setDescending((prev) => !prev);
        setSortOrder(newSortOrder);
    };

    return (
        <>
            <div className="relative flex justify-center items-center h-8 mt-7 text-base gap-0.5">
                {/* Search Box */}
                <div
                    className="flex items-center bg-[#FFFFFF] rounded-l-lg drop-shadow-md w-3/6 pl-2 
                focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-500"
                >
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="w-5 h-5 text-[#8192a1] ml-2"
                    />
                    <input
                        className="input bg-transparent w-full text-[#4d6c88] focus:outline-none focus:ring-0 focus:border-none"
                        name="query"
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                {/* Filter Dropdown */}
                <div className="dropdown dropdown-bottom">
                    <div
                        tabIndex={0}
                        role="button"
                        className="text-primary px-7 py-3 bg-white
                    rounded-r-md border-y border-r 
                    border-r-white/10 border-y-white/10 
                    drop-shadow-md
                    hover:bg-[#dddddd] cursor-pointer"
                    >
                        {selectedFilter}
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content mt-2 menu bg-white text-primary rounded-box z-[1] w-32 p-2 shadow"
                    >
                        <li onClick={() => handleFilterClick("Users")}>
                            <a>Users</a>
                        </li>
                        <li onClick={() => handleFilterClick("Experiences")}>
                            <a>Experiences</a>
                        </li>
                        <li onClick={() => handleFilterClick("Opportunities")}>
                            <a>Opportunities</a>
                        </li>
                        <li onClick={() => handleFilterClick("Events")}>
                            <a>Events</a>
                        </li>
                    </ul>
                </div>
                {/* Sort SVG with Dropdown */}
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="text-primary">
                        {descending ? (
                            <FontAwesomeIcon
                                icon={faSortAmountDesc}
                                className="cursor-pointer w-8 h-8 text-gray-500 hover:text-gray-700 ml-5"
                            />
                        ) : (
                            <FontAwesomeIcon
                                icon={faSortAmountAsc}
                                className="cursor-pointer w-8 h-8 text-gray-500 hover:text-gray-700 ml-5"
                            />
                        )}
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content mt-2 menu bg-white text-primary rounded-box z-[1] w-40 p-2 shadow"
                    >
                        <li className="text-center font-semibold mb-2 text-gray-400">
                            Sort by {selectedFilter === 'Users' ? 'username' : 'publish date'}
                        </li>
                        <li onClick={() => handleSortClick("asc")}>
                            <a>Ascending</a>
                        </li>
                        <li onClick={() => handleSortClick("desc")}>
                            <a>Descending</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SearchBar;

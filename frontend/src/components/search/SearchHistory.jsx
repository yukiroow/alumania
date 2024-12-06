import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";

{/* @author Freskkie Encarnacion*/}

const SearchHistory = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-primary font-bold mb-3 text-lg">Recent</h1>
            <div className="flex items-center text-primary text-lg gap-96"> {/* or justify-between ewan q */}
                <p className="mr-2">aso</p>
                <div className="relative group">
                    <FontAwesomeIcon
                    icon={faMultiply}
                    className="h-5 w-5 text-primary cursor-pointer"
                    />
                    <span className="absolute hidden group-hover:block -top-6 left-0 bg-gray-600 text-white text-xs rounded-md py-1 px-2">
                    Remove
                    </span>
                </div>
            </div>
        </div>
    );
};
export default SearchHistory;
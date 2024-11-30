import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const OpportunitiesCard2 = () => {
    return(
        <>
        <div className="card bg-base-100 w-2/5 shadow-xl mt-10 ml-40">
            <div className="card-body">
            <h1 className="card-title text-primary font-bold text-3xl">Job Title</h1>
                <div className="flex items-center space-x-2 font-semibold text-gray-700 mt-2">
                    <FontAwesomeIcon icon={faBuilding} className="h-5 w-5 text-primary" /> 
                    <p>Company Name</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                    <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5 text-red-600" />
                    <p>Company Address</p>
                </div>
                <div className="flex gap-2">
                    <div className="relative flex justify-center items-center w-20 h-6 bg-accent rounded-r-full rounded-l-full">
                        <p className="absolute text-text text-xs font-semibold">Hybrid</p>
                    </div>
                    <button
                        class="flex overflow-hidden  
                        w-[5rem] hover:w-[6.3rem] 
                        items-center gap-1
                        cursor-pointer
                        bg-[#0059CD]
                        text-white px-3.5 py-1 rounded-full text-xs
                        transition-all ease-in-out hover:scale
                        hover:scale-105 font-[revert] active:scale-100 shadow-lg">
                        Interested
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </button>
                </div>
                <hr className="w-[calc(100%+32px)] h-[5px] border-t border-gray-400 my-3 -ml-4 -mr-4" />
                <h2 className="text-primary font-bold mt-2 text-xl">Job Details</h2>
                
                <h3 className="text-primary font-medium mt-2">Position Summary:</h3>
                <p className="text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                <h3 className="text-primary font-medium mt-5">Minimum Qualifications:</h3>
                <p className="text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                <h3 className="text-primary font-medium mt-5">Competencies:</h3>
                <p className="text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                <h2 className="text-primary font-bold mt-5 text-xl">Contact Information</h2>
                <p className="text-primary">Freskkie Encarnacion</p>
                <p className="text-primary">2234455@slu.edu.ph</p>
                <p className="text-primary">094757632437</p>
            </div>
        </div>
        </>
    );
};
export default OpportunitiesCard2;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faMapLocation,
} from "@fortawesome/free-solid-svg-icons";

const SearchOppurtunies = () => {
    return (
    <>
        <div className="flex justify-center items-start min-h-screen bg-gray-100 p-6">
        {/* Likes (Nag aauto adjust yung bg depende sa number of content)*/}
            <div className="w-2/4 bg-white rounded-2xl shadow-md p-4 flex flex-col space-y-2">
                <div className="">
                <div className="flex items-center gap-5">
                    <h2 className="card-title text-secondary font-bold">Job Title</h2>
                    <div className="relative flex justify-center items-center w-20 h-5 bg-accent rounded-r-full rounded-l-full">
                        <p className="absolute text-text text-xs font-semibold">Hybrid</p>
                    </div>
                    <div className="justify-end">
                    <button
                        className="flex overflow-hidden  
                    w-[4rem] hover:w-[5.5rem] 
                    items-center gap-1
                    cursor-pointer 
                    bg-[#0059CD] 
                    text-white px-4 py-2 rounded-md 
                    transition-all ease-in-out hover:scale 
                    hover:scale-105 font-[revert] active:scale-100 shadow-lg"
                    >
                        View
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M6 12H18M12 6V18"
                                    stroke="#ffffff"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>{" "}
                            </g>
                        </svg>
                    </button>
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
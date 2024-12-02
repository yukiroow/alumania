import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faMapLocation,
} from "@fortawesome/free-solid-svg-icons";

{/* @author Freskkie Encarnacion*/}

const SearchOppurtunies = () => {
    return (
    <>
        <div className="flex justify-center items-start min-h-screen bg-gray-100 p-6">
        {/* Nag aauto adjust yung bg depende sa number of content)*/}
            <div className="w-2/4 bg-white rounded-2xl shadow-lg p-4 flex flex-col space-y-8">
                {/* 1st Card*/}
                <div className="p-10 shadow-md rounded-xl">
                <div className="flex items-center gap-5">
                    <h2 className="card-title text-secondary font-bold">Job Title</h2>
                    <div className="relative flex justify-center items-center w-20 h-5 bg-accent rounded-full">
                        <p className="absolute text-text text-xs font-semibold">Hybrid</p>
                    </div>
                    <div className="ml-auto">
                        <button
                            className="flex overflow-hidden  
                            whitespace-nowrap
                        w-[5rem] hover:w-[6.3rem] 
                        items-center gap-1
                        cursor-pointer 
                        bg-[#0059CD] 
                        text-white px-4 py-1 rounded-full text-xs
                        transition-all ease-in-out hover:scale 
                        hover:scale-105 font-[revert] active:scale-100 shadow-lg"
                        >
                            View Job
                            <svg fill="#ffffff" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M960 1277.853c-175.297 0-317.951-142.654-317.951-317.951 0-175.297 142.654-317.951 317.951-317.951 175.297 0 317.951 142.654 317.951 317.951 0 175.297-142.654 317.95-317.951 317.95Zm948.342-341.585C1720.645 558.648 1357.332 324 960 324c-397.333 0-760.645 234.648-948.342 612.268L0 959.902l11.658 23.634c187.697 377.62 551.01 612.268 948.342 612.268 397.333 0 760.645-234.648 948.342-612.268L1920 959.902l-11.658-23.634Z" fill-rule="evenodd"></path> </g></svg>
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

                {/* 2nd Card*/}
                <div className="p-10 shadow-md rounded-xl">
                <div className="flex items-center gap-5">
                    <h2 className="card-title text-secondary font-bold">Job Title</h2>
                    <div className="relative flex justify-center items-center w-20 h-5 bg-accent rounded-full">
                        <p className="absolute text-text text-xs font-semibold">Hybrid</p>
                    </div>
                    <div className="ml-auto">
                        <button
                            className="flex overflow-hidden  
                            whitespace-nowrap
                        w-[5rem] hover:w-[6.3rem] 
                        items-center gap-1
                        cursor-pointer 
                        bg-[#0059CD] 
                        text-white px-4 py-1 rounded-full text-xs
                        transition-all ease-in-out hover:scale 
                        hover:scale-105 font-[revert] active:scale-100 shadow-lg"
                        >
                            View Job
                            <svg fill="#ffffff" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M960 1277.853c-175.297 0-317.951-142.654-317.951-317.951 0-175.297 142.654-317.951 317.951-317.951 175.297 0 317.951 142.654 317.951 317.951 0 175.297-142.654 317.95-317.951 317.95Zm948.342-341.585C1720.645 558.648 1357.332 324 960 324c-397.333 0-760.645 234.648-948.342 612.268L0 959.902l11.658 23.634c187.697 377.62 551.01 612.268 948.342 612.268 397.333 0 760.645-234.648 948.342-612.268L1920 959.902l-11.658-23.634Z" fill-rule="evenodd"></path> </g></svg>
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